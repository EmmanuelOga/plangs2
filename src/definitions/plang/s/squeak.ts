import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Squeak";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Squeak" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Squeak",
			href: "https://en.wikipedia.org/wiki/Squeak",
		},
		{
			kind: "homepage",
			title: "www.squeak.org",
			href: "http://www.squeak.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".image", ".st"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Adele-Goldberg", "designer"],
		["person+Alan-Kay", "designer"],
		["person+Dan-Ingalls", "designer"],
	]);

	plb.addLicenses(["license+Apache", "license+MIT"]);

	plb.addParadigms(["para+object-oriented"]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms([
		"platf+Cross-platform",
		"platf+Unix-like",
		"platf+Windows",
		"platf+iOS",
		"platf+macOS",
	]);

	plb.addImplementations(["pl+Croquet"]);

	plb.addDialects(["pl+Pharo"]);

	plb.addInfluences([
		"pl+Croquet",
		"pl+Etoys",
		"pl+Lisp",
		"pl+Logo",
		"pl+Scratch",
		"pl+Self",
		"pl+Simula",
		"pl+Sketchpad",
		"pl+Smalltalk",
	]);

	plb.addInfluenced(["pl+Pharo", "pl+Self"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1996-01-01",
			kind: "first",
		},
		{
			version: "0.133",
			date: "2023-12-20",
			kind: "stable",
		},
	]);
}
