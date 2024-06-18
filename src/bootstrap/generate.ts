import { PlangsGraph } from "../plangs_graph";
import { V_Plang } from "../schemas";
import { parseAll } from "./wikipedia_process";

async function main() {
    const g = new PlangsGraph();
    await parseAll(g)

    const langs: any[] = [];

    for (const [vid, pl] of g.v_plang) {
        pl.releases ??= [];
        if (pl.releases.length === 0) pl.releases.push({version: '0', kind: 'other', date: '0000-00-00'});
        pl.releases.sort();
    }

    for (const [vid, pl] of g.v_plang) {
        langs.push([
            pl.releases[0].date,
            vid, pl.name,
            [...(pl.websites?.map(({ href }) => href) ?? [])].join(', ')]);
    }

    langs.sort();

    for (const [_, vid] of langs) {
        if (vid.length > 60) continue;

        const pl = g.v_plang.get(vid) as Partial<V_Plang>;

        const K = vid.replace('pl+', '').replace(/-/g, '_');
        const P = `const PV_${K} ${''.padStart(25 - K.length)} = '${vid}';`;
        const P1 = `${P} ${''.padStart(70 - P.length)} //  ${pl.releases[0].date} - ${pl.websites?.map(w => w.href).join(' _ ')}`;

        console.log(P1);
    }

    // console.log(JSON.stringify(g.v_plang.get(`pl+Python`), null, 2));
}

await main();
