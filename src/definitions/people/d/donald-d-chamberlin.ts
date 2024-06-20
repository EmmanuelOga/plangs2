import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Donald-D-Chamberlin" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Donald D. Chamberlin";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Donald D. Chamberlin",
			href: "https://en.wikipedia.org/wiki/Donald_D._Chamberlin",
			kind: "wikipedia",
		},
	]);
}
