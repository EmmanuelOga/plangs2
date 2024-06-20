import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Joseph-Henry-Wegstein" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Joseph Henry Wegstein";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Joseph Henry Wegstein",
			href: "https://en.wikipedia.org/wiki/Joseph_Henry_Wegstein",
			kind: "wikipedia",
		},
	]);
}
