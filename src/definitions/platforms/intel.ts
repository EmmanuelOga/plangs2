import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+ia-32").merge({
    name: "IA-32",
    websites: [{ kind: "wikipedia", title: "IA-32", href: "https://en.wikipedia.org/wiki/IA-32" }],
  });

  g.buildPlatform("platf+ia-64").merge({
    name: "IA-64",
    websites: [{ kind: "wikipedia", title: "IA-64", href: "https://en.wikipedia.org/wiki/IA-64" }],
  });

  g.buildPlatform("platf+intel-80286").merge({
    name: "Intel 286",
    websites: [{ kind: "wikipedia", title: "Intel 286", href: "https://en.wikipedia.org/wiki/Intel_80286" }],
  });

  g.buildPlatform("platf+intel-8080").merge({
    name: "Intel 8080",
    websites: [{ kind: "wikipedia", title: "Intel 8080", href: "https://en.wikipedia.org/wiki/Intel_8080" }],
  });

  g.buildPlatform("platf+x64").merge({
    name: "x64",
    websites: [{ kind: "wikipedia", title: "x64", href: "https://en.wikipedia.org/wiki/X64" }],
  });

  g.buildPlatform("platf+x86").merge({
    name: "x86",
    websites: [{ kind: "wikipedia", title: "x86", href: "https://en.wikipedia.org/wiki/X86" }],
  });

  g.buildPlatform("platf+x86-64").merge({
    name: "x86-64",
    websites: [{ kind: "wikipedia", title: "x86-64", href: "https://en.wikipedia.org/wiki/X86-64" }],
  });
}
