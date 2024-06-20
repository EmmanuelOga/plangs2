import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Scala";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Scala" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Scala",
			href: "https://en.wikipedia.org/wiki/Scala_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "Scala",
			href: "https://en.wikipedia.org/wiki/Scala_programming_language",
		},
		{
			kind: "homepage",
			title: "www.scala-lang.org",
			href: "http://www.scala-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".sc", ".scala"]);

	plb.addReferences({});

	plb.addPeople([["person+Martin-Odersky", "designer"]]);

	plb.addLicenses(["license+Apache"]);

	plb.addParadigms([
		"para+concurrent",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems([
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms([
		"platf+Java-virtual-machine",
		"platf+JavaScript",
		"platf+LLVM",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CSharp",
		"pl+Ceylon",
		"pl+Chisel",
		"pl+Common-Lisp",
		"pl+Eiffel",
		"pl+Erlang",
		"pl+FSharp",
		"pl+Fantom",
		"pl+Flix",
		"pl+Haskell",
		"pl+Java",
		"pl+Kotlin",
		"pl+Lasso",
		"pl+OCaml",
		"pl+Oz",
		"pl+Pizza",
		"pl+Red",
		"pl+Scheme",
		"pl+Smalltalk",
		"pl+Standard-ML",
	]);

	plb.addInfluenced([
		"pl+Ceylon",
		"pl+Eiffel",
		"pl+Erlang",
		"pl+Fantom",
		"pl+Flix",
		"pl+Fortress",
		"pl+Hack",
		"pl+Java",
		"pl+Kotlin",
		"pl+Lasso",
		"pl+Lisp",
		"pl+ML",
		"pl+OCaml",
		"pl+Oz",
		"pl+Pizza",
		"pl+Red",
		"pl+Scheme",
		"pl+Smalltalk",
		"pl+Standard-ML",
		"pl+Xtend",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2004-01-20",
			kind: "first",
		},
		{
			version: "3.4.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
