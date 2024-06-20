import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Rust";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Rust" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Rust",
			href: "https://en.wikipedia.org/wiki/Rust_(programming_language)",
		},
		{
			kind: "homepage",
			title: "foundation.rust-lang.org",
			href: "https://foundation.rust-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".rlib", ".rs"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-2dot0", "license+MIT"]);

	plb.addParadigms([
		"para+concurrent",
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+structured",
	]);

	plb.addTypeSystems([
		"tsys+affine",
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Project-Verona"]);

	plb.addInfluences([
		"pl+Alef",
		"pl+CPP",
		"pl+CSharp",
		"pl+Cyclone",
		"pl+Elm",
		"pl+Erlang",
		"pl+Haskell",
		"pl+Idris",
		"pl+Limbo",
		"pl+Newsqueak",
		"pl+OCaml",
		"pl+Project-Verona",
		"pl+Ruby",
		"pl+Scheme",
		"pl+Spark",
		"pl+Standard-ML",
		"pl+Swift",
		"pl+V",
		"pl+Zig",
	]);

	plb.addInfluenced([
		"pl+Alef",
		"pl+Ballerina",
		"pl+C",
		"pl+CPP",
		"pl+CilkOpenCilkCilk-Plus",
		"pl+Crystal",
		"pl+Cyclone",
		"pl+Elm",
		"pl+Erlang",
		"pl+Gleam",
		"pl+Idris",
		"pl+Limbo",
		"pl+ML",
		"pl+Modula-3",
		"pl+Newsqueak",
		"pl+Nim",
		"pl+OCaml",
		"pl+Project-Verona",
		"pl+Racket",
		"pl+Ruby",
		"pl+Scheme",
		"pl+Standard-ML",
		"pl+V",
		"pl+Whiley",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2015-05-15",
			kind: "first",
		},
		{
			version: "1.78.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
