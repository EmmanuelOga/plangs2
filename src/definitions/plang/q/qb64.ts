import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+QB64";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "QB64" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/QB64-1-4-logo-hd-transparency.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "QB64",
			href: "https://en.wikipedia.org/wiki/QB64",
		},
		{
			kind: "homepage",
			title: "www.qb64.com",
			href: "http://www.qb64.com",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Rob-Galleon", "designer"]]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Linux", "platf+Microsoft-Windows", "platf+macOS"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+QBASIC", "pl+QuickBASIC"]);

	plb.addInfluenced(["pl+QBasic"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2007-09-08",
			kind: "first",
		},
		{
			version: "2.0.2",
			date: "2021-11-07",
			kind: "stable",
		},
	]);
}
