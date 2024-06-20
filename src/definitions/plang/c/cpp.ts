import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+CPP";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "C++" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "C++",
			href: "https://en.wikipedia.org/wiki/C%2B%2B",
		},
		{
			kind: "homepage",
			title: "isocpp.org",
			href: "https://isocpp.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([
		".C",
		".H",
		".c++",
		".cc",
		".cpp",
		".cxx",
		".h",
		".hh",
		".hpp",
		".hxx",
		".ixx",
	]);

	plb.addReferences({});

	plb.addPeople([["person+Bjarne-Stroustrup", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+modular",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems([
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([
		"pl+EDG",
		"pl+Embarcadero-CPPBuilder",
		"pl+GCC",
		"pl+IBM-XL-CPP",
		"pl+Intel-CPP-Compiler",
		"pl+LLVM-Clang",
		"pl+Microsoft-Visual-CPP",
	]);

	plb.addDialects(["pl+CPPBuilder"]);

	plb.addInfluences([
		"pl+ALGOL-68",
		"pl+Ada",
		"pl+Ada-95",
		"pl+BCPL",
		"pl+C",
		"pl+C99",
		"pl+CLU",
		"pl+CSharp",
		"pl+Carbon",
		"pl+Chapel",
		"pl+Clojure",
		"pl+D",
		"pl+FSharp",
		"pl+JSPP",
		"pl+Java",
		"pl+Lua",
		"pl+ML",
		"pl+Mesa",
		"pl+Modula-2",
		"pl+Nim",
		"pl+Objective-CPP",
		"pl+PHP",
		"pl+Perl",
		"pl+Python",
		"pl+Rust",
		"pl+Seed7",
		"pl+Simula",
		"pl+Smalltalk",
	]);

	plb.addInfluenced([
		"pl+APL",
		"pl+ATS",
		"pl+Ada",
		"pl+Amiga-E",
		"pl+C",
		"pl+CLU",
		"pl+COBOL",
		"pl+CPPBuilder",
		"pl+Chapel",
		"pl+Clojure",
		"pl+D-programming-language",
		"pl+Dart",
		"pl+GNU-E",
		"pl+Godot-EngineGDScript",
		"pl+Haxe",
		"pl+JSPP",
		"pl+Java",
		"pl+Lua",
		"pl+ML",
		"pl+Nim",
		"pl+PHP",
		"pl+Perl",
		"pl+Pike",
		"pl+Python",
		"pl+Qore",
		"pl+Ruby",
		"pl+Rust",
		"pl+Seed7",
		"pl+Solidity",
		"pl+Squirrel",
		"pl+SystemVerilog",
		"pl+Umple",
		"pl+Vala",
		"pl+Wolfram-Language",
		"pl+X10",
		"pl+eC",
		"pl+urbiscript",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1985-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2020-12-15",
			kind: "stable",
		},
		{
			version: "unknown",
			date: "2023-03-19",
			kind: "preview",
		},
	]);
}
