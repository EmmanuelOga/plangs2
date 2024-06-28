/**
 * Process the wikipedia data we scrapped to .json files.
 */

import { Glob } from "bun";
import type { VID } from "../graph/vertex";
import type { PlangsGraph } from "../entities/plangs_graph";
import type { Image, Link, Release } from "../entities/schemas";
import { toAlphaNum } from "../util";
import { WIKIPEDIA_URL, cachePath } from "./wikipedia_scraper";

// biome-ignore lint/suspicious/noExplicitAny: Wikipedia infoboxes really can have any data.
type _Any = any;

type DATA_ATTR =
  | "designed_by"
  | "developed_by"
  | "developer"
  | "developers"
  | "dialects"
  | "family"
  | "filename_extension"
  | "filename_extensions"
  | "first_appeared"
  | "founder"
  | "implementation_language"
  | "influenced"
  | "influenced_by"
  | "initial_release"
  | "internet_media_type"
  | "latest_release"
  | "license"
  | "major_implementations"
  | "os"
  | "paradigm"
  | "paradigms"
  | "platform"
  | "preview_release"
  | "scope"
  | "stable_release"
  | "type"
  | "type_of_format"
  | "typing_discipline"
  | "website";

type DATA_TYPE = "extensions" | "links" | "refs" | "release" | "text";

/**
 * Returns a graph out of reading the cached JSON files from the Wikipedia scraping.
 * The scraper should have generated the JSON infobox files for this to do anything.
 */
export async function parseAll(g: PlangsGraph) {
  function addTsys(name: string, wiki: Link["href"]) {
    g.v_tsystem.set(`tsys+${name.toLowerCase()}`, {
      name,
      websites: [
        {
          title: `${name} Type System`,
          href: `${WIKIPEDIA_URL}${wiki}`,
          kind: "wikipedia",
        },
      ],
    });
  }

  addTsys("Affine", "/wiki/affine_type_system");
  addTsys("Dependent", "/wiki/dependent_type");
  addTsys("Duck", "/wiki/duck_typing");
  addTsys("Dynamic", "/wiki/dynamic_typing");
  addTsys("Flow-Sensitive", "/wiki/flow-sensitive_typing");
  addTsys("Generic", "/wiki/generic_programming");
  addTsys("Gradual", "/wiki/gradual_typing");
  addTsys("Hindley-Milner", "/wiki/hindley%e2%80%93milner_type_system");
  addTsys("Inferred", "/wiki/type_inference");
  addTsys("Latent", "/wiki/latent_typing");
  addTsys("Manifest", "/wiki/manifest_typing");
  addTsys("Nominative", "/wiki/nominative_type_system");
  addTsys("Object-Oriented", "/wiki/object_(computer_science)");
  addTsys("Optional", "/wiki/optional_typing");
  addTsys("Parametric", "/wiki/parametric_polymorphism");
  addTsys("Polymorphic", "/wiki/polymorphism_(computer_science)");
  addTsys("Safe", "/wiki/type_safety");
  addTsys("Static", "/wiki/static_typing");
  addTsys("Strong", "/wiki/strong_typing");
  addTsys("Structural", "/wiki/structural_type_system");
  addTsys("Uniqueness", "/wiki/uniqueness_type");
  addTsys("Weak", "/wiki/weak_typing");

  const glob = new Glob("**/*.json");
  for await (const path of glob.scan(cachePath("json"))) {
    const j = JSON.parse(await Bun.file(cachePath("json", path)).text());
    const title: string = j.title;
    const wikiUrl: string = j.wikiUrl;
    const image: string = j.img;
    const data: Record<DATA_ATTR, Record<DATA_TYPE, _Any>> = j.data;
    processLanguage(g, title, wikiUrl, image, data);
  }
}

function mergeLink(pl: { websites?: Link[] }, newLink: Link) {
  pl.websites ??= [];
  if (pl.websites.some((l: Link) => l.href.toLowerCase() === newLink.href.toLowerCase())) return;
  pl.websites.push(newLink);
}

