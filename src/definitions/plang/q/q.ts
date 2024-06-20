import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+q";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "q" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "q",
			href: "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)",
		},
		{
			kind: "homepage",
			title: "code.kx.com",
			href: "http://code.kx.com",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Arthur-Whitney", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms(["para+array", "para+functional"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+AP", "pl+APL", "pl+Scheme", "pl+k"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2003-01-01",
			kind: "first",
		},
		{
			version: "4.0",
			date: "2020-03-17",
			kind: "stable",
		},
	]);
}
