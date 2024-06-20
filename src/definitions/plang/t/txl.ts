import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+TXL";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "TXL" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "TXL",
			href: "https://en.wikipedia.org/wiki/TXL_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.txl.ca",
			href: "https://www.txl.ca/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+James-Cordy", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms(["para+pattern-matching", "para+term-rewriting"]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([]);
}
