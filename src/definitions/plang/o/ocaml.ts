import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+OCaml" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "OCaml";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "OCaml",
			href: "https://en.wikipedia.org/wiki/OCaml",
		},
		{
			kind: "homepage",
			title: "ocaml.org",
			href: "https://ocaml.org/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".ml", ".mli"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Damien-Doligez", "designer"],
		["person+Xavier-Leroy", "designer"],
	]);

	plb.addLicenses(pl, ["license+lgpl-2.1"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+modular",
		"para+multi-paradigm",
		"para+objects",
	]);

	plb.addTypeSystems(pl, [
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms(pl, [
		"platf+arm",
		"platf+cross-platform",
		"platf+ia-32",
		"platf+linux",
		"platf+macos",
		"platf+risc-v",
		"platf+unix",
		"platf+windows",
		"platf+x86-64",
	]);

	plb.addImplementations(pl, ["pl+C"]);

	plb.addDialects(pl, ["pl+ATS", "pl+F-Star", "pl+ML", "pl+Reason"]);

	plb.addInfluences(pl, [
		"pl+ATS",
		"pl+C",
		"pl+Caml",
		"pl+Coq",
		"pl+Elm",
		"pl+F-Sharp",
		"pl+F-Star",
		"pl+Haxe",
		"pl+Modula-3",
		"pl+Opa",
		"pl+Pascal",
		"pl+Rust",
		"pl+Scala",
		"pl+Standard-ML",
	]);

	plb.addInfluenced(pl, [
		"pl+ATS",
		"pl+Boomerang",
		"pl+Caml",
		"pl+Elm",
		"pl+F-Star",
		"pl+Flix",
		"pl+Gleam",
		"pl+Hack",
		"pl+Haxe",
		"pl+ML",
		"pl+Modula-3",
		"pl+Opa",
		"pl+Reason",
		"pl+Rust",
		"pl+Scala",
		"pl+Standard-ML",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1996-01-01",
			kind: "first",
		},
		{
			version: "5.2.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
