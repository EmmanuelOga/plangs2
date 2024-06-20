import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Flix" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Flix";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+apache-2"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+logic",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(pl, [
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms(pl, ["platf+jvm"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+F-Sharp",
		"pl+Go",
		"pl+Haskell",
		"pl+OCaml",
		"pl+Scala",
	]);

	plb.addInfluenced(pl, ["pl+Scala"]);

	plb.addReleases(pl, []);
}
