import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Geoffrey-Gordon" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Geoffrey Gordon";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Geoffrey Gordon",
			href: "https://en.wikipedia.org/wiki/Geoffrey_Gordon_(computer_scientist)",
			kind: "wikipedia",
		},
	]);
}
