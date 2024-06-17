import type { SerializedGraph } from 'graphology-types';
import { fromStr } from '../graph/edge';
import { buildGraph } from '../scrap/wikipedia_process';
import { V_Plang } from '../schemas';

async function plangsGraph(): Promise<SerializedGraph> {
    const grNodes: SerializedGraph['nodes'] = [];
    const grEdges: SerializedGraph['edges'] = [];

    const g = await buildGraph();
    const { vertices, edges, adjacency } = g.merge();

    // const linked = new Set<string>();

    for (const [eid, edge] of edges) {
        const ek = fromStr(eid);
        if ('errors' in ek) {
            console.error(ek.errors);
            continue;
        }

        // let pl: V_Plang | undefined;
        // if (!pl && ek.from.startsWith('pl+')) pl = vertices.get(ek.from);
        // if (!pl && ek.to.startsWith('pl+')) pl = vertices.get(ek.to);
        // if (pl) {
        //     const releases = ((pl?.releases ?? [{ date: '1970-01-01' }]))?.sort((a, b) => new Date(b.date ?? '1970-01-01').getTime() - new Date(a.date ?? '1970-01-01').getTime()).map(r => new Date(r.date ?? '1970-01-01').getFullYear());
        //     if (releases.filter(r => r > 2023).length === 0) continue;
        // }

        grEdges.push({
            key: eid,
            source: ek.from,
            target: ek.to,
            attributes: {
                label: 'role' in edge ? edge.role : ek.type,
                type: ek.d ? 'arrow' : '',
            }
        });

        // linked.add(ek.from);
        // linked.add(ek.to);
    }

    function color(vid: string) {
        if (vid.startsWith('impl+')) return 'red';
        if (vid.startsWith('license+')) return 'gray';
        if (vid.startsWith('person+')) return 'magenta';
        if (vid.startsWith('pl+')) return 'blue';
        if (vid.startsWith('platf+')) return 'green';
        if (vid.startsWith('tsys+')) return 'yellow';
    }

    for (const [vid, vertex] of vertices) {
        // if (!linked.has(vid)) continue;
        grNodes.push({
            key: vid, attributes: {
                label: vertex.name,
                color: color(vid),
            }
        });
    }

    return {
        nodes: grNodes,
        edges: grEdges,
        options: {},
        attributes: { name: 'Programming Languages', },
    };
}

const server = Bun.serve({
    async fetch(req) {
        const url = new URL(req.url);

        if (url.pathname === "/data.json") {
            const graph = await plangsGraph();
            const resp = Response.json(graph);
            resp.headers.set('Access-Control-Allow-Origin', '*');
            return resp;
        }

        const resp = new Response("404!", { status: 404 });
        return resp
    },
});

// Update the timestamp to trigger a reload.
const TOUCH_PATH = Bun.fileURLToPath(`file:///${__dirname}/../../public/UPDATE`);
Bun.write(TOUCH_PATH, new Date().toISOString());

console.log(`Server running at ${server.url}`);