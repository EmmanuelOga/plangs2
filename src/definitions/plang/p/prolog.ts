import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Prolog" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Prolog";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Prolog",
			href: "https://en.wikipedia.org/wiki/Prolog",
		},
		{
			kind: "homepage",
			title: "www.iso.org/standard/21413.html",
			href: "https://www.iso.org/standard/21413.html",
		},
		{
			kind: "homepage",
			title: "www.iso.org/standard/20775.html",
			href: "https://www.iso.org/standard/20775.html",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".P", ".pl", ".pro"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Alain-Colmerauer", "designer"]]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+logic"]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, [
		"pl+B-Prolog",
		"pl+Ciao",
		"pl+ECLiPSe",
		"pl+GNU-Prolog",
		"pl+LPA-Prolog",
		"pl+Poplog",
		"pl+Quintus-Prolog",
		"pl+SWI-Prolog",
		"pl+XSB",
		"pl+YAP",
	]);

	plb.addDialects(pl, ["pl+Datalog"]);

	plb.addInfluences(pl, [
		"pl+CHR",
		"pl+Clojure",
		"pl+Datalog",
		"pl+Erlang",
		"pl+KL0",
		"pl+KL1",
		"pl+Logtalk",
		"pl+Mercury",
		"pl+Oz",
		"pl+Planner",
		"pl+Strand",
		"pl+Visual-Prolog",
	]);

	plb.addInfluenced(pl, [
		"pl+ALF",
		"pl+Ciao",
		"pl+Clojure",
		"pl+Constraint-Handling-Rules--CHR-",
		"pl+Curry",
		"pl+Datalog",
		"pl+Erlang",
		"pl+Go-",
		"pl+Logtalk",
		"pl+MDL",
		"pl+Mercury",
		"pl+Oz",
		"pl+Planner",
		"pl+Wolfram-Language",
		"pl+XSB",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1972-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "1995-01-01",
			kind: "stable",
		},
	]);
}
