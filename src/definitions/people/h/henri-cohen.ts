import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Henri-Cohen" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Henri Cohen";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Henri Cohen","href":"https://en.wikipedia.org/wiki/Henri_Cohen_(number_theorist)","kind":"wikipedia"}]);
}