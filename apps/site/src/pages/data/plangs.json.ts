import { toSerializedGraph } from "@plangs/graph";
import type { APIRoute } from "astro";
import { getGraph } from "../../lib/graph";

/** Full dataset download (legacy-compatible SerializedGraph shape, PLAN §7.4). */
export const GET: APIRoute = () => {
  const json = JSON.stringify(toSerializedGraph(getGraph()));
  return new Response(json, { headers: { "content-type": "application/json; charset=utf-8" } });
};
