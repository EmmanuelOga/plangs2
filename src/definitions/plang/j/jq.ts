import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+jq" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "jq";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "jq",
			href: "https://en.wikipedia.org/wiki/Jq_(programming_language)",
		},
		{
			kind: "repository",
			title: "jqlang.github.io/jq",
			href: "https://jqlang.github.io/jq",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Stephen-Dolan", "designer"]]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, ["para+functional", "para+json", "para+tacit"]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, ["platf+cross-platform"]);

	plb.addImplementations(pl, ["pl+C", "pl+Go", "pl+Rust"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, ["pl+Icon"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2012-08-21",
			kind: "first",
		},
		{
			version: "1.7.1",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
