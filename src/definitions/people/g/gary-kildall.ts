import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Gary-Kildall" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Gary Kildall";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Gary Kildall","href":"https://en.wikipedia.org/wiki/Gary_Kildall","kind":"wikipedia"}]);
}