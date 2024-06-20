import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Ciao";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Ciao" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Logo_for_Ciao_programming_language.png/121px-Logo_for_Ciao_programming_language.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Ciao",
			href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.ciao-lang.org",
			href: "http://www.ciao-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+GPL", "license+LGPL"]);

	plb.addParadigms([
		"para+functional",
		"para+logic",
		"para+modular",
		"para+object-oriented",
	]);

	plb.addTypeSystems([]);

	plb.addPlatforms([
		"platf+Cross-platform",
		"platf+Mac-OS-X",
		"platf+Unix",
		"platf+Windows",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Prolog"]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "unknown", date: "1984-01-01", kind: "first" }]);
}
