import type { PlangsGraph } from "@plangs/plangs";
import { createContext } from "preact";

export const PlangsData = createContext<PlangsGraph | null>(null);
