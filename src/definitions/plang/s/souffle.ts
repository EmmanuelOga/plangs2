import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Souffle";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Soufflé" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Soufflé",
			href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)",
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

	plb.addDialects(["pl+Datalog"]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([]);
}
