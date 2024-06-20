import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+CHA-Koster" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "C.H.A. Koster";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "C.H.A. Koster",
			href: "https://en.wikipedia.org/wiki/Cornelis_H._A._Koster",
			kind: "wikipedia",
		},
	]);
}
