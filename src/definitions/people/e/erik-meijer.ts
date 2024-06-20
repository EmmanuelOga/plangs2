import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Erik-Meijer" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Erik Meijer";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Erik Meijer","href":"https://en.wikipedia.org/wiki/Erik_Meijer_(computer_scientist)","kind":"wikipedia"}]);
}