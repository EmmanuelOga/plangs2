import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Xojo";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Xojo" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Logomark_Xojo_Company.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Xojo",
			href: "https://en.wikipedia.org/wiki/Xojo",
		},
		{
			kind: "homepage",
			title: "xojo.com",
			href: "http://xojo.com",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Freemium"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+BASIC", "pl+Visual-Basic"]);

	plb.addReleases([{ version: "3.1", date: "2023-10-25", kind: "stable" }]);
}
