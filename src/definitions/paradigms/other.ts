import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+algebraic", {
    name: "algebraic types",
    websites: [{ kind: "wikipedia", title: "algebraic types", href: "https://en.wikipedia.org/wiki/Algebraic_types" }],
  });

  lb.define("para+algorithmic", {
    name: "algorithmic",
    websites: [
      {
        kind: "wikipedia",
        title: "algorithmic",
        href: "https://en.wikipedia.org/w/index.php?title=Algorithmic_programming&action=edit&redlink=1",
      },
    ],
  });

  lb.define("para+array", {
    name: "Array",
    websites: [{ kind: "wikipedia", title: "Array", href: "https://en.wikipedia.org/wiki/Array_programming" }],
  });

  lb.define("para+aspect", {
    name: "aspect-oriented",
    websites: [
      {
        kind: "wikipedia",
        title: "aspect-oriented",
        href: "https://en.wikipedia.org/wiki/Aspect-oriented_programming",
      },
    ],
  });

  lb.define("para+assembly", {
    name: "Assembly",
    websites: [{ kind: "wikipedia", title: "Assembly", href: "https://en.wikipedia.org/wiki/Assembly_language" }],
  });

  lb.define("para+block", {
    name: "block structured",
    websites: [
      { kind: "wikipedia", title: "block structured", href: "https://en.wikipedia.org/wiki/Block_(programming)" },
    ],
  });

  lb.define("para+compiled", {
    name: "compiled",
    websites: [{ kind: "wikipedia", title: "compiled", href: "https://en.wikipedia.org/wiki/Compiled_language" }],
  });

  lb.define("para+component", {
    name: "component-based",
    websites: [
      {
        kind: "wikipedia",
        title: "component-based",
        href: "https://en.wikipedia.org/wiki/Component-based_software_engineering",
      },
    ],
  });

  lb.define("para+computer", {
    name: "agent-based",
    websites: [
      { kind: "wikipedia", title: "agent-based", href: "https://en.wikipedia.org/wiki/Computer_simulation#Types" },
    ],
  });

  lb.define("para+csp", {
    name: "communicating sequential processes",
    websites: [
      {
        kind: "wikipedia",
        title: "communicating sequential processes",
        href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
      },
    ],
  });

  lb.define("para+dec", {
    name: "Declarative",
    websites: [
      { kind: "wikipedia", title: "declarative", href: "https://en.wikipedia.org/wiki/Declarative_programming" },
    ],
  });

  lb.define("para+dependent", {
    name: "dependent typed",
    websites: [{ kind: "wikipedia", title: "dependent typed", href: "https://en.wikipedia.org/wiki/Dependent_type" }],
  });

  lb.define("para+domain", {
    name: "domain-specific",
    websites: [
      { kind: "wikipedia", title: "domain-specific", href: "https://en.wikipedia.org/wiki/Domain-specific_language" },
    ],
  });

  lb.define("para+embedded", {
    name: "embedded",
    websites: [{ kind: "wikipedia", title: "embedded", href: "https://en.wikipedia.org/wiki/Embedded_system" }],
  });

  lb.define("para+esoteric", {
    name: "Esoteric",
    websites: [
      { kind: "wikipedia", title: "Esoteric", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language" },
    ],
  });

  lb.define("para+event", {
    name: "event-driven",
    websites: [
      { kind: "wikipedia", title: "Event-driven", href: "https://en.wikipedia.org/wiki/Event-driven_programming" },
    ],
  });

  lb.define("para+expert", {
    name: "expert systems",
    websites: [{ kind: "wikipedia", title: "expert systems", href: "https://en.wikipedia.org/wiki/Expert_systems" }],
  });

  lb.define("para+extensible", {
    name: "extensible",
    websites: [
      { kind: "wikipedia", title: "extensible", href: "https://en.wikipedia.org/wiki/Extensible_programming" },
    ],
  });

  lb.define("para+function", {
    name: "function-level",
    websites: [
      { kind: "wikipedia", title: "Function-level", href: "https://en.wikipedia.org/wiki/Function-level_programming" },
    ],
  });

  lb.define("para+general", {
    name: "general-purpose",
    websites: [
      {
        kind: "wikipedia",
        title: "general-purpose",
        href: "https://en.wikipedia.org/wiki/General-purpose_programming_language",
      },
    ],
  });

  lb.define("para+generic", {
    name: "generic",
    websites: [{ kind: "wikipedia", title: "generic", href: "https://en.wikipedia.org/wiki/Generic_programming" }],
  });

  lb.define("para+grid", {
    name: "grid",
    websites: [{ kind: "wikipedia", title: "grid", href: "https://en.wikipedia.org/wiki/Grid_computing" }],
  });

  lb.define("para+in", {
    name: "in-memory database",
    websites: [
      { kind: "wikipedia", title: "in-memory database", href: "https://en.wikipedia.org/wiki/In-memory_database" },
    ],
  });

  lb.define("para+information", {
    name: "data and procedure hiding",
    websites: [
      {
        kind: "wikipedia",
        title: "data and procedure hiding",
        href: "https://en.wikipedia.org/wiki/Information_hiding",
      },
    ],
  });

  lb.define("para+interface", {
    name: "protocol-oriented",
    websites: [
      {
        kind: "wikipedia",
        title: "protocol-oriented",
        href: "https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)",
      },
    ],
  });

  lb.define("para+interpreted", {
    name: "interpreted",
    websites: [{ kind: "wikipedia", title: "interpreted", href: "https://en.wikipedia.org/wiki/Interpreted_language" }],
  });

  lb.define("para+json", {
    name: "JSON",
    websites: [{ kind: "wikipedia", title: "JSON", href: "https://en.wikipedia.org/wiki/JSON" }],
  });

  lb.define("para+knowledge", {
    name: "knowledge representation",
    websites: [
      {
        kind: "wikipedia",
        title: "knowledge representation",
        href: "https://en.wikipedia.org/wiki/Knowledge_representation",
      },
    ],
  });

  lb.define("para+language", {
    name: "language oriented programming",
    websites: [
      {
        kind: "wikipedia",
        title: "language oriented programming",
        href: "https://en.wikipedia.org/wiki/Language_oriented_programming",
      },
    ],
  });

  lb.define("para+lazy", {
    name: "Lazy",
    websites: [{ kind: "wikipedia", title: "lazy", href: "https://en.wikipedia.org/wiki/Lazy_evaluation" }],
  });

  lb.define("para+literate", {
    name: "Literate",
    websites: [{ kind: "wikipedia", title: "Literate", href: "https://en.wikipedia.org/wiki/Literate_programming" }],
  });

  lb.define("para+low", {
    name: "Low-code",
    websites: [
      { kind: "wikipedia", title: "Low-code", href: "https://en.wikipedia.org/wiki/Low-code_development_platform" },
    ],
  });

  lb.define("para+markup", {
    name: "markup",
    websites: [{ kind: "wikipedia", title: "markup", href: "https://en.wikipedia.org/wiki/Markup_language" }],
  });

  lb.define("para+message", {
    name: "message passing",
    websites: [{ kind: "wikipedia", title: "message passing", href: "https://en.wikipedia.org/wiki/Message_passing" }],
  });

  lb.define("para+meta", {
    name: "meta",
    websites: [{ kind: "wikipedia", title: "meta", href: "https://en.wikipedia.org/wiki/Metaprogramming" }],
  });

  lb.define("para+modular", {
    name: "modular",
    websites: [{ kind: "wikipedia", title: "modular", href: "https://en.wikipedia.org/wiki/Modular_programming" }],
  });

  lb.define("para+non", {
    name: "non-structured",
    websites: [
      { kind: "wikipedia", title: "Non-structured", href: "https://en.wikipedia.org/wiki/Non-structured_programming" },
    ],
  });

  lb.define("para+nondeterministic", {
    name: "nondeterministic",
    websites: [
      {
        kind: "wikipedia",
        title: "nondeterministic",
        href: "https://en.wikipedia.org/wiki/Nondeterministic_programming",
      },
    ],
  });

  lb.define("para+numerical", {
    name: "Numerical control",
    websites: [
      { kind: "wikipedia", title: "Numerical control", href: "https://en.wikipedia.org/wiki/Numerical_control" },
    ],
  });

  lb.define("para+partitioned", {
    name: "Partitioned global address space",
    websites: [
      {
        kind: "wikipedia",
        title: "Partitioned global address space",
        href: "https://en.wikipedia.org/wiki/Partitioned_global_address_space",
      },
    ],
  });

  lb.define("para+pattern", {
    name: "Pattern-matching",
    websites: [
      { kind: "wikipedia", title: "Pattern-matching", href: "https://en.wikipedia.org/wiki/Pattern-matching" },
    ],
  });

  lb.define("para+people", {
    name: "People Oriented Programming",
    websites: [
      {
        kind: "wikipedia",
        title: "People Oriented Programming",
        href: "https://en.wikipedia.org/w/index.php?title=People_Oriented_Programming&action=edit&redlink=1",
      },
    ],
  });

  lb.define("para+production", {
    name: "rule processing",
    websites: [
      {
        kind: "wikipedia",
        title: "rule processing",
        href: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
      },
    ],
  });

  lb.define("para+quantum", {
    name: "Quantum",
    websites: [{ kind: "wikipedia", title: "Quantum", href: "https://en.wikipedia.org/wiki/Quantum_programming" }],
  });

  lb.define("para+query", {
    name: "Query language",
    websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
  });

  lb.define("para+reactive", {
    name: "reactive",
    websites: [{ kind: "wikipedia", title: "reactive", href: "https://en.wikipedia.org/wiki/Reactive_programming" }],
  });

  lb.define("para+real", {
    name: "real-time",
    websites: [{ kind: "wikipedia", title: "real-time", href: "https://en.wikipedia.org/wiki/Real-time_computing" }],
  });

  lb.define("para+reflective", {
    name: "reflective",
    websites: [
      { kind: "wikipedia", title: "reflective", href: "https://en.wikipedia.org/wiki/Reflective_programming" },
    ],
  });

  lb.define("para+reversible", {
    name: "reversible",
    websites: [{ kind: "wikipedia", title: "reversible", href: "https://en.wikipedia.org/wiki/Reversible_computing" }],
  });

  lb.define("para+scientific", {
    name: "scientific workflow",
    websites: [
      {
        kind: "wikipedia",
        title: "scientific workflow",
        href: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
      },
    ],
  });

  lb.define("para+scripting", {
    name: "scripting",
    websites: [{ kind: "wikipedia", title: "scripting", href: "https://en.wikipedia.org/wiki/Scripting_language" }],
  });

  lb.define("para+shared", {
    name: "shared memory",
    websites: [{ kind: "wikipedia", title: "shared memory", href: "https://en.wikipedia.org/wiki/Shared_memory" }],
  });

  lb.define("para+simulation", {
    name: "simulation",
    websites: [{ kind: "wikipedia", title: "simulation", href: "https://en.wikipedia.org/wiki/Simulation_language" }],
  });

  lb.define("para+strongly", {
    name: "strongly typed",
    websites: [{ kind: "wikipedia", title: "strongly typed", href: "https://en.wikipedia.org/wiki/Strongly_typed" }],
  });

  lb.define("para+structured", {
    name: "structured",
    websites: [
      { kind: "wikipedia", title: "structured", href: "https://en.wikipedia.org/wiki/Structured_programming" },
    ],
  });

  lb.define("para+symbolic", {
    name: "symbolic",
    websites: [{ kind: "wikipedia", title: "symbolic", href: "https://en.wikipedia.org/wiki/Symbolic_programming" }],
  });

  lb.define("para+tacit", {
    name: "tacit programming",
    websites: [{ kind: "wikipedia", title: "tacit", href: "https://en.wikipedia.org/wiki/Tacit_programming" }],
  });

  lb.define("para+the", {
    name: "task-driven",
    websites: [
      {
        kind: "wikipedia",
        title: "task-driven",
        href: "https://en.wikipedia.org/wiki/The_Task-based_Asynchronous_Pattern",
      },
    ],
  });

  lb.define("para+thread", {
    name: "thread safe",
    websites: [{ kind: "wikipedia", title: "thread safe", href: "https://en.wikipedia.org/wiki/Thread_safe" }],
  });

  lb.define("para+typed", {
    name: "typed language",
    websites: [{ kind: "wikipedia", title: "typed language", href: "https://en.wikipedia.org/wiki/Typed_language" }],
  });

  lb.define("para+unstructured", {
    name: "unstructured",
    websites: [
      { kind: "wikipedia", title: "unstructured", href: "https://en.wikipedia.org/wiki/Unstructured_programming" },
    ],
  });

  lb.define("para+visual", {
    name: "visual",
    websites: [
      { kind: "wikipedia", title: "Visual", href: "https://en.wikipedia.org/wiki/Visual_programming_language" },
    ],
  });
}
