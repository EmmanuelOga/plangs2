import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+POV-Ray";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "POV-Ray" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Povray_logo_sphere.png/120px-Povray_logo_sphere.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "POV-Ray",
			href: "https://en.wikipedia.org/wiki/POV-Ray",
		},
		{
			kind: "homepage",
			title: "www.povray.org",
			href: "https://www.povray.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+AGPL-3dot0-or-later"]);

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
			date: "1991-07-29",
			kind: "first",
		},
		{
			version: "3.7.0.0",
			date: "2013-01-01",
			kind: "stable",
		},
		{
			version: "3.8.0",
			date: "2021-08-09",
			kind: "preview",
		},
	]);
}
