import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+JGP-Barnes" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "J.G.P. Barnes";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "J.G.P. Barnes",
			href: "https://en.wikipedia.org/wiki/John_Barnes_(computer_scientist)",
			kind: "wikipedia",
		},
	]);
}
