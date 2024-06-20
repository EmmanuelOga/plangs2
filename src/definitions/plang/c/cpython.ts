import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+CPython";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "CPython" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "CPython",
			href: "https://en.wikipedia.org/wiki/CPython",
		},
		{
			kind: "homepage",
			title: "www.python.org",
			href: "https://www.python.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Python-Software-Foundation-License"]);

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
			date: "1994-01-26",
			kind: "first",
		},
		{
			version: "3.12.0",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
