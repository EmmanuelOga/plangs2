import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gnat",
    "GNAT",
    {
      name: "GNAT",
      websites: [
        { kind: "wikipedia", title: "GNAT", href: "https://en.wikipedia.org/wiki/GNAT" },
        { kind: "homepage", title: "www.getadanow.com", href: "http://www.getadanow.com" },
        { kind: "homepage", title: "www.adacore.com/gnatpro/", href: "http://www.adacore.com/gnatpro/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg" }],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "9.2", date: "2019-08-12", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://www.gnu.org/software/gcc/releases.html", title: "GCC Releases - GNU Project" },
          { href: "https://www.adacore.com/press/gnat-pro-7-4", title: "AdaCore Releases GNAT Pro 7.4" },
        ],
        license: [{ href: "https://www.gnu.org/licenses/gcc-exception.html", title: "GCC Runtime Library Exception" }],
      },
    },
    { licenses: ["lic+gpl"] },
  );

  /**/
}
