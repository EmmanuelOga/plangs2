import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+JavaScript";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "JavaScript" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Brendan-Eich", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+event-driven",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"]);

	plb.addPlatforms([]);

	plb.addImplementations([
		"pl+Chakra",
		"pl+JavaScriptCore",
		"pl+SpiderMonkey",
		"pl+V8",
	]);

	plb.addDialects(["pl+AssemblyScript"]);

	plb.addInfluences([
		"pl+AWK",
		"pl+ActionScript",
		"pl+ArkTS",
		"pl+AssemblyScript",
		"pl+CoffeeScript",
		"pl+Dart",
		"pl+Haxe",
		"pl+HyperTalk",
		"pl+JSPP",
		"pl+Java",
		"pl+Opa",
		"pl+Scheme",
		"pl+Self",
		"pl+TypeScript",
	]);

	plb.addInfluenced([
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
		"pl+JSPP",
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
		"pl+ScriptdotNET",
		"pl+Self",
		"pl+Solidity",
		"pl+Source",
		"pl+Squirrel",
		"pl+TypeScript",
		"pl+asmdotjs",
	]);

	plb.addReleases([
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
