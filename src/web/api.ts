import type { SerializedGraph } from 'graphology-types';
import { parseAll } from '../bootstrap/wikipedia_process';
import { PlangsGraph } from '../entities/plangs_graph';
import { parseEdgeKey } from '../graph/edge_table';

async function plangsGraph(): Promise<SerializedGraph> {
    const grNodes: SerializedGraph['nodes'] = [];
    const grEdges: SerializedGraph['edges'] = [];

    const g = new PlangsGraph();
    await parseAll(g);

    for (const [eid, edge] of g.allEdges()) {
        const ek = parseEdgeKey(eid);

        if ('errors' in ek) {
            console.error(ek.errors);
            continue;
        }

        grEdges.push({
            key: eid,
            source: ek.from,
            target: ek.to,
            attributes: {
                label: 'role' in edge ? edge.role : ek.type,
                type: ek.d ? 'arrow' : '',
            }
        });
    }

    function color(vid: string) {
        if (vid.startsWith('impl+')) return 'red';
        if (vid.startsWith('license+')) return 'gray';
        if (vid.startsWith('person+')) return 'magenta';
        if (vid.startsWith('pl+')) return 'blue';
        if (vid.startsWith('para+')) return 'orange';
        if (vid.startsWith('platf+')) return 'green';
        if (vid.startsWith('tsys+')) return 'yellow';
    }

    for (const [vid, vertex] of g.allVertices()) {
        grNodes.push({
            key: vid,
            attributes: {
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
