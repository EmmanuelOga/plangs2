import { Eta } from "eta";
import { PlangsGraph } from "../entities/plangs_graph";
import type {
  T_Id_V_License,
  T_Id_V_Paradigm,
  T_Id_V_Person,
  T_Id_V_Plang,
  T_Id_V_TypeSystem,
} from "../entities/schemas";
import { toAlphaNum } from "../util";
import { parseAll } from "./wikipedia_process";
import { groupBy } from "lodash-es";
import { PLANG_IDS } from "./plang_ids";
import { VertexTable } from "../graph/vertex_table";
import { T_VId_Any } from "../graph/vertex";

const Templ = new Eta({ views: __dirname, autoEscape: false });

const DEF_PATH = Bun.fileURLToPath(`file:${__dirname}/../definitions`);

function longTsPath(type: string, name: string): string {
  const p = toAlphaNum(name).toLowerCase();
  return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/${p[0]}/${p}.ts`);
}

function alphaTsPath(type: string, name: string): string {
  const p = toAlphaNum(name).toLowerCase();
  return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/${p[0]}.ts`);
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

  // for (const vid of PLANG_IDS) {
  //   if (!(await genPlang(g, vid))) {
  //     console.log(`Failed to generate ${vid}`);
  //   }
  // }

  console.log("Finished generating definitions.");
}

async function genPlang(g: PlangsGraph, plvid: T_Id_V_Plang): Promise<boolean> {
  const pl = g.v_plang.get(plvid);

  if (!pl || !pl.name) return false;

  const templ: Record<string, string | string[] | string[][]> = {
    plvid: json(plvid),
    name: json(pl.name),
  };

  templ.images = json(pl.images ?? []);

  templ.websites = json(pl.websites ?? []);

  templ.extensions = json(pl.extensions ?? []);

  templ.scopings = json(pl.scoping ?? []);

  templ.references = "{}"; // json(pl.references);

  templ.releases = json(pl.releases ?? []);

  templ.people = json(
    [...g.e_person_plang_role.adjacentTo(plvid)].map(({ from, edata }) => [from, edata?.role]),
  );

  templ.licenses = json([...g.e_has_license.adjacentFrom(plvid)].map(({ to }) => to));

  templ.paradigms = json([...g.e_plang_para.adjacentFrom(plvid)].map(({ to }) => to));

  templ.typeSystems = json([...g.e_plang_tsys.adjacentFrom(plvid)].map(({ to }) => to));

  templ.platforms = json([...g.e_supports_platf.adjacentFrom(plvid)].map(({ to }) => to));

  templ.implementations = json([...g.e_implements.adjacentTo(plvid)].map(({ from }) => from));

  templ.dialects = json([...g.e_dialect_of.adjacentTo(plvid)].map(({ from }) => from));

  templ.influences = json([...g.e_l_influenced_l.adjacentTo(plvid)].map(({ from }) => from));

  templ.influenced = json([...g.e_l_influenced_l.adjacentFrom(plvid)].map(({ to }) => to));

  const res = Templ.render("./plang", templ);
  const path = longTsPath("plang", plvid.split("+")[1]);
  await Bun.write(path, res);

  return true;
}

// biome-ignore lint/suspicious/noExplicitAny: let me be.
type _T_AnyVertex = any;

function genAtoZ(
  vtable: VertexTable<T_VId_Any, _T_AnyVertex>,
  basename: string,
  builderName: string,
) {
  const allVids = [...vtable.keys()]
    .map((vid) => vid)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  if (allVids.length === 0) return;

  const key0 = allVids[0].indexOf("+") + 1;
  const grouped: Record<string, string[]> = groupBy(allVids, (id: string) => id[key0]);

  for (const [prefix, vids] of Object.entries(grouped)) {
    const data: string[][] = [];
    for (const vid of vids) {
      const vertex = vtable.get(vid as T_VId_Any);
      if (!vertex) {
        console.log("Vertex not found:", vid);
        continue;
      }
      data.push([json(vid), json(vertex.name), json(vertex.websites ?? [])]);
    }
    const res = Templ.render("/a_to_z", { data, builderName });
    const path = alphaTsPath(basename, prefix);
    Bun.write(path, res);
  }
}

// biome-ignore lint/suspicious/noExplicitAny: it's ok.
function json(v: any): string {
  if (typeof v === "string") return JSON.stringify(v);

  if (Array.isArray(v)) {
    if (v.length > 1) {
      v.sort();
      const uninndented = JSON.stringify(v);
      if (uninndented.length < 70) return uninndented;
      return JSON.stringify(v, null, 2);
    }
    return JSON.stringify(v);
  }

  return JSON.stringify(v, null, 2);
}

await generateAll();
