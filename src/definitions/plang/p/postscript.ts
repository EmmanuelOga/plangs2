import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+PostScript" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "PostScript";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Adobe_PostScript_3_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "PostScript",
			href: "https://en.wikipedia.org/wiki/PostScript",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Bill-Paxton", "designer"],
		["person+Chuck-Geschke", "designer"],
		["person+John-Warnock", "designer"],
	]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, [
		"para+concatenative",
		"para+imperative",
		"para+multi-paradigm",
		"para+stack-oriented",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+weak"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, ["pl+Ghostscript", "pl+TrueImage"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Interpress", "pl+Lisp", "pl+Mesa", "pl+PDF"]);

	plb.addInfluenced(pl, ["pl+Mesa[1]"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1982-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "1997-01-01",
			kind: "stable",
		},
	]);
}
