import type { PlangsGraph } from '../../../entities/plangs_graph';

export const lang_vid = 'pl+Python';

export function define(g: PlangsGraph) {
   const pl = g.v_plang.merge(lang_vid, { name: 'Python' });
   const plb = g.plangBuilder(pl);

   plb.addImages([
      {
         "kind": "logo",
         "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
      }
   ]);

   plb.addWebsites([
      {
         "kind": "wikipedia",
         "title": "Python",
         "href": "https://en.wikipedia.org/wiki/Python_(programming_language)"
      }
      ,
      {
         "kind": "homepage",
         "title": "python.org",
         "href": "https://www.python.org/"
      }
   ]);

   plb.addScoping([]);

   plb.addExtensions([".py", ".pyw", ".pyz", ".pyi", ".pyc", ".pyd"]);

   plb.addReferences({});

   // People

   g.v_person.merge("person+Guido-van-Rossum", { name: "Guido van Rossum" });
   g.e_person_plang_role.set("person+Guido-van-Rossum", lang_vid, { role: "designer" });


   // Licenses

   g.v_license.merge("license+Python-Software-Foundation-License", { name: "Python Software Foundation License" });
   g.e_has_license.connect(lang_vid, "license+Python-Software-Foundation-License");

   // Paradigms

   g.e_plang_para.connect(lang_vid, `para+${"para+multi-paradigm"}`);
   g.e_plang_para.connect(lang_vid, `para+${"para+object-oriented"}`);
   g.e_plang_para.connect(lang_vid, `para+${"para+imperative"}`);
   g.e_plang_para.connect(lang_vid, `para+${"para+functional"}`);
   g.e_plang_para.connect(lang_vid, `para+${"para+structured"}`);
   g.e_plang_para.connect(lang_vid, `para+${"para+reflective"}`);

   // Type Systems


   // Supported Platforms


   // Implementations


   // Dialects


   // Influences


   // Influenced


   // Releases

   plb.addRelease({ "version": "unknown", "date": "1991-02-20", "kind": "first" });
   plb.addRelease({ "version": "3.12.4", "date": "2024-01-01", "kind": "stable" });
}