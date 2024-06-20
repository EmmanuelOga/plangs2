import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+C99";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "C99" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "C99",
			href: "https://en.wikipedia.org/wiki/C99",
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
		"pl+CPP",
		"pl+OpenCL-APIOpenCL-CSlashCPP-and-CPP-for-OpenCL",
	]);

	plb.addReleases([]);
}
