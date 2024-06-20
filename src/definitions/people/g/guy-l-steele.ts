import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Guy-L-Steele" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Guy L. Steele";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Guy L. Steele",
			href: "https://en.wikipedia.org/wiki/Guy_L._Steele",
			kind: "wikipedia",
		},
		{
			title: "Guy L. Steele, Jr.",
			href: "https://en.wikipedia.org/wiki/Guy_L._Steele,_Jr.",
			kind: "wikipedia",
		},
	]);
}
