import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Friedrich-L-Bauer" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Friedrich L. Bauer";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Friedrich L. Bauer","href":"https://en.wikipedia.org/wiki/Friedrich_L._Bauer","kind":"wikipedia"}]);
}