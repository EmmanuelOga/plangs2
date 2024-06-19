import { PlangsGraph } from "../plangs_graph";
import type { T_Id_V_Plang } from "../schemas";
import { parseAll } from "./wikipedia_process";

await generateAll();

async function generateAll() {
    const g = new PlangsGraph();
    await parseAll(g)

    console.log(new Date().toISOString());

    genTsFile(g, "pl+CircuitPython");
}

function genTsFile(g: PlangsGraph, plvid: T_Id_V_Plang) {
    const pl = g.v_plang.get(plvid);


    // Get all infro from base language vertex.
    console.log(pl); 

    for (const { from, to, edata } of g.e_person_plang_role.adjacentTo(plvid)) {
        const person = g.v_person.get(from);
        console.log(person, "was involved in", pl?.name, "as", edata?.role);
    }

    for (const { from, to } of g.e_dialect_of.adjacentTo(plvid)) {
        assert(to === plvid);
        const dialect = g.v_plang.get(from);
        console.log(dialect?.name, "is a dialect of", pl?.name);
    }

    for (const { from, to } of g.e_dialect_of.adjacentFrom(plvid)) {
        assert(from === plvid);
        const dialectOf = g.v_plang.get(to);
        console.log(dialectOf?.name, "is a dialect of", pl?.name);
    }

    for (const { from, to } of g.e_has_license.adjacentFrom(plvid)) {
        const license = g.v_license.get(to);
        console.log(from, "has license", `'${license?.name}'`, license);
    }

    for (const { from, to } of g.e_implements.adjacentTo(plvid)) {
        const impl = g.v_implem.get(from);
        console.log(from, "implements", to, impl);
    }

    // TODO
    // g.e_l_influenced_l
    // g.e_plang_para
    // g.e_plang_tsys
    // g.e_supports_platf
}

function assert(statement: boolean) {
    if (!statement) throw new Error("Assertion failed");
}