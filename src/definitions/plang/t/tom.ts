import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Tom";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Tom" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Tom_%28pattern_matching_language%29_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Tom",
			href: "https://en.wikipedia.org/wiki/Tom_(pattern_matching_language)",
		},
		{
			kind: "homepage",
			title: "tom.loria.fr",
			href: "http://tom.loria.fr",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+BSD-licenses", "license+GPL"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "2.10", date: "2013-03-21", kind: "stable" }]);
}
