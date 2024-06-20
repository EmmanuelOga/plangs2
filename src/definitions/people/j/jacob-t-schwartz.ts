import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Jacob-T-Schwartz" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Jacob T. Schwartz";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Jacob T. Schwartz",
			href: "https://en.wikipedia.org/wiki/Jacob_T._Schwartz",
			kind: "wikipedia",
		},
	]);
}
