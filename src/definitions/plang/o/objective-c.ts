import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Objective-C";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Objective-C" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([".M", ".h", ".m", ".mm"]);

	plb.addReferences({});

	plb.addPeople([["person+Brad-Cox", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+weak"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+Clang", "pl+GCC"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+C",
		"pl+Groovy",
		"pl+Java",
		"pl+Nu",
		"pl+Smalltalk",
		"pl+Swift",
	]);

	plb.addInfluenced([
		"pl+ArkTS",
		"pl+C",
		"pl+Cobra",
		"pl+Java",
		"pl+Logtalk",
		"pl+Nu",
		"pl+Smalltalk",
	]);

	plb.addReleases([
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
