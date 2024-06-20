import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Conor-McBride" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Conor McBride";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Conor McBride",
			href: "https://en.wikipedia.org/wiki/Conor_McBride",
			kind: "wikipedia",
		},
	]);
}
