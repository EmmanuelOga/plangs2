import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Korn-Shell";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Korn Shell" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Korn Shell",
			href: "https://en.wikipedia.org/wiki/Korn_Shell",
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

	plb.addInfluenced(["pl+AWK"]);

	plb.addReleases([]);
}
