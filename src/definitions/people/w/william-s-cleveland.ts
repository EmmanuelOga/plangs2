import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+William-S-Cleveland" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "William S. Cleveland";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "William S. Cleveland",
			href: "https://en.wikipedia.org/wiki/William_S._Cleveland",
			kind: "wikipedia",
		},
	]);
}
