import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Ole-Johan-Dahl" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Ole-Johan Dahl";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Ole-Johan Dahl","href":"https://en.wikipedia.org/wiki/Ole-Johan_Dahl","kind":"wikipedia"}]);
}