import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Julia";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Julia" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Julia",
			href: "https://en.wikipedia.org/wiki/Julia_(programming_language)",
		},
		{
			kind: "homepage",
			title: "JuliaLang.org",
			href: "https://JuliaLang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".jl"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Alan-Edelman", "designer"],
		["person+Jeff-Bezanson", "designer"],
		["person+Stefan-Karpinski", "designer"],
		["person+Viral-Bdot-Shah", "designer"],
	]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms([
		"para+array",
		"para+functional",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
		"para+structured",
	]);

	plb.addTypeSystems([
		"tsys+dynamic",
		"tsys+inferred",
		"tsys+nominative",
		"tsys+optional",
		"tsys+parametric",
		"tsys+strong",
	]);

	plb.addPlatforms([
		"platf+64-bit",
		"platf+64-bit-Arm",
		"platf+Apple-silicon",
		"platf+Arm",
		"platf+CUDA",
		"platf+FreeBSD",
		"platf+IA-32",
		"platf+Linux",
		"platf+PowerPC",
		"platf+ROCm",
		"platf+Windows",
		"platf+macOS",
		"platf+oneAPI",
		"platf+x86-64",
	]);

	plb.addImplementations(["pl+C", "pl+CPP", "pl+LLVM", "pl+Scheme"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Dylan",
		"pl+Fortress",
		"pl+Lisp",
		"pl+Lua",
		"pl+MATLAB",
		"pl+Mathematica",
		"pl+Perl",
		"pl+Python",
		"pl+R",
		"pl+Ruby",
	]);

	plb.addInfluenced([
		"pl+C",
		"pl+Common-Lisp",
		"pl+Dylan",
		"pl+Lisp",
		"pl+MATLAB--programming-language-MATLAB--software-",
		"pl+Python",
		"pl+R",
		"pl+Ruby",
		"pl+Scheme",
		"pl+Wolfram-Language",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2012-01-01",
			kind: "first",
		},
		{
			version: "1.10.3",
			date: "2022-07-19",
			kind: "stable",
		},
		{
			version: "1.11.0",
			date: "2024-05-30",
			kind: "preview",
		},
	]);
}
