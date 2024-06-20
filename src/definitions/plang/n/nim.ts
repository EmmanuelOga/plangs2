import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Nim" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Nim";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Nim",
    "href": "https://en.wikipedia.org/wiki/Nim_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "nim-lang.org",
    "href": "http://nim-lang.org"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".nim",".nimble",".nims"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Andreas-Rumpf","designer"]]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, [
  "para+compiled",
  "para+concurrent",
  "para+functional",
  "para+imperative",
  "para+meta",
  "para+multi-paradigm",
  "para+objects"
]);

   plb.addTypeSystems(pl, ["tsys+inferred","tsys+static","tsys+strong","tsys+structural"]);

   plb.addPlatforms(pl, [
  "platf+ARM",
  "platf+Aarch64",
  "platf+Cross-platform",
  "platf+IA-32",
  "platf+PowerPC",
  "platf+RISC-V",
  "platf+x86-64"
]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, [
  "pl+Ada",
  "pl+C-Plus-Plus",
  "pl+Lisp",
  "pl+Modula-3",
  "pl+Oberon",
  "pl+Object-Pascal",
  "pl+ParaSail",
  "pl+Python",
  "pl+Rust"
]);

   plb.addInfluenced(pl, [
  "pl+Ada",
  "pl+C",
  "pl+C-Plus-Plus",
  "pl+Lisp",
  "pl+Modula-3",
  "pl+Oberon",
  "pl+Oberon-2",
  "pl+Object-Pascal",
  "pl+ParaSail",
  "pl+Python"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2008-01-01",
    "kind": "first"
  },
  {
    "version": "2.0.4",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}