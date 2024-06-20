import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Boomerang";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Boomerang" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Boomerang",
			href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.seas.upenn.edu/~harmony/",
			href: "http://www.seas.upenn.edu/~harmony/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Benjamin-Cdot-Pierce", "designer"],
		["person+Nate-Foster", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Linux", "platf+Mac-OS-X"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+OCaml", "pl+XSLT"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "0.2",
			date: "2009-09-02",
			kind: "stable",
		},
	]);
}
