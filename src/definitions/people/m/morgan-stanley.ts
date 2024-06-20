import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Morgan-Stanley" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Morgan Stanley";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Morgan Stanley","href":"https://en.wikipedia.org/wiki/Morgan_Stanley","kind":"wikipedia"}]);
}