import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Rasmus-Lerdorf" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Rasmus Lerdorf";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Rasmus Lerdorf",
			href: "https://en.wikipedia.org/wiki/Rasmus_Lerdorf",
			kind: "wikipedia",
		},
	]);
}
