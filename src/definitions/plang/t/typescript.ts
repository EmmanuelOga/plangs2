import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+TypeScript" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "TypeScript";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".cts", ".mts", ".ts", ".tsx"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+apache-2"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
		"para+objects",
	]);

	plb.addTypeSystems(pl, ["tsys+duck", "tsys+gradual", "tsys+structural"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, ["pl+AssemblyScript"]);

	plb.addInfluences(pl, [
		"pl+ActionScript",
		"pl+ArkTS",
		"pl+AssemblyScript",
		"pl+AtScript",
		"pl+C-Sharp",
		"pl+F-Sharp",
		"pl+Java",
		"pl+JavaScript",
	]);

	plb.addInfluenced(pl, [
		"pl+ActionScript",
		"pl+ArkTS",
		"pl+AssemblyScript",
		"pl+Bosque",
		"pl+Dart",
		"pl+JavaScript",
	]);

	plb.addReleases(pl, [
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
