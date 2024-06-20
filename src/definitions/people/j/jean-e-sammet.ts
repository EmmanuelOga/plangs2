import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Jean-E-Sammet" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Jean E. Sammet";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Jean E. Sammet","href":"https://en.wikipedia.org/wiki/Jean_E._Sammet","kind":"wikipedia"}]);
}