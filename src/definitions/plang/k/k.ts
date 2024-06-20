import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+k";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "k" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "k",
			href: "https://en.wikipedia.org/wiki/K_(programming_language)",
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

	plb.addInfluenced(["pl+q"]);

	plb.addReleases([]);
}
