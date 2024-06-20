import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Datalog";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Datalog" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Datalog",
			href: "https://en.wikipedia.org/wiki/Datalog",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms(["para+declarative", "para+logic"]);

	plb.addTypeSystems(["tsys+weak"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Prolog", "pl+SQL"]);

	plb.addInfluenced(["pl+Prolog", "pl+SQL--Structured-Query-Language-"]);

	plb.addReleases([{ version: "unknown", date: "1977-01-01", kind: "first" }]);
}
