import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Flix";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Flix" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Flix",
			href: "https://en.wikipedia.org/wiki/Flix_(programming_language)",
		},
		{
			kind: "homepage",
			title: "flix.dev",
			href: "https://flix.dev/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+logic",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems([
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms(["platf+JVM"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+FSharp",
		"pl+Go",
		"pl+Haskell",
		"pl+OCaml",
		"pl+Scala",
	]);

	plb.addInfluenced(["pl+Scala"]);

	plb.addReleases([]);
}
