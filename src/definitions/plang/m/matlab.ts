import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+MATLAB";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "MATLAB" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "MATLAB",
			href: "https://en.wikipedia.org/wiki/MATLAB",
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

	plb.addInfluenced([
		"pl+APL",
		"pl+Fortran",
		"pl+Julia",
		"pl+Pure",
		"pl+SpeakeasySpeakeasy--the-interpreted-programming-language-",
	]);

	plb.addReleases([]);
}
