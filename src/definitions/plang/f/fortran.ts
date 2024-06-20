import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Fortran" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Fortran";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Fortran",
			href: "https://en.wikipedia.org/wiki/Fortran",
		},
		{
			kind: "wikipedia",
			title: "Fortran",
			href: "https://en.wikipedia.org/wiki/Fortran_95",
		},
		{
			kind: "homepage",
			title: "fortran-lang.org",
			href: "https://fortran-lang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".f", ".f90", ".for"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+John-Backus", "designer"]]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, [
		"para+array",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
		"para+objects",
		"para+structured",
	]);

	plb.addTypeSystems(pl, ["tsys+manifest", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, [
		"pl+Absoft",
		"pl+Cray",
		"pl+G95",
		"pl+GFortran",
		"pl+Hitachi",
		"pl+IBM",
		"pl+Intel",
		"pl+Numerical-Algorithms-Group",
		"pl+Open-Watcom",
		"pl+Oracle-Solaris-Studio",
		"pl+PGI",
		"pl+PathScale",
		"pl+Silverfrost",
	]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+ALGOL-58",
		"pl+BASIC",
		"pl+C",
		"pl+CMS-2",
		"pl+Chapel",
		"pl+DOPE",
		"pl+Fortress",
		"pl+IDL",
		"pl+MATLAB",
		"pl+MUMPS",
		"pl+PACT-I",
		"pl+PL-SlashI",
		"pl+Ratfor",
		"pl+Speedcoding",
	]);

	plb.addInfluenced(pl, [
		"pl+CMS-2",
		"pl+Chapel",
		"pl+Coral-66",
		"pl+DIBOL",
		"pl+DOPE--Dartmouth-Oversimplified-Programming-Experiment-",
		"pl+Fortress",
		"pl+MATLAB--programming-language-MATLAB--software-",
		"pl+PL-SlashI",
		"pl+Ratfor",
		"pl+S",
		"pl+SISAL",
		"pl+Speedcoding",
		"pl+Verilog",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1957-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2023-11-17",
			kind: "stable",
		},
	]);
}
