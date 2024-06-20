import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Hack" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Hack";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Hack",
			href: "https://en.wikipedia.org/wiki/Hack_(programming_language)",
		},
		{
			kind: "homepage",
			title: "hacklang.org",
			href: "https://hacklang.org/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Alok-Menghrajani", "designer"],
		["person+Drew-Paroski", "designer"],
		["person+Julien-Verlaguet", "designer"],
		["person+Meta-Platforms", "designer"],
	]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, [
		"tsys+dynamic",
		"tsys+gradual",
		"tsys+static",
		"tsys+weak",
	]);

	plb.addPlatforms(pl, ["platf+cross-platform"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+C-Sharp",
		"pl+Haskell",
		"pl+Java",
		"pl+OCaml",
		"pl+PHP",
		"pl+Scala",
	]);

	plb.addInfluenced(pl, ["pl+Java", "pl+PHP"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2014-01-01",
			kind: "first",
		},
		{
			version: "4.172",
			date: "2022-01-01",
			kind: "stable",
		},
	]);
}
