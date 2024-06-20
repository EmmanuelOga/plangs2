import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Whiley";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Whiley" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Whiley",
			href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)",
		},
		{
			kind: "homepage",
			title: "whiley.org",
			href: "http://whiley.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+David-Jdot-Pearce", "designer"]]);

	plb.addLicenses(["license+BSD"]);

	plb.addParadigms(["para+functional", "para+imperative"]);

	plb.addTypeSystems([
		"tsys+flow-sensitive",
		"tsys+safe",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+C", "pl+Java", "pl+Python", "pl+Rust"]);

	plb.addInfluenced(["pl+Ceylon"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2010-01-01",
			kind: "first",
		},
		{
			version: "0.6.1",
			date: "2022-06-27",
			kind: "stable",
		},
	]);
}
