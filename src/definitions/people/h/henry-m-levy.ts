import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Henry-M-Levy" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Henry M. Levy";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Henry M. Levy",
			href: "https://en.wikipedia.org/wiki/Hank_Levy_(computer_scientist)",
			kind: "wikipedia",
		},
	]);
}
