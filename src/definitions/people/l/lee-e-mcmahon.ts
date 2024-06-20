import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Lee-E-McMahon" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Lee E. McMahon";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Lee E. McMahon","href":"https://en.wikipedia.org/wiki/Lee_E._McMahon","kind":"wikipedia"}]);
}