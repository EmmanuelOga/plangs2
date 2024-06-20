import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Rich-Hickey" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Rich Hickey";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Rich Hickey",
			href: "https://en.wikipedia.org/wiki/Rich_Hickey",
			kind: "wikipedia",
		},
	]);
}
