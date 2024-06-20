import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Ken-Thompson" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Ken Thompson";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Ken Thompson",
			href: "https://en.wikipedia.org/wiki/Ken_Thompson",
			kind: "wikipedia",
		},
		{
			title: "Ken Thompson",
			href: "https://en.wikipedia.org/wiki/Ken_Thompson_(computer_programmer)",
			kind: "wikipedia",
		},
	]);
}
