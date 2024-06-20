import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Victor-Yngve" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Victor Yngve";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Victor Yngve","href":"https://en.wikipedia.org/wiki/Victor_Yngve","kind":"wikipedia"}]);
}