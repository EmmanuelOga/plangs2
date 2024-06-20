import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Clang";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Clang" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Clang_13.0.1_version_information_screenshot.png/220px-Clang_13.0.1_version_information_screenshot.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Clang",
			href: "https://en.wikipedia.org/wiki/Clang",
		},
		{
			kind: "homepage",
			title: "clang.llvm.org",
			href: "https://clang.llvm.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([
		"platf+AArch64",
		"platf+ARMv7",
		"platf+IA-32",
		"platf+ppc64le",
		"platf+x86-64",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2007-09-26",
			kind: "first",
		},
		{
			version: "18.1.6",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
