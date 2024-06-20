import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Ring" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Ring";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ringlogo_transparent.png/121px-Ringlogo_transparent.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Ring",
			href: "https://en.wikipedia.org/wiki/Ring_(programming_language)",
		},
		{
			kind: "homepage",
			title: "http://ring-lang.net",
			href: "http://ring-lang.net",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".rform", ".rh", ".ring"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Mahmoud-Samir-Fayed", "designer"]]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, [
		"para+declarative",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+natural-language",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic"]);

	plb.addPlatforms(pl, ["platf+Linux", "platf+Windows", "platf+macOS"]);

	plb.addImplementations(pl, ["pl+C"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+BASIC",
		"pl+C",
		"pl+C-Sharp",
		"pl+DragonLang",
		"pl+Lua",
		"pl+Python",
		"pl+QML",
		"pl+Ruby",
		"pl+SimpleLang",
		"pl+xBase",
	]);

	plb.addInfluenced(pl, ["pl+Python", "pl+QML", "pl+Ruby"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2016-01-25",
			kind: "first",
		},
		{
			version: "1.20",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
