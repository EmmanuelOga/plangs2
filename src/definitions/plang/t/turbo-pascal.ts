import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Turbo-Pascal";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Turbo Pascal" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Turbo Pascal",
			href: "https://en.wikipedia.org/wiki/Turbo_Pascal",
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

	plb.addDialects(["pl+Object-Pascal", "pl+Pascal"]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([]);
}
