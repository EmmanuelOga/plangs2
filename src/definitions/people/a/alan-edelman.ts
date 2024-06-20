import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Alan-Edelman" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Alan Edelman";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Alan Edelman",
			href: "https://en.wikipedia.org/wiki/Alan_Edelman",
			kind: "wikipedia",
		},
	]);
}
