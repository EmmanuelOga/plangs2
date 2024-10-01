import type { NPlang, PlangsGraph } from "@plangs/plangs/index";

/** Get the latest plang from local storage, or a default one. */
export function lastPlang(pg: PlangsGraph): NPlang {
  try {
    const { key, data } = JSON.parse(localStorage.getItem("last-plang") || "{}");
    if (key && data) return pg.nodes.pl.set(key as NPlang["key"], data);
  } catch (err) {
    console.warn(err);
  }
  return pg.nodes.pl.set("pl+c", { name: "C", description: "The C programming language." });
}
