import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Hack";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Hack" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Hack",
			href: "https://en.wikipedia.org/wiki/Hack_(programming_language)",
		},
		{
			kind: "homepage",
			title: "hacklang.org",
			href: "https://hacklang.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Alok-Menghrajani", "designer"],
		["person+Drew-Paroski", "designer"],
		["person+Julien-Verlaguet", "designer"],
		["person+Meta-Platforms", "designer"],
	]);

	plb.addLicenses(["license+MIT-License"]);

	plb.addParadigms([]);

	plb.addTypeSystems([
		"tsys+dynamic",
		"tsys+gradual",
		"tsys+static",
		"tsys+weak",
	]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CSharp",
		"pl+Haskell",
		"pl+Java",
		"pl+OCaml",
		"pl+PHP",
		"pl+Scala",
	]);

	plb.addInfluenced(["pl+Java", "pl+PHP"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2014-01-01",
			kind: "first",
		},
		{
			version: "4.172",
			date: "2022-01-01",
			kind: "stable",
		},
	]);
}
