import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Dylan" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Dylan";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dylan_logo.png/121px-Dylan_logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Dylan",
			href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)",
		},
		{
			kind: "homepage",
			title: "opendylan.org",
			href: "https://opendylan.org/",
		},
		{
			kind: "wikipedia",
			title: "Dylan",
			href: "https://en.wikipedia.org/wiki/Dylan_programming_language",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, ["dylan", "lid"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, [
		"para+functional",
		"para+multi-paradigm",
		"para+objects",
	]);

	plb.addTypeSystems(pl, ["tsys+gradual", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+Cross-platform", "platf+IA-32", "platf+x86-64"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+ALGOL",
		"pl+CLOS",
		"pl+EuLisp",
		"pl+Julia",
		"pl+Lasso",
		"pl+Python",
		"pl+Ruby",
		"pl+Scheme",
	]);

	plb.addInfluenced(pl, [
		"pl+Common-Lisp",
		"pl+EuLisp",
		"pl+Julia",
		"pl+Lasso",
		"pl+Lisp",
		"pl+NewtonScript",
		"pl+Oaklisp",
		"pl+Python",
		"pl+Ruby",
		"pl+Scheme",
		"pl+Smalltalk",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1992-01-01",
			kind: "first",
		},
		{
			version: "2022.1",
			date: "2022-11-28",
			kind: "stable",
		},
	]);
}
