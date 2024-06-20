import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+TypeScript";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "TypeScript" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "TypeScript",
			href: "https://en.wikipedia.org/wiki/TypeScript",
		},
		{
			kind: "homepage",
			title: "www.typescriptlang.org",
			href: "https://www.typescriptlang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".cts", ".mts", ".ts", ".tsx"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+duck", "tsys+gradual", "tsys+structural"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects(["pl+AssemblyScript"]);

	plb.addInfluences([
		"pl+ActionScript",
		"pl+ArkTS",
		"pl+AssemblyScript",
		"pl+AtScript",
		"pl+CSharp",
		"pl+FSharp",
		"pl+Java",
		"pl+JavaScript",
	]);

	plb.addInfluenced([
		"pl+ActionScript",
		"pl+ArkTS",
		"pl+AssemblyScript",
		"pl+Bosque",
		"pl+Dart",
		"pl+JavaScript",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2012-10-01",
			kind: "first",
		},
		{
			version: "5.4.2",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
