import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Fantom";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Fantom" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fantom-logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Fantom",
			href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.fantom.org",
			href: "http://www.fantom.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".fan", ".fwt", ".pod"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Andy-Frank", "designer"],
		["person+Brian-Frank", "designer"],
	]);

	plb.addLicenses(["license+Academic-Free-License"]);

	plb.addParadigms(["para+multi-paradigm"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+static"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CSharp",
		"pl+Erlang",
		"pl+Java",
		"pl+Ruby",
		"pl+Scala",
	]);

	plb.addInfluenced(["pl+Java", "pl+Scala"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2005-01-01",
			kind: "first",
		},
		{
			version: "1.0.79",
			date: "2023-07-17",
			kind: "stable",
		},
	]);
}
