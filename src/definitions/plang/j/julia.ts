import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Julia" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Julia";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".jl"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Alan-Edelman", "designer"],
		["person+Jeff-Bezanson", "designer"],
		["person+Stefan-Karpinski", "designer"],
		["person+Viral-B.-Shah", "designer"],
	]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, [
		"para+array",
		"para+functional",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
		"para+structured",
	]);

	plb.addTypeSystems(pl, [
		"tsys+dynamic",
		"tsys+inferred",
		"tsys+nominative",
		"tsys+optional",
		"tsys+parametric",
		"tsys+strong",
	]);

	plb.addPlatforms(pl, [
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

	plb.addImplementations(pl, [
		"pl+C",
		"pl+C-Plus-Plus",
		"pl+LLVM",
		"pl+Scheme",
	]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
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

	plb.addInfluenced(pl, [
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

	plb.addReleases(pl, [
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
