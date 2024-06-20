import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Bash";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Bash" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Bash",
			href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
		},
		{
			kind: "homepage",
			title: "www.gnu.org/software/bash/",
			href: "https://www.gnu.org/software/bash/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Chet-Ramey", "designer"]]);

	plb.addLicenses([
		"license+GPL-1dot0-or-later",
		"license+GPL-2dot0-or-later",
		"license+GPL-3dot0-or-later",
	]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+GNU"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1989-01-01",
			kind: "first",
		},
		{
			version: "5.2.21",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
