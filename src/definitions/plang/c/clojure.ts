import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Clojure" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Clojure";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Rich-Hickey", "designer"]]);

	plb.addLicenses(pl, ["license+eclipse-public"]);

	plb.addParadigms(pl, [
		"para+agent-oriented",
		"para+concurrent",
		"para+functional",
		"para+logic",
		"para+macro",
		"para+multi-paradigm",
		"para+pipeline",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+.NET", "platf+Java", "platf+JavaScript"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, ["pl+Lisp"]);

	plb.addInfluences(pl, [
		"pl+C-Plus-Plus",
		"pl+C-Sharp",
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

	plb.addInfluenced(pl, [
		"pl+C-Plus-Plus",
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

	plb.addReleases(pl, [
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
