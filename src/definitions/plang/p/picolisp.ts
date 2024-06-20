import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Picolisp";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Picolisp" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Picolisp",
			href: "https://en.wikipedia.org/wiki/Picolisp",
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

	plb.addDialects(["pl+Lisp"]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([]);
}
