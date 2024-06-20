import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+OCaml";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "OCaml" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([".ml", ".mli"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Damien-Doligez", "designer"],
		["person+Xavier-Leroy", "designer"],
	]);

	plb.addLicenses(["license+LGPLv2dot1"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+modular",
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
		"platf+ARM-32-64",
		"platf+Cross-platform",
		"platf+IA-32",
		"platf+Linux",
		"platf+Power",
		"platf+RISC-V",
		"platf+SPARC",
		"platf+Unix",
		"platf+Windows",
		"platf+macOS",
		"platf+x86-64",
	]);

	plb.addImplementations(["pl+C"]);

	plb.addDialects(["pl+ATS", "pl+FStar", "pl+ML", "pl+Reason"]);

	plb.addInfluences([
		"pl+ATS",
		"pl+C",
		"pl+Caml",
		"pl+Coq",
		"pl+Elm",
		"pl+FSharp",
		"pl+FStar",
		"pl+Haxe",
		"pl+Modula-3",
		"pl+Opa",
		"pl+Pascal",
		"pl+Rust",
		"pl+Scala",
		"pl+Standard-ML",
	]);

	plb.addInfluenced([
		"pl+ATS",
		"pl+Boomerang",
		"pl+Caml",
		"pl+Elm",
		"pl+FStar",
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

	plb.addReleases([
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
