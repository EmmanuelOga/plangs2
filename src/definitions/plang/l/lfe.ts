import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+LFE";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "LFE" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LFE_%28Lisp_Flavored_Erlang%29_Logo.png/121px-LFE_%28Lisp_Flavored_Erlang%29_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "LFE",
			href: "https://en.wikipedia.org/wiki/LFE_(programming_language)",
		},
		{
			kind: "homepage",
			title: "lfe.io",
			href: "http://lfe.io",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Robert-Virding", "designer"]]);

	plb.addLicenses(["license+Apache"]);

	plb.addParadigms([
		"para+concurrent",
		"para+functional",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+Erlang"]);

	plb.addDialects(["pl+Lisp"]);

	plb.addInfluences([
		"pl+Clojure",
		"pl+Common-Lisp",
		"pl+Concurrent-Schemer",
		"pl+Elixir",
		"pl+Erlang",
		"pl+Hy",
		"pl+Joxa",
		"pl+Maclisp",
		"pl+Scheme",
	]);

	plb.addInfluenced(["pl+Clojure", "pl+Elixir"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "2.1.1",
			date: "2023-01-06",
			kind: "stable",
		},
	]);
}
