import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+H-Peter-Anvin" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "H. Peter Anvin";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"H. Peter Anvin","href":"https://en.wikipedia.org/wiki/H._Peter_Anvin","kind":"wikipedia"}]);
}