/**
 * Process the wikipedia data we scrapped to .json files.
 */

import { Glob } from "bun";

import type { PlangsGraph, Link, NPlang, Release } from "@plangs/plangs";

import { toAlphaNum } from "./util";
import { type DATA_ATTR, type DATA_TYPE, WIKIPEDIA_URL, cachePath } from "./wikipedia_scraper";

// biome-ignore lint/suspicious/noExplicitAny: Wikipedia infoboxes really can have any data.
type _Any = any;

/**
 * Returns a graph out of reading the cached JSON files from the Wikipedia scraping.
 * The scraper should have generated the JSON infobox files for this to do anything.
 */
export async function parseAll(g: PlangsGraph) {
  function addTsys(name: string, wiki: Link["href"]) {
    g.n_tsystem.set(`tsys+${name.toLowerCase()}`, {
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

  // Sorting the paths makes it easier to debug.
  const paths: string[] = [];
  for await (const path of glob.scan(cachePath("json"))) {
    paths.push(path);
  }
  paths.sort();

  for (const path of paths) {
    const j = JSON.parse(await Bun.file(cachePath("json", path)).text());
    const title: string = j.title;
    const wikiUrl: string = j.wikiUrl;
    const image: string = j.img;
    const data: Record<DATA_ATTR, Record<DATA_TYPE, _Any>> = j.data;
    processLanguage(g, title, wikiUrl, image, data);
  }
}

function processLanguage(
  g: PlangsGraph,
  title: string,
  wikiUrl: string,
  imageUrl: string | undefined,
  data: Record<DATA_ATTR, Record<DATA_TYPE, _Any>>,
) {
  const plKey = keyFromWikiUrl(wikiUrl);
  if (!plKey) return;

  const pl = g.n_plang.set(`pl+${plKey}`, { name: title }); // We may already have the language, from an influence.
  pl.addWebsites([{ kind: "wikipedia", title, href: wikiUrl }]);

  if (imageUrl) {
    pl.addImages([{ kind: /logo/i.test(imageUrl) ? "logo" : "screenshot", url: imageUrl }]);
  }

  for (const [attr, attrVal] of Object.entries(data)) {
    for (const [dataKey, dataVal] of Object.entries(attrVal)) {
      const ibKey = attr as DATA_ATTR;
      const ibType = dataKey as DATA_TYPE;
      assign(g, `pl+${plKey}`, ibKey, ibType, dataVal);
    }
  }
}

function assign(g: PlangsGraph, plKey: NPlang["key"], infoboxKey: DATA_ATTR, infoboxType: DATA_TYPE, val: _Any): void {
  const pl = g.n_plang.get(plKey);

  switch (infoboxKey) {
    case "website":
      if (infoboxType !== "links") return;
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

        pl.addWebsites([{ kind, title, href }]);
      }
      return;

    case "filename_extension":
    case "filename_extensions":
      if (infoboxType !== "extensions") return;
      pl.addExtensions(val.filter((x: string) => x.length < 8));
      return;

    case "internet_media_type":
      return; // Ignore.

    case "major_implementations":
      if (infoboxType !== "links") return;
      for (const { title, href, refs } of val.filter(({ href }: { href: string }) => href.startsWith("/wiki"))) {
        const key = keyFromWikiUrl(href);
        if (!key || key === plKey) continue;

        const p = g.n_plang.set(`pl+${key}`, { name: title.trim() });
        p.addWebsites([{ kind: "wikipedia", title, href: `${WIKIPEDIA_URL}${href}` }]);

        const rel = g.e_implements.connect(`pl+${key}`, plKey);
        if (refs) rel.addRefs(refs);
      }
      return;

    case "implementation_language":
      if (infoboxType !== "links") return;

      for (const { title, href, refs } of val.filter(({ href }: { href: string }) => href.startsWith("/wiki"))) {
        const key = keyFromWikiUrl(href);
        if (!key || key === plKey) continue;

        const p = g.n_plang.set(`pl+${key}`, { name: title.trim() });
        p.addWebsites([{ kind: "wikipedia", title, href: `${WIKIPEDIA_URL}${href}` }]);

        const rel = g.e_implements.connect(`pl+${key}`, plKey);

        if (refs) rel.addRefs(refs);
      }
      return;

    case "influenced":
    case "influenced_by":
      if (infoboxType !== "links") return;
      for (const { title, href, refs } of val.filter(({ href }: { href: string }) => href.startsWith("/wiki"))) {
        const key = keyFromWikiUrl(href);
        if (!key || key === plKey) continue;

        const otherpl = g.n_plang.set(`pl+${key}`, { name: title.trim() });
        otherpl.addWebsites([{ kind: "wikipedia", title, href: `${WIKIPEDIA_URL}${href}` }]);

        const rel = infoboxKey === "influenced" ? g.e_l_influenced_l.connect(plKey, `pl+${key}`) : g.e_l_influenced_l.connect(`pl+${key}`, plKey);

        if (refs) rel.addRefs(refs);
      }
      return;

    case "dialects":
    case "family":
      if (infoboxType !== "links") return;
      for (const { title, href, refs } of val.filter(({ href }: { href: string }) => href.startsWith("/wiki"))) {
        const key = keyFromWikiUrl(href);
        if (!key || key === plKey) continue;

        const otherpl = g.n_plang.set(`pl+${key}`, { name: title.trim() });
        otherpl.addWebsites([{ kind: "wikipedia", title, href: `${WIKIPEDIA_URL}${href}` }]);

        const rel = infoboxKey === "dialects" ? g.e_dialect_of.connect(`pl+${key}`, plKey) : g.e_dialect_of.connect(plKey, `pl+${key}`);

        if (refs) rel.addRefs(refs);
      }
      return;

    case "license": // links
      if (infoboxType !== "links") return;
      for (const { title, href, refs } of val.filter(({ href }: { href: string }) => href.startsWith("/wiki"))) {
        let key = keyFromWikiUrl(href);
        if (!key) continue;

        key = cleanLicense(key);

        const lic = g.n_license.get(`lic+${key}`);
        if (!lic.data.name || lic.data.name.length > title.length) lic.data.name = title.trim(); // Keep the shortest name.

        lic.addWebsites([{ kind: "wikipedia", title, href: `${WIKIPEDIA_URL}${href}` }]);

        if (refs) g.e_has_license.connect(plKey, `lic+${key}`).addRefs(refs);
      }
      return;

    case "os":
    case "platform":
      if (infoboxType !== "links") return;
      for (const { title, href, refs } of val.filter(({ href }: { href: string }) => href.startsWith("/wiki"))) {
        let key = keyFromWikiUrl(href);
        if (!key) continue; // We'll ignore some old platforms.

        key = cleanPlatform(key);
        if (!key) continue;

        const p = g.n_platform.set(`platf+${key}`, { name: title.trim() });

        p.addWebsites([{ kind: "wikipedia", title, href: `${WIKIPEDIA_URL}${href}` }]);

        const rel = g.e_supports_platf.connect(plKey, `platf+${key}`);

        if (refs) rel.addRefs(refs);
      }
      return;

    case "paradigm":
    case "paradigms":
      if (infoboxType !== "links") return;
      for (const { href, title, refs } of val) {
        let key = keyFromWikiUrl(href);
        if (key) key = cleanParadigm(key);
        if (!key) key = cleanParadigm(title);

        if (!key) {
          console.warn(`Could not clean paradigm: ${title} (${href})`);
          continue;
        }

        const p = g.n_paradigm.set(`para+${key}`, { name: title.split(",")[0] });

        p.addWebsites([{ kind: "wikipedia", title, href: `${WIKIPEDIA_URL}${href}` }]);

        if (refs) g.e_plang_para.connect(plKey, `para+${key}`).addRefs(refs);
      }
      return;

    case "scope":
      {
        function processScope(scopes: string): void {
          if (scopes.includes("lexical")) {
            pl.addScoping(["lexical"]);
          }
          if (scopes.includes("static")) {
            pl.addScoping(["static"]);
          }
          if (scopes.includes("dynamic")) {
            pl.addScoping(["dynamic"]);
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
      function addPerson(name: string, link?: Link, refs?: Link[]) {
        const key = toAlphaNum(name).replaceAll(".", "");

        const person = g.n_person.set(`person+${key}`, { name: name });
        if (link) person.addWebsites([link]);

        const rel = g.e_person_plang.connect(`person+${key}`, plKey);

        const inferred_role = infoboxKey.includes("developer") ? "developer" : "designer";

        if (!rel.data.role) {
          rel.data.role = inferred_role;
        } else if (rel.data.role !== "designer") {
          // Prefer the "designer" role if it is already there.
          rel.data.role = inferred_role;
        }

        if (refs) rel.addRefs(refs);
      }

      // Under the "risk" of having duplicated people, we use the name of the person
      // instead of the wiki url, since many people don't have a wikipedia page.
      if (infoboxType === "text") {
        for (const who of extractNames(val)) addPerson(who);
      } else if (infoboxType === "links") {
        for (const { title, href, refs } of val.filter(({ href }: { href: string }) => href.startsWith("/wiki"))) {
          const names = extractNames(title);
          if (names.length !== 1) continue;
          addPerson(names[0], { title, href: `${WIKIPEDIA_URL}${href}`, kind: "wikipedia" }, refs);
        }
      }
      return;
    }

    case "typing_discipline":
      {
        function typeFromText(str: string, refs?: Link[]): void {
          for (const name of str.split(",").map((s: string) => s.toLowerCase())) {
            const tsys = cleanTsys(name);
            if (tsys) {
              const e = g.e_plang_tsys.connect(plKey, `tsys+${tsys}`);
              if (refs) e.addRefs(refs);
            }
          }
        }
        if (infoboxType === "text") typeFromText(val);
        else if (infoboxType === "links")
          for (const { title, refs } of val) {
            typeFromText(title, refs);
          }
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

        if (!(val.date || val.year)) return;

        const rel: Release = {
          name: val.name,
          version: val.version ?? "unknown",
          date: val.year ? `${val.year}-01-01` : val.date,
          kind: KINDS[infoboxKey],
        };

        pl.addReleases([rel]);
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
  /^modular|^natural-language|visual-studio|mathematical-notation|machine-code|^concurrent-logic|^object-oriented|^intermediate|green-hills|^list-of|manufacturing|^dope|(logic|functional|intermediate|object-oriented|language)-programming|philco|reference|implementation|regency|scripting-language|space-mission|tail-recursive|lisp-machine/i;

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
    if (key === "korn-shell") return "kornshell";
    if (key === "pure-data") return "puredata";
    if (key === "systems-programming-language") return;
    if (key === "polymorphic-programming-language") return;
    if (key === "programming-language") return;
    if (key === "communicating-sequential-processes") return "csp";

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

    for (const l of ["verilog", "sql", "modula", "algol", "basic", "cobol", "coral", "fortran", "pascal", "smalltalk", "turing"])
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
    if (key.includes("commonlisp")) return "common-lisp";
    if (key.includes("common-lisp")) return "common-lisp";
    if (key.includes("c-sharp")) return "c-sharp";

    if (key.startsWith(".net")) return ".net";
    if (key === "common-language-infrastructure") return ".net";

    if (key === "apple-ios") return "ios";
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
