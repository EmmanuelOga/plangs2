import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Red";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Red" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Red_Language_Tower_Logo.png/150px-Red_Language_Tower_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Red",
			href: "https://en.wikipedia.org/wiki/Red_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.red-lang.org",
			href: "https://www.red-lang.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".red", ".reds"]);

	plb.addReferences({});

	plb.addPeople([["person+Nenad-Rakocevic", "designer"]]);

	plb.addLicenses(["license+Boost", "license+modified-BSD"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+symbolic",
	]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Linux", "platf+OS-X", "platf+Windows"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Lisp", "pl+Lua", "pl+Rebol", "pl+Scala"]);

	plb.addInfluenced(["pl+Lisp", "pl+Rebol", "pl+Scala"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2011-01-01",
			kind: "first",
		},
		{
			version: "0.6.5",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
