import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+A-K-Dewdney" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "A. K. Dewdney";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"A. K. Dewdney","href":"https://en.wikipedia.org/wiki/A._K._Dewdney","kind":"wikipedia"}]);
}