import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Visual-Basic" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Visual Basic";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Visual_Basic_6.0_logo.png/210px-Visual_Basic_6.0_logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Visual Basic",
			href: "https://en.wikipedia.org/wiki/Visual_Basic",
		},
		{
			kind: "wikipedia",
			title: "Visual Basic",
			href: "https://en.wikipedia.org/wiki/Visual_Basic_(classic)",
		},
		{
			kind: "homepage",
			title:
				"learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
			href: "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+event-driven", "para+objects"]);

	plb.addTypeSystems(pl, ["tsys+static", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+dos", "platf+windows"]);

	plb.addImplementations(pl, ["pl+Microsoft-Visual-Studio"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+BASIC",
		"pl+Basic4android",
		"pl+Basic4ppc",
		"pl+Gambas",
		"pl+Microsoft-BASIC",
		"pl+NS-Basic",
		"pl+QBasic",
		"pl+Visual-Basic-.NET",
		"pl+Visual-Basic-for-Applications",
		"pl+Windows-Forms",
		"pl+Xojo",
	]);

	plb.addInfluenced(pl, [
		"pl+B4x",
		"pl+BASIC",
		"pl+Gambas",
		"pl+Visual-Basic-for-Applications",
	]);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1991-01-01", kind: "first" },
	]);
}
