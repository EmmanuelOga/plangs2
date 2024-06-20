import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+C" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "C";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "C",
    "href": "https://en.wikipedia.org/wiki/C_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "www.iso.org/standard/74528.html",
    "href": "https://www.iso.org/standard/74528.html"
  },
  {
    "kind": "homepage",
    "title": "www.open-std.org/jtc1/sc22/wg14/",
    "href": "http://www.open-std.org/jtc1/sc22/wg14/"
  },
  {
    "kind": "wikipedia",
    "title": "C",
    "href": "https://en.wikipedia.org/wiki/List_of_C-based_programming_languages"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".c",".h"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Dennis-Ritchie","designer"]]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, ["para+imperative","para+multi-paradigm","para+structured"]);

   plb.addTypeSystems(pl, ["tsys+manifest","tsys+nominative","tsys+static","tsys+weak"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, [
  "pl+C-Plus-PlusBuilder",
  "pl+Clang",
  "pl+GCC",
  "pl+Intel-C",
  "pl+Microsoft-Visual-C-Plus-Plus",
  "pl+Watcom-C",
  "pl+pcc"
]);

   plb.addDialects(pl, [
  "pl+C-Plus-Plus",
  "pl+Carbon",
  "pl+Objective-C",
  "pl+OpenCL-APIOpenCL-C-SlashC-Plus-Plus-and-C-Plus-Plus-for-OpenCL"
]);

   plb.addInfluences(pl, [
  "pl+ALGOL-68",
  "pl+AMPL",
  "pl+AWK",
  "pl+B",
  "pl+BCPL",
  "pl+C--",
  "pl+C-Plus-Plus",
  "pl+C-Sharp",
  "pl+CPL",
  "pl+D",
  "pl+FORTRAN",
  "pl+Go",
  "pl+JS-Plus-Plus",
  "pl+Java",
  "pl+JavaScript",
  "pl+Julia",
  "pl+LPC",
  "pl+Limbo",
  "pl+Nim",
  "pl+Numerous",
  "pl+Objective-C",
  "pl+PHP",
  "pl+PL-SlashI",
  "pl+Perl",
  "pl+Pike",
  "pl+Processing",
  "pl+Python",
  "pl+Rust",
  "pl+Seed7",
  "pl+V--Vlang-",
  "pl+Vala",
  "pl+Verilog",
  "pl+Zig",
  "pl+csh"
]);

   plb.addInfluenced(pl, [
  "pl+ALGOL",
  "pl+ALGOL-60",
  "pl+AMPL",
  "pl+AWK",
  "pl+Alef",
  "pl+B",
  "pl+BCPL",
  "pl+C--",
  "pl+C-Plus-Plus",
  "pl+Cg-SlashHLSL",
  "pl+Chapel",
  "pl+Charm",
  "pl+CilkOpenCilkCilk-Plus",
  "pl+Claire",
  "pl+Crystal",
  "pl+Cyclone",
  "pl+Cython",
  "pl+D-programming-language",
  "pl+Dart",
  "pl+Draco",
  "pl+ECMAScript",
  "pl+Embeddable-Common-Lisp",
  "pl+Fortran",
  "pl+FreeBASIC",
  "pl+Go",
  "pl+Godot-EngineGDScript",
  "pl+Handel-C",
  "pl+JS-Plus-Plus",
  "pl+Limbo",
  "pl+Newsqueak",
  "pl+OCaml",
  "pl+Objective-C",
  "pl+PCASTL",
  "pl+PHP",
  "pl+PROMAL",
  "pl+Perl",
  "pl+Pike",
  "pl+Python",
  "pl+QuakeC",
  "pl+RAPID",
  "pl+Ratfor",
  "pl+Ring",
  "pl+S",
  "pl+SAC",
  "pl+SISAL",
  "pl+Seed7",
  "pl+Speedcoding",
  "pl+Split-C",
  "pl+Swift",
  "pl+Transaction-Programming-Language--TAL-",
  "pl+Unified-Parallel-C--UPC-",
  "pl+Vala",
  "pl+Verilog",
  "pl+Whiley",
  "pl+Wolfram-Language",
  "pl+ZPL",
  "pl+bs",
  "pl+eC",
  "pl+newLISP"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1972-01-01",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "2018-01-01",
    "kind": "stable"
  },
  {
    "version": "unknown",
    "date": "2024-02-21",
    "kind": "preview"
  }
]);
}