import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Corrado-Bohm" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Corrado Böhm";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Corrado Böhm","href":"https://en.wikipedia.org/wiki/Corrado_B%C3%B6hm","kind":"wikipedia"}]);
}