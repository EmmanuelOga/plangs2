import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+OpenACC";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "OpenACC" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "OpenACC",
			href: "https://en.wikipedia.org/wiki/OpenACC",
		},
		{
			kind: "homepage",
			title: "www.openacc.org",
			href: "https://www.openacc.org/",
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

	plb.addReleases([{ version: "3.2", date: "2021-01-01", kind: "stable" }]);
}
