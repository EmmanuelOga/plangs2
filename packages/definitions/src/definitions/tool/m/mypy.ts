import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool.set("tool+mypy", {
    name: "MyPy",
    description:
      'An optional static type checker for Python that aims to combine the benefits of dynamic (or "duck") typing and static typing. Mypy combines the expressive power and convenience of Python with a powerful type system and compile-time type checking. Mypy type checks standard Python programs; run them using any Python VM with basically no runtime overhead.',
    shortDesc: "Optional static typing for Python.",
    extGithubPath: "python/mypy",
    extHomeURL: "https://www.mypy-lang.org/",
    githubStars: 18800,
  });
}
