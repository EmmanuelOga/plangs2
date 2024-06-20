import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Stefan-Karpinski" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Stefan Karpinski";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Stefan Karpinski",
			href: "https://en.wikipedia.org/wiki/Stefan_Karpinski",
			kind: "wikipedia",
		},
	]);
}
