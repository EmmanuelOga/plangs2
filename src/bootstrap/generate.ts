import { Eta } from "eta"
import { PlangsGraph } from "../entities/plangs_graph";
import type { Image, Link, T_Id_V_Plang } from "../entities/schemas";
import { toAlphaNum } from "../util";
import { parseAll } from "./wikipedia_process";
import { PLANG_IDS } from "./plang_ids";

const Templ = new Eta({ views: __dirname, autoEscape: false });

const DEF_PATH = Bun.fileURLToPath(`file:${__dirname}/../definitions`)

function tsPath(type: string, name: string): string {
    const p = toAlphaNum(name).toLowerCase();
    return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/${p[0]}/${p}.ts`);
}

// await generateAll();

async function generateAll() {
    const g = new PlangsGraph();
    await parseAll(g)

    console.log(new Date().toISOString());

    for (const vid of PLANG_IDS) {
        if (!await genPlangTsFile(g, vid)) {
            console.log(`Failed to generate ${vid}`);
        }
    }

    // TODO
    // v_license
    // v_paradigm
    // v_person
    // v_platform
    // v_tsystem
}

async function genPlangTsFile(g: PlangsGraph, plvid: T_Id_V_Plang): Promise<boolean> {
    const pl = g.v_plang.get(plvid);

    if (!pl || !pl.name) return false;

    // Elements for the template.
    const templ: Record<string, string | string[] | string[][]> = {
        plvid,
        name: pl.name,
    }

    templ.images = json(pl.images ?? []);

    templ.websites = json(pl.websites ?? []);

    templ.extensions = json(pl.extensions ?? [])

    templ.scopings = json(pl.scoping ?? []);

    templ.references = '{}'; // json(pl.references);

    templ.releases = json(pl.releases ?? []);

    templ.people = json([...g.e_person_plang_role.adjacentTo(plvid)]
        .map(({ from, edata }) => [from, edata?.role]));

    templ.licenses = json([...g.e_has_license.adjacentFrom(plvid)]
        .map(({ to }) => to));

    templ.paradigms = json([...g.e_plang_para.adjacentFrom(plvid)]
        .map(({ to }) => to));

    templ.typeSystems = json([...g.e_plang_tsys.adjacentFrom(plvid)]
        .map(({ to }) => to));

    templ.platforms = json([...g.e_supports_platf.adjacentFrom(plvid)]
        .map(({ to }) => to));

    templ.implementations = json([...g.e_implements.adjacentTo(plvid)]
        .map(({ from }) => from));

    templ.dialects = json([...g.e_dialect_of.adjacentTo(plvid)]
        .map(({ from }) => from));

    templ.influences = json([...g.e_l_influenced_l.adjacentTo(plvid)]
        .map(({ from }) => from));

    templ.influenced = json([...g.e_l_influenced_l.adjacentFrom(plvid)]
        .map(({ to }) => to));

    const res = Templ.render("./plang", templ)
    const path = tsPath("plang", pl.name)
    await Bun.write(path, res);

    return true;
}

// biome-ignore lint/suspicious/noExplicitAny: it's ok.
function json(v: any): string {
    if (typeof v === 'string') return JSON.stringify(v);

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

function assert(statement: boolean) {
    if (!statement) throw new Error("Assertion failed");
}