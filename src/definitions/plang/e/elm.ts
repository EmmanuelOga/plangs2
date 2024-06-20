import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Elm";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Elm" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Elm",
			href: "https://en.wikipedia.org/wiki/Elm_(programming_language)",
		},
		{
			kind: "homepage",
			title: "elm-lang.org",
			href: "https://elm-lang.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".elm"]);

	plb.addReferences({});

	plb.addPeople([["person+Evan-Czaplicki", "designer"]]);

	plb.addLicenses(["license+Permissive", "license+Revised-BSD"]);

	plb.addParadigms(["para+functional"]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(["platf+Windows", "platf+macOS", "platf+x86-64"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+FSharp",
		"pl+Haskell",
		"pl+OCaml",
		"pl+Redux",
		"pl+Rust",
		"pl+Standard-ML",
		"pl+Vue",
	]);

	plb.addInfluenced([
		"pl+Gleam",
		"pl+ML",
		"pl+OCaml",
		"pl+Rust",
		"pl+Standard-ML",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2012-03-30",
			kind: "first",
		},
		{
			version: "0.19.1",
			date: "2019-10-21",
			kind: "stable",
		},
	]);
}
