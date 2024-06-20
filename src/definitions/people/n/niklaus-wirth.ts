import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Niklaus-Wirth" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Niklaus Wirth";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Niklaus Wirth",
			href: "https://en.wikipedia.org/wiki/Niklaus_Wirth",
			kind: "wikipedia",
		},
	]);
}
