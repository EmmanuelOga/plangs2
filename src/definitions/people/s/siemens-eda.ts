import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Siemens-EDA" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Siemens EDA";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Siemens EDA","href":"https://en.wikipedia.org/wiki/Siemens_Digital_Industries_Software","kind":"wikipedia"}]);
}