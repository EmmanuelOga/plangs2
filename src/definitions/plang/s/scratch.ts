import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Scratch";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Scratch" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Scratchlogo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Scratch",
			href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)",
		},
		{
			kind: "homepage",
			title: "scratch.mit.edu",
			href: "https://scratch.mit.edu/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".sb", ".sb2", ".sb3"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+BSD-3-Clause", "license+GPLv2"]);

	plb.addParadigms(["para+event-driven", "para+visual"]);

	plb.addTypeSystems([]);

	plb.addPlatforms([
		"platf+Android",
		"platf+HTML5",
		"platf+Linux",
		"platf+Microsoft-Windows",
		"platf+iOS",
		"platf+iPadOS",
		"platf+macOS",
	]);

	plb.addImplementations([
		"pl+ActionScript",
		"pl+HTML5",
		"pl+JavaScript",
		"pl+Squeak",
	]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+AgentCubes",
		"pl+AgentSheets",
		"pl+Catrobat",
		"pl+Etoys",
		"pl+HyperCard",
		"pl+Logo",
		"pl+ScratchJr",
		"pl+Smalltalk",
		"pl+Snap-",
		"pl+StarLogo",
		"pl+Turtlestitch",
		"pl+mBlock",
	]);

	plb.addInfluenced([
		"pl+AgentCubes",
		"pl+AgentSheets",
		"pl+Etoys",
		"pl+Logo",
		"pl+Smalltalk",
		"pl+Snap-",
		"pl+Squeak",
		"pl+TurtleStitch",
		"pl+UCBLogo",
	]);

	plb.addReleases([
		{
			version: "0.1",
			date: "2003-10-11",
			kind: "first",
		},
		{
			version: "3.0",
			date: "2019-01-02",
			kind: "stable",
		},
	]);
}
