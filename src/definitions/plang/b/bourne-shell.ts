import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Bourne-shell";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Bourne shell" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png/220px-Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Bourne shell",
			href: "https://en.wikipedia.org/wiki/Bourne_shell",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+rc"]);

	plb.addReleases([{ version: "unknown", date: "1979-01-01", kind: "first" }]);
}
