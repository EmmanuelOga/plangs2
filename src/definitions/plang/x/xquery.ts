import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+XQuery";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "XQuery" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "XQuery",
			href: "https://en.wikipedia.org/wiki/XQuery",
		},
		{
			kind: "homepage",
			title: "www.w3.org/XML/Query/",
			href: "http://www.w3.org/XML/Query/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".xq", ".xql", ".xqm", ".xquery", ".xqy"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms(["para+declarative", "para+functional", "para+modular"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+SQL", "pl+XPath", "pl+XSLT"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2007-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2017-03-21",
			kind: "stable",
		},
	]);
}
