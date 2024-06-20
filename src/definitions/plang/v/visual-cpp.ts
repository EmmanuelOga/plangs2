import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Visual-CPP";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Visual C++" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Visual C++",
			href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B",
		},
		{
			kind: "homepage",
			title: "docs.microsoft.com/en-us/cpp/",
			href: "https://docs.microsoft.com/en-us/cpp/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Trialware", "license+freeware"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+ARM", "platf+IA-32", "platf+x86-64"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{ version: "14.40.33810", date: "3381-01-01", kind: "stable" },
	]);
}
