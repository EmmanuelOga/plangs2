import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Jurg-Gutknecht" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Jürg Gutknecht";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Jürg Gutknecht",
			href: "https://en.wikipedia.org/wiki/J%C3%BCrg_Gutknecht",
			kind: "wikipedia",
		},
	]);
}
