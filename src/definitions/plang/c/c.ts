import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+C";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "C" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "C",
			href: "https://en.wikipedia.org/wiki/C_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.iso.org/standard/74528.html",
			href: "https://www.iso.org/standard/74528.html",
		},
		{
			kind: "homepage",
			title: "www.open-std.org/jtc1/sc22/wg14/",
			href: "http://www.open-std.org/jtc1/sc22/wg14/",
		},
		{
			kind: "wikipedia",
			title: "C",
			href: "https://en.wikipedia.org/wiki/List_of_C-based_programming_languages",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".c", ".h"]);

	plb.addReferences({});

	plb.addPeople([["person+Dennis-Ritchie", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+imperative",
		"para+multi-paradigm",
		"para+structured",
	]);

	plb.addTypeSystems([
		"tsys+manifest",
		"tsys+nominative",
		"tsys+static",
		"tsys+weak",
	]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([
		"pl+CPPBuilder",
		"pl+Clang",
		"pl+GCC",
		"pl+Intel-C",
		"pl+Microsoft-Visual-CPP",
		"pl+Watcom-C",
		"pl+pcc",
	]);

	plb.addDialects([
		"pl+CPP",
		"pl+Carbon",
		"pl+Objective-C",
		"pl+OpenCL-APIOpenCL-CSlashCPP-and-CPP-for-OpenCL",
	]);

	plb.addInfluences([
		"pl+ALGOL-68",
		"pl+AMPL",
		"pl+AWK",
		"pl+B",
		"pl+BCPL",
		"pl+C--",
		"pl+CPL",
		"pl+CPP",
		"pl+CSharp",
		"pl+D",
		"pl+FORTRAN",
		"pl+Go",
		"pl+JSPP",
		"pl+Java",
		"pl+JavaScript",
		"pl+Julia",
		"pl+LPC",
		"pl+Limbo",
		"pl+Nim",
		"pl+Numerous",
		"pl+Objective-C",
		"pl+PHP",
		"pl+PLSlashI",
		"pl+Perl",
		"pl+Pike",
		"pl+Processing",
		"pl+Python",
		"pl+Rust",
		"pl+Seed7",
		"pl+V--Vlang-",
		"pl+Vala",
		"pl+Verilog",
		"pl+Zig",
		"pl+csh",
	]);

	plb.addInfluenced([
		"pl+ALGOL",
		"pl+ALGOL-60",
		"pl+AMPL",
		"pl+AWK",
		"pl+Alef",
		"pl+B",
		"pl+BCPL",
		"pl+C--",
		"pl+CPP",
		"pl+CgSlashHLSL",
		"pl+Chapel",
		"pl+Charm",
		"pl+CilkOpenCilkCilk-Plus",
		"pl+Claire",
		"pl+Crystal",
		"pl+Cyclone",
		"pl+Cython",
		"pl+D-programming-language",
		"pl+Dart",
		"pl+Draco",
		"pl+ECMAScript",
		"pl+Embeddable-Common-Lisp",
		"pl+Fortran",
		"pl+FreeBASIC",
		"pl+Go",
		"pl+Godot-EngineGDScript",
		"pl+Handel-C",
		"pl+JSPP",
		"pl+Limbo",
		"pl+Newsqueak",
		"pl+OCaml",
		"pl+Objective-C",
		"pl+PCASTL",
		"pl+PHP",
		"pl+PROMAL",
		"pl+Perl",
		"pl+Pike",
		"pl+Python",
		"pl+QuakeC",
		"pl+RAPID",
		"pl+Ratfor",
		"pl+Ring",
		"pl+S",
		"pl+SAC",
		"pl+SISAL",
		"pl+Seed7",
		"pl+Speedcoding",
		"pl+Split-C",
		"pl+Swift",
		"pl+Transaction-Programming-Language--TAL-",
		"pl+Unified-Parallel-C--UPC-",
		"pl+Vala",
		"pl+Verilog",
		"pl+Whiley",
		"pl+Wolfram-Language",
		"pl+ZPL",
		"pl+bs",
		"pl+eC",
		"pl+newLISP",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1972-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2018-01-01",
			kind: "stable",
		},
		{
			version: "unknown",
			date: "2024-02-21",
			kind: "preview",
		},
	]);
}
