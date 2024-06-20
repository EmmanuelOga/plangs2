import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+SuperCollider";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "SuperCollider" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "SuperCollider",
			href: "https://en.wikipedia.org/wiki/SuperCollider",
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

	plb.addInfluenced(["pl+J"]);

	plb.addReleases([]);
}
