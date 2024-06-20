import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Gforth";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Gforth" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Gforth",
			href: "https://en.wikipedia.org/wiki/Gforth",
		},
		{
			kind: "homepage",
			title: "gnu.org/s/gforth/",
			href: "http://gnu.org/s/gforth/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+GNU-GPLv3"]);

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
			date: "1992-01-01",
			kind: "first",
		},
		{
			version: "0.7.3",
			date: "2014-01-01",
			kind: "stable",
		},
		{
			version: "0.7.9",
			date: "2020-02-13",
			kind: "preview",
		},
	]);
}
