import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Hy" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Hy";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hy_Cuddles.png/121px-Hy_Cuddles.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Hy",
			href: "https://en.wikipedia.org/wiki/Hy_(programming_language)",
		},
		{
			kind: "homepage",
			title: "hylang.org",
			href: "http://hylang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".hy"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Paul-Tagliamonte", "designer"]]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, ["platf+Cross-platform", "platf+IA-32", "platf+x86-64"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, ["pl+Lisp"]);

	plb.addInfluences(pl, ["pl+Clojure", "pl+Common-Lisp", "pl+Kawa"]);

	plb.addInfluenced(pl, ["pl+Clojure", "pl+LFE"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2013-01-01",
			kind: "first",
		},
		{
			version: "0.29.0",
			date: "2024-01-01",
			kind: "stable",
		},
		{
			version: "1.0",
			date: "2022-03-16",
			kind: "preview",
		},
	]);
}
