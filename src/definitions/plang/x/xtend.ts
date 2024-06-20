import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Xtend";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Xtend" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Xtend-logo-c.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Xtend",
			href: "https://en.wikipedia.org/wiki/Xtend",
		},
		{
			kind: "homepage",
			title: "eclipse.dev/Xtext/xtend/",
			href: "https://eclipse.dev/Xtext/xtend/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Sebastian-Zarnekow", "designer"],
		["person+Sven-Efftinge", "designer"],
	]);

	plb.addLicenses(["license+Eclipse-Public-License"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform", "platf+Java-Virtual-Machine"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Groovy", "pl+Java", "pl+Scala", "pl+Smalltalk"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2011-01-01",
			kind: "first",
		},
		{
			version: "2.25.0",
			date: "2021-03-02",
			kind: "stable",
		},
	]);
}
