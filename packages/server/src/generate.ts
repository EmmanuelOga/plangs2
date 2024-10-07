// @ts-ignore works ok with Bun
import { join } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs";

import { loadPosts } from "./content";

const pg = new PlangsGraph();
await loadAllDefinitions(pg);
await loadPosts(pg);

const path = join(import.meta.dir, "plangs.json");
Bun.write(path, JSON.stringify(pg));
console.info("Wrote", path);
