import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Paul-Hudak" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Paul Hudak";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Paul Hudak","href":"https://en.wikipedia.org/wiki/Paul_Hudak","kind":"wikipedia"}]);
}