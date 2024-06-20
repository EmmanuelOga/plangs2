import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Cython";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Cython" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([".pxd", ".pxi", ".pyx"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Robert-Bradshaw", "designer"],
		["person+Stefan-Behnel", "designer"],
	]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Linux", "platf+Windows", "platf+macOS"]);

	plb.addImplementations(["pl+Python"]);

	plb.addDialects(["pl+Python"]);

	plb.addInfluences(["pl+C", "pl+Python"]);

	plb.addInfluenced([]);

	plb.addReleases([
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
