import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Arthur-Whitney" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Arthur Whitney";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Arthur Whitney",
			href: "https://en.wikipedia.org/wiki/Arthur_Whitney_(computer_scientist)",
			kind: "wikipedia",
		},
	]);
}
