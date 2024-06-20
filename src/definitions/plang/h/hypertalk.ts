import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+HyperTalk" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "HyperTalk";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "HyperTalk",
			href: "https://en.wikipedia.org/wiki/HyperTalk",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+event-driven", "para+imperative"]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+ActionScript",
		"pl+AppleScript",
		"pl+ECMAScript",
		"pl+JavaScript",
		"pl+Lingo",
		"pl+LiveCode",
		"pl+Natural-language-programming",
		"pl+Pascal",
		"pl+SenseTalk",
		"pl+SuperTalk",
	]);

	plb.addInfluenced(pl, [
		"pl+ActionScript",
		"pl+AppleScript",
		"pl+ECMAScript",
		"pl+JavaScript",
		"pl+LiveCodeLiveCode-Script",
		"pl+SenseTalk",
	]);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1987-01-01", kind: "first" },
	]);
}
