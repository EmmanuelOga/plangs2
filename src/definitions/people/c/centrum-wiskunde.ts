import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Centrum-Wiskunde" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Centrum Wiskunde";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Centrum Wiskunde & Informatica",
			href: "https://en.wikipedia.org/wiki/Centrum_Wiskunde_%26_Informatica",
			kind: "wikipedia",
		},
	]);
}
