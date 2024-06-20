import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Carbon" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Carbon";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carbon_logo.png/121px-Carbon_logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Carbon",
			href: "https://en.wikipedia.org/wiki/Carbon_(programming_language)",
		},
		{
			kind: "repository",
			title: "github.com/carbon-language",
			href: "https://github.com/carbon-language",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".carbon"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+apache-2-with-llvm-exception"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, ["tsys+inferred", "tsys+nominative", "tsys+static"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, ["pl+C-Plus-Plus"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, ["pl+C-Plus-Plus"]);

	plb.addReleases(pl, []);
}
