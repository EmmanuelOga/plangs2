import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Perl" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Perl";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Perl",
    "href": "https://en.wikipedia.org/wiki/Perl"
  },
  {
    "kind": "homepage",
    "title": "perl.org",
    "href": "https://www.perl.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".cgi",".pl",".pls",".plx",".pm",".pod",".psgi",".t",".xs"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Larry-Wall","designer"]]);

   plb.addLicenses(pl, ["license+artistic","license+gnu-gpl"]);

   plb.addParadigms(pl, ["para+multi-paradigm"]);

   plb.addTypeSystems(pl, ["tsys+dynamic"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, ["pl+C"]);

   plb.addDialects(pl, ["pl+Raku"]);

   plb.addInfluences(pl, [
  "pl+AWK",
  "pl+BASIC",
  "pl+C",
  "pl+C-Plus-Plus",
  "pl+Lisp",
  "pl+Unix-shell",
  "pl+sed"
]);

   plb.addInfluenced(pl, [
  "pl+AWK",
  "pl+BeanShell",
  "pl+C",
  "pl+C-Plus-Plus",
  "pl+ECMAScript",
  "pl+Julia",
  "pl+Lisp",
  "pl+PHP",
  "pl+Perl-Data-Language--PDL-",
  "pl+PowerShell",
  "pl+Python",
  "pl+Qore",
  "pl+Raku",
  "pl+Ruby",
  "pl+newLISP",
  "pl+sed"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1987-12-18",
    "kind": "first"
  },
  {
    "version": "5.40.0",
    "date": "2024-06-09",
    "kind": "stable"
  },
  {
    "version": "5.39.10",
    "date": "2024-04-27",
    "kind": "preview"
  }
]);
}