import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+ITT-VIS" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "ITT VIS";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"ITT Visual Information Solutions (ITT VIS)","href":"https://en.wikipedia.org/wiki/ITT_Visual_Information_Solutions","kind":"wikipedia"}]);
}