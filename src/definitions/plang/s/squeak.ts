import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Squeak" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Squeak";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".image", ".st"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Adele-Goldberg", "designer"],
		["person+Alan-Kay", "designer"],
		["person+Dan-Ingalls", "designer"],
	]);

	plb.addLicenses(pl, ["license+apache", "license+mit"]);

	plb.addParadigms(pl, ["para+objects"]);

	plb.addTypeSystems(pl, ["tsys+dynamic"]);

	plb.addPlatforms(pl, [
		"platf+Cross-platform",
		"platf+Unix-like",
		"platf+Windows",
		"platf+iOS",
		"platf+macOS",
	]);

	plb.addImplementations(pl, ["pl+Croquet"]);

	plb.addDialects(pl, ["pl+Pharo"]);

	plb.addInfluences(pl, [
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

	plb.addInfluenced(pl, ["pl+Pharo", "pl+Self"]);

	plb.addReleases(pl, [
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
