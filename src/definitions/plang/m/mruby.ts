import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+mruby";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "mruby" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mruby_logo_red.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "mruby",
			href: "https://en.wikipedia.org/wiki/Mruby",
		},
		{
			kind: "homepage",
			title: "mruby.org",
			href: "https://mruby.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Yukihiro-Matsumoto", "designer"]]);

	plb.addLicenses(["license+MIT-License"]);

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
			date: "2012-04-20",
			kind: "first",
		},
		{
			version: "3.3.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
