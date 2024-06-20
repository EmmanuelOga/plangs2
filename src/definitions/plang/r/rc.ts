import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+rc" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "rc";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Tom-Duff", "designer"]]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+imperative", "para+pipeline"]);

	plb.addTypeSystems(pl, ["tsys+weak"]);

	plb.addPlatforms(pl, [
		"platf+Cross-platform",
		"platf+Plan-9",
		"platf+Plan-9-from-User-Space",
		"platf+Version-10-Unix",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Bourne-shell", "pl+Inferno"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1989-01-01", kind: "first" },
	]);
}
