import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+XSLT";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "XSLT" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "XSLT",
			href: "https://en.wikipedia.org/wiki/XSLT",
		},
		{
			kind: "homepage",
			title: "www.w3.org/TR/xslt-30/",
			href: "https://www.w3.org/TR/xslt-30/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".xslt"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms(["para+declarative"]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+Saxon", "pl+Xalan", "pl+libxslt"]);

	plb.addDialects([]);

	plb.addInfluences(["pl+DSSSL"]);

	plb.addInfluenced(["pl+Boomerang", "pl+XQuery"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1998-01-01",
			kind: "first",
		},
		{
			version: "3.0",
			date: "2017-06-08",
			kind: "stable",
		},
	]);
}
