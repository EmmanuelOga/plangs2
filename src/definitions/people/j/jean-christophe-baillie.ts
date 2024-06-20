import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Jean-Christophe-Baillie" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Jean-Christophe Baillie";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Jean-Christophe Baillie",
			href: "https://en.wikipedia.org/wiki/Jean-Christophe_Baillie",
			kind: "wikipedia",
		},
	]);
}
