import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+YAP-Prolog";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "YAP Prolog" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "YAP Prolog",
			href: "https://en.wikipedia.org/wiki/YAP_(Prolog)",
		},
		{
			kind: "homepage",
			title: "www.dcc.fc.up.pt/~vsc/yap/",
			href: "https://www.dcc.fc.up.pt/~vsc/yap/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Perl-Artistic-License-2dot0"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Programming-language"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "6.3.3",
			date: "2013-01-21",
			kind: "stable",
		},
		{
			version: "7.1",
			date: "2016-01-09",
			kind: "preview",
		},
	]);
}
