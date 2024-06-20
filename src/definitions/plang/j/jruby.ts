import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+JRuby" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "JRuby";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JRuby_logo.png/200px-JRuby_logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "JRuby",
			href: "https://en.wikipedia.org/wiki/JRuby",
		},
		{
			kind: "homepage",
			title: "www.jruby.org",
			href: "https://www.jruby.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Charles-Oliver-Nutter", "designer"],
		["person+Nick-Sieger", "designer"],
		["person+Ola-Bini", "designer"],
		["person+Thomas-Enebo", "designer"],
	]);

	plb.addLicenses(pl, [
		"license+eclipse-public",
		"license+gpl",
		"license+lgpl",
	]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, ["platf+jvm"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2001-01-01",
			kind: "first",
		},
		{
			version: "9.4.5.0",
			date: "2023-11-02",
			kind: "stable",
		},
	]);
}
