import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Go";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Go" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Go",
			href: "https://en.wikipedia.org/wiki/Go_(programming_language)",
		},
		{
			kind: "homepage",
			title: "go.dev",
			href: "https://go.dev",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".go"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Ken-Thompson", "designer"],
		["person+Rob-Pike", "designer"],
		["person+Robert-Griesemer", "designer"],
		["person+The-Go-Authors", "designer"],
	]);

	plb.addLicenses(["license+3-clause-BSD", "license+patent"]);

	plb.addParadigms([
		"para+concurrent",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems([
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms([
		"platf+DragonFly-BSD",
		"platf+FreeBSD",
		"platf+Linux",
		"platf+NetBSD",
		"platf+OpenBSD",
		"platf+Plan-9",
		"platf+Solaris",
		"platf+Windows",
		"platf+macOS",
	]);

	plb.addImplementations(["pl+Assembly-language", "pl+CPP"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+APL",
		"pl+Active-Oberon",
		"pl+Alef",
		"pl+BCPL",
		"pl+C",
		"pl+Crystal",
		"pl+Limbo",
		"pl+Modula",
		"pl+Modula-2",
		"pl+Newsqueak",
		"pl+Oberon",
		"pl+Oberon-2",
		"pl+Pascal",
		"pl+Smalltalk",
		"pl+V--Vlang-",
		"pl+communicating-sequential-processes",
		"pl+occam",
	]);

	plb.addInfluenced([
		"pl+Alef",
		"pl+BCPL",
		"pl+Ballerina",
		"pl+C",
		"pl+Crystal",
		"pl+D-programming-language",
		"pl+Erlang",
		"pl+Flix",
		"pl+Gleam",
		"pl+Limbo",
		"pl+Modula",
		"pl+Newsqueak",
		"pl+Oberon",
		"pl+Oberon-2",
		"pl+Pascal",
		"pl+Python",
		"pl+Smalltalk",
		"pl+V",
		"pl+occam",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2009-11-10",
			kind: "first",
		},
		{
			version: "1.22.4",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
