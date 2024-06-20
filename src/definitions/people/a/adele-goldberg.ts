import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Adele-Goldberg" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Adele Goldberg";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Adele Goldberg","href":"https://en.wikipedia.org/wiki/Adele_Goldberg_(computer_scientist)","kind":"wikipedia"}]);
}