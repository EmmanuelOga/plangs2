import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Douglas-T-Ross" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Douglas T. Ross";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Douglas T. Ross","href":"https://en.wikipedia.org/wiki/Douglas_T._Ross","kind":"wikipedia"}]);
}