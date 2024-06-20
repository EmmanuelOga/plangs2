import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+B-J-Mailloux" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "B. J. Mailloux";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"B. J. Mailloux","href":"https://en.wikipedia.org/wiki/Barry_J._Mailloux","kind":"wikipedia"}]);
}