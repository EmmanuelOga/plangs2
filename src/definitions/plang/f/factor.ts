import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Factor" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Factor";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/NewFactorLogo.png/200px-NewFactorLogo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Factor",
			href: "https://en.wikipedia.org/wiki/Factor_(programming_language)",
		},
		{
			kind: "homepage",
			title: "factorcode.org",
			href: "http://factorcode.org/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Slava-Pestov", "designer"]]);

	plb.addLicenses(pl, ["license+bsd"]);

	plb.addParadigms(pl, [
		"para+concatenative",
		"para+functional",
		"para+multi-paradigm",
		"para+objects",
		"para+stack-oriented",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+linux", "platf+macos", "platf+windows"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Forth", "pl+Joy", "pl+Lisp", "pl+Self"]);

	plb.addInfluenced(pl, ["pl+Forth", "pl+Joy", "pl+Self"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2003-01-01",
			kind: "first",
		},
		{
			version: "0.99",
			date: "2023-08-24",
			kind: "stable",
		},
	]);
}
