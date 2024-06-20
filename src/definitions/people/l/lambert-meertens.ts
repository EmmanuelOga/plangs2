import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Lambert-Meertens" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Lambert Meertens";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Lambert Meertens",
			href: "https://en.wikipedia.org/wiki/Lambert_Meertens",
			kind: "wikipedia",
		},
	]);
}
