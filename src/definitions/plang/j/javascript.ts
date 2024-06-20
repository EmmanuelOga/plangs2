import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+JavaScript" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "JavaScript";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "JavaScript",
			href: "https://en.wikipedia.org/wiki/JavaScript",
		},
		{
			kind: "wikipedia",
			title: "JavaScript",
			href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
		},
		{
			kind: "homepage",
			title:
				"ecma-international.org/publications-and-standards/standards/ecma-262/",
			href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Brendan-Eich", "designer"]]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, [
		"para+event-driven",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+objects",
	]);

	plb.addTypeSystems(pl, ["tsys+duck", "tsys+dynamic", "tsys+weak"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, [
		"pl+Chakra",
		"pl+JavaScriptCore",
		"pl+SpiderMonkey",
		"pl+V8",
	]);

	plb.addDialects(pl, ["pl+AssemblyScript"]);

	plb.addInfluences(pl, [
		"pl+AWK",
		"pl+ActionScript",
		"pl+ArkTS",
		"pl+AssemblyScript",
		"pl+CoffeeScript",
		"pl+Dart",
		"pl+Haxe",
		"pl+HyperTalk",
		"pl+JS-Plus-Plus",
		"pl+Java",
		"pl+Opa",
		"pl+Scheme",
		"pl+Self",
		"pl+TypeScript",
	]);

	plb.addInfluenced(pl, [
		"pl+ActionScript",
		"pl+ArkTS",
		"pl+AssemblyScript",
		"pl+BeanShell",
		"pl+Bosque",
		"pl+C",
		"pl+Curl",
		"pl+Dart",
		"pl+Gleam",
		"pl+Haxe",
		"pl+HyperTalk",
		"pl+JS-Plus-Plus",
		"pl+Java",
		"pl+Kotlin",
		"pl+Lisp",
		"pl+LiveScript",
		"pl+Opa",
		"pl+PHP",
		"pl+PureScript",
		"pl+Python",
		"pl+QML",
		"pl+Raku",
		"pl+Reason",
		"pl+Scheme",
		"pl+Script.NET",
		"pl+Self",
		"pl+Solidity",
		"pl+Source",
		"pl+Squirrel",
		"pl+TypeScript",
		"pl+asm.js",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1995-12-04",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2023-01-01",
			kind: "stable",
		},
		{
			version: "unknown",
			date: "2025-01-01",
			kind: "preview",
		},
	]);
}
