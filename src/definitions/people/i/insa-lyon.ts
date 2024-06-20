import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+INSA-Lyon" as T_Id_V_Person;

export function define(g: PlangsGraph) {
	const p = g.v_person.declare(PERSON_V_Id);

	p.name = "INSA Lyon";

	const pb = g.personBuilder;

	pb.addWebsites(p, [
		{
			title: "INSA Lyon",
			href: "https://en.wikipedia.org/wiki/Institut_national_des_sciences_appliqu%C3%A9es_de_Lyon",
			kind: "wikipedia",
		},
	]);
}
