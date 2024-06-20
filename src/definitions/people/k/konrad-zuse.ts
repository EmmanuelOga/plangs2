import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Konrad-Zuse" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Konrad Zuse";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Konrad Zuse","href":"https://en.wikipedia.org/wiki/Konrad_Zuse","kind":"wikipedia"}]);
}