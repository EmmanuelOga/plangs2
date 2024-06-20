import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Tim-Sweeney" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Tim Sweeney";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Tim Sweeney","href":"https://en.wikipedia.org/wiki/Tim_Sweeney","kind":"wikipedia"}]);
}