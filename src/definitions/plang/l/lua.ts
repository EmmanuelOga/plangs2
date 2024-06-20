import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Lua" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Lua";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".lua"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Roberto-Ierusalimschy", "designer"]]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
		"para+objects",
		"para+prototypes",
		"para+reflective",
		"para+scripting",
	]);

	plb.addTypeSystems(pl, ["tsys+duck", "tsys+dynamic", "tsys+weak"]);

	plb.addPlatforms(pl, ["platf+Cross-platform"]);

	plb.addImplementations(pl, ["pl+ANSI-C", "pl+LuaJIT"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+C-Plus-Plus",
		"pl+CLU",
		"pl+Modula",
		"pl+SNOBOL",
		"pl+Scheme",
	]);

	plb.addInfluenced(pl, [
		"pl+AWK",
		"pl+C-Plus-Plus",
		"pl+CLU",
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

	plb.addReleases(pl, [
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
