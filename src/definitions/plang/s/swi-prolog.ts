import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+SWI-Prolog";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "SWI-Prolog" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "SWI-Prolog",
			href: "https://en.wikipedia.org/wiki/SWI-Prolog",
		},
		{
			kind: "homepage",
			title: "swi-prolog.org",
			href: "http://swi-prolog.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Anjo-Anjewierden", "designer"],
		["person+Jan-Wielemaker", "designer"],
	]);

	plb.addLicenses(["license+LGPL", "license+Simplified-BSD"]);

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
			date: "1987-01-01",
			kind: "first",
		},
		{
			version: "9.2.2",
			date: "2024-01-01",
			kind: "stable",
		},
		{
			version: "9.3.2",
			date: "2024-02-29",
			kind: "preview",
		},
	]);
}
