import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Peter-Weinberger" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Peter Weinberger";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Peter Weinberger",
			href: "https://en.wikipedia.org/wiki/Peter_J._Weinberger",
			kind: "wikipedia",
		},
	]);
}
