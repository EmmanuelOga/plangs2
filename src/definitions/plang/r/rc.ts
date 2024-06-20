import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+rc";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "rc" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "rc",
			href: "https://en.wikipedia.org/wiki/Rc_(Unix_shell)",
		},
		{
			kind: "homepage",
			title: "doc.cat-v.org/plan_9/4th_edition/papers/rc",
			href: "http://doc.cat-v.org/plan_9/4th_edition/papers/rc",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Tom-Duff", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms(["para+imperative", "para+pipeline"]);

	plb.addTypeSystems(["tsys+weak"]);

	plb.addPlatforms([
		"platf+Cross-platform",
		"platf+Plan-9",
		"platf+Plan-9-from-User-Space",
		"platf+Version-10-Unix",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Bourne-shell", "pl+Inferno"]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "unknown", date: "1989-01-01", kind: "first" }]);
}
