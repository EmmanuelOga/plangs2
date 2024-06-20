import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Fortran";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Fortran" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([".f", ".f90", ".for"]);

	plb.addReferences({});

	plb.addPeople([["person+John-Backus", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+array",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+structured",
	]);

	plb.addTypeSystems(["tsys+manifest", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([
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

	plb.addDialects([]);

	plb.addInfluences([
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
		"pl+PLSlashI",
		"pl+Ratfor",
		"pl+Speedcoding",
	]);

	plb.addInfluenced([
		"pl+CMS-2",
		"pl+Chapel",
		"pl+Coral-66",
		"pl+DIBOL",
		"pl+DOPE--Dartmouth-Oversimplified-Programming-Experiment-",
		"pl+Fortress",
		"pl+MATLAB--programming-language-MATLAB--software-",
		"pl+PLSlashI",
		"pl+Ratfor",
		"pl+S",
		"pl+SISAL",
		"pl+Speedcoding",
		"pl+Verilog",
	]);

	plb.addReleases([
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
