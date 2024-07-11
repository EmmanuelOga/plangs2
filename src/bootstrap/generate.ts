import { Eta } from "eta";
import { PlangsGraph } from "../schema/graph";
import type {
  E_Base,
  VID_License,
  VID_Paradigm,
  VID_Person,
  VID_Plang,
  VID_Platform,
  VID_TypeSystem,
} from "../schema/entities";
import type { VID_Any } from "../graphs/vertex";
import type { VertexTable } from "../graphs/vertex_table";
import { blank, tidy, toAlphaNum } from "../util";
import { parseAll } from "./wikipedia_process";

const Templ = new Eta({ views: __dirname, autoEscape: false });

const DEF_PATH = Bun.fileURLToPath(`file:${__dirname}/../definitions`);

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

  generate(g.v_paradigm, "paradigms", "buildParadigm");
  generate(g.v_tsystem, "type_systems", "buildTypeSystem");
  generate(g.v_person, "people", "buildPerson");

  generate(g.v_license, "licenses", "buildLicense", (bundle: AtoZData) => {
    const vid = JSON.parse(bundle.vid);

    if (vid.includes("apache")) return "apache";
    if (vid.includes("bsd")) return "bsd";
    if (vid.includes("free")) return "free";
    if (vid.includes("gnu") || vid.includes("gpl") || /general.?public.?license/i.test(vid)) return "gnu";
    if (vid.includes("mit")) return "mit";
    if (vid.includes("mozilla") || vid.includes("mpl")) return "mozilla";

    return defaultCollator(bundle);
  });

  generate(g.v_platform, "platforms", "buildPlatform", (bundle: AtoZData) => {
    const vid = JSON.parse(bundle.vid);

    if (vid.includes("mach") || vid.includes("lisp")) return "other";

    if (
      vid.includes("ios") ||
      vid.includes("apple") ||
      vid.includes("tvos") ||
      vid.includes("watchos") ||
      vid.startsWith("platf+mac")
    )
      return "apple";

    if (vid.startsWith("platf+esp")) return "esp";
    if (vid.startsWith("platf+dec")) return "dec";
    if (
      (vid.startsWith("platf+x") && !vid.startsWith("platf+xbox")) ||
      vid.startsWith("platf+ia") ||
      vid.includes("intel")
    )
      return "intel";

    if (vid.includes(".net") || vid.includes("mono")) return ".net";
    if (vid.includes("commodore") || vid.includes("c64")) return "commodore";
    if (vid.includes("rpi") || vid.includes("raspberry") || vid.includes("2040")) return "raspberrypi";
    if (vid.includes("zx") || vid.includes("z80") || vid.includes("z81")) return "z80";

    for (const name of ["arm", "atari", "bsd", "javascript", "risc"]) if (vid.includes(name)) return name;

    if (vid.includes("aarch")) return "arm";

    if (vid.includes("amd")) return "amd";
    if (vid.includes("dos")) return "dos";

    return defaultCollator(bundle);
  });

  generate(
    g.v_plang,
    "plangs",
    "buildPlang",
    (bundle: AtoZData) => {
      const vid = JSON.parse(bundle.vid);

      function fileName(): string {
        if (vid === "pl+c") return "c";
        if (vid === "pl+d") return "d";

        if (vid.startsWith("pl+lua")) return "lua";
        if (vid.startsWith("simula") && !vid.startsWith("simulation")) return "simula";

        if (vid.includes("java") && !vid.includes("javascript")) return "java";
        if (vid.includes("javascript")) return "javascript";

        for (const [name, group] of Object.entries(PLANG_GROUPS)) {
          for (const str of group) if (vid.includes(str)) return name;
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
    (vid: VID_Any) => plangMapper(g, vid as VID_Plang),
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

function defaultMapper(vid_: VID_Any, vertex: _T_AnyV_Data): AtoZData {
  const bundle: AtoZData = { vertex, vid: json(vid_) };
  const data = tidy(vertex);
  const { vid, ...rest } = data;
  if (!blank(data)) bundle.data = json(rest);
  return bundle;
}

function defaultCollator(bundle: AtoZData): string {
  const numWebsites = bundle.vertex.websites?.length ?? 0;
  const numRelations = bundle.vrelations?.length ?? 0;

  if (3 * numWebsites + 7 * numRelations > 25) {
    const vid = JSON.parse(bundle.vid);
    return vid.split("+")[1];
  }

  return "other";
}

function plangMapper(g: PlangsGraph, plvid: VID_Plang): AtoZData {
  const vertex = g.v_plang.get(plvid);
  if (!vertex || !vertex.name) throw new Error(`Missing plang data: ${plvid}`);

  const bundle: AtoZData = { vertex, vid: json(plvid) };
  const { vid, ...rest } = vertex;
  const data = tidy(rest);
  if (!blank(data)) bundle.data = json(data);

  const vrelations: string[] = [];

  function addRel(
    methodOne: string,
    methodMany: string,
    relVids: string[],
    egetter: (vid: string) => E_Base | undefined,
  ) {
    if (relVids.length === 0) return;

    // Collect the vertices with no data.
    const noDataVids = new Set<string>();
    const singles: string[] = [];

    for (const vid of relVids) {
      const edata = egetter(vid);
      if (blank(edata)) {
        noDataVids.add(vid);
      } else {
        singles.push(`.${methodOne}(${json(vid)}, ${json(edata)})`);
      }
    }

    if (noDataVids.size > 0) {
      vrelations.push(`.${methodMany}(${json([...noDataVids])})`);
    }
    vrelations.push(...singles);
  }

  // Adjacent *to* plang.

  addRel("addDialect", "addDialects", [...g.e_dialect_of.adjacentTo(plvid)], (vid) =>
    g.e_dialect_of.get(vid as VID_Plang, plvid),
  );

  addRel("addImplementation", "addImplementations", [...g.e_implements.adjacentTo(plvid)], (vid) =>
    g.e_implements.get(vid as VID_Plang, plvid),
  );

  addRel("addInfluence", "addInfluences", [...g.e_l_influenced_l.adjacentTo(plvid)], (vid) =>
    g.e_l_influenced_l.get(vid as VID_Plang, plvid),
  );

  addRel("addPerson", "addPeople", [...g.e_person_plang.adjacentTo(plvid)], (vid) =>
    g.e_person_plang.get(vid as VID_Person, plvid),
  );

  // Adjacent *from* plang.

  addRel("addLicense", "addLicenses", [...g.e_has_license.adjacentFrom(plvid)], (vid) =>
    g.e_has_license.get(plvid, vid as VID_License),
  );

  addRel("addParadigm", "addParadigms", [...g.e_plang_para.adjacentFrom(plvid)], (vid) =>
    g.e_plang_para.get(plvid, vid as VID_Paradigm),
  );

  addRel("addPlatform", "addPlatforms", [...g.e_supports_platf.adjacentFrom(plvid)], (vid) =>
    g.e_supports_platf.get(plvid, vid as VID_Platform),
  );

  addRel("addTypeSystem", "addTypeSystems", [...g.e_plang_tsys.adjacentFrom(plvid)], (vid) =>
    g.e_plang_tsys.get(plvid, vid as VID_TypeSystem),
  );

  if (!blank(tidy(vrelations))) bundle.vrelations = vrelations;

  return bundle;
}

// biome-ignore lint/suspicious/noExplicitAny: let me be.
type _T_AnyV_Data = any;

// a_to_z.eta template data:
type AtoZData = {
  vertex: _T_AnyV_Data;
  vid: string; // json vertex id
  data?: string; // json vertex data
  vrelations?: string[]; // json vertex relations
};

type DataMapper = (vid: VID_Any, vertex: _T_AnyV_Data) => AtoZData;
type Collator = (bundle: AtoZData) => string;

function generate(
  vtable: VertexTable<VID_Any, _T_AnyV_Data>,
  basename: string,
  builderName: string,
  collator: Collator = defaultCollator,
  mapper: DataMapper = defaultMapper,
  vidWhitelist?: Set<string>,
) {
  let allVids = [...vtable.keys()].map((vid) => vid).sort();
  if (vidWhitelist) {
    allVids = allVids.filter((vid) => vidWhitelist.has(vid.toLowerCase()));
  }
  if (allVids.length === 0) return;

  const fileNames: Map<string, AtoZData[]> = new Map();

  for (const vid of allVids) {
    const vertex = vtable.get(vid as VID_Any);
    if (!vertex) {
      console.log("Vertex not found:", vid);
      continue;
    }
    const bundle = mapper(vid as VID_Any, vertex);
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

  console.log(`${basename}: ${allVids.length} entries in ${fileNames.size} files.`);
}

// biome-ignore lint/suspicious/noExplicitAny: it's ok.
const json = (v: any) => JSON.stringify(v);

if (process.env.PLANGS_GEN) await generateAll();
