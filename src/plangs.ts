import { Glob } from "bun";
import { PlangsGraph } from "./entities/plangs_graph";

/**
 * Scans the ./entities directory and loads all graph data from `define` functions.
 */
export async function loadDefinitions(): Promise<PlangsGraph> {
    console.log(new Date().toISOString(), "Loading definitions...")

    const g = new PlangsGraph();

    const glob = new Glob("**/*.ts");

    for await (const path of glob.scan(`${__dirname}/definitions`)) {
        const module = await import(`./definitions/${path}`);
        if (typeof module.define === "function") module.define(g);
    }

    for (const [ek, data] of g.allEdges()) {
        console.log(ek, data);
    }

    for (const [vk, e] of g.allEdges()) {
        console.log(vk, e);
    }   

    return g;
}