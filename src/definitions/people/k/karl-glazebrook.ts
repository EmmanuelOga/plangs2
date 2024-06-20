import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Karl-Glazebrook" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Karl Glazebrook";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Karl Glazebrook","href":"https://en.wikipedia.org/wiki/Karl_Glazebrook","kind":"wikipedia"}]);
}