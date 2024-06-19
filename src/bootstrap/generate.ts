import { Eta } from "eta"
import { PlangsGraph } from "../entities/plangs_graph";
import type { Image, Link, T_Id_V_Plang } from "../entities/schemas";
import { toAlphaNum } from "../util";
import { parseAll } from "./wikipedia_process";

const Templ = new Eta({ views: __dirname, autoEscape: false });

const DEF_PATH = Bun.fileURLToPath(`file:${__dirname}/../definitions`)

function tsPath(type: string, name: string): string {
    const p = toAlphaNum(name).toLowerCase();
    return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/${p[0]}/${p}.ts`);
}

await generateAll();

async function generateAll() {
    const g = new PlangsGraph();
    await parseAll(g)

    console.log(new Date().toISOString());

    await genPlangTsFile(g, "pl+Python"); // A def per each v_plang

    // TODO
    // v_license
    // v_paradigm
    // v_person
    // v_platform
    // v_tsystem
}

async function genPlangTsFile(g: PlangsGraph, plvid: T_Id_V_Plang) {
    const pl = g.v_plang.get(plvid);
    if (!pl) throw new Error(`${plvid}: Language not found!`);
    if (!pl.name) throw new Error(`${plvid}: Language has no name!`);

    // Elements for the template.
    const templ: Record<string, string | string[] | string[][]> = {
        plvid,
        dialects: [],
        implementations: [],
        influenced: [],
        influences: [],
        name: pl.name,
        platforms: [],
        typesys: [],
        websites: [],
    }

    templ.images = (pl.images ?? []).map((i: Image) => json(i));
    templ.websites = (pl.websites ?? []).map((l: Link) => json(l));
    templ.extensions = json(pl.extensions ?? [], false)
    templ.scopings = json(pl.scoping ?? [], false);
    templ.references = '{}'; // json(pl.references);
    templ.releases = (pl.releases ?? []).map((r) => json(r, false))

    // People.

    templ.people = [] as string[][];
    for (const { from, edata } of g.e_person_plang_role.adjacentTo(plvid)) {
        const person = g.v_person.get(from);
        templ.people.push([
            json(from, false),
            json(person?.name || from, false),
            json(edata?.role || 'contributor', false)
        ]);
    }

    // Licenses.

    templ.licenses = [] as string[][];
    for (const { from, to } of g.e_has_license.adjacentFrom(plvid)) {
        const license = g.v_license.get(to);
        templ.licenses.push([json(to), json(license?.name || to)]);
    }

    // Paradigms

    templ.paradigms = [] as string[];
    for (const { from, to } of g.e_plang_para.adjacentFrom(plvid)) {
        const para = g.v_paradigm.get(to);
        templ.paradigms.push(json(to));
    }

    // Dialects.

    // for (const { from, to } of g.e_dialect_of.adjacentTo(plvid)) {
    //     assert(to === plvid);
    //     const dialect = g.v_plang.get(from);
    //     console.log(dialect?.name, "is a dialect of", pl?.name);
    // }

    // for (const { from, to } of g.e_dialect_of.adjacentFrom(plvid)) {
    //     assert(from === plvid);
    //     const dialectOf = g.v_plang.get(to);
    //     console.log(dialectOf?.name, "is a dialect of", pl?.name);
    // }

    // for (const { from, to } of g.e_implements.adjacentTo(plvid)) {
    //     assert(to === plvid);
    //     const impl = g.v_plang.get(from);
    //     console.log("---->", from, "implements", to, impl?.name);
    // }

    // for (const { from, to } of g.e_implements.adjacentFrom(plvid)) {
    //     assert(from === plvid);
    //     const impl = g.v_plang.get(to);
    //     console.log("<----", from, "implements", to, impl?.name);
    // }

    // // for (const { from, to } of g.e_l_influenced_l.adjacentTo(plvid)) {
    // //     assert(to === plvid);
    // //     const impl = g.v_plang.get(from);
    // //     console.log("---->", from, "Influenced", to, impl?.name);
    // // }

    // // for (const { from, to } of g.e_l_influenced_l.adjacentFrom(plvid)) {
    // //     assert(from === plvid);
    // //     const impl = g.v_plang.get(to);
    // //     console.log("<----", from, "Influenced", to, impl?.name);
    // // }

    // for (const { from, to } of g.e_plang_tsys.adjacentFrom(plvid)) {
    //     assert(from === plvid);
    //     const tsys = g.v_tsystem.get(to);
    //     console.log("---->", from, "has type-sys", to, tsys?.name);
    // }

    // for (const { from, to } of g.e_supports_platf.adjacentFrom(plvid)) {
    //     assert(from === plvid);
    //     const platf = g.v_platform.get(to);
    //     console.log("---->", from, "supports platf", to, platf?.name);
    // }

    const res = Templ.render("./plang", templ)
    console.log(res);

    // await Bun.write(tsPath("plang", pl.name), res);
}

// biome-ignore lint/suspicious/noExplicitAny: it's ok.
function json(v: any, pretty = true): string {
    return pretty && typeof v !== 'string' ?
        `${JSON.stringify(v, null, 2)}\n` :
        JSON.stringify(v);
}

function assert(statement: boolean) {
    if (!statement) throw new Error("Assertion failed");
}