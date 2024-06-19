import { PlangsGraph } from "../plangs_graph";
import { parseAll } from "./wikipedia_process";

await generateAll();

async function generateAll() {
    const g = new PlangsGraph();
    await parseAll(g)

    console.log(new Date().toISOString());

    genTsFile(g, 'Python');
}

function genTsFile(g: PlangsGraph, plkey: string) {
    const pl = g.v_plang.get(`pl+${plkey}`);

    // console.log(pl); Get basic info about the language.

    for (const {from,to,edata} of g.e_person_plang_role.adjacentTo(`pl+${plkey}`)) {
        const ekey = g.e_person_plang_role.edgeKey(from, to);
        console.log(from, to,edata, ekey);
    }

    for (const [eid, data] of g.e_person_plang_role) {
        if (!eid.includes('pl+Python')) continue;
        console.log(JSON.stringify([eid, data]));
    }

    // TODO
    // g.e_dialect_of
    // g.e_has_license
    // g.e_implements
    // g.e_l_influenced_l
    // g.e_plang_para
    // g.e_plang_tsys
    // g.e_supports_platf
}
