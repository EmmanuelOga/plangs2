import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+San-Diego" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "San Diego";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "University of California, San Diego",
			href: "https://en.wikipedia.org/wiki/University_of_California,_San_Diego",
			kind: "wikipedia",
		},
	]);
}
