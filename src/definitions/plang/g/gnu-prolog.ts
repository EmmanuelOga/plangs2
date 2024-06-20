import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+GNU-Prolog";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "GNU Prolog" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "GNU Prolog",
			href: "https://en.wikipedia.org/wiki/GNU_Prolog",
		},
		{
			kind: "homepage",
			title: "www.gprolog.org",
			href: "http://www.gprolog.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Daniel-Diaz", "designer"]]);

	plb.addLicenses([
		"license+GNU-General-Public-License",
		"license+GNU-Lesser-General-Public-License",
	]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "1.5.0", date: "2021-07-08", kind: "stable" }]);
}
