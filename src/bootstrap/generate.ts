import { PlangsGraph } from "../plangs_graph";
import { parseAll } from "./wikipedia_process";

await main();

async function main() {
    const g = new PlangsGraph();
    await parseAll(g)

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

    // const people = g.e_people.connectedTo(`pl+${v_plang}`);

    // e_people
}
