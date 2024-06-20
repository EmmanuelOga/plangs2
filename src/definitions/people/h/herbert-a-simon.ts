import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Herbert-A-Simon" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Herbert A. Simon";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Herbert A. Simon","href":"https://en.wikipedia.org/wiki/Herbert_A._Simon","kind":"wikipedia"}]);
}