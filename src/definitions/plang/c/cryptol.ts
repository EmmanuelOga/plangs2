import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Cryptol";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Cryptol" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Cryptol",
			href: "https://en.wikipedia.org/wiki/Cryptol",
		},
		{
			kind: "repository",
			title: "galoisinc.github.io/cryptol/master/RefMan.html",
			href: "https://galoisinc.github.io/cryptol/master/RefMan.html",
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

	plb.addInfluenced([]);

	plb.addReleases([]);
}
