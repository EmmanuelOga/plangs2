import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+matlab",
    "MATLAB",
    {
      name: "MATLAB",
      websites: [
        { kind: "wikipedia", title: "MATLAB", href: "https://en.wikipedia.org/wiki/MATLAB" },
        { kind: "homepage", title: "mathworks.com", href: "https://www.mathworks.com/products/matlab.html" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/121px-Matlab_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1970-01-01", kind: "first" },
        { version: "unknown", date: "2024-01-01", kind: "stable" },
        { version: "unknown", date: "1984-01-01", kind: "first" },
      ],
      references: {
        stable_release: [
          {
            href: "https://uk.mathworks.com/help/matlab/release-notes.html",
            title: "https://uk.mathworks.com/help/matlab/release-notes.html",
          },
        ],
        filename_extensions: [
          {
            href: "https://www.mathworks.com/help/matlab/matlab_prog/protect-your-source-code.html",
            title: "Protect Your Source Code",
          },
          {
            href: "https://www.mathworks.com/help/matlab/matlab_external/platform-compatibility.html",
            title: "MEX Platform Compatibility",
          },
          {
            href: "https://www.mathworks.com/help/matlab/import_export/mat-file-versions.html",
            title: "MAT-File Versions",
          },
          {
            href: "https://www.mathworks.com/help/matlab/creating_plots/save-figure-to-reopen-in-matlab-later.html",
            title: "Save Figure to Reopen in MATLAB Later",
          },
          {
            href: "https://www.mathworks.com/help/matlab/matlab_prog/live-script-file-format.html",
            title: "Live Code File Format (.mlx)",
          },
          { href: "https://www.mathworks.com/help/matlab/ref/appdesigner.html", title: "MATLAB App Designer" },
          { href: "https://www.mathworks.com/help/matlab/creating-help.html", title: "Toolbox Distribution" },
          {
            href: "https://www.mathworks.com/help/matlab/creating_guis/what-is-an-app.html",
            title: "MATLAB App Installer File",
          },
          {
            href: "https://www.mathworks.com/help/matlab/matlab_external/support-package-installation.html",
            title: "Support Package Installation",
          },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20141227140938/http://archive.computerhistory.org/resources/access/text/2013/12/102746804-05-01-acc.pdf",
            title:
              "An interview with CLEVE MOLER Conducted by Thomas Haigh On 8 and 9 March, 2004 Santa Barbara, California",
          },
        ],
        influenced: [
          { href: "http://julialang.org/blog/2012/02/why-we-created-julia", title: "Why We Created Julia" },
          {
            href: "https://web.archive.org/web/20170809034614/http://jbrwww.che.wisc.edu/tech-reports/twmcc-2001-03.pdf",
            title: "Octave: Past, Present, and Future",
          },
          { href: "https://web.archive.org/web/20161201171246/http://www.scilab.org/scilab/history", title: "History" },
        ],
        operating_system: [
          {
            href: "http://www.mathworks.com/products/availability/index.html#ML",
            title: "System Requirements and Platform Availability",
          },
          {
            href: "https://de.mathworks.com/support/requirements/platform-road-map.html",
            title: "Platform Road Map for MATLAB and Simulink Product Families",
          },
        ],
      },
      extensions: [".m", ".p", ".mex*", ".mat", ".fig", ".mlx", ".mlapp", ".mltbx"],
    },
    {
      implementations: ["pl+gnu-octave", "pl+sysquake"],
      influences: ["pl+apl", "pl+eispack", "pl+fortran", "pl+linpack", "pl+pl-slash", "pl+speakeasy"],
      licenses: ["lic+commercial", "lic+proprietary"],
      paradigms: ["para+array", "para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [["person+cleve-moler", { role: "designer" }]],
      platforms: ["platf+arm", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );
}
