import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Basic";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Basic" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Basic",
			href: "https://en.wikipedia.org/wiki/BASIC",
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

	plb.addInfluenced(["pl+Ruby"]);

	plb.addReleases([]);
}
