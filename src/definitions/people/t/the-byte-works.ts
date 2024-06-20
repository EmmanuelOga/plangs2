import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+The-Byte-Works" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "The Byte Works";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "The Byte Works",
			href: "https://en.wikipedia.org/wiki/The_Byte_Works",
			kind: "wikipedia",
		},
	]);
}
