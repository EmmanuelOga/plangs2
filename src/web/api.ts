import { SerializedGraph } from 'graphology-types';
import { loadDefinitions } from '../plangs';
import { fromStr } from '../graph/edge';

async function plangsGraph(): Promise<SerializedGraph> {
    const grNodes: SerializedGraph['nodes'] = [];
    const grEdges: SerializedGraph['edges'] = [];

    const g = await loadDefinitions();
    const { vertices, edges, adjacency } = g.merge();

    for (const [vid, vertex] of vertices) {
        grNodes.push({ key: vid, attributes: { label: vertex.name } });
    }

    for (const [eid, edge] of edges) {
        const ek = fromStr(eid);
        if ('errors' in ek) {
            console.error(ek.errors);
            continue;
        }
        grEdges.push({
            key: eid,
            source: ek.from,
            target: ek.to,
            attributes: {
                label: ek.type,
                type: ek.d ? 'arrow' : '',
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
            console.log(graph);
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