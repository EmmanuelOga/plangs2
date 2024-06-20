import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+QML";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "QML" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "QML",
			href: "https://en.wikipedia.org/wiki/QML",
		},
		{
			kind: "homepage",
			title: "qt-project.org/doc/qt-5/qmlapplications.html",
			href: "http://qt-project.org/doc/qt-5/qmlapplications.html",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+declarative",
		"para+multi-paradigm",
		"para+reactive",
		"para+scripting",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+JSON",
		"pl+JavaScript",
		"pl+Qt",
		"pl+Ring",
		"pl+XAML",
	]);

	plb.addInfluenced(["pl+Ring"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2009-01-01",
			kind: "first",
		},
		{
			version: "6.4",
			date: "2022-09-29",
			kind: "stable",
		},
	]);
}
