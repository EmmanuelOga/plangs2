import { Eta } from "eta";
import { groupBy } from "lodash-es";
import { PlangsGraph } from "../entities/plangs_graph";
import type { VID_Plang } from "../entities/schemas";
import type { VID_Any } from "../graph/vertex";
import type { VertexTable } from "../graph/vertex_table";
import { toAlphaNum } from "../util";
import { PLANG_IDS } from "./plang_ids";
import { parseAll } from "./wikipedia_process";

const Templ = new Eta({ views: __dirname, autoEscape: false });

const DEF_PATH = Bun.fileURLToPath(`file:${__dirname}/../definitions`);

function alphaTsPath(type: string, name: string): string {
  const p = toAlphaNum(name).toLowerCase();
  return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/a-to-z/${p[0]}.ts`);
}

function customTsPath(type: string, name: string): string {
  const p = toAlphaNum(name).toLowerCase();
  return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/${name}.ts`);
}

async function generateAll() {
  const g = new PlangsGraph();
  await parseAll(g);

  console.log(new Date().toISOString());

  genAtoZ(g.v_license, "licenses", "license");
  genAtoZ(g.v_paradigm, "paradigms", "paradigm");
  genAtoZ(g.v_person, "people", "person");
  genAtoZ(g.v_platform, "platforms", "platform");
  genAtoZ(g.v_tsystem, "type_systems", "typeSystem");

  genAtoZ(g.v_plang, "plangs", "plang", (vid: VID_Any) => plangMapper(g, vid as VID_Plang), 2048, PLANG_IDS);

  console.log("Finished generating definitions.");
}

function defaultMapper(vid: VID_Any, vertex: _T_AnyV_Data): AtoZData {
  // Export everything but the name field.
  const d = { ...vertex };
  // biome-ignore lint/performance/noDelete: really need to exlude this one.
  delete d.name;
  const bundle = {
    vid: json(vid),
    name: json(vertex.name),
    data: json(d),
  };
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
  const vrelations = {
    dialects: [...g.e_dialect_of.adjacentTo(plvid)].map(({ from }) => from),
    implementations: [...g.e_implements.adjacentTo(plvid)].map(({ from }) => from),
    influenced: [...g.e_l_influenced_l.adjacentFrom(plvid)].map(({ to }) => to),
    influences: [...g.e_l_influenced_l.adjacentTo(plvid)].map(({ from }) => from),
    licenses: [...g.e_has_license.adjacentFrom(plvid)].map(({ to }) => to),
    paradigms: [...g.e_plang_para.adjacentFrom(plvid)].map(({ to }) => to),
    people: [...g.e_person_plang_role.adjacentTo(plvid)].map(({ from, edata }) => [from, edata?.role]),
    platforms: [...g.e_supports_platf.adjacentFrom(plvid)].map(({ to }) => to),
    typeSystems: [...g.e_plang_tsys.adjacentFrom(plvid)].map(({ to }) => to),
  };
  for (const [key, val] of Object.entries(vrelations)) {
    if (Array.isArray(val)) val.sort();
    if (key === "name" || (Array.isArray(val) && val.length === 0)) delete vrelations[key];
  }
  if (Object.keys(vrelations).length > 0) {
    bundle.vrelations = json(vrelations);
  }
  return bundle;
}

// biome-ignore lint/suspicious/noExplicitAny: let me be.
type _T_AnyV_Data = any;

// a_to_z.eta template data:
type AtoZData = {
  vid: string; // json vertex id
  name: string; // json vertex name
  data: string; // json vertex data
  vrelations?: string; // json vertex relations
};

type DataMapper = (vid: VID_Any, vertex: _T_AnyV_Data) => AtoZData;

function genAtoZ(
  vtable: VertexTable<VID_Any, _T_AnyV_Data>,
  basename: string,
  builderName: string,
  mapper: DataMapper = defaultMapper,
  bigThreshold = 384,
  vidWhitelist?: Set<string>,
) {
  let allVids = [...vtable.keys()].map((vid) => vid).sort();
  if (vidWhitelist) {
    allVids = allVids.filter((vid) => vidWhitelist.has(vid.toLowerCase()));
  }
  if (allVids.length === 0) return;

  const key0 = allVids[0].indexOf("+") + 1;
  const grouped: Record<string, string[]> = groupBy(allVids, (id: string) =>
    (id[key0] === "." ? id[key0 + 1] : id[key0]).toLowerCase(),
  );

  // Move big data to their own files.
  const big: AtoZData[] = [];
  for (const [prefix, vids] of Object.entries(grouped)) {
    const data: AtoZData[] = [];
    for (const vid of vids) {
      const vertex = vtable.get(vid as VID_Any);
      if (!vertex) {
        console.log("Vertex not found:", vid);
        continue;
      }
      const bundle = mapper(vid as VID_Any, vertex);
      if (JSON.stringify(bundle).length > bigThreshold) {
        big.push(bundle);
      } else {
        data.push(bundle);
      }
    }
    if (data.length > 0) {
      // Maybe we have only big data.
      const res = Templ.render("/a_to_z", { data, builderName });
      const path = alphaTsPath(basename, prefix);
      Bun.write(path, res);
    }
  }

  // Write big data to their own files.
  for (const bundle of big) {
    const res = Templ.render("/a_to_z", { data: [bundle], builderName });
    const vid = JSON.parse(bundle.vid); // :-)
    const path = customTsPath(basename, vid.split("+")[1]);
    Bun.write(path, res);
  }

  console.log(`${basename}: ${allVids.length} entries in ${Object.keys(grouped).length} files.`);
}

// biome-ignore lint/suspicious/noExplicitAny: it's ok.
const json = (v: any) => JSON.stringify(v);

await generateAll();
