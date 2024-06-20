import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Bash" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Bash";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Chet-Ramey", "designer"]]);

	plb.addLicenses(pl, ["license+gpl-1", "license+gpl-2", "license+gpl-3"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, ["platf+gnu"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
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
