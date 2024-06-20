import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Groovy" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Groovy";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Groovy",
			href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "Groovy",
			href: "https://en.wikipedia.org/wiki/Apache_Groovy",
		},
		{
			kind: "homepage",
			title: "groovy-lang.org",
			href: "https://groovy-lang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Cedric-Champeau", "designer"],
		["person+James-Strachan", "designer"],
		["person+Paul-King", "designer"],
	]);

	plb.addLicenses(pl, ["license+apache-2"]);

	plb.addParadigms(pl, [
		"para+aspect-oriented",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+objects",
		"para+scripting",
	]);

	plb.addTypeSystems(pl, [
		"tsys+duck",
		"tsys+dynamic",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(pl, ["platf+jvm"]);

	plb.addImplementations(pl, ["pl+Gradle", "pl+Grails"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Java",
		"pl+Kotlin",
		"pl+Python",
		"pl+Ruby",
		"pl+Smalltalk",
	]);

	plb.addInfluenced(pl, [
		"pl+Java",
		"pl+Kotlin",
		"pl+Objective-C",
		"pl+Ruby",
		"pl+Smalltalk",
		"pl+Xtend",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2003-01-01",
			kind: "first",
		},
		{
			version: "4.0.21",
			date: "2024-01-01",
			kind: "stable",
		},
		{
			version: "4.0.0",
			date: "2021-09-06",
			kind: "preview",
		},
	]);
}
