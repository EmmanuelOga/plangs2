import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Hanspeter-Mossenbock" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Hanspeter Mössenböck";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Hanspeter Mössenböck","href":"https://en.wikipedia.org/wiki/Hanspeter_M%C3%B6ssenb%C3%B6ck","kind":"wikipedia"}]);
}