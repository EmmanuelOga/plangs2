import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Pyomo" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Pyomo";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pyomo_Logo_Without_Text.png/121px-Pyomo_Logo_Without_Text.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Pyomo",
			href: "https://en.wikipedia.org/wiki/Pyomo",
		},
		{
			kind: "homepage",
			title: "www.pyomo.org",
			href: "https://www.pyomo.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".py"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Carl-Laird", "designer"],
		["person+David-Woodruff", "designer"],
		["person+Gabriel-Hackebeil", "designer"],
		["person+Jean-Paul-Watson", "designer"],
		["person+John-Siirola", "designer"],
		["person+William-E-Hart", "designer"],
	]);

	plb.addLicenses(pl, ["license+bsd"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, [
		"platf+Cross-platform",
		"platf+Linux",
		"platf+Mac-OS-X",
		"platf+Windows",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+AMPL",
		"pl+General-Algebraic-Modeling-System",
		"pl+Python",
	]);

	plb.addInfluenced(pl, ["pl+AMPL"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "6.4.2",
			date: "2022-08-17",
			kind: "stable",
		},
	]);
}
