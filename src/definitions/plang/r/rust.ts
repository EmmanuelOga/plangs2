import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Rust" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Rust";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".rlib", ".rs"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+apache-2", "license+mit"]);

	plb.addParadigms(pl, [
		"para+concurrent",
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+structured",
	]);

	plb.addTypeSystems(pl, [
		"tsys+affine",
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(pl, ["platf+Cross-platform"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, ["pl+Project-Verona"]);

	plb.addInfluences(pl, [
		"pl+Alef",
		"pl+C-Plus-Plus",
		"pl+C-Sharp",
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

	plb.addInfluenced(pl, [
		"pl+Alef",
		"pl+Ballerina",
		"pl+C",
		"pl+C-Plus-Plus",
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

	plb.addReleases(pl, [
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
