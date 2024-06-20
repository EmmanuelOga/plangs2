import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Birger-M-ller-Pedersen" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "Birger Møller-Pedersen";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "Birger Møller-Pedersen",
			href: "https://en.wikipedia.org/wiki/Birger_M%C3%B8ller-Pedersen",
			kind: "wikipedia",
		},
	]);
}
