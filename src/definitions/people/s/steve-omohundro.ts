import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Steve-Omohundro" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Steve Omohundro";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Steve Omohundro",
			href: "https://en.wikipedia.org/wiki/Steve_Omohundro",
			kind: "wikipedia",
		},
	]);
}
