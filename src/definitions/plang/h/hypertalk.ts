import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+HyperTalk";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "HyperTalk" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "HyperTalk",
			href: "https://en.wikipedia.org/wiki/HyperTalk",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms(["para+event-driven", "para+imperative"]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
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

	plb.addInfluenced([
		"pl+ActionScript",
		"pl+AppleScript",
		"pl+ECMAScript",
		"pl+JavaScript",
		"pl+LiveCodeLiveCode-Script",
		"pl+SenseTalk",
	]);

	plb.addReleases([{ version: "unknown", date: "1987-01-01", kind: "first" }]);
}
