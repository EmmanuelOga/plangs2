import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+IronPython" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "IronPython";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "IronPython",
			href: "https://en.wikipedia.org/wiki/IronPython",
		},
		{
			kind: "homepage",
			title: "ironpython.net",
			href: "https://ironpython.net",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+apache-2"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, ["platf+.NET", "platf+.NET-Framework", "platf+Mono"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2006-09-05",
			kind: "first",
		},
		{
			version: "3.4.1",
			date: "2023-07-12",
			kind: "stable",
		},
		{
			version: "3.4.0",
			date: "2022-04-30",
			kind: "preview",
		},
	]);
}
