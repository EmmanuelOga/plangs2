import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Lars-Bak" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Lars Bak";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Lars Bak",
			href: "https://en.wikipedia.org/wiki/Lars_Bak_(computer_programmer)",
			kind: "wikipedia",
		},
	]);
}
