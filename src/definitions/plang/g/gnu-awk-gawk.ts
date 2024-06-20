import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+GNU-Awk-gawk";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "GNU Awk gawk" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects(["pl+AWK"]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([]);
}
