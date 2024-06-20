import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Cython" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Cython";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Cython",
			href: "https://en.wikipedia.org/wiki/Cython",
		},
		{
			kind: "homepage",
			title: "cython.org",
			href: "https://cython.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".pxd", ".pxi", ".pyx"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Robert-Bradshaw", "designer"],
		["person+Stefan-Behnel", "designer"],
	]);

	plb.addLicenses(pl, ["license+apache-2"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, ["platf+Linux", "platf+Windows", "platf+macOS"]);

	plb.addImplementations(pl, ["pl+Python"]);

	plb.addDialects(pl, ["pl+Python"]);

	plb.addInfluences(pl, ["pl+C", "pl+Python"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2007-07-28",
			kind: "first",
		},
		{
			version: "3.0.10",
			date: "2024-01-01",
			kind: "stable",
		},
		{
			version: "3.0.0",
			date: "2023-03-27",
			kind: "preview",
		},
	]);
}
