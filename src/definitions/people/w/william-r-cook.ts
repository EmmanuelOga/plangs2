import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+William-R-Cook" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "William R. Cook";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"William R. Cook","href":"https://en.wikipedia.org/wiki/William_Cook_(computer_scientist)","kind":"wikipedia"}]);
}