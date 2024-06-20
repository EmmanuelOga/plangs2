import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Ceylon" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Ceylon";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Ceylon_%28programming_language%29_logo.png/121px-Ceylon_%28programming_language%29_logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Ceylon",
			href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)",
		},
		{
			kind: "homepage",
			title: "ceylon-lang.org",
			href: "http://ceylon-lang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".ceylon"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Gavin-King", "designer"]]);

	plb.addLicenses(pl, ["license+apache-2"]);

	plb.addParadigms(pl, ["para+object-oriented"]);

	plb.addTypeSystems(pl, ["tsys+safe", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+Java-virtual-machine", "platf+JavaScript"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Java",
		"pl+Lisp",
		"pl+ML",
		"pl+Scala",
		"pl+Smalltalk",
		"pl+Whiley",
	]);

	plb.addInfluenced(pl, ["pl+Scala"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2011-01-01",
			kind: "first",
		},
		{
			version: "1.3.3",
			date: "2017-08-21",
			kind: "stable",
		},
	]);
}
