import type { PlangsGraph } from "@plangs/plangs/graph";
import { createContext } from "preact";

export const PlangsData = createContext<PlangsGraph | null>(null);
