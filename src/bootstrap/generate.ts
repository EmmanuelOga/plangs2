import { Eta } from "eta";
import { PlangsGraph } from "../entities/plangs_graph";
import type {
  E_Base,
  VID_License,
  VID_Paradigm,
  VID_Person,
  VID_Plang,
  VID_Platform,
  VID_TypeSystem,
} from "../entities/schemas";
import type { VID_Any } from "../graph/vertex";
import type { VertexTable } from "../graph/vertex_table";
import { blank, toAlphaNum } from "../util";
import { PLANG_IDS } from "./plang_ids";
import { parseAll } from "./wikipedia_process";
import { Biome, Distribution } from "@biomejs/js-api";

const biome = await Biome.create({ distribution: Distribution.NODE });

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

  genAll(g.v_paradigm, "paradigms", "paradigm", (vid, vertex, lines, name) => (lines > 10 ? name : "other"));
  genAll(g.v_tsystem, "type_systems", "typeSystem", (vid, vertex, lines, name) => (lines > 10 ? name : "other"));
  genAll(g.v_person, "people", "person", (vid, vertex, dataSize, name) => "other");

  genAll(g.v_license, "licenses", "license", (vid, vertex, lines, name) => {
    if (vid.includes("apache")) return "apache";
    if (vid.includes("bsd")) return "bsd";
    if (vid.includes("free")) return "free";
    if (vid.includes("gnu") || vid.includes("gpl") || /general.?public.?license/i.test(vid)) return "gnu";
    if (vid.includes("mit")) return "mit";
    if (vid.includes("mozilla") || vid.includes("mpl")) return "mozilla";
    return lines > 10 ? name : "other";
  });

  genAll(g.v_platform, "platforms", "platform", (vid, vertex, lines, name) => {
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

    return lines > 10 ? name : "other";
  });

  genAll(
    g.v_plang,
    "plangs",
    "plang",
    (vid, vertex, lines, name) => {
      function fileName(): string {
        if (vid.includes("algol")) return "algol";
        if (vid.includes("assembly")) return "assembly";
        if (vid.includes("basic") || vid.includes("xojo") || vid.includes("gambas")) return "basic";
        if (vid.includes("c99")) return "c";
        if (vid.includes("cpp")) return "cpp";
        if (vid.includes("fortran")) return "fortran";
        if (vid.includes("lisp")) return "lisp";
        if (vid.includes("modula")) return "modula";
        if (vid.includes("oberon")) return "oberon";
        if (vid.includes("pascal") || vid.includes("delphi")) return "pascal";
        if (vid.includes("py") || vid.includes("cython")) return "python";
        if (vid.includes("raku")) return "raku";
        if (vid.includes("ruby")) return "ruby";
        if (vid.includes("scratch")) return "scratch";
        if (vid.includes("sql")) return "sql";
        if (vid.includes("xslt") || vid.includes("xpath") || vid.includes("xquery")) return "xml";

        if (vid.includes("slash")) return "other";

        // biome-ignore lint/suspicious/noExplicitAny: Ok here.
        return PLANG_IDS.has(vid as any) || lines > 50 ? name : "other";
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

function defaultMapper(vid: VID_Any, vertex: _T_AnyV_Data): AtoZData {
  // Export everything but the name field.
  const d = { ...vertex };
  // biome-ignore lint/performance/noDelete: really need to exlude this one.
  delete d.name;

  // Remove empty data and sort non-empty arrays.
  for (const [key, val] of Object.entries(d)) {
    if (Array.isArray(val)) {
      if (val.length === 0) delete d[key];
      else val.sort();
    } else if (blank(val)) {
      delete d[key];
    }
  }

  const bundle: AtoZData = {
    vid: json(vid),
    name: json(vertex.name),
  };
  if (!blank(d)) bundle.data = json(d);
  return bundle;
}

function plangMapper(g: PlangsGraph, plvid: VID_Plang): AtoZData {
  const pl = g.v_plang.get(plvid);
  if (!pl || !pl.name) {
    throw new Error(`Missing plang data: ${plvid}`);
  }

  const bundle: AtoZData = {
    vid: json(plvid),
    name: json(pl.name),
    data: json(pl),
  };

  const vrelations: Record<string, string[]> = {};
  function addRel(vrelKey: string, rels: string[]) {
    if (rels.length === 0) return;
    vrelations[vrelKey] = rels;
  }

  addRel("dialects", [...g.e_dialect_of.adjacentTo(plvid)]);
  addRel("implementations", [...g.e_implements.adjacentTo(plvid)]);
  addRel("influences", [...g.e_l_influenced_l.adjacentTo(plvid)]);
  addRel("licenses", [...g.e_has_license.adjacentFrom(plvid)]);
  addRel("paradigms", [...g.e_plang_para.adjacentFrom(plvid)]);
  addRel("people", [...g.e_person_plang_role.adjacentTo(plvid)]);
  addRel("platforms", [...g.e_supports_platf.adjacentFrom(plvid)]);
  addRel("typeSystems", [...g.e_plang_tsys.adjacentFrom(plvid)]);

  if (Object.keys(vrelations).length > 0) bundle.vrelations = json(vrelations);

  return bundle;
}

// biome-ignore lint/suspicious/noExplicitAny: let me be.
type _T_AnyV_Data = any;

// a_to_z.eta template data:
type AtoZData = {
  vid: string; // json vertex id
  name: string; // json vertex name
  data?: string; // json vertex data
  vrelations?: string; // json vertex relations
};

// Return the file name (with no extension) for a given vertex.
type Collator = (vid: VID_Any, vertex: _T_AnyV_Data, dataLines: number, name: string) => string;
type DataMapper = (vid: VID_Any, vertex: _T_AnyV_Data) => AtoZData;

function genAll(
  vtable: VertexTable<VID_Any, _T_AnyV_Data>,
  basename: string,
  builderName: string,
  collator: Collator,
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

    // Render once so we can count the lines.
    // Unfortunately, biome API doesn't let us configure the formatter to 120 columns,
    // so this is an "estimate" of the final number of lines.
    const rendered = Templ.render("/a_to_z", { data: [bundle], builderName, depth: 1 });
    const formatted = biome.formatContent(rendered, { filePath: "example.ts" });
    const lines = formatted.content.split("\n").length;

    const file = collator(vid as VID_Any, vertex, lines, vid.split("+")[1]);
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
