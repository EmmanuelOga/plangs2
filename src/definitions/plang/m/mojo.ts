import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Mojo";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Mojo" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Mojo",
			href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.modular.com/mojo",
			href: "https://www.modular.com/mojo",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Chris-Lattner", "designer"]]);

	plb.addLicenses(["license+Proprietary"]);

	plb.addParadigms([
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems([
		"tsys+affine",
		"tsys+duck",
		"tsys+dynamic",
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+Python"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2023-01-01",
			kind: "first",
		},
		{
			version: "24.4",
			date: "2024-05-24",
			kind: "preview",
		},
	]);
}
