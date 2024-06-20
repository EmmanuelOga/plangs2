import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Kotlin";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Kotlin" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Kotlin",
			href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)",
		},
		{
			kind: "homepage",
			title: "kotlinlang.org",
			href: "https://kotlinlang.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".kexe", ".klib", ".kt", ".kts"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+block-structured",
		"para+concurrent",
		"para+declarative",
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([
		"platf+Android",
		"platf+Apple-silicon",
		"platf+Cross-platform",
		"platf+JVM",
		"platf+JavaScript",
		"platf+LLVM",
		"platf+Linux",
		"platf+WebAssembly",
		"platf+Windows",
		"platf+iOS",
		"platf+macOS",
		"platf+tvOS",
		"platf+watchOS",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CSharp",
		"pl+Eiffel",
		"pl+Gosu",
		"pl+Groovy",
		"pl+Java",
		"pl+JavaScript",
		"pl+ML",
		"pl+Python",
		"pl+Scala",
		"pl+V--Vlang-",
	]);

	plb.addInfluenced([
		"pl+Gosu",
		"pl+Groovy",
		"pl+Java",
		"pl+ML",
		"pl+Scala",
		"pl+V",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2011-07-22",
			kind: "first",
		},
		{
			version: "2.0.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
