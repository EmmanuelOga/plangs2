import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+GNU-Octave";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "GNU Octave" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "GNU Octave",
			href: "https://en.wikipedia.org/wiki/GNU_Octave",
		},
		{
			kind: "homepage",
			title: "gnu.org/software/octave/",
			href: "https://gnu.org/software/octave/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+John-Wdot-Eaton", "designer"]]);

	plb.addLicenses(["license+GPL-2dot0-or-later", "license+GPL-3dot0-or-later"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "1.0",
			date: "1993-01-01",
			kind: "first",
		},
		{
			version: "9.1.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