function processLanguage(
  g: PlangsGraph,
  title: string,
  wikiUrl: string,
  image: string | undefined,
  data: Record<DATA_ATTR, Record<DATA_TYPE, _Any>>,
) {
  const pid = keyFromWikiUrl(wikiUrl);
  if (!pid) return;

  const pl = g.v_plang.merge(`pl+${pid}`, { name: title }); // We may already have the language, from an influence.
  mergeLink(pl, { kind: "wikipedia", title: title, href: wikiUrl });

  if (image) {
    pl.images ??= [];
    if (!pl.images.some((i: Image) => i.url === image)) {
      pl.images.push({ kind: "logo", url: image });
    }
  }

  for (const [attr, attrVal] of Object.entries(data)) {
    for (const [dataKey, dataVal] of Object.entries(attrVal)) {
      assign(g, `pl+${pid}`, attr as DATA_ATTR, dataKey as DATA_TYPE, dataVal);
    }
  }
}

function assign(g: PlangsGraph, pvid: VID<"pl">, infoboxKey: DATA_ATTR, infoboxType: DATA_TYPE, val: _Any) {
  const pl = g.v_plang.declare(pvid);

  // Would be nice to map the reference to the exact edge it belongs to,
  // but that would need more careful scraping... maybe later.
  if (infoboxType === "refs") {
    pl.references ??= {};
    pl.references[infoboxKey] ??= [];
    for (const newLink of val) {
      if (!pl.references[infoboxKey].some((l: Link) => l.href === newLink.href)) {
        pl.references[infoboxKey].push(newLink);
      }
    }
    return;
  }

  switch (infoboxKey) {
    case "website":
      if (infoboxType !== "links") return;
      {
        for (let { title, href } of val) {
          if (!title || !href) continue;

          if (href.startsWith("//")) href = `https:${href}`;
          else if (href.startsWith("/wiki")) href = WIKIPEDIA_URL + href;

          let url: URL;
          try {
            url = new URL(href);
            url.hostname = url.hostname.toLowerCase();
          } catch (e) {
            console.error(`WARNING: Invalid URL: ${href}`);
            continue;
          }

          let kind: Link["kind"] = "homepage";
          if (url.hostname.toLowerCase().includes("wikipedia.org")) {
            kind = "wikipedia";
          } else if (href.includes("git")) kind = "repository";

          const link: Link = { kind, title, href };
          mergeLink(pl, link);
        }
        return;
      }

    case "filename_extension":
    case "filename_extensions":
      pl.extensions ??= [];
      pl.extensions.push(...val.filter((x: string) => x.length < 8));
      return;

    case "internet_media_type":
      return; // Ignore.

    case "major_implementations":
      if (infoboxType !== "links") return;
      for (const { title, href } of val.filter(({ href }) => href.startsWith("/wiki"))) {
        const impl = keyFromWikiUrl(href);
        if (!impl) continue;

        mergeLink(g.v_plang.merge(`pl+${impl}`, { name: title.trim() }), {
          kind: "wikipedia",
          title,
          href: `${WIKIPEDIA_URL}${href}`,
        });

        g.e_implements.connect(`pl+${impl}`, pvid);
      }
      return;

    case "implementation_language":
      if (infoboxType !== "links") return;

      for (const { title, href } of val.filter(({ href }) => href.startsWith("/wiki"))) {
        const key = keyFromWikiUrl(href);
        if (!key) continue;

        mergeLink(g.v_plang.merge(`pl+${key}`, { name: title.trim() }), {
          kind: "wikipedia",
          title,
          href: `${WIKIPEDIA_URL}${href}`,
        });

        g.e_implements.connect(`pl+${key}`, pvid);
      }
      return;

    case "influenced":
    case "influenced_by":
      if (infoboxType !== "links") return;
      for (const { title, href } of val.filter(({ href }) => href.startsWith("/wiki"))) {
        const key = keyFromWikiUrl(href);
        if (!key) continue;

        const otherpl = g.v_plang.merge(`pl+${key}`, { name: title.trim() });
        mergeLink(otherpl, {
          kind: "wikipedia",
          title,
          href: `${WIKIPEDIA_URL}${href}`,
        });

        if (infoboxKey === "influenced") {
          g.e_l_influenced_l.connect(pvid, `pl+${key}`);
        } else {
          g.e_l_influenced_l.connect(`pl+${key}`, pvid);
        }
      }
      return;

    case "dialects":
    case "family":
      if (infoboxType !== "links") return;
      for (const { title, href } of val.filter(({ href }) => href.startsWith("/wiki"))) {
        const key = keyFromWikiUrl(href);
        if (!key) continue;

        const otherpl = g.v_plang.merge(`pl+${key}`, { name: title.trim() });
        mergeLink(otherpl, {
          kind: "wikipedia",
          title,
          href: `${WIKIPEDIA_URL}${href}`,
        });

        if (infoboxKey === "dialects") {
          g.e_dialect_of.connect(`pl+${key}`, pvid);
        } else {
          g.e_dialect_of.connect(pvid, `pl+${key}`);
        }
      }
      return;

    case "license": // links
      if (infoboxType !== "links") return;
      for (const { title, href } of val.filter(({ href }) => href.startsWith("/wiki"))) {
        let key = keyFromWikiUrl(href);
        if (!key) continue;

        key = cleanLicense(key);

        const lic = g.v_license.declare(`lic+${key}`);
        if (!lic.name || lic.name.length > title.length) lic.name = title.trim(); // Keep the shortest name.
        mergeLink(lic, {
          kind: "wikipedia",
          title,
          href: `${WIKIPEDIA_URL}${href}`,
        });
        g.e_has_license.connect(pvid, `lic+${key}`);
      }
      return;

    case "os":
    case "platform":
      if (infoboxType !== "links") return;
      for (const { title, href } of val.filter(({ href }) => href.startsWith("/wiki"))) {
        let key = keyFromWikiUrl(href);
        if (!key) continue; // We'll ignore some old platforms.

        key = cleanPlatform(key);
        if (!key) continue;

        mergeLink(g.v_platform.merge(`platf+${key}`, { name: title.trim() }), {
          kind: "wikipedia",
          title,
          href: `${WIKIPEDIA_URL}${href}`,
        });
        g.e_supports_platf.connect(pvid, `platf+${key}`);
      }
      return;

    case "paradigm":
    case "paradigms":
      if (infoboxType !== "links") return;
      for (const { href, title } of val) {
        let key = keyFromWikiUrl(href);
        if (key) key = cleanParadigm(key);
        if (!key) key = cleanParadigm(title);

        if (!key) {
          console.warn(`Could not clean paradigm: ${title} (${href})`);
          continue;
        }

        mergeLink(g.v_paradigm.merge(`para+${key}`, { name: title.split(",")[0] }), {
          kind: "wikipedia",
          title,
          href: `${WIKIPEDIA_URL}${href}`,
        });
        g.e_plang_para.connect(pvid, `para+${key}`);
      }
      return;

    case "scope":
      {
        function processScope(scopes: string): void {
          if (scopes.includes("lexical")) {
            pl.scoping ??= [];
            pl.scoping.push("lexical");
          }
          if (scopes.includes("static")) {
            pl.scoping ??= [];
            pl.scoping.push("static");
          }
          if (scopes.includes("dynamic")) {
            pl.scoping ??= [];
            pl.scoping.push("dynamic");
          }
        }
        if (infoboxType === "text") processScope(val);
        if (infoboxType !== "links") return;
        for (const { title, href } of val) {
          processScope(title);
        }
      }
      return;

    case "type": // links
      // Things lile "educational", "markup", etc... not very useful (also present in very few languages).
      return;

    case "founder":
    case "designed_by":
    case "developer":
    case "developed_by":
    case "developers": {
      function addPerson(name: string, link?: Link) {
        const key = toAlphaNum(name).replaceAll(".", "");

        const person = g.v_person.merge(`person+${key}`, { name: name });
        if (link) {
          mergeLink(person, link);
        }

        const rel = g.e_person_plang_role.connect(`person+${key}`, pvid);
        const inferred_role = infoboxKey.includes("developer") ? "developer" : "designer";
        if (!rel.role) {
          rel.role = inferred_role;
        } else if (rel.role !== "designer") {
          // Prefer the "designer" role if it is already there.
          rel.role = inferred_role;
        }
      }

      // Under the "risk" of having duplicated people, we use the name of the person
      // instead of the wiki url, since many people don't have a wikipedia page.
      if (infoboxType === "text") {
        for (const who of extractNames(val)) addPerson(who);
      } else if (infoboxType === "links") {
        for (const { title, href } of val.filter(({ href }) => href.startsWith("/wiki"))) {
          const names = extractNames(title);
          if (names.length !== 1) continue;
          addPerson(names[0], {
            title,
            href: `${WIKIPEDIA_URL}${href}`,
            kind: "wikipedia",
          });
        }
      }
      return;
    }

    case "typing_discipline":
      {
        function typeFromText(str: string): void {
          for (const name of str.split(",").map((s: string) => s.toLowerCase())) {
            const tsys = cleanTsys(name);
            if (tsys) g.e_plang_tsys.connect(pvid, `tsys+${tsys}`);
          }
        }
        if (infoboxType === "text") typeFromText(val);
        else if (infoboxType === "links") for (const { title } of val) typeFromText(title);
      }
      return;

    case "first_appeared":
    case "initial_release":
    case "latest_release":
    case "preview_release":
    case "stable_release":
      {
        const KINDS: Record<string, Release["kind"]> = {
          first_appeared: "first",
          initial_release: "first",
          latest_release: "other",
          preview_release: "preview",
          stable_release: "stable",
        };
        const rel: Release = {
          version: val.version ?? "unknown",
          date: val.year ? `${val.year}-01-01` : val.date,
          kind: KINDS[infoboxKey],
        };
        pl.releases ??= [];
        if (!pl.releases.some((r: Release) => r.version === rel.version && r.date === rel.date)) {
          pl.releases.push(rel);
        }
      }
      return;

    case "type_of_format": // Only a handful, lke "scripting", not very useful.
      return;
  }
}

