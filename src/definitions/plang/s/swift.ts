import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Swift" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Swift";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Swift_%28programing_language%29_logo.png/150px-Swift_%28programing_language%29_logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Swift",
			href: "https://en.wikipedia.org/wiki/Swift_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "Swift",
			href: "https://en.wikipedia.org/wiki/Swift_(parallel_scripting_language)",
		},
		{
			kind: "homepage",
			title: "swift-lang.org",
			href: "http://swift-lang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+apache"]);

	plb.addParadigms(pl, [
		"para+concurrent",
		"para+dataflow",
		"para+distributed",
		"para+grid",
		"para+scientific-workflow",
		"para+scripting",
	]);

	plb.addTypeSystems(pl, ["tsys+strong"]);

	plb.addPlatforms(pl, ["platf+Cross-platform", "platf+Java"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+C", "pl+Cuneiform", "pl+functional-programming"]);

	plb.addInfluenced(pl, [
		"pl+ArkTS",
		"pl+CLU",
		"pl+D-programming-language",
		"pl+Lisp",
		"pl+Objective-C",
		"pl+Python",
		"pl+Ruby",
		"pl+Rust",
		"pl+Smalltalk",
		"pl+V",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2007-01-01",
			kind: "first",
		},
		{
			version: "0.96.2",
			date: "2015-08-05",
			kind: "stable",
		},
	]);
}
