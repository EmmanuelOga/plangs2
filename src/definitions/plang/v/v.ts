import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+V" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "V";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "V",
			href: "https://en.wikipedia.org/wiki/V_(programming_language)",
		},
		{
			kind: "homepage",
			title: "vlang.io",
			href: "http://vlang.io",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".v", ".vsh"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Alexander-Medvednikov", "designer"]]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, [
		"para+concurrent",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+structured",
	]);

	plb.addTypeSystems(pl, ["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(pl, [
		"platf+DragonflyBSD",
		"platf+FreeBSD",
		"platf+Linux",
		"platf+NetBSD",
		"platf+OpenBSD",
		"platf+Solaris",
		"platf+Windows",
		"platf+macOS",
		"platf+x86-64",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Go",
		"pl+Kotlin",
		"pl+Oberon",
		"pl+Python",
		"pl+Rust",
		"pl+Swift",
	]);

	plb.addInfluenced(pl, ["pl+Rust"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2019-06-20",
			kind: "first",
		},
		{
			version: "0.4.5",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
