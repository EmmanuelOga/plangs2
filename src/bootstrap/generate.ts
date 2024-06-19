import { PlangsGraph } from "../entities/plangs_graph";
import type { T_Id_V_Plang } from "../entities/schemas";
import { parseAll } from "./wikipedia_process";

await generateAll();

async function generateAll() {
    const g = new PlangsGraph();
    await parseAll(g)

    console.log(new Date().toISOString());

    genTsFile(g, "pl+Python");
}

function genTsFile(g: PlangsGraph, plvid: T_Id_V_Plang) {
    const pl = g.v_plang.get(plvid);
    if (!pl) throw new Error("Language not found")

    pl.name
    pl.images // Image[];

    pl.websites // Link[];
    pl.releases // Release[];

    pl.extensions // string[];
    pl.scoping //  ('lexical' | 'static' | 'dynamic' | 'other')[];

    // A map of references grouped by tag: #influences, #influenced_by, etc.
    pl.references // { [tag: string]: Link[] };


    // for (const { from, to, edata } of g.e_person_plang_role.adjacentTo(plvid)) {
    //     const person = g.v_person.get(from);
    //     console.log(person, "was involved in", pl?.name, "as", edata?.role);
    // }

    // ////////////////////////////////////////////////////////////////////////////////
    // console.log('--------')

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

    // ////////////////////////////////////////////////////////////////////////////////
    // console.log('--------')

    // for (const { from, to } of g.e_has_license.adjacentFrom(plvid)) {
    //     const license = g.v_license.get(to);
    //     console.log(from, "has license", `'${license?.name}'`);
    // }

    // ////////////////////////////////////////////////////////////////////////////////
    // console.log('--------')

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

    // ////////////////////////////////////////////////////////////////////////////////
    // console.log('--------')

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

    // ////////////////////////////////////////////////////////////////////////////////
    // console.log('--------')

    // for (const { from, to } of g.e_plang_para.adjacentFrom(plvid)) {
    //     assert(from === plvid);
    //     const para = g.v_paradigm.get(to);
    //     console.log("---->", from, "has paradigm", to, para?.name);
    // }

    // ////////////////////////////////////////////////////////////////////////////////
    // console.log('--------')

    // for (const { from, to } of g.e_plang_tsys.adjacentFrom(plvid)) {
    //     assert(from === plvid);
    //     const tsys = g.v_tsystem.get(to);
    //     console.log("---->", from, "has type-sys", to, tsys?.name);
    // }

    // ////////////////////////////////////////////////////////////////////////////////
    // console.log('--------')

    // for (const { from, to } of g.e_supports_platf.adjacentFrom(plvid)) {
    //     assert(from === plvid);
    //     const platf = g.v_platform.get(to);
    //     console.log("---->", from, "supports platf", to, platf?.name);
    // }
}

function assert(statement: boolean) {
    if (!statement) throw new Error("Assertion failed");
}