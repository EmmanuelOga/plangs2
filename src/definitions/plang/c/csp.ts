import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+CSP";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "CSP" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "CSP",
			href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
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

	plb.addInfluenced(["pl+Handel-C", "pl+Limbo", "pl+Newsqueak"]);

	plb.addReleases([]);
}
