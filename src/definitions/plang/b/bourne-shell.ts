import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Bourne-shell" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Bourne shell";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png/220px-Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Bourne shell",
			href: "https://en.wikipedia.org/wiki/Bourne_shell",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, ["pl+rc"]);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1979-01-01", kind: "first" },
	]);
}
