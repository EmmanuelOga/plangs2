import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Gerald-J-Popek" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Gerald J. Popek";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Gerald J. Popek",
			href: "https://en.wikipedia.org/wiki/Gerald_J._Popek",
			kind: "wikipedia",
		},
	]);
}
