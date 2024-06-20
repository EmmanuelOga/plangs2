import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Nim";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Nim" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Nim",
			href: "https://en.wikipedia.org/wiki/Nim_(programming_language)",
		},
		{
			kind: "homepage",
			title: "nim-lang.org",
			href: "http://nim-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".nim", ".nimble", ".nims"]);

	plb.addReferences({});

	plb.addPeople([["person+Andreas-Rumpf", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+compiled",
		"para+concurrent",
		"para+functional",
		"para+imperative",
		"para+meta",
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
		"platf+ARM",
		"platf+Aarch64",
		"platf+Cross-platform",
		"platf+IA-32",
		"platf+PowerPC",
		"platf+RISC-V",
		"platf+x86-64",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Ada",
		"pl+CPP",
		"pl+Lisp",
		"pl+Modula-3",
		"pl+Oberon",
		"pl+Object-Pascal",
		"pl+ParaSail",
		"pl+Python",
		"pl+Rust",
	]);

	plb.addInfluenced([
		"pl+Ada",
		"pl+C",
		"pl+CPP",
		"pl+Lisp",
		"pl+Modula-3",
		"pl+Oberon",
		"pl+Oberon-2",
		"pl+Object-Pascal",
		"pl+ParaSail",
		"pl+Python",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "2.0.4",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
