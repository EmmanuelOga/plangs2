import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Elixir";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Elixir" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Elixir",
			href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)",
		},
		{
			kind: "homepage",
			title: "elixir-lang.org",
			href: "https://elixir-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".ex", ".exs"]);

	plb.addReferences({});

	plb.addPeople([["person+Jose-Valim", "designer"]]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+concurrent",
		"para+distributed",
		"para+functional",
		"para+multi-paradigm",
		"para+process-oriented",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+Erlang"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Clojure",
		"pl+Erlang",
		"pl+Gleam",
		"pl+LFE",
		"pl+Ruby",
	]);

	plb.addInfluenced([
		"pl+Clojure",
		"pl+Erlang",
		"pl+Gleam",
		"pl+LFE",
		"pl+Lisp",
		"pl+Ruby",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2012-01-01",
			kind: "first",
		},
		{
			version: "1.16.3",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
