import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Pascal";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Pascal" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Pascal",
			href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Niklaus-Wirth", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms(["para+imperative", "para+structured"]);

	plb.addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([
		"pl+BSD",
		"pl+CDC-6000",
		"pl+Embarcadero-Delphi",
		"pl+Free-Pascal",
		"pl+GNU-Pascal",
		"pl+IBM-SystemSlash370",
		"pl+ICL-1900",
		"pl+PDP-10",
		"pl+PDP-11",
		"pl+Pascal-P",
		"pl+VSI-Pascal",
	]);

	plb.addDialects([
		"pl+Ada",
		"pl+Clarion",
		"pl+Concurrent-Pascal",
		"pl+Object-Pascal",
		"pl+PLANC",
	]);

	plb.addInfluences([
		"pl+-2",
		"pl+-3",
		"pl+ALGOL-W",
		"pl+Ada",
		"pl+CSharp",
		"pl+CSlashAL",
		"pl+Component-Pascal",
		"pl+Go",
		"pl+Java",
		"pl+Modula",
		"pl+Oberon",
		"pl+Object-Pascal",
		"pl+Oxygene",
		"pl+Power-Fx",
		"pl+Seed7",
		"pl+Simula",
		"pl+Standard-ML",
		"pl+Structured-text",
		"pl+VHDL",
	]);

	plb.addInfluenced([
		"pl+A-",
		"pl+ALGOL",
		"pl+ALGOL-60",
		"pl+ALGOL-W",
		"pl+Ada",
		"pl+Aldor",
		"pl+COMAL",
		"pl+CSlashAL",
		"pl+Charm",
		"pl+Component-Pascal",
		"pl+Concurrent-Pascal",
		"pl+Draco",
		"pl+Emerald",
		"pl+Euclid",
		"pl+Go",
		"pl+HyperTalk",
		"pl+KUKA-Robot-Language",
		"pl+Karel-the-Robot",
		"pl+Limbo",
		"pl+Microsoft-Power-Fx",
		"pl+Modula",
		"pl+Modula-2",
		"pl+Modula-2P",
		"pl+Modula-3",
		"pl+OCaml",
		"pl+Object-Pascal",
		"pl+ParaSail",
		"pl+Pascal-Script",
		"pl+Plus",
		"pl+SISAL",
		"pl+Seed7",
		"pl+Simula",
		"pl+Standard-ML",
		"pl+Transaction-Programming-Language--TAL-",
		"pl+VHDL",
		"pl+Verilog",
		"pl+Wolfram-Language",
		"pl+Zonnon",
	]);

	plb.addReleases([{ version: "unknown", date: "1970-01-01", kind: "first" }]);
}
