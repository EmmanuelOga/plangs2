import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+XQuery" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "XQuery";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".xq", ".xql", ".xqm", ".xquery", ".xqy"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+declarative", "para+functional", "para+modular"]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+cross-platform"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+SQL", "pl+XPath", "pl+XSLT"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
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
