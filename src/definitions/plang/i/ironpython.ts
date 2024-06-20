import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+IronPython";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "IronPython" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "IronPython",
			href: "https://en.wikipedia.org/wiki/IronPython",
		},
		{
			kind: "homepage",
			title: "ironpython.net",
			href: "https://ironpython.net",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Mono", "platf+dotNET", "platf+dotNET-Framework"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2006-09-05",
			kind: "first",
		},
		{
			version: "3.4.1",
			date: "2023-07-12",
			kind: "stable",
		},
		{
			version: "3.4.0",
			date: "2022-04-30",
			kind: "preview",
		},
	]);
}