const NON_PEOPLE =
  /\d|partner|international|microsoft|authors|company|unicom|global|eth|texas|college|insa\-lyon|optimization|laboratories|games|itt\-|san\-diego|commercial|community|consortium|hewlett-packard|honeywell|labs|ansi|center|academ.*|harvard|mit\b|ieee|ibm|huawei|xerox|wso2|w3c|iso\b|inria|institute|research|computer|science|foundation|tech.+|polytech.*|university|comittee|jetbrains|sap\b|sas\b|institute|original|contributors|others|open|source|students|nvidia|organization|group|comunity|project|corp|chair|galois|foundation|ltd|tech|core|team|inc|systems|university|software/i;

function extractNames(str: string): string[] {
  return str
    .replaceAll(/\u00a0/g, " ")
    .replaceAll(/et\s+al.*/g, "")
    .replaceAll(/\([^\)]*\)/g, "")
    .split(/,|&|;|\sand\s/)
    .map((s: string) => s.trim())
    .filter((s: string) => s.length > 5 && s.length < 25)
    .filter((s: string) => s.includes(" "))
    .filter((s: string) => !NON_PEOPLE.test(s));
}

function cleanLicense(licenseId: string): string {
  const clean = toAlphaNum(licenseId)
    .replaceAll(/\u00a0/g, " ")
    .replaceAll(/\-since\-\d+/g, "")
    .replaceAll(/\-until\-\d+/g, "")
    .replaceAll(/-?v(\d+)/g, (m, p1) => `-${p1}`)
    .replaceAll(/^revised\-(.+)$/g, "$1-revised")
    .replaceAll("general-public-license", "gpl")
    .replaceAll("creative-commons", "cc")
    .replaceAll("zend-engine", "zend")
    .replaceAll("-or-later", "")
    .replaceAll("-license", "")
    .replaceAll("-licences", "")
    .replaceAll("-software", "")
    .replaceAll("software-", "")
    .replaceAll(".0", "")
    .replaceAll("standard-librariesd-under-the-", "")
    .replaceAll("gnu-gpl", "gpl");

  const match = clean.match(/([^\-]+)-bsd/);
  if (match) return `bsd-${match[1][0]}`;
  if (clean === "bsds") return "bsd-s";

  if (clean === "international-components-for-unicode") return "icu";
  if (clean === "historical-permission-notice-and-disclaimer") return "hpnd";
  if (clean.includes("apache")) return "apache";
  if (clean.includes("lesser") || clean.includes("lgpl")) return "lgpl";
  if (clean === "apsl") return "apache";
  if (clean === "epl") return "eclipse-public";

  return clean;
}

