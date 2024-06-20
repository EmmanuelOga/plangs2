import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Benoit-Minisini" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Benoît Minisini";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Benoît Minisini","href":"https://en.wikipedia.org/wiki/Beno%C3%AEt_Minisini","kind":"wikipedia"}]);
}