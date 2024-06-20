import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+John-G-Kemeny" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "John G. Kemeny";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"John G. Kemeny","href":"https://en.wikipedia.org/wiki/John_G._Kemeny","kind":"wikipedia"}]);
}