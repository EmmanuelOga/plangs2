import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.personBuilder;

	lb.define("person+V-Olyunin", "V. Olyunin", []);

	lb.define("person+Vagabondo-Enterprises", "Vagabondo Enterprises", []);

	lb.define("person+Valentin-Turchin", "Valentin Turchin", [
		{
			title: "Valentin Turchin",
			href: "https://en.wikipedia.org/wiki/Valentin_Turchin",
			kind: "wikipedia",
		},
	]);

	lb.define("person+van-Wijngaarden", "van Wijngaarden", [
		{
			title: "van Wijngaarden",
			href: "https://en.wikipedia.org/wiki/Adriaan_van_Wijngaarden",
			kind: "wikipedia",
		},
	]);

	lb.define("person+Vassili-Bykov", "Vassili Bykov", []);

	lb.define("person+Victor-Glushkov", "Victor Glushkov", [
		{
			title: "Victor Glushkov",
			href: "https://en.wikipedia.org/wiki/Victor_Glushkov",
			kind: "wikipedia",
		},
	]);

	lb.define("person+Victor-Yngve", "Victor Yngve", [
		{
			title: "Victor Yngve",
			href: "https://en.wikipedia.org/wiki/Victor_Yngve",
			kind: "wikipedia",
		},
	]);

	lb.define("person+Vijay-Mital", "Vijay Mital", []);

	lb.define("person+Vijay-Saraswat", "Vijay Saraswat", []);

	lb.define("person+Viktor-Szakats", "Viktor Szakáts", []);

	lb.define("person+Viral-B-Shah", "Viral B. Shah", [
		{
			title: "Viral B. Shah",
			href: "https://en.wikipedia.org/wiki/Viral_B._Shah",
			kind: "wikipedia",
		},
	]);

	lb.define("person+Vivek-Sarkar", "Vivek Sarkar", []);
}
