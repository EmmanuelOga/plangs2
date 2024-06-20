import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+FreeBASIC";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "FreeBASIC" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fblogo.gif/121px-Fblogo.gif",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "FreeBASIC",
			href: "https://en.wikipedia.org/wiki/FreeBASIC",
		},
		{
			kind: "homepage",
			title: "www.freebasic.net",
			href: "http://www.freebasic.net",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Andre-Victor", "designer"]]);

	plb.addLicenses([
		"license+GNU-GPLv2P",
		"license+Standard-libraries-licensed-under-the-GNU-LGPLv2P",
	]);

	plb.addParadigms(["para+imperative", "para+object-oriented"]);

	plb.addTypeSystems(["tsys+static"]);

	plb.addPlatforms([
		"platf+FreeBSD",
		"platf+Linux",
		"platf+MS-DOS",
		"platf+Microsoft-Windows",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+C", "pl+QuickBASIC"]);

	plb.addInfluenced(["pl+QBasic"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2004-01-01",
			kind: "first",
		},
		{
			version: "1.10.1",
			date: "2023-12-25",
			kind: "stable",
		},
	]);
}
