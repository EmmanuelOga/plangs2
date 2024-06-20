import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+School-of-Mathematics" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "School of Mathematics";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "School of Mathematics and Statistics",
			href: "https://en.wikipedia.org/wiki/Sydney_School_of_Mathematics_and_Statistics",
			kind: "wikipedia",
		},
	]);
}
