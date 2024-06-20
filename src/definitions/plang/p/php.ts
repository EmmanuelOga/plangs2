import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+PHP" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "PHP";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "PHP",
			href: "https://en.wikipedia.org/wiki/PHP",
		},
		{
			kind: "homepage",
			title: "https://thephp.foundation",
			href: "https://thephp.foundation",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".phar", ".php", ".phps", ".pht", ".phtml"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Rasmus-Lerdorf", "designer"]]);

	plb.addLicenses(pl, ["license+gnu-gpl", "license+php", "license+zend"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+gradual", "tsys+weak"]);

	plb.addPlatforms(pl, [
		"platf+IBM-Z",
		"platf+IBM-i",
		"platf+OpenVMS",
		"platf+Unix-like",
		"platf+Windows",
		"platf+macOS",
	]);

	plb.addImplementations(pl, [
		"pl+C",
		"pl+C-Plus-Plus",
		"pl+HHVM",
		"pl+Parrot",
		"pl+PeachPie",
		"pl+Quercus",
		"pl+Zend-Engine",
	]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+ASP",
		"pl+C",
		"pl+C-Plus-Plus",
		"pl+Hack",
		"pl+JSP",
		"pl+Java",
		"pl+JavaScript",
		"pl+Perl",
		"pl+React-JS",
		"pl+Tcl",
	]);

	plb.addInfluenced(pl, [
		"pl+C",
		"pl+C-Plus-Plus",
		"pl+Hack",
		"pl+Haxe",
		"pl+Java",
		"pl+Smalltalk",
		"pl+Tcl",
		"pl+Umple",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1995-06-08",
			kind: "first",
		},
		{
			version: "8.3.8",
			date: "2024-06-06",
			kind: "stable",
		},
	]);
}
