import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Bernard-Galler" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Bernard Galler";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Bernard Galler","href":"https://en.wikipedia.org/wiki/Bernard_Galler","kind":"wikipedia"}]);
}