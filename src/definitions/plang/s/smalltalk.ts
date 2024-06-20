import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Smalltalk";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Smalltalk" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smalltalk_Balloon.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Smalltalk",
			href: "https://en.wikipedia.org/wiki/Smalltalk",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Adele-Goldberg", "designer"],
		["person+Alan-Kay", "designer"],
		["person+Dan-Ingalls", "designer"],
		["person+Diana-Merry", "designer"],
		["person+Peter-Deutsch", "designer"],
		["person+Ted-Kaehler", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms(["para+object-oriented"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+object-oriented", "tsys+strong"]);

	plb.addPlatforms(["platf+74181", "platf+Cross-platform", "platf+Xerox-Alto"]);

	plb.addImplementations([
		"pl+Amber",
		"pl+Dolphin-Smalltalk",
		"pl+GNU-Smalltalk",
		"pl+GemStoneSlashS",
		"pl+Pharo",
		"pl+Squeak",
		"pl+VA-Smalltalk",
		"pl+VisualWorks",
	]);

	plb.addDialects([
		"pl+Dolphin-Smalltalk",
		"pl+Newspeak",
		"pl+Pharo",
		"pl+Self",
		"pl+Strongtalk",
	]);

	plb.addInfluences([
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

	plb.addInfluenced([
		"pl+Ada",
		"pl+AgentCubes",
		"pl+AgentSheets",
		"pl+AmbientTalk",
		"pl+COBOL",
		"pl+CPP",
		"pl+Ceylon",
		"pl+Claire",
		"pl+Dart",
		"pl+Dolphin-Smalltalk",
		"pl+Emerald",
		"pl+Erlang",
		"pl+Etoys",
		"pl+GemStoneSlashS-Object-Server",
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

	plb.addReleases([
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
