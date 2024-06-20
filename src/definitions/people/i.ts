import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.personBuilder;

	lb.define("person+INSA-Lyon", "INSA Lyon", [
		{
			title: "INSA Lyon",
			href: "https://en.wikipedia.org/wiki/Institut_national_des_sciences_appliqu%C3%A9es_de_Lyon",
			kind: "wikipedia",
		},
	]);

	lb.define("person+ITT-VIS", "ITT VIS", [
		{
			title: "ITT Visual Information Solutions (ITT VIS)",
			href: "https://en.wikipedia.org/wiki/ITT_Visual_Information_Solutions",
			kind: "wikipedia",
		},
	]);
}
