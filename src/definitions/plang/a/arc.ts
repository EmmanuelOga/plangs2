import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Arc" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Arc";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Arc",
			href: "https://en.wikipedia.org/wiki/Arc_(programming_language)",
		},
		{
			kind: "homepage",
			title: "arclanguage.org",
			href: "http://arclanguage.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".arc"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Paul-Graham", "designer"]]);

	plb.addLicenses(pl, ["license+artistic"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic"]);

	plb.addPlatforms(pl, ["platf+IA-32", "platf+Linux", "platf+x86-64"]);

	plb.addImplementations(pl, ["pl+Racket"]);

	plb.addDialects(pl, ["pl+Lisp"]);

	plb.addInfluences(pl, ["pl+Lisp", "pl+Scheme"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2008-01-29",
			kind: "first",
		},
		{
			version: "3.2",
			date: "2018-10-28",
			kind: "stable",
		},
	]);
}
