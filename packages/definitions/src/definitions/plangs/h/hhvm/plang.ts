import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+hhvm", {
      images: [],
      name: "HHVM",
      description:
        "HipHop Virtual Machine (HHVM) is an open-source virtual machine based on just-in-time (JIT) compilation that serves as an execution engine for the Hack programming language. By using the principle of JIT compilation, Hack code is first transformed into intermediate HipHop bytecode (HHBC), which is then dynamically translated into x86-64 machine code, optimized, and natively executed.  This contrasts with PHP's usual interpreted execution, in which the Zend Engine transforms PHP source code into opcodes that serve as a form of bytecode, and executes the opcodes directly on the Zend Engine's virtual CPU.",
      websites: [
        { href: "https://hhvm.com/", title: "hhvm.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/HHVM", title: "HHVM", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "3.15.0", date: "2016-01-01" }],
    })
    .addWrittenIn(["pl+c++", "pl+ocaml", "pl+rust"]);
}
