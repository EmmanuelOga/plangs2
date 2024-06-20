import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Ruby";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Ruby" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping(["dynamic"]);

	plb.addExtensions([".rb", ".ru"]);

	plb.addReferences({});

	plb.addPeople([["person+Yukihiro-Matsumoto", "designer"]]);

	plb.addLicenses(["license+Ruby-License"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([
		"pl+C",
		"pl+JRuby",
		"pl+Rubinius",
		"pl+Ruby-MRI",
		"pl+RubyMotion",
		"pl+TruffleRuby",
		"pl+YARV",
		"pl+mruby",
	]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Ada",
		"pl+Basic",
		"pl+CLU",
		"pl+CPP",
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

	plb.addInfluenced([
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

	plb.addReleases([
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
