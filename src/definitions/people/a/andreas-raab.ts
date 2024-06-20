import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Andreas-Raab" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Andreas Raab";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Andreas Raab",
			href: "https://en.wikipedia.org/wiki/Andreas_Raab",
			kind: "wikipedia",
		},
	]);
}
