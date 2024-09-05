import type { NodeMap } from "@plangs/graph";
import { type NPlang, PlangsGraph } from "@plangs/plangs";

const DEF_PATH = Bun.fileURLToPath(`file:${__dirname}/../../../packages/definitions/src`);

function templ(data) {
  const body: string[] = [];

  for (const bundle of data) {
    const buf = [`g.${bundle.nodeType}.set(${bundle.key}, ${bundle.data})`];

    for (const rel of bundle.vrelations) {
      buf.push(rel);
    }

    body.push(line.join(""));
  }

  return `
import type { PlangsGraph } from "@plangs/plangs";
export function define(g: PlangsGraph) {
  ${body.join("\n  ")}
};`;
}

function tsPath(type: string, name: string): string {
  if (name) {
    const p = toAlphaNum(name).toLowerCase();
    return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/${name}.ts`);
  }
  return Bun.fileURLToPath(`file:${DEF_PATH}/${type}.ts`);
}

/**
 * Calls the {@link parseAll} function to generate a graph
 * of information about programming languages.
 *
 * Then, generates the definitions for everything scraped.
 *
 * At the end of the proces we should get the same graph,
 * but defined from TS code instead of scraped data.
 */
async function generateAll() {
  const g = new PlangsGraph();
  await parseAll(g);

  console.log(new Date().toISOString());

  generate(g.n_paradigm, "paradigms", "buildParadigm");
  generate(g.n_tsystem, "type_systems", "buildTypeSystem");
  generate(g.n_person, "people", "buildPerson");

  generate(g.n_license, "licenses", "buildLicense", (bundle: AtoZData) => {
    const key = JSON.parse(bundle.key);

    if (key.includes("apache")) return "apache";
    if (key.includes("bsd")) return "bsd";
    if (key.includes("free")) return "free";
    if (key.includes("gnu") || key.includes("gpl") || /general.?public.?license/i.test(key)) return "gnu";
    if (key.includes("mit")) return "mit";
    if (key.includes("mozilla") || key.includes("mpl")) return "mozilla";

    return defaultCollator(bundle);
  });

  generate(g.n_platform, "platforms", "buildPlatform", (bundle: AtoZData) => {
    const key = JSON.parse(bundle.key);

    if (key.includes("mach") || key.includes("lisp")) return "other";

    if (key.includes("ios") || key.includes("apple") || key.includes("tvos") || key.includes("watchos") || key.startsWith("platf+mac"))
      return "apple";

    if (key.startsWith("platf+esp")) return "esp";
    if (key.startsWith("platf+dec")) return "dec";
    if ((key.startsWith("platf+x") && !key.startsWith("platf+xbox")) || key.startsWith("platf+ia") || key.includes("intel")) return "intel";

    if (key.includes(".net") || key.includes("mono")) return ".net";
    if (key.includes("commodore") || key.includes("c64")) return "commodore";
    if (key.includes("rpi") || key.includes("raspberry") || key.includes("2040")) return "raspberrypi";
    if (key.includes("zx") || key.includes("z80") || key.includes("z81")) return "z80";

    for (const name of ["arm", "atari", "bsd", "javascript", "risc"]) if (key.includes(name)) return name;

    if (key.includes("aarch")) return "arm";

    if (key.includes("amd")) return "amd";
    if (key.includes("dos")) return "dos";

    return defaultCollator(bundle);
  });

  generate(
    g.n_plang,
    "plangs",
    "buildPlang",
    (bundle: AtoZData) => {
      const key = JSON.parse(bundle.key);

      function fileName(): string {
        if (key === "pl+c") return "c";
        if (key === "pl+d") return "d";

        if (key.startsWith("pl+lua")) return "lua";
        if (key.startsWith("simula") && !key.startsWith("simulation")) return "simula";

        if (key.includes("java") && !key.includes("javascript")) return "java";
        if (key.includes("javascript")) return "javascript";

        for (const [name, group] of Object.entries(PLANG_GROUPS)) {
          for (const str of group) if (key.includes(str)) return name;
        }

        return defaultCollator(bundle);
      }

      const f = fileName();

      for (const [first, last] of [
        ["d", "f"],
        ["g", "i"],
        ["j", "l"],
        ["m", "o"],
        ["p", "r"],
        ["s", "u"],
        ["v", "z"],
      ]) {
        if (f[0] >= first && f[0] <= last) return `${first}-${last}/${f}`;
      }

      return `a-c/${f}`;
    },
    (key: string) => plangMapper(g, key as NPlang["key"]),
  );

  console.log("Finished generating definitions.");
}

const PLANG_GROUPS = {
  ".net": [".net"],
  algol: ["algol"],
  assembly: ["assem"],
  basic: ["basic", "xojo", "gambas"],
  c: ["c99", "ansi-c"],
  caml: ["caml"],
  clang: ["clang", "llvm"],
  clojure: ["clojure"],
  cobol: ["cobol"],
  cpp: ["cpp"],
  crystal: ["crystal"],
  dart: ["dart"],
  datalog: ["datalog"],
  eiffel: ["eiffel"],
  fortran: ["fortran", "g95"],
  gcc: ["gcc"],
  haxe: ["haxe", "neko"],
  julia: ["julia"],
  kotlin: ["clojure"],
  lisp: ["lisp"],
  logo: ["logo"],
  modula: ["modula"],
  moonscript: ["moonscript"],
  oberon: ["oberon"],
  other: ["slash"],
  pascal: ["pascal", "delphi"],
  prolog: ["prolog"],
  python: ["py", "cython", "jython"],
  qt: ["qt", "qml", "qtscript"],
  raku: ["raku"],
  ruby: ["ruby", "rubinius"],
  scratch: ["scratch"],
  smalltalk: ["smalltalk", "gemstone", "pharo", "squeak", "cuis", "amber", "visualworks"],
  sql: ["sql"],
  tcl: ["tcl", "tk"],
  verilog: ["verilog"],
  vhdl: ["vhdl"],
  wolfram: ["wolfram"],
  xml: ["xslt", "xpath", "xquery"],
  zig: ["zig"],
};

function defaultMapper(key_: string, vertex: _T_Anyn_Data): AtoZData {
  const bundle: AtoZData = { vertex, key: json(key_) };
  const data = tidy(vertex);
  const { key, ...rest } = data;
  if (!blank(data)) bundle.data = json(rest);
  return bundle;
}

function defaultCollator(bundle: AtoZData): string {
  const numWebsites = bundle.vertex.websites?.length ?? 0;
  const numRelations = bundle.vrelations?.length ?? 0;

  if (3 * numWebsites + 7 * numRelations > 25) {
    const key = JSON.parse(bundle.key);
    return key.split("+")[1];
  }

  return "other";
}

function plangMapper(g: PlangsGraph, plkey: NPlang["key"]): AtoZData {
  const pl = g.n_plang.get(plkey);
  if (!pl || !pl.data.name) throw new Error(`Missing plang data: ${plkey}`);

  const bundle: AtoZData = { vertex: pl, key: json(plkey) };
  const { key, ...rest } = pl;
  const data = tidy(rest);
  if (!blank(data)) bundle.data = json(data);

  const vrelations: string[] = [];

  function addRel(methodOne: string, methodMany: string, rel: Map<string, any> | undefined) {
    if (!rel || rel.size === 0) return;

    // Collect the vertices with no data.
    const noDatakeys = new Set<string>();
    const singles: string[] = [];

    for (const [key, edata] of rel) {
      if (blank(edata)) {
        noDatakeys.add(key);
      } else {
        singles.push(`.${methodOne}(${json(key)}, ${json(edata)})`);
      }
    }

    if (noDatakeys.size > 0) {
      vrelations.push(`.${methodMany}(${json([...noDatakeys])})`);
    }
    vrelations.push(...singles);
  }

  // adj *to* plang.

  addRel("addDialect", "addDialects", g.e_dialect_of.adjTo.getMap(plkey));
  addRel("addImplementation", "addImplementations", g.e_implements.adjTo.getMap(plkey));
  addRel("addInfluence", "addInfluences", g.e_influence.adjTo.getMap(plkey));
  addRel("addPerson", "addPeople", g.e_person_plang.adjTo.getMap(plkey));

  // adj *from* plang.

  addRel("addLicense", "addLicenses", g.e_has_license.adjFrom.getMap(plkey));
  addRel("addParadigm", "addParadigms", g.e_plang_para.adjFrom.getMap(plkey));
  addRel("addPlatform", "addPlatforms", g.e_supports_platf.adjFrom.getMap(plkey));
  addRel("addTypeSystem", "addTypeSystems", g.e_plang_tsys.adjFrom.getMap(plkey));

  if (!blank(tidy(vrelations))) bundle.vrelations = vrelations;

  return bundle;
}

// biome-ignore lint/suspicious/noExplicitAny: let me be.
type _T_Anyn_Data = any;

// a_to_z.eta template data:
type AtoZData = {
  vertex: _T_Anyn_Data;
  key: string; // json vertex id
  data?: string; // json vertex data
  vrelations?: string[]; // json vertex relations
};

type DataMapper = (key: string, vertex: _T_Anyn_Data) => AtoZData;
type Collator = (bundle: AtoZData) => string;

function generate(
  nodeMap: NodeMap<any, any>,
  basename: string,
  builderName: string,
  collator: Collator = defaultCollator,
  mapper: DataMapper = defaultMapper,
) {
  const fileNames: Map<string, AtoZData[]> = new Map();

  for (const [key, node] of nodeMap) {
    const bundle = mapper(key as string, node);
    const file = collator(bundle);
    if (!fileNames.has(file)) fileNames.set(file, []);
    fileNames.get(file)?.push(bundle);
  }

  for (const [fileName, bundles] of fileNames) {
    const slashCount = (fileName.match(/\//g) || []).length;
    const raw = Templ.render("/a_to_z", { data: bundles, builderName, depth: 2 + slashCount });
    const path = tsPath(basename, fileName);
    Bun.write(path, raw);
  }

  console.log(`${basename}: ${nodeMap.size} entries in ${fileNames.size} files.`);
}

// biome-ignore lint/suspicious/noExplicitAny: it's ok.
const json = (v: any) => JSON.stringify(v);

if (process.env.PLANGS_GEN) await generateAll();
