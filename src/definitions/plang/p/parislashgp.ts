import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+PARISlashGP";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "PARI/GP" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "PARI/GP",
			href: "https://en.wikipedia.org/wiki/PARI/GP",
		},
		{
			kind: "homepage",
			title: "pari.math.u-bordeaux.fr",
			href: "http://pari.math.u-bordeaux.fr/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Henri-Cohen", "designer"]]);

	plb.addLicenses(["license+GNU-General-Public-License"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "2.15.5", date: "2024-01-01", kind: "stable" }]);
}
