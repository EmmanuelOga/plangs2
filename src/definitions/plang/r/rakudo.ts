import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Rakudo";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Rakudo" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rakudo_Logo.png/250px-Rakudo_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Rakudo",
			href: "https://en.wikipedia.org/wiki/Rakudo",
		},
		{
			kind: "homepage",
			title: "rakudo.org",
			href: "http://rakudo.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Artistic-License"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "2024.05", date: "2024-05-30", kind: "stable" }]);
}
