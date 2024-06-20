import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+jq";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "jq" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "jq",
			href: "https://en.wikipedia.org/wiki/Jq_(programming_language)",
		},
		{
			kind: "repository",
			title: "jqlang.github.io/jq",
			href: "https://jqlang.github.io/jq",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Stephen-Dolan", "designer"]]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms(["para+functional", "para+json", "para+tacit"]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+C", "pl+Go", "pl+Rust"]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+Icon"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2012-08-21",
			kind: "first",
		},
		{
			version: "1.7.1",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