function cleanParadigm(str: string): string | undefined {
  let name = str.trim().replace("programming", "").toLowerCase();

  if (name.includes("multi")) return "multi";
  if (name === "and-computing") return "distributed";

  // This won't tell us much about the paradigm, maybe inspect the hash of the wiki url?
  if (name === "-paradigm") return;

  if (name.startsWith("agent")) return "agent";
  if (name.startsWith("block-based")) return "visual";
  if (name.startsWith("communicating-sequential-processes")) return "csp";
  if (name.startsWith("constraint")) return "constraint";
  if (name.startsWith("data-")) return "data";
  if (name.startsWith("dataflow")) return "dataflow";
  if (name.startsWith("distributed")) return "distributed";
  if (name.startsWith("event-driven")) return "event";
  if (name.startsWith("generic")) return "generic";
  if (name.startsWith("imperative")) return "imperative";
  if (name.startsWith("language-oriented")) return "language";

  if (name.includes("declarative")) return "declarative";
  if (name.includes("functional")) return "functional";
  if (name.includes("generics")) return "generic";
  if (name.includes("logic")) return "logic";
  if (name.includes("macro")) return "macros";
  if (name.includes("object")) return "objects";
  if (name.includes("parallel")) return "parallel";
  if (name.includes("procedural")) return "imperative";
  if (name.includes("processing")) return "process";
  if (name.includes("prototype")) return "prototypes";
  if (name.includes("stack")) return "stack";

  name = name.replaceAll(" ", "-");

  return name.split("-")[0]; // Keep it short.
}

