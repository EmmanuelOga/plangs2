import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Objective-C" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Objective-C";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Objective-C",
			href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B",
		},
		{
			kind: "homepage",
			title: "developer.apple.com",
			href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
		},
		{
			kind: "wikipedia",
			title: "Objective-C",
			href: "https://en.wikipedia.org/wiki/Objective-C",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".M", ".h", ".m", ".mm"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Brad-Cox", "designer"]]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+static", "tsys+weak"]);

	plb.addPlatforms(pl, ["platf+cross-platform"]);

	plb.addImplementations(pl, ["pl+Clang", "pl+GCC"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+C",
		"pl+Groovy",
		"pl+Java",
		"pl+Nu",
		"pl+Smalltalk",
		"pl+Swift",
	]);

	plb.addInfluenced(pl, [
		"pl+ArkTS",
		"pl+C",
		"pl+Cobra",
		"pl+Java",
		"pl+Logtalk",
		"pl+Nu",
		"pl+Smalltalk",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1984-01-01",
			kind: "first",
		},
		{
			version: "2.0",
			kind: "stable",
		},
	]);
}
