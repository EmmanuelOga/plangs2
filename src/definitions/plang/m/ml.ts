import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+ML";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "ML" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "ML",
			href: "https://en.wikipedia.org/wiki/ML_(programming_language)",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Robin-Milner", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([
		"pl+ATS",
		"pl+Alice",
		"pl+Caml",
		"pl+FStar",
		"pl+Futhark",
		"pl+MLton",
		"pl+OCaml",
		"pl+Reason",
		"pl+Standard-ML",
		"pl+Standard-ML-of-New-Jersey",
	]);

	plb.addInfluences([
		"pl+CPP",
		"pl+Clojure",
		"pl+Coq",
		"pl+Cyclone",
		"pl+Elm",
		"pl+Erlang",
		"pl+FSharp",
		"pl+FStar",
		"pl+Haskell",
		"pl+ISWIM",
		"pl+Idris",
		"pl+Kotlin",
		"pl+Miranda",
		"pl+Nemerle",
		"pl+OCaml",
		"pl+Opa",
		"pl+Rust",
		"pl+Scala",
		"pl+Standard-ML",
	]);

	plb.addInfluenced([
		"pl+ATS",
		"pl+Alice",
		"pl+Bosque",
		"pl+CPP",
		"pl+Caml",
		"pl+Ceylon",
		"pl+Claire",
		"pl+Clojure",
		"pl+Haskell",
		"pl+ISWIM",
		"pl+Idris",
		"pl+Kotlin",
		"pl+Lean",
		"pl+Lisp",
		"pl+Miranda",
		"pl+Nemerle",
		"pl+Orc",
		"pl+ParaSail",
		"pl+Pict",
		"pl+Standard-ML",
	]);

	plb.addReleases([{ version: "unknown", date: "1973-01-01", kind: "first" }]);
}
