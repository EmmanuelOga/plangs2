import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Xtend" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Xtend";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Xtend-logo-c.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Xtend",
			href: "https://en.wikipedia.org/wiki/Xtend",
		},
		{
			kind: "homepage",
			title: "eclipse.dev/Xtext/xtend/",
			href: "https://eclipse.dev/Xtext/xtend/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Sebastian-Zarnekow", "designer"],
		["person+Sven-Efftinge", "designer"],
	]);

	plb.addLicenses(pl, ["license+eclipse-public"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+object-oriented",
	]);

	plb.addTypeSystems(pl, ["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+Cross-platform", "platf+Java-Virtual-Machine"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Groovy", "pl+Java", "pl+Scala", "pl+Smalltalk"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2011-01-01",
			kind: "first",
		},
		{
			version: "2.25.0",
			date: "2021-03-02",
			kind: "stable",
		},
	]);
}
