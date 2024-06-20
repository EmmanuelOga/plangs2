import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.declare("license+free-and-open-source", "free and open-source", [
		{
			kind: "wikipedia",
			title: "free and open-source",
			href: "https://en.wikipedia.org/wiki/Free_and_open_source_software",
		},
	]);

	lb.declare("license+free-software", "free software", [
		{
			kind: "wikipedia",
			title: "free software",
			href: "https://en.wikipedia.org/wiki/Free_software",
		},
		{
			kind: "wikipedia",
			title: "free-software license",
			href: "https://en.wikipedia.org/wiki/Free-software_license",
		},
	]);

	lb.declare(
		"license+freely-redistributable-software",
		"Freely redistributable software",
		[
			{
				kind: "wikipedia",
				title: "Freely redistributable software",
				href: "https://en.wikipedia.org/wiki/Freely_redistributable_software",
			},
		],
	);

	lb.declare("license+freemium", "Freemium", [
		{
			kind: "wikipedia",
			title: "Freemium",
			href: "https://en.wikipedia.org/wiki/Freemium",
		},
	]);

	lb.declare("license+frees", "free licenses", [
		{
			kind: "wikipedia",
			title: "free licenses",
			href: "https://en.wikipedia.org/wiki/Free-software_license",
		},
	]);

	lb.declare("license+freeware", "freeware", [
		{
			kind: "wikipedia",
			title: "freeware",
			href: "https://en.wikipedia.org/wiki/Freeware",
		},
	]);
}
