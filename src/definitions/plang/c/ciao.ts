import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Ciao" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Ciao";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Logo_for_Ciao_programming_language.png/121px-Logo_for_Ciao_programming_language.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Ciao",
			href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.ciao-lang.org",
			href: "http://www.ciao-lang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+gpl", "license+lgpl"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+logic",
		"para+modular",
		"para+objects",
	]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, [
		"platf+cross-platform",
		"platf+macos",
		"platf+unix",
		"platf+windows",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Prolog"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1984-01-01", kind: "first" },
	]);
}
