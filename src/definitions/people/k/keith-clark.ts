import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Keith-Clark" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Keith Clark";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Keith Clark","href":"https://en.wikipedia.org/wiki/Keith_Clark_(computer_scientist)","kind":"wikipedia"}]);
}