import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Umple";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Umple" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Umple_Logo.png/200px-Umple_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Umple",
			href: "https://en.wikipedia.org/wiki/Umple",
		},
		{
			kind: "homepage",
			title: "www.umple.org",
			href: "http://www.umple.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".ump"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+MIT-License"]);

	plb.addParadigms(["para+object-oriented"]);

	plb.addTypeSystems(["tsys+static"]);

	plb.addPlatforms(["platf+JVM"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+CPP", "pl+Java", "pl+PHP", "pl+Ruby", "pl+UML"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2024-06-06",
			kind: "stable",
		},
	]);
}
