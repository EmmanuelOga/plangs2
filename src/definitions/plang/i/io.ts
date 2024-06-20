import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Io" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Io";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Io-logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Io",
			href: "https://en.wikipedia.org/wiki/Io_(programming_language)",
		},
		{
			kind: "homepage",
			title: "iolanguage.org",
			href: "https://iolanguage.org/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Jeremy-Tregunna", "designer"],
		["person+Jonathan-Wright", "designer"],
		["person+Steve-Dekorte", "designer"],
	]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+objects", "para+prototypes"]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Act1",
		"pl+Lisp",
		"pl+Lua",
		"pl+NewtonScript",
		"pl+Python",
		"pl+Self",
		"pl+Smalltalk",
	]);

	plb.addInfluenced(pl, [
		"pl+Lisp",
		"pl+NewtonScript",
		"pl+Self",
		"pl+Smalltalk",
		"pl+urbiscript",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2002-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2017-08-11",
			kind: "stable",
		},
	]);
}
