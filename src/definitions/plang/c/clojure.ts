import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Clojure";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Clojure" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Clojure",
			href: "https://en.wikipedia.org/wiki/Clojure",
		},
		{
			kind: "wikipedia",
			title: "Clojure",
			href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)",
		},
		{
			kind: "homepage",
			title: "clojure.org",
			href: "https://clojure.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Rich-Hickey", "designer"]]);

	plb.addLicenses(["license+Eclipse-Public"]);

	plb.addParadigms([
		"para+agent-oriented",
		"para+concurrent",
		"para+functional",
		"para+logic",
		"para+macro",
		"para+multi-paradigm",
		"para+pipeline",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+Java", "platf+JavaScript", "platf+dotNET"]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Lisp"]);

	plb.addInfluences([
		"pl+CPP",
		"pl+CSharp",
		"pl+Common-Lisp",
		"pl+Elixir",
		"pl+Erlang",
		"pl+Haskell",
		"pl+Hy",
		"pl+Java",
		"pl+LFE",
		"pl+ML",
		"pl+Prolog",
		"pl+Racket",
		"pl+Ruby",
		"pl+Scheme",
		"pl+Wolfram-Language",
	]);

	plb.addInfluenced([
		"pl+CPP",
		"pl+Common-Lisp",
		"pl+Elixir",
		"pl+Erlang",
		"pl+Hy",
		"pl+Java",
		"pl+LFE",
		"pl+ML",
		"pl+Prolog",
		"pl+Racket",
		"pl+Ruby",
		"pl+Scheme",
		"pl+Wolfram-Language",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2007-01-01",
			kind: "first",
		},
		{
			version: "1.11.2",
			date: "2024-03-08",
			kind: "stable",
		},
	]);
}
