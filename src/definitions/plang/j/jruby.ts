import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+JRuby";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "JRuby" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JRuby_logo.png/200px-JRuby_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "JRuby",
			href: "https://en.wikipedia.org/wiki/JRuby",
		},
		{
			kind: "homepage",
			title: "www.jruby.org",
			href: "https://www.jruby.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Charles-Oliver-Nutter", "designer"],
		["person+Nick-Sieger", "designer"],
		["person+Ola-Bini", "designer"],
		["person+Thomas-Enebo", "designer"],
	]);

	plb.addLicenses(["license+EPL", "license+GPL", "license+LGPL"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Java-Virtual-Machine"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2001-01-01",
			kind: "first",
		},
		{
			version: "9.4.5.0",
			date: "2023-11-02",
			kind: "stable",
		},
	]);
}
