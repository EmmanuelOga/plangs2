import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Miller-S-Puckette" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Miller S. Puckette";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Miller S. Puckette",
			href: "https://en.wikipedia.org/wiki/Miller_Puckette",
			kind: "wikipedia",
		},
	]);
}
