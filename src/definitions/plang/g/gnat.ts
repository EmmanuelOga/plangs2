import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+GNAT";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "GNAT" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "GNAT",
			href: "https://en.wikipedia.org/wiki/GNAT",
		},
		{
			kind: "homepage",
			title: "www.getadanow.com",
			href: "http://www.getadanow.com",
		},
		{
			kind: "homepage",
			title: "www.adacore.com/gnatpro/",
			href: "http://www.adacore.com/gnatpro/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+GNU-GPL-3P"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1995-01-01",
			kind: "first",
		},
		{
			version: "9.2",
			date: "2019-08-12",
			kind: "stable",
		},
	]);
}
