import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+John-Hughes" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "John Hughes";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"John Hughes","href":"https://en.wikipedia.org/wiki/John_Hughes_(computer_scientist)","kind":"wikipedia"}]);
}