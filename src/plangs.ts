import { Glob } from "bun";
import { PlangsGraph } from "./plangs_graph";
import { parseAll } from "./bootstrap/wikipedia_process";

/**
 * Scans the ./entities directory and loads all graph data from `define` functions.
 */
export async function loadDefinitions(): Promise<PlangsGraph> {
    const glob = new Glob("**/*.ts");

    const g = new PlangsGraph();

    await parseAll(g)

    // for await (const path of glob.scan(`${__dirname}/entities`)) {
    //     const module = await import(`./entities/${path}`);
    //     if (typeof module.define === "function") module.define(g);
    // }

    for (const [ek, data] of g.allEdges()) {
        console.log(ek, data);
    }

    return g;
}