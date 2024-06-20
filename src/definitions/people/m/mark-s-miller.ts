import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Mark-S-Miller" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Mark S. Miller";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Mark S. Miller","href":"https://en.wikipedia.org/wiki/Mark_S._Miller","kind":"wikipedia"}]);
}