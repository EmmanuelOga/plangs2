import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+James-G-Mitchell" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "James G. Mitchell";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"James G. Mitchell","href":"https://en.wikipedia.org/wiki/James_G._Mitchell","kind":"wikipedia"}]);
}