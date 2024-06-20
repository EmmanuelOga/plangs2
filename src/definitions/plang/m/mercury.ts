import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Mercury" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Mercury";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Mercury_%28programming_language%29_logo.jpg/121px-Mercury_%28programming_language%29_logo.jpg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Mercury",
			href: "https://en.wikipedia.org/wiki/Mercury_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.mercurylang.org",
			href: "http://www.mercurylang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".m"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Zoltan-Somogyi", "designer"]]);

	plb.addLicenses(pl, ["license+gpl", "license+lgpl"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, ["tsys+polymorphic", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(pl, [
		"platf+Android",
		"platf+Arm",
		"platf+CLI",
		"platf+Cross-platform",
		"platf+FreeBSD",
		"platf+IA-32",
		"platf+Java",
		"platf+Linux",
		"platf+OpenBSD",
		"platf+Solaris",
		"platf+Sparc64",
		"platf+Unix",
		"platf+Windows",
		"platf+macOS",
		"platf+x86-64",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Haskell", "pl+Hope", "pl+Prolog"]);

	plb.addInfluenced(pl, ["pl+Prolog"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1995-04-08",
			kind: "first",
		},
		{
			version: "22.01.8",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
