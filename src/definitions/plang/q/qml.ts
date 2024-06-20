import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+QML" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "QML";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, [
		"para+declarative",
		"para+multi-paradigm",
		"para+reactive",
		"para+scripting",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+JSON",
		"pl+JavaScript",
		"pl+Qt",
		"pl+Ring",
		"pl+XAML",
	]);

	plb.addInfluenced(pl, ["pl+Ring"]);

	plb.addReleases(pl, [
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
