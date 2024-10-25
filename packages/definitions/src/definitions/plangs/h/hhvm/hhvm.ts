import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hhvm", {
      name: "HHVM",
      description:
        "HipHop Virtual Machine (HHVM) is an open-source virtual machine based on just-in-time (JIT) compilation that serves as an execution engine for the Hack programming language. By using the principle of JIT compilation, Hack code is first transformed into intermediate HipHop bytecode (HHBC), which is then dynamically translated into x86-64 machine code, optimized, and natively executed. This contrasts with PHP's usual interpreted execution, in which the Zend Engine transforms PHP source code into opcodes that serve as a form of bytecode, and executes the opcodes directly on the Zend Engine's virtual CPU.",
      keywords: ["hhvm", "hiphop virtual machine"],
      websites: [
        { title: "hhvm.com", href: "https://hhvm.com/", kind: "homepage" },
        { title: "HHVM", href: "https://en.wikipedia.org/wiki/HHVM", kind: "wikipedia" },
      ],
      year: 2011,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "4.158.0", name: "HHVM 4.158.0", date: "2023-09-15" },
        { version: "4.159.0", name: "HHVM 4.159.0", date: "2023-09-29" },
        { version: "3.15.0", name: "HHVM 3.15.0", date: "2016-01-01" },
      ],
    })
    .addInfluencedBy(["pl+c", "pl+php"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+compiled", "paradigm+concurrent", "paradigm+oop"])
    .addPlatforms(["plat+linux", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+scripting", "tag+server"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);
}
