import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Craig-Chambers" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Craig Chambers";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Craig Chambers","href":"https://en.wikipedia.org/wiki/Craig_Chambers","kind":"wikipedia"}]);
}