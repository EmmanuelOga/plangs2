import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+C-Plus-Plus" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "C++";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [
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

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Bjarne-Stroustrup", "designer"]]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, [
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+modular",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(pl, [
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(pl, ["platf+Cross-platform"]);

	plb.addImplementations(pl, [
		"pl+EDG",
		"pl+Embarcadero-C-Plus-PlusBuilder",
		"pl+GCC",
		"pl+IBM-XL-C-Plus-Plus",
		"pl+Intel-C-Plus-Plus-Compiler",
		"pl+LLVM-Clang",
		"pl+Microsoft-Visual-C-Plus-Plus",
	]);

	plb.addDialects(pl, ["pl+C-Plus-PlusBuilder"]);

	plb.addInfluences(pl, [
		"pl+ALGOL-68",
		"pl+Ada",
		"pl+Ada-95",
		"pl+BCPL",
		"pl+C",
		"pl+C-Sharp",
		"pl+C99",
		"pl+CLU",
		"pl+Carbon",
		"pl+Chapel",
		"pl+Clojure",
		"pl+D",
		"pl+F-Sharp",
		"pl+JS-Plus-Plus",
		"pl+Java",
		"pl+Lua",
		"pl+ML",
		"pl+Mesa",
		"pl+Modula-2",
		"pl+Nim",
		"pl+Objective-C-Plus-Plus",
		"pl+PHP",
		"pl+Perl",
		"pl+Python",
		"pl+Rust",
		"pl+Seed7",
		"pl+Simula",
		"pl+Smalltalk",
	]);

	plb.addInfluenced(pl, [
		"pl+APL",
		"pl+ATS",
		"pl+Ada",
		"pl+Amiga-E",
		"pl+C",
		"pl+C-Plus-PlusBuilder",
		"pl+CLU",
		"pl+COBOL",
		"pl+Chapel",
		"pl+Clojure",
		"pl+D-programming-language",
		"pl+Dart",
		"pl+GNU-E",
		"pl+Godot-EngineGDScript",
		"pl+Haxe",
		"pl+JS-Plus-Plus",
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

	plb.addReleases(pl, [
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
