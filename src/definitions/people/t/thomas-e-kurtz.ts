import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Thomas-E-Kurtz" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Thomas E. Kurtz";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Thomas E. Kurtz",
			href: "https://en.wikipedia.org/wiki/Thomas_E._Kurtz",
			kind: "wikipedia",
		},
	]);
}
