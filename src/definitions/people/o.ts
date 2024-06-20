import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.personBuilder;

	lb.define("person+Object-Arts", "Object Arts", []);

	lb.define("person+Ola-Bini", "Ola Bini", []);

	lb.define("person+Ole-Johan-Dahl", "Ole-Johan Dahl", [
		{
			title: "Ole-Johan Dahl",
			href: "https://en.wikipedia.org/wiki/Ole-Johan_Dahl",
			kind: "wikipedia",
		},
	]);
}
