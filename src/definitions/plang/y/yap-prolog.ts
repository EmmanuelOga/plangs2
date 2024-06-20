import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+YAP-Prolog" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "YAP Prolog";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "YAP Prolog",
			href: "https://en.wikipedia.org/wiki/YAP_(Prolog)",
		},
		{
			kind: "homepage",
			title: "www.dcc.fc.up.pt/~vsc/yap/",
			href: "https://www.dcc.fc.up.pt/~vsc/yap/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+perl-artistic-2"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "6.3.3",
			date: "2013-01-21",
			kind: "stable",
		},
		{
			version: "7.1",
			date: "2016-01-09",
			kind: "preview",
		},
	]);
}
