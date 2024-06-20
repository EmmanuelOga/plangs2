import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Euphoria" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Euphoria";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/OpenEuphoria_logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Euphoria",
			href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)",
		},
		{
			kind: "homepage",
			title: "openeuphoria.org",
			href: "http://openeuphoria.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".e", ".edb", ".ex", ".exw"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Derek-Parnell", "designer"],
		["person+Jeremy-Cowgar", "designer"],
		["person+Matt-Lewis", "designer"],
	]);

	plb.addLicenses(pl, ["license+bsd"]);

	plb.addParadigms(pl, ["para+imperative"]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+static"]);

	plb.addPlatforms(pl, [
		"platf+Cross-platform",
		"platf+FreeBSD",
		"platf+Linux",
		"platf+NetBSD",
		"platf+OpenBSD",
		"platf+Win32",
		"platf+macOS",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+BASIC"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1993-01-01",
			kind: "first",
		},
		{
			version: "4.1.0",
			date: "2021-03-01",
			kind: "stable",
		},
	]);
}
