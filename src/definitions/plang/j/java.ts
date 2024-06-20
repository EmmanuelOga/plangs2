import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Java";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Java" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Java",
			href: "https://en.wikipedia.org/wiki/Java_(programming_language)",
		},
		{
			kind: "homepage",
			title: "oracle.com/java/",
			href: "http://oracle.com/java/",
		},
		{
			kind: "homepage",
			title: "java.com",
			href: "http://java.com",
		},
		{
			kind: "homepage",
			title: "dev.java",
			href: "http://dev.java",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".java", ".jmod"]);

	plb.addReferences({});

	plb.addPeople([["person+James-Gosling", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+class-based",
		"para+concurrent",
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems([
		"tsys+manifest",
		"tsys+nominative",
		"tsys+safe",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Ada-2005",
		"pl+Ada-83",
		"pl+ArkTS",
		"pl+BeanShell",
		"pl+CLU",
		"pl+CPP",
		"pl+CSharp",
		"pl+Chapel",
		"pl+Clojure",
		"pl+ECMAScript",
		"pl+Eiffel",
		"pl+Fantom",
		"pl+Gambas",
		"pl+Groovy",
		"pl+Hack",
		"pl+Haxe",
		"pl+JSPP",
		"pl+JSharp",
		"pl+JavaScript",
		"pl+Kotlin",
		"pl+Lisp",
		"pl+Mesa",
		"pl+Modula-3",
		"pl+Oberon",
		"pl+Object-Pascal",
		"pl+Objective-C",
		"pl+PHP",
		"pl+Python",
		"pl+Scala",
		"pl+Seed7",
		"pl+Simula67",
		"pl+Smalltalk",
		"pl+UCSD-Pascal",
		"pl+Vala",
	]);

	plb.addInfluenced([
		"pl+ActionScript",
		"pl+Ada",
		"pl+ArkTS",
		"pl+Ballerina",
		"pl+BeanShell",
		"pl+C",
		"pl+CPP",
		"pl+Ceylon",
		"pl+Chapel",
		"pl+Clojure",
		"pl+D-programming-language",
		"pl+Dart",
		"pl+E",
		"pl+ECMAScript",
		"pl+Eiffel",
		"pl+Emerald",
		"pl+Fantom",
		"pl+Gambas",
		"pl+Gosu",
		"pl+Groovy",
		"pl+Hack",
		"pl+Haxe",
		"pl+JSPP",
		"pl+JavaScript",
		"pl+Join-Java",
		"pl+Kotlin",
		"pl+MDL",
		"pl+Mesa-1-",
		"pl+Mirah",
		"pl+Modula-3",
		"pl+NetRexx",
		"pl+Oaklisp",
		"pl+Object-Pascal",
		"pl+Objective-C",
		"pl+OptimJ",
		"pl+PHP",
		"pl+Pascal",
		"pl+Pizza",
		"pl+Qore",
		"pl+Scala",
		"pl+Seed7",
		"pl+Smalltalk",
		"pl+Strongtalk",
		"pl+SystemVerilog",
		"pl+Tea",
		"pl+TypeScript",
		"pl+Umple",
		"pl+Vala",
		"pl+Whiley",
		"pl+X10",
		"pl+Xtend",
	]);

	plb.addReleases([{ version: "unknown", date: "1995-05-23", kind: "first" }]);
}
