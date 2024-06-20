import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Inform";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Inform" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Inform",
			href: "https://en.wikipedia.org/wiki/Inform",
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

	plb.addInfluenced(["pl+CorVision"]);

	plb.addReleases([]);
}
