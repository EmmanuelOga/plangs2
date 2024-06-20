import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Visual-Basic";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Visual Basic" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Visual_Basic_6.0_logo.png/210px-Visual_Basic_6.0_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Visual Basic",
			href: "https://en.wikipedia.org/wiki/Visual_Basic",
		},
		{
			kind: "wikipedia",
			title: "Visual Basic",
			href: "https://en.wikipedia.org/wiki/Visual_Basic_(classic)",
		},
		{
			kind: "homepage",
			title:
				"learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
			href: "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms(["para+event-driven", "para+object-based"]);

	plb.addTypeSystems(["tsys+static", "tsys+strong"]);

	plb.addPlatforms(["platf+MS-DOS", "platf+Microsoft-Windows"]);

	plb.addImplementations(["pl+Microsoft-Visual-Studio"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+BASIC",
		"pl+Basic4android",
		"pl+Basic4ppc",
		"pl+Gambas",
		"pl+Microsoft-BASIC",
		"pl+NS-Basic",
		"pl+QBasic",
		"pl+Visual-Basic-dotNET",
		"pl+Visual-Basic-for-Applications",
		"pl+Windows-Forms",
		"pl+Xojo",
	]);

	plb.addInfluenced([
		"pl+B4x",
		"pl+BASIC",
		"pl+Gambas",
		"pl+Visual-Basic-for-Applications",
	]);

	plb.addReleases([{ version: "unknown", date: "1991-01-01", kind: "first" }]);
}
