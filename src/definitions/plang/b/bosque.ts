import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Bosque";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Bosque" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bosque_logo.png/256px-Bosque_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Bosque",
			href: "https://en.wikipedia.org/wiki/Bosque_(programming_language)",
		},
		{
			kind: "homepage",
			title:
				"www.microsoft.com/en-us/research/project/bosque-programming-language/",
			href: "https://www.microsoft.com/en-us/research/project/bosque-programming-language/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".bsq"]);

	plb.addReferences({});

	plb.addPeople([["person+Mark-Marron", "designer"]]);

	plb.addLicenses(["license+MIT-License"]);

	plb.addParadigms([
		"para+functional",
		"para+multi-paradigm",
		"para+typed-language",
	]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+JavaScript", "pl+ML", "pl+TypeScript"]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "unknown", date: "2019-03-03", kind: "first" }]);
}
