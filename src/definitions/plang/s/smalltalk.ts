import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Smalltalk" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Smalltalk";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smalltalk_Balloon.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Smalltalk",
			href: "https://en.wikipedia.org/wiki/Smalltalk",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Adele-Goldberg", "designer"],
		["person+Alan-Kay", "designer"],
		["person+Dan-Ingalls", "designer"],
		["person+Diana-Merry", "designer"],
		["person+Peter-Deutsch", "designer"],
		["person+Ted-Kaehler", "designer"],
	]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+objects"]);

	plb.addTypeSystems(pl, [
		"tsys+dynamic",
		"tsys+object-oriented",
		"tsys+strong",
	]);

	plb.addPlatforms(pl, ["platf+74181", "platf+cross-platform"]);

	plb.addImplementations(pl, [
		"pl+Amber",
		"pl+Dolphin-Smalltalk",
		"pl+GNU-Smalltalk",
		"pl+GemStone-SlashS",
		"pl+Pharo",
		"pl+Squeak",
		"pl+VA-Smalltalk",
		"pl+VisualWorks",
	]);

	plb.addDialects(pl, [
		"pl+Dolphin-Smalltalk",
		"pl+Newspeak",
		"pl+Pharo",
		"pl+Self",
		"pl+Strongtalk",
	]);

	plb.addInfluences(pl, [
		"pl+ARPAnet",
		"pl+AppleScript",
		"pl+Burroughs-B5000",
		"pl+Common-Lisp-Object-System",
		"pl+Dart",
		"pl+Dylan",
		"pl+Erlang",
		"pl+Etoys",
		"pl+Euler",
		"pl+Go",
		"pl+Groovy",
		"pl+IMP",
		"pl+Io",
		"pl+Java",
		"pl+Lasso",
		"pl+Lisp",
		"pl+Logo",
		"pl+Logtalk",
		"pl+Newspeak",
		"pl+NewtonScript",
		"pl+Object-REXX",
		"pl+Objective-C",
		"pl+PHP",
		"pl+Planner",
		"pl+Python",
		"pl+Raku",
		"pl+Ruby",
		"pl+Scala",
		"pl+Scratch",
		"pl+Self",
		"pl+Simula",
		"pl+Sketchpad",
		"pl+Swift",
	]);

	plb.addInfluenced(pl, [
		"pl+Ada",
		"pl+AgentCubes",
		"pl+AgentSheets",
		"pl+AmbientTalk",
		"pl+C-Plus-Plus",
		"pl+COBOL",
		"pl+Ceylon",
		"pl+Claire",
		"pl+Dart",
		"pl+Dolphin-Smalltalk",
		"pl+Emerald",
		"pl+Erlang",
		"pl+Etoys",
		"pl+GemStone-SlashS-Object-Server",
		"pl+Go",
		"pl+Groovy",
		"pl+Io",
		"pl+Java",
		"pl+Lasso",
		"pl+Lisp",
		"pl+Logo",
		"pl+Logtalk",
		"pl+MDL",
		"pl+Newspeak",
		"pl+Oaklisp",
		"pl+Object-Pascal",
		"pl+Object-REXX",
		"pl+Objective-C",
		"pl+Orc",
		"pl+Pharo",
		"pl+Pico",
		"pl+Planner",
		"pl+Raku",
		"pl+Ruby",
		"pl+Scala",
		"pl+Scratch",
		"pl+Self",
		"pl+Simula",
		"pl+Snap-",
		"pl+Squeak",
		"pl+Strongtalk",
		"pl+UCBLogo",
		"pl+Wolfram-Language",
		"pl+Xtend",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1972-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "1980-01-01",
			kind: "stable",
		},
	]);
}
