import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Greg-Nelson" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Greg Nelson";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Greg Nelson",
			href: "https://en.wikipedia.org/wiki/Greg_Nelson_(computer_scientist)",
			kind: "wikipedia",
		},
	]);
}
