import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+QB64" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "QB64";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/QB64-1-4-logo-hd-transparency.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "QB64",
			href: "https://en.wikipedia.org/wiki/QB64",
		},
		{
			kind: "homepage",
			title: "www.qb64.com",
			href: "http://www.qb64.com",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Rob-Galleon", "designer"]]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, [
		"platf+Linux",
		"platf+Microsoft-Windows",
		"platf+macOS",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+QBASIC", "pl+QuickBASIC"]);

	plb.addInfluenced(pl, ["pl+QBasic"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2007-09-08",
			kind: "first",
		},
		{
			version: "2.0.2",
			date: "2021-11-07",
			kind: "stable",
		},
	]);
}
