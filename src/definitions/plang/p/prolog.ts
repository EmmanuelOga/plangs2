import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Prolog";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Prolog" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([".P", ".pl", ".pro"]);

	plb.addReferences({});

	plb.addPeople([["person+Alain-Colmerauer", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms(["para+logic"]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([
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

	plb.addDialects(["pl+Datalog"]);

	plb.addInfluences([
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

	plb.addInfluenced([
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

	plb.addReleases([
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
