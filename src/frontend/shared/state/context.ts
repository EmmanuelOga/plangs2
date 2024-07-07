import { createContext } from "preact";
import { PlangsGraph } from "../../../schemas/graph";
import type { IndexedData } from "src/plangs";
import { Wade } from "../../vendor/Wade/Wade.js";

export type PlangsContext = {
  pg: PlangsGraph;
  plIdx: SearchIndex;
};

export const Plangs = createContext<PlangsContext | undefined | "error">(undefined);

export async function loadContext(): Promise<PlangsContext | "error"> {
  try {
    const pgReq = fetch("/plangs.json");
    const idxReq = fetch("/plangsIdx.json");
    const result = { pg: await loadPlangsGraph(pgReq), plIdx: await SearchIndex.load(idxReq) };
    return result;
  } catch (e) {
    console.error("Failed to load context:", e);
    return "error";
  }
}

async function loadPlangsGraph(pgReq: Promise<Response>): Promise<PlangsGraph> {
  const pg = new PlangsGraph().loadJSON(await (await pgReq).json());
  console.log("Loaded PlangsGraph:", pg.numVertices, "vertices", pg.numEdges, "edges");
  return pg;
}

/** Simple wrapper for Wade search. */
export class SearchIndex {
  constructor(
    public ids: string[],
    public impl: (query: string) => { index: number }[],
  ) {}

  static async load(idxReq: Promise<Response>): Promise<SearchIndex> {
    const { ids, index }: IndexedData = await (await idxReq).json();
    const searchFun = Wade(index);
    return new SearchIndex(ids, searchFun);
  }

  search(query: string): Set<string> {
    const result = new Set<string>();
    for (const { index } of this.impl(query)) {
      result.add(this.ids[index]);
    }
    return result;
  }
}
