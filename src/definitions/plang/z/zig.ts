import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Zig";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Zig" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Zig_logo_2020.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Zig",
			href: "https://en.wikipedia.org/wiki/Zig_(programming_language)",
		},
		{
			kind: "homepage",
			title: "ziglang.org",
			href: "https://ziglang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".zig", ".zir"]);

	plb.addReferences({});

	plb.addPeople([["person+Andrew-Kelley", "designer"]]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms([
		"para+concurrent",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems([
		"tsys+generic",
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms([
		"platf+ARM",
		"platf+ARM64",
		"platf+Cross-platform",
		"platf+FreeBSD",
		"platf+IA-32",
		"platf+Linux",
		"platf+MIPS64",
		"platf+POWERPC64",
		"platf+RISC-V",
		"platf+SPARC64",
		"platf+WebAssembly",
		"platf+Windows",
		"platf+standalone-programs",
		"platf+x86-64",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+C", "pl+Rust"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2016-02-08",
			kind: "first",
		},
		{
			version: "0.13.0",
			date: "2024-01-01",
			kind: "preview",
		},
	]);
}
