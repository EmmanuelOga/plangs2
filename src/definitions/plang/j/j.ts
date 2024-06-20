import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+J" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "J";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "J",
			href: "https://en.wikipedia.org/wiki/J_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.jsoftware.com",
			href: "http://www.jsoftware.com",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Roger-Hui", "designer"]]);

	plb.addLicenses(pl, ["license+gpl-3"]);

	plb.addParadigms(pl, [
		"para+array",
		"para+class-based",
		"para+function-level",
		"para+functional",
		"para+object-oriented",
		"para+prototype-based",
		"para+tacit",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic"]);

	plb.addPlatforms(pl, [
		"platf+Android",
		"platf+Cross-platform",
		"platf+Linux",
		"platf+Raspberry-Pi",
		"platf+Windows",
		"platf+iOS",
		"platf+macOS",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+APL", "pl+FL", "pl+NumPy", "pl+SuperCollider"]);

	plb.addInfluenced(pl, ["pl+APL", "pl+FL"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1990-01-01",
			kind: "first",
		},
		{
			version: "9.5",
			date: "2023-12-20",
			kind: "stable",
		},
	]);
}
