import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+CSharp";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "C#" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "C#",
			href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Nemerle"]);

	plb.addInfluences([]);

	plb.addInfluenced([
		"pl+ArkTS",
		"pl+Ballerina",
		"pl+Boo",
		"pl+C",
		"pl+CPP",
		"pl+Chapel",
		"pl+Clojure",
		"pl+Cobra",
		"pl+Crystal",
		"pl+D-programming-language",
		"pl+Dart",
		"pl+Eiffel",
		"pl+Fantom",
		"pl+Gosu",
		"pl+Hack",
		"pl+Haxe",
		"pl+JSPP",
		"pl+Java",
		"pl+Kotlin",
		"pl+Modula-3",
		"pl+Nemerle",
		"pl+Object-Pascal",
		"pl+Oxygene",
		"pl+Pascal",
		"pl+PowerShell",
		"pl+Ring",
		"pl+Rust",
		"pl+Scala",
		"pl+TypeScript",
		"pl+Vala",
	]);

	plb.addReleases([]);
}
