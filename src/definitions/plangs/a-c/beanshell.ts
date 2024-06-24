import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+beanshell",
    "BeanShell",
    {
      name: "BeanShell",
      websites: [
        { kind: "wikipedia", title: "BeanShell", href: "https://en.wikipedia.org/wiki/BeanShell" },
        { kind: "repository", title: "github.com/beanshell/beanshell", href: "https://github.com/beanshell/beanshell" },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "2.1.1", date: "2022-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/beanshell/beanshell/releases/tag/2.1.1", title: "Release 2.1.1" }],
        license: [
          { href: "http://www.beanshell.org/license.html", title: "BeanShell Software License" },
          { href: "https://github.com/beanshell/beanshell", title: "BeanShell" },
          { href: "https://github.com/beanshell/beanshell/blob/master/CHANGES.md", title: "CHANGES.md" },
          {
            href: "https://github.com/beanshell/beanshell/blob/1.0/BeanShell/src/License.txt",
            title: "License.txt in 1.0",
          },
        ],
      },
    },
    {
      implementations: ["pl+java"],
      influences: ["pl+java", "pl+javascript", "pl+perl"],
      licenses: ["lic+apache", "lic+lgpl", "lic+sun-public"],
      paradigms: ["para+objects", "para+scripting"],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
