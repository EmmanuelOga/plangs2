import type { PlangsGraph } from "@plangs/plangs";
import { createContext } from "preact";

export const PlangsContext = createContext<PlangsGraph | undefined>(undefined);
