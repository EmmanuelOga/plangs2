import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Datalog" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Datalog";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Datalog",
			href: "https://en.wikipedia.org/wiki/Datalog",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+declarative", "para+logic"]);

	plb.addTypeSystems(pl, ["tsys+weak"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Prolog", "pl+SQL"]);

	plb.addInfluenced(pl, ["pl+Prolog", "pl+SQL-(Structured-Query-Language)"]);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1977-01-01", kind: "first" },
	]);
}
