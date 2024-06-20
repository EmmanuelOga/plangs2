import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Scilab" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Scilab";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Scilab",
			href: "https://en.wikipedia.org/wiki/Scilab",
		},
		{
			kind: "wikipedia",
			title: "Scilab",
			href: "https://en.wikipedia.org/wiki/Xcos",
		},
		{
			kind: "homepage",
			title: "www.scilab.org",
			href: "https://www.scilab.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Dassault-Systemes", "designer"]]);

	plb.addLicenses(pl, ["license+cecill", "license+gpl-2"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, ["pl+MATLAB-(programming-language)MATLAB-(software)"]);

	plb.addReleases(pl, [
		{ version: "2024.1.0", date: "2024-01-01", kind: "stable" },
	]);
}
