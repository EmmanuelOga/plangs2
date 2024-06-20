import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Maxima";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Maxima" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Maxima-new.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Maxima",
			href: "https://en.wikipedia.org/wiki/Maxima_(software)",
		},
		{
			kind: "homepage",
			title: "maxima.sourceforge.io",
			href: "https://maxima.sourceforge.io/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+GPL"]);

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
			date: "1982-01-01",
			kind: "first",
		},
		{
			version: "5.47.0",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
