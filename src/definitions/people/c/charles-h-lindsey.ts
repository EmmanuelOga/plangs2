import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Charles-H-Lindsey" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Charles H. Lindsey";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Charles H. Lindsey","href":"https://en.wikipedia.org/wiki/Charles_H._Lindsey","kind":"wikipedia"}]);
}