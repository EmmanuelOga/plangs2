import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Lua";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Lua" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Lua",
			href: "https://en.wikipedia.org/wiki/Lua_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.lua.org",
			href: "https://www.lua.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".lua"]);

	plb.addReferences({});

	plb.addPeople([["person+Roberto-Ierusalimschy", "designer"]]);

	plb.addLicenses(["license+MIT-License"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+prototype-based",
		"para+reflective",
		"para+scripting",
	]);

	plb.addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+ANSI-C", "pl+LuaJIT"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CLU",
		"pl+CPP",
		"pl+Modula",
		"pl+SNOBOL",
		"pl+Scheme",
	]);

	plb.addInfluenced([
		"pl+AWK",
		"pl+CLU",
		"pl+CPP",
		"pl+Haxe",
		"pl+Io",
		"pl+Julia",
		"pl+Lisp",
		"pl+Modula-2",
		"pl+Red",
		"pl+Ring",
		"pl+Ruby",
		"pl+SNOBOL",
		"pl+Scheme",
		"pl+Self",
		"pl+Squirrel",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1993-01-01",
			kind: "first",
		},
		{
			version: "5.4.6",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
