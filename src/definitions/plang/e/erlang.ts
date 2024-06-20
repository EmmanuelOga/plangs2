import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Erlang";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Erlang" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Erlang",
			href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.erlang.org",
			href: "https://www.erlang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".erl", ".hrl"]);

	plb.addReferences({});

	plb.addPeople([["person+Joe-Armstrong", "designer"]]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+concurrent",
		"para+functional",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects(["pl+LFE"]);

	plb.addInfluences([
		"pl+Akka",
		"pl+Clojure",
		"pl+Dart",
		"pl+Elixir",
		"pl+FSharp",
		"pl+Go",
		"pl+Lisp",
		"pl+Opa",
		"pl+Oz",
		"pl+PLEX",
		"pl+Prolog",
		"pl+Reia",
		"pl+Rust",
		"pl+Scala",
		"pl+Smalltalk",
	]);

	plb.addInfluenced([
		"pl+Clojure",
		"pl+Dart",
		"pl+Elixir",
		"pl+Fantom",
		"pl+Gleam",
		"pl+LFE",
		"pl+ML",
		"pl+Opa",
		"pl+Oz",
		"pl+Plex",
		"pl+Prolog",
		"pl+Rust",
		"pl+Scala",
		"pl+Smalltalk",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1986-01-01",
			kind: "first",
		},
		{
			version: "26.2.5",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
