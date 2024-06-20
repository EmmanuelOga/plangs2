import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Processing";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Processing" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Processing",
			href: "https://en.wikipedia.org/wiki/Processing_(programming_language)",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+C", "pl+The-Kojo-Learning-Environment"]);

	plb.addReleases([]);
}
