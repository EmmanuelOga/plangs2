import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Chris-Lattner" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Chris Lattner";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Chris Lattner","href":"https://en.wikipedia.org/wiki/Chris_Lattner","kind":"wikipedia"}]);
}