const PLATFORM_SKIPS =
  /parallel_computing|multiprocessing|64-bit_computing|standalone_program|calculator|integrity|^ict|^mach_|^sun|^lgp|^lisp_|multics|nd.500|nextstep|programming.language|honeywell|itanium|^atlas|connection|pa.risc|minicomputer|inferno|^ceres|^cell|hewlett|cray|^bos|conversational|facility|nd500|^ns3|motorola|^osx|powerpc|power_isa|pocket_pc|symbian|primos|^RS|^S390|indiana|harmony|time.sharing|common_language_|aegis|domain|^system|university|tenex|tops-|perkin|^OS.Slash|nord|nova|mainframe|michigan|^mvs|loongson|^lsi|lilith|johnniac|international|george|genera|general_electric|^hp-|^hp_|^icl|irix|incompatible|ferranti|eunice|ecomstation|epoc|eumel|elliot|brother|english|dec_|dartmouth|data_general_nova|digital_eq|classic|cocoa|limited|chippewa|cdc|cp-slash|besm|beos|amdhal|amdahl|agat|sintran|psion|ppc|sparc|solaris|Slash379|unicos|thinking|telecommunication|vax|ural|versados|^VM_\(|^VSE_|univac|unisys|burroughs|wang|timex|pdp|apple-ii|ibm|xerox|10-unix|VS-Slash9/i;

function cleanPlatform(platf: string): string | undefined {
  if (PLATFORM_SKIPS.test(platf)) return;

  const p = toAlphaNum(platf)
    .replaceAll(/\-\([^\)]+\)/g, "")
    .replaceAll("-sharpfloating-point", "")
    .replaceAll("-family", "")
    .replaceAll("field_programmable_gate_array", "fpga")
    .replaceAll("advanced_micro_devices", "amd")
    .replaceAll("-microcontrollers", "")
    .replaceAll("-technology", "")
    .replaceAll("-architecture", "")
    .replaceAll("google-", "")
    .replaceAll("fire-tv", "firetv");

  // Order is important.
  if (/wasm|web.?assembly|wasi/i.test(p)) return "wasm";

  if (/amazon.*web/.test(p)) return "aws";

  if (/6502/.test(p)) return "6502";
  if (/javascript/i.test(p)) return "javascript";
  if (/web|html/i.test(p)) return "web";

  if (/\.net/i.test(p)) return ".net";
  if (/^darwin|^mac-os|^os-x|^mac-operating|^macos|apple-silicon|macintosh/i.test(p)) return "mac";
  if (/amiga/i.test(p)) return "amiga";
  if (/android/i.test(p)) return "android";
  if (/apple.?ii/i.test(p)) return "apple-ii";
  if (/arm/i.test(p)) return "arm";
  if (/cross|independent/i.test(p)) return "cross-platform";
  if (/dos|ms.?dos|microsoft.?dos|pc.?dos|dr?.dos/i.test(p)) return "dos";
  if (/linux|debian|ubuntu|fedora|suse|centos/i.test(p)) return "linux";
  if (/plan.?9/i.test(p)) return "plan9";
  if (/playstation/i.test(p)) return "playstation";
  if (/raspberry/i.test(p)) return "rpi";
  if (/unix/i.test(p)) return "unix";
  if (/windows/i.test(p)) return "windows";
  if (/xbox/i.test(p)) return "xbox";
  if (/atari/i.test(p)) return "atari";
  if (/commodore/i.test(p)) return "commodore";
  if (/java|jvm/i.test(p) && !/javas/i.test(p)) return "jvm";

  if (/Berkeley-Software-Distribution|^bsd|bsd$/i.test(p)) return "bsd";

  return p;
}

const SKIP_KEYS =
  /^modular|^natural-language|mathematical-notation|machine-code|^concurrent-logic|^object-oriented|^intermediate|green-hills|^list-of|manufacturing|^dope|(logic|functional|intermediate|object-oriented|language)-programming|philco|reference|implementation|regency|scripting-language|space-mission|tail-recursive|lisp-machine/i;

