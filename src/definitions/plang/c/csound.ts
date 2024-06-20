import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Csound";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Csound" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Csound",
			href: "https://en.wikipedia.org/wiki/Csound",
		},
		{
			kind: "homepage",
			title: "csound.com",
			href: "http://csound.com",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+LGPL-2dot1-or-later"]);

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
			date: "1986-01-01",
			kind: "first",
		},
		{
			version: "6.18.1",
			date: "2022-11-24",
			kind: "stable",
		},
	]);
}
