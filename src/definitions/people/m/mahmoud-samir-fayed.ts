import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Mahmoud-Samir-Fayed" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Mahmoud Samir Fayed";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Mahmoud Samir Fayed",
			href: "https://en.wikipedia.org/wiki/Mahmoud_Samir_Fayed",
			kind: "wikipedia",
		},
	]);
}
