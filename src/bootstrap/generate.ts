import { PlangsGraph } from "../plangs_graph";
import { parseAll } from "./wikipedia_process";

await generateAll();

async function generateAll() {
    const g = new PlangsGraph();
    await parseAll(g)

    console.log(new Date().toISOString());

    genTsFile(g, 'Python');
}

function genTsFile(g: PlangsGraph, v_plang: string) {
    const pl = g.v_plang.get(`pl+${v_plang}`);

    // e_dialect_of
    // e_has_license
    // e_implemented_with
    // e_implements
    // e_influenced
    // e_plang_tsys
    // e_plang_para
    // e_supports_platv

    console.log(pl);

    // e_people
}
