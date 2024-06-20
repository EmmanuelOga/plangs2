import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Ruby" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Ruby";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Ruby",
			href: "https://en.wikipedia.org/wiki/Ruby_(programming_language)",
		},
		{
			kind: "homepage",
			title: "ruby-lang.org",
			href: "https://www.ruby-lang.org/en/",
		},
	]);

	plb.addScoping(pl, ["dynamic"]);

	plb.addExtensions(pl, [".rb", ".ru"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Yukihiro-Matsumoto", "designer"]]);

	plb.addLicenses(pl, ["license+ruby"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+objects",
		"para+reflective",
	]);

	plb.addTypeSystems(pl, ["tsys+duck", "tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+Cross-platform"]);

	plb.addImplementations(pl, [
		"pl+C",
		"pl+JRuby",
		"pl+Rubinius",
		"pl+Ruby-MRI",
		"pl+RubyMotion",
		"pl+TruffleRuby",
		"pl+YARV",
		"pl+mruby",
	]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Ada",
		"pl+Basic",
		"pl+C-Plus-Plus",
		"pl+CLU",
		"pl+Clojure",
		"pl+CoffeeScript",
		"pl+Crystal",
		"pl+D",
		"pl+Dylan",
		"pl+Eiffel",
		"pl+Elixir",
		"pl+Groovy",
		"pl+Julia",
		"pl+Lisp",
		"pl+Lua",
		"pl+Mirah",
		"pl+Nu",
		"pl+Perl",
		"pl+Python",
		"pl+Ring",
		"pl+Rust",
		"pl+Smalltalk",
		"pl+Swift",
	]);

	plb.addInfluenced(pl, [
		"pl+Ada",
		"pl+CLU",
		"pl+Clojure",
		"pl+Crystal",
		"pl+Dart",
		"pl+Dylan",
		"pl+Eiffel",
		"pl+Elixir",
		"pl+Fantom",
		"pl+Groovy",
		"pl+Julia",
		"pl+Lisp",
		"pl+Mirah",
		"pl+Nu",
		"pl+Python",
		"pl+Raku",
		"pl+Ring",
		"pl+Rust",
		"pl+Scheme",
		"pl+Smalltalk",
		"pl+Umple",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1995-01-01",
			kind: "first",
		},
		{
			version: "3.3.3",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
