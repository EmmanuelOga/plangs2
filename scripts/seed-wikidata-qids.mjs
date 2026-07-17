// ONE-TIME SEEDER (PLAN §5.3): give plang nodes their `sources.wikidata` QID.
//
// The wikidata importer only touches nodes that already carry a QID, and it
// refuses to guess one from a name — a wrong QID silently rewrites `created`
// and `extHomeURL` with another project's facts, and nothing downstream would
// catch it. So the QIDs are resolved once, deliberately, and reviewed.
//
// THE MATCH IS AN IDENTITY, NOT A GUESS. Every node with an `extWikipediaPath`
// names an English Wikipedia article, and Wikidata itself maintains the
// article -> item mapping. This asks Wikidata to dereference the links our own
// dataset already asserts. No name similarity, no fuzzy matching.
//
// Nodes with no `extWikipediaPath` are left UNSET and listed for the owner.
// Guessing for them is the whole thing this avoids: "Astro", "Bun" and "Amber"
// are each a real language AND a real unrelated project.
//
// Resolution goes through the MediaWiki API rather than a SPARQL sitelink join
// (PLAN §5.3 assumed SPARQL). SPARQL matches sitelinks verbatim, and ~30 of our
// paths are REDIRECT titles -- `Haskell_(programming_language)` now redirects to
// `Haskell`, and Wikidata stores only the canonical target. A verbatim join
// reports those as "no Wikidata item", which is plainly false for Haskell,
// Kotlin, Lua and CSS. The API applies the same normalization + redirect rules
// as the encyclopedia itself, so it answers the question we actually mean.
// SPARQL is still used, for the labels/types the review report needs.
//
// Usage:
//   node scripts/seed-wikidata-qids.mjs --dry-run   # resolve + report, write nothing
//   node scripts/seed-wikidata-qids.mjs             # write sources.wikidata

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { formatNodeYaml, parseNodeYaml } from "@plangs/pipeline/fields";

const HERE = dirname(fileURLToPath(import.meta.url));
const PLANG_DIR = join(HERE, "../packages/data/nodes/plang");
const WP_API = "https://en.wikipedia.org/w/api.php";
const SPARQL = "https://query.wikidata.org/sparql";
// Wikimedia asks for a descriptive UA; anonymous bulk querying gets throttled.
const UA = "plangs-qid-seeder/1.0 (https://plangs.page; dataset maintenance)";
const BATCH = 50; // MediaWiki's limit for anonymous `titles=` queries.

const dryRun = process.argv.includes("--dry-run");

/** Every plang node, with the fields this script reasons about. */
function readNodes() {
  const out = [];
  for (const file of readdirSync(PLANG_DIR)) {
    if (!file.endsWith(".yaml")) continue;
    const path = join(PLANG_DIR, file);
    const text = readFileSync(path, "utf8");
    out.push({ slug: file.replace(/\.yaml$/, ""), path, text, doc: parseNodeYaml(text) });
  }
  return out;
}

/**
 * `Souffl%C3%A9_(programming_language)` -> `Soufflé (programming language)`.
 *
 * Paths are stored as URL path segments, so some are already percent-encoded.
 * The API wants a real title: decode, and let the request layer encode once.
 * (Encoding an already-encoded path double-encodes it — that turned Soufflé
 * into `Souffl%25C3%25A9` and lost it.)
 */
function toTitle(path) {
  let s = String(path);
  try {
    s = decodeURIComponent(s);
  } catch {
    // Not valid percent-encoding — take it literally.
  }
  return s.replace(/_/g, " ");
}

async function getJson(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

/** Article titles -> { qid, finalTitle } via the API's own normalize+redirect rules. */
async function resolveTitles(titles) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    prop: "pageprops",
    ppprop: "wikibase_item",
    redirects: "1",
    titles: titles.join("|"),
  });
  const q = await getJson(`${WP_API}?${params}`).then(j => j.query ?? {});

  // The API rewrites titles twice (normalize, then redirect); follow both hops
  // so each result can be attributed to the title we actually asked for.
  const rewrites = new Map();
  for (const n of q.normalized ?? []) rewrites.set(n.from, n.to);
  for (const r of q.redirects ?? []) rewrites.set(r.from, r.to);
  const finalOf = t => {
    let cur = t;
    for (let i = 0; i < 5 && rewrites.has(cur); i++) cur = rewrites.get(cur);
    return cur;
  };

  const byTitle = new Map();
  for (const p of Object.values(q.pages ?? {})) byTitle.set(p.title, p.pageprops?.wikibase_item);

  const out = new Map();
  for (const t of titles) {
    const final = finalOf(t);
    const qid = byTitle.get(final);
    if (qid) out.set(t, { qid, finalTitle: final, redirected: final !== t });
  }
  return out;
}

/** QID -> label + instance-of classes, so a human can review what each QID IS. */
async function describe(qids) {
  const out = new Map();
  for (let i = 0; i < qids.length; i += BATCH) {
    const values = qids
      .slice(i, i + BATCH)
      .map(q => `wd:${q}`)
      .join(" ");
    const query = `
      SELECT ?item ?itemLabel (GROUP_CONCAT(DISTINCT ?typeLabel; separator=", ") AS ?types) WHERE {
        VALUES ?item { ${values} }
        OPTIONAL { ?item wdt:P31 ?type . ?type rdfs:label ?typeLabel . FILTER(LANG(?typeLabel) = "en") }
        SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
      }
      GROUP BY ?item ?itemLabel
    `;
    const res = await fetch(SPARQL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/sparql-results+json", "User-Agent": UA },
      body: new URLSearchParams({ query }),
    });
    if (!res.ok) throw new Error(`SPARQL ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const json = await res.json();
    for (const b of json.results.bindings) {
      out.set(b.item.value.replace("http://www.wikidata.org/entity/", ""), {
        label: b.itemLabel?.value ?? "",
        types: b.types?.value ?? "",
      });
    }
  }
  return out;
}

/** "Scheme (programming language)" -> "scheme"; drops the disambiguator. */
function topicOf(title) {
  return String(title)
    .replace(/\s*\([^)]*\)\s*$/, "")
    .trim()
    .toLowerCase();
}

/**
 * Is a followed redirect a RENAME (same topic) or a MERGE (a different topic)?
 *
 * This distinction is the whole correctness of the script. Both look identical
 * in the API response:
 *
 *   Lua (programming language)  -> Lua      = Q207316   a rename. Correct.
 *   MoonScript                  -> Lua      = Q207316   a MERGE. Catastrophic:
 *                                                       MoonScript would be
 *                                                       stamped with Lua's QID
 *                                                       and the importer would
 *                                                       then overwrite its
 *                                                       `created` and homepage
 *                                                       with Lua's.
 *
 * A rename keeps the topic name; a merge folds our topic into a broader one and
 * the name changes. So a redirect is only accepted when the destination is
 * still about this node — compared against the node's own name, ignoring any
 * "(programming language)" disambiguator.
 *
 * This is NOT "guess a QID from a name": the QID still comes only from a link
 * our dataset asserts. The name is used solely to REJECT, never to propose.
 */
function redirectKeepsTopic(node, finalTitle) {
  return isAbout(node, finalTitle);
}

/** Is `title` about this node itself, rather than some broader topic? */
function isAbout(node, title) {
  const dest = topicOf(title);
  return dest === topicOf(node.doc.name ?? "") || dest === topicOf(node.slug);
}

/**
 * Insert `sources.wikidata`, re-emitting through the canonical formatter so the
 * result is byte-identical to what `pnpm data:fmt` produces — otherwise this
 * script's diff and the formatter's would fight.
 */
function withQid(text, qid) {
  const doc = parseNodeYaml(text);
  doc.sources = { ...(doc.sources ?? {}), wikidata: qid };
  return formatNodeYaml(doc);
}

/** Drop `sources.wikidata` (and `sources` itself, if it becomes empty). */
function withoutQid(text) {
  const doc = parseNodeYaml(text);
  const { wikidata: _drop, ...rest } = doc.sources ?? {};
  if (Object.keys(rest).length) doc.sources = rest;
  else delete doc.sources;
  return formatNodeYaml(doc);
}

async function main() {
  const nodes = readNodes();
  const linked = nodes.filter(n => typeof n.doc.extWikipediaPath === "string" && n.doc.extWikipediaPath.trim());
  const unlinked = nodes.filter(n => !linked.includes(n));

  /*
   * title -> node[], NOT title -> node.
   *
   * Several of our nodes deliberately link to the SAME article: pl/v8 and
   * pl/javascript both cite "JavaScript"; pl/sbcl, pl/lisp and pl/common-lisp
   * all cite "Common Lisp"; likewise squeak/smalltalk, rakudo/raku,
   * jruby/ruby, pypy/python, delphi/pascal, clang/supercollider.
   *
   * A Map keyed by title silently kept only the LAST one, so readdir order
   * decided which node got the QID — and it picked the runtime over the
   * language for v8, sbcl, rakudo and squeak. An article cited by two nodes is
   * an identity for at most one of them, and that has to be decided, not left
   * to directory order.
   */
  const byTitle = new Map();
  for (const n of linked) {
    const t = toTitle(n.doc.extWikipediaPath);
    byTitle.set(t, [...(byTitle.get(t) ?? []), n]);
  }
  const titles = [...byTitle.keys()];

  const resolved = new Map();
  for (let i = 0; i < titles.length; i += BATCH) {
    const chunk = titles.slice(i, i + BATCH);
    process.stdout.write(`resolving ${i + 1}-${Math.min(i + BATCH, titles.length)} of ${titles.length}...\n`);
    for (const [k, v] of await resolveTitles(chunk)) resolved.set(k, v);
  }

  const hits = [];
  const misses = [];
  const merged = []; // redirects that landed on a DIFFERENT topic
  const shared = []; // an article several nodes cite, which is not their identity
  for (const [title, nodesHere] of byTitle) {
    const hit = resolved.get(title);
    if (!hit) {
      for (const node of nodesHere) misses.push({ node, title });
      continue;
    }

    // An article cited by several nodes belongs to the one it is ABOUT; the
    // others merely reference it (pl/v8 -> "JavaScript"). If that is not
    // exactly one node, nobody gets it.
    let claimants = nodesHere;
    if (nodesHere.length > 1) {
      const owners = nodesHere.filter(n => isAbout(n, hit.finalTitle));
      claimants = owners.length === 1 ? owners : [];
      for (const n of nodesHere) if (!claimants.includes(n)) shared.push({ node: n, title, ...hit, owner: owners[0]?.slug });
    }

    for (const node of claimants) {
      if (hit.redirected && !redirectKeepsTopic(node, hit.finalTitle)) {
        merged.push({ node, title, ...hit });
        continue;
      }
      hits.push({ node, title, ...hit });
    }
  }

  const info = await describe([...new Set([...hits, ...merged, ...shared].map(h => h.qid))]);
  for (const h of [...hits, ...merged, ...shared]) Object.assign(h, info.get(h.qid) ?? { label: "", types: "" });

  /*
   * Reject disambiguation pages outright.
   *
   * `Tcl` redirects to `TCL`, which is a *list of things called TCL* — not an
   * entity. The name check above waves it through (topic "tcl" == node "tcl"),
   * but there are no facts on a disambiguation item to import, and stamping one
   * as a language's identity is simply wrong. Wikidata says so explicitly via
   * P31 = Q4167410, so this is a fact about the item, not a heuristic.
   */
  const disambig = [];
  for (let i = hits.length - 1; i >= 0; i--) {
    if (/disambiguation page/i.test(hits[i].types)) disambig.push(...hits.splice(i, 1));
  }

  // One QID must never map to two nodes: that means the articles are not the
  // distinct things our dataset says they are.
  const byQid = new Map();
  for (const h of hits) byQid.set(h.qid, [...(byQid.get(h.qid) ?? []), h.node.slug]);
  const collisions = [...byQid.entries()].filter(([, slugs]) => slugs.length > 1);

  console.log(`\nplang nodes:             ${nodes.length}`);
  console.log(`  with a wikipedia link: ${linked.length}`);
  console.log(`  resolved to a QID:     ${hits.length}`);
  console.log(`  link but no QID:       ${misses.length}`);
  console.log(`  redirect -> other topic: ${merged.length}  (rejected)`);
  console.log(`  article shared w/ another node: ${shared.length}  (rejected)`);
  console.log(`  disambiguation page:   ${disambig.length}  (rejected)`);
  console.log(`  no wikipedia link:     ${unlinked.length}  (left unset - for the owner)`);

  if (shared.length) {
    console.log(`\nREJECTED - cites an article that is ABOUT another node, so the QID`);
    console.log(`is that node's identity, not this one's. Left unset for the owner:`);
    for (const h of shared)
      console.log(
        `  ${h.node.slug.padEnd(16)} cites "${h.finalTitle}" (${h.qid} ${h.label}) -> belongs to ${h.owner ?? "nobody: no node is about it"}`,
      );
  }

  if (disambig.length) {
    console.log(`\nREJECTED - resolves to a disambiguation page, not an entity. There`);
    console.log(`are no facts to import from these; left unset for the owner:`);
    for (const h of disambig) console.log(`  ${h.node.slug.padEnd(16)} ${h.title}  ->  ${h.finalTitle}  =  ${h.qid} ${h.label}`);
  }

  if (merged.length) {
    console.log(`\nREJECTED - the article was merged into a DIFFERENT topic, so this`);
    console.log(`QID belongs to another language. Left unset for the owner:`);
    for (const h of merged) console.log(`  ${h.node.slug.padEnd(16)} ${h.title}  ->  ${h.finalTitle}  =  ${h.qid} ${h.label}`);
  }

  if (collisions.length) {
    console.log(`\nQID COLLISIONS (${collisions.length}) - refusing to write anything:`);
    for (const [qid, slugs] of collisions) console.log(`  ${qid} <- ${slugs.join(", ")}`);
    process.exitCode = 1;
    return;
  }

  // A followed redirect is where an identity can quietly become a guess: the
  // encyclopedia may have merged our topic into a broader one.
  const redirected = hits.filter(h => h.redirected);
  if (redirected.length) {
    console.log(`\nFOLLOWED A REDIRECT (${redirected.length}) - confirm these are still the same thing:`);
    for (const h of redirected) console.log(`  ${h.node.slug.padEnd(16)} ${h.title}  ->  ${h.finalTitle}  =  ${h.qid} ${h.label}`);
  }

  // Anything Wikidata does not class as language-ish is how "Astro the web
  // framework" would sneak in.
  const odd = hits.filter(
    h => h.types && !/language|markup|notation|specification|standard|software|framework|library|dialect|format/i.test(h.types),
  );
  if (odd.length) {
    console.log(`\nREVIEW - resolved, but Wikidata does not class these as language-ish:`);
    for (const h of odd) console.log(`  ${h.node.slug.padEnd(16)} ${h.qid.padEnd(10)} ${h.label} - ${h.types}`);
  }

  console.log(
    `\nUNRESOLVED (${unlinked.length + misses.length + merged.length + disambig.length + shared.length}) - no QID written, owner to triage:`,
  );
  for (const n of unlinked) console.log(`  ${n.slug.padEnd(16)} (no extWikipediaPath)`);
  for (const m of misses) console.log(`  ${m.node.slug.padEnd(16)} (no Wikidata item for: ${m.title})`);
  for (const h of merged) console.log(`  ${h.node.slug.padEnd(16)} (article merged into "${h.finalTitle}")`);
  for (const h of disambig) console.log(`  ${h.node.slug.padEnd(16)} ("${h.finalTitle}" is a disambiguation page)`);
  for (const h of shared) console.log(`  ${h.node.slug.padEnd(16)} (cites ${h.owner ?? "another node"}'s article)`);

  if (dryRun) {
    console.log(`\n[dry-run] would write sources.wikidata to ${hits.length} file(s).`);
    return;
  }

  let written = 0;
  for (const h of hits) {
    if (h.node.doc.sources?.wikidata === h.qid) continue;
    writeFileSync(h.node.path, withQid(h.node.text, h.qid));
    written++;
  }

  /*
   * Retract QIDs an earlier run wrote that this one rejects.
   *
   * Needed because the first version of this script had the title-collision bug
   * and stamped v8 with JavaScript's QID, sbcl with Common Lisp's, and so on.
   * Without this the script is not convergent: re-running would fix nothing and
   * the wrong pins would sit there feeding the importer another project's facts.
   *
   * Only ever removes the exact QID this run resolved-and-rejected, so a QID a
   * human pinned by hand is never touched.
   */
  let retracted = 0;
  for (const h of [...merged, ...disambig, ...shared]) {
    if (h.node.doc.sources?.wikidata !== h.qid) continue;
    writeFileSync(h.node.path, withoutQid(h.node.text));
    console.log(`  retracted ${h.node.slug}: ${h.qid} (${h.label}) is not its identity`);
    retracted++;
  }
  console.log(`\nwrote sources.wikidata to ${written} file(s); retracted ${retracted}.`);
}

await main();
