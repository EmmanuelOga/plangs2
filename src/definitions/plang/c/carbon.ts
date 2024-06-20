import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Carbon";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Carbon" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carbon_logo.png/121px-Carbon_logo.png",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([".carbon"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-2dot0-with-LLVM-Exception"]);

	plb.addParadigms([]);

	plb.addTypeSystems(["tsys+inferred", "tsys+nominative", "tsys+static"]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+CPP"]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+CPP"]);

	plb.addReleases([]);
}
