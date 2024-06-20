import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Krzysztof-Apt" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Krzysztof Apt";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Krzysztof Apt","href":"https://en.wikipedia.org/wiki/Krzysztof_R._Apt","kind":"wikipedia"}]);
}