/**
 * Create a key from the Wikipedia /wiki path, removing anchors and '_(...)' parts.
 * @returns [key, anchor]
 */
function keyFromWikiUrl(wikiUrl: string): string | undefined {
  const [prefix, hash] = wikiUrl.split("#");

  function clean(val: string): string | undefined {
    const nopar = val.replaceAll(/\_\([^\)]+\)/g, "").trim();

    let key = toAlphaNum(nopar);

    if (key.includes("powershell")) return "powershell";
    if (key.startsWith("win-")) return "win";
    if (key.includes("unified-modeling")) return "uml";

    if (key.startsWith("category")) return;
    if (key === "standalone-program") return;
    if (key === "systems-programming-language") return;
    if (key === "polymorphic-programming-language") return;
    if (key === "programming-language") return;

    key = key
      .replaceAll(/windows/g, "win")
      .replaceAll(/microsoft/g, "ms")
      .replaceAll(/ms\-win/g, "win")
      .replaceAll("gnu-compiler-collection", "gcc")
      .replaceAll(/standard-ml/g, "sml")
      .replaceAll(/\-of\-new\-jersey/g, "")
      .replaceAll(/digital\-equipment\-corporation/g, "dec")
      .replace(/\-programming\-language$/, "")
      .replace(/\-language$/, "");

    if (SKIP_KEYS.test(key)) return;

    for (const l of ["sql", "modula", "algol", "basic", "cobol", "coral", "fortran", "pascal", "smalltalk", "turing"])
      if (key.includes(l)) return l;

    if (key.startsWith("pl-slash")) return "pl-slash";
    if (key.startsWith("sap")) return "sap";
    if (key.startsWith("rpg")) return "rpg";
    if (key.startsWith("dec")) return "dec";
    if (key.startsWith("excel")) return "excel";
    if (key.startsWith("win-") || key.startsWith("universal-win")) return "win";
    if (key.startsWith("alf")) return "alf";
    if (key.startsWith("dope")) return;
    if (key.startsWith("functional")) return;

    if (key.includes("compilers")) return;

    if (key === "common-language-infrastructure") return ".net";

    if (key === "apple-ios") return "ios";
    if (key === "allegro-common") return "common-lisp";
    if (key === "field-programmable-gate-array") return "fpga";
    if (key === "advanced-micro-devices") return "amd";

    return key.replace(/\-programming\-language$/, "");
  }

  if (prefix.includes("/wiki/")) {
    const path = decodeURIComponent(prefix);
    const key = clean(path.split("/wiki/")[1]);
    if (key && !/\-{3,}/.test(key)) return key;
    // console.warn(`Invalid wiki url: ${wikiUrl} -> ${path} -> ${key}`);
  }

  if (wikiUrl.includes("?")) {
    const q = new URLSearchParams(wikiUrl.split("?")[1]);
    const key = clean(q.get("title")?.trim() ?? "");
    if (key && !/\-{3,}/.test(key)) return key;
    // console.warn(`Invalid wiki url: ${wikiUrl} -> ${q.get("title")} -> ${key}`);
  }

  // console.warn(`Invalid wiki url: ${wikiUrl}`);
}

function cleanTsys(str: string): string | undefined {
  if (str.includes("affine")) return "affine";
  if (str.includes("dependent")) return "dependent";
  if (str.includes("duck")) return "duck";
  if (str.includes("dynamic")) return "dynamic";
  if (str.includes("flow")) return "flow-sensitive";
  if (str.includes("generic")) return "generic";
  if (str.includes("gradual")) return "gradual";
  if (str.includes("hindley-milner")) return "hindley-milner";
  if (str.includes("implicit") || str.includes("infer")) return "inferred";
  if (str.includes("latent")) return "latent";
  if (str.includes("manifest")) return "manifest";
  if (str.includes("nomin")) return "nominative";
  if (str.includes("object")) return "object-oriented";
  if (str.includes("optional")) return "optional";
  if (str.includes("parametric")) return "parametric";
  if (str.includes("polymorphic")) return "polymorphic";
  if (str.includes("safe")) return "safe";
  if (str.includes("static")) return "static";
  if (str.includes("strong")) return "strong";
  if (str.includes("structural")) return "structural";
  if (str.includes("uniqueness")) return "uniqueness";
  if (str.includes("weak")) return "weak";
}
