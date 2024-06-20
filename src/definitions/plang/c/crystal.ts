import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Crystal";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Crystal" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Crystal",
			href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)",
		},
		{
			kind: "homepage",
			title: "crystal-lang.org",
			href: "https://crystal-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".cr"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Ary-Borenszweig", "designer"],
		["person+Brian-Cardiff", "designer"],
		["person+Juan-Wajnerman", "designer"],
	]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+concurrent",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems([
		"tsys+duck",
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
	]);

	plb.addPlatforms([
		"platf+AArch64",
		"platf+FreeBSD",
		"platf+IA-32",
		"platf+Linux",
		"platf+OpenBSD",
		"platf+Windows",
		"platf+macOS",
		"platf+x86-64",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+C",
		"pl+CSharp",
		"pl+Go",
		"pl+Python",
		"pl+Ruby",
		"pl+Rust",
	]);

	plb.addInfluenced(["pl+Go", "pl+Ruby"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2014-06-19",
			kind: "first",
		},
		{
			version: "1.12.1",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
