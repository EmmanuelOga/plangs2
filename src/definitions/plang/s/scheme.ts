import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Scheme";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Scheme" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Scheme",
			href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.scheme.org",
			href: "https://www.scheme.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".scm", ".ss"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Gerald-Jay-Sussman", "designer"],
		["person+Guy-Ldot-Steele", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+Scheme-implementations"]);

	plb.addDialects([
		"pl+Document-Style-Semantics-and-Specification-Language",
		"pl+Lisp",
	]);

	plb.addInfluences([
		"pl+ALGOL",
		"pl+Clojure",
		"pl+Common-Lisp",
		"pl+Dylan",
		"pl+EuLisp",
		"pl+Haskell",
		"pl+Hop",
		"pl+JavaScript",
		"pl+Julia",
		"pl+Lisp",
		"pl+Lua",
		"pl+MDL",
		"pl+MultiLisp",
		"pl+Python",
		"pl+R",
		"pl+Racket",
		"pl+Ruby",
		"pl+Rust",
		"pl+S",
		"pl+Scala",
		"pl+T",
	]);

	plb.addInfluenced([
		"pl+---",
		"pl+ALGOL",
		"pl+AmbientTalk",
		"pl+Arc",
		"pl+Clojure",
		"pl+Common-Lisp",
		"pl+Dylan",
		"pl+ECMAScript",
		"pl+EuLisp",
		"pl+GNU-Guile",
		"pl+Gambit",
		"pl+Game-Oriented-Assembly-Lisp",
		"pl+Haskell",
		"pl+Hop",
		"pl+ISLISP",
		"pl+JavaScript",
		"pl+Joy",
		"pl+K",
		"pl+Kawa",
		"pl+LFE",
		"pl+Lua",
		"pl+MDL",
		"pl+MultiLisp",
		"pl+Oaklisp",
		"pl+Pico",
		"pl+R",
		"pl+Racket",
		"pl+Rust",
		"pl+SCM",
		"pl+SIOD",
		"pl+SKILL",
		"pl+Sather",
		"pl+Scala",
		"pl+Snap-",
		"pl+Source",
		"pl+T",
		"pl+Tea",
		"pl+newLISP",
		"pl+q",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1975-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2013-01-01",
			kind: "stable",
		},
	]);
}
