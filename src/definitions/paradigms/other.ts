import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+agent", "agent-based", {
    websites: [
      { kind: "wikipedia", title: "agent-oriented", href: "https://en.wikipedia.org/wiki/Agent-oriented_programming" },
      { kind: "wikipedia", title: "agent-based", href: "https://en.wikipedia.org/wiki/Agent-based_model" },
    ],
  });

  lb.define("para+algebraic", "algebraic types", {
    websites: [{ kind: "wikipedia", title: "algebraic types", href: "https://en.wikipedia.org/wiki/Algebraic_types" }],
  });

  lb.define("para+algorithmic", "algorithmic", {
    websites: [
      {
        kind: "wikipedia",
        title: "algorithmic",
        href: "https://en.wikipedia.org/w/index.php?title=Algorithmic_programming&action=edit&redlink=1",
      },
    ],
  });

  lb.define("para+array", "Array", {
    websites: [{ kind: "wikipedia", title: "Array", href: "https://en.wikipedia.org/wiki/Array_programming" }],
  });

  lb.define("para+aspect", "aspect-oriented", {
    websites: [
      {
        kind: "wikipedia",
        title: "aspect-oriented",
        href: "https://en.wikipedia.org/wiki/Aspect-oriented_programming",
      },
    ],
  });

  lb.define("para+assembly", "Assembly", {
    websites: [{ kind: "wikipedia", title: "Assembly", href: "https://en.wikipedia.org/wiki/Assembly_language" }],
  });

  lb.define("para+block", "block structured", {
    websites: [
      { kind: "wikipedia", title: "block structured", href: "https://en.wikipedia.org/wiki/Block_(programming)" },
    ],
  });

  lb.define("para+class", "class-based", {
    websites: [
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class_(computer_programming)" },
      { kind: "wikipedia", title: "Class-based", href: "https://en.wikipedia.org/wiki/Class-based_programming" },
    ],
  });

  lb.define("para+compiled", "compiled", {
    websites: [{ kind: "wikipedia", title: "compiled", href: "https://en.wikipedia.org/wiki/Compiled_language" }],
  });

  lb.define("para+component", "component-based", {
    websites: [
      {
        kind: "wikipedia",
        title: "component-based",
        href: "https://en.wikipedia.org/wiki/Component-based_software_engineering",
      },
    ],
  });

  lb.define("para+computer", "agent-based", {
    websites: [
      { kind: "wikipedia", title: "agent-based", href: "https://en.wikipedia.org/wiki/Computer_simulation#Types" },
    ],
  });

  lb.define("para+concatenative", "concatenative", {
    websites: [
      {
        kind: "wikipedia",
        title: "concatenative",
        href: "https://en.wikipedia.org/wiki/Concatenative_programming_language",
      },
      { kind: "wikipedia", title: "Concatenative", href: "https://en.wikipedia.org/wiki/Concatenative_programming" },
    ],
  });

  lb.define("para+constraint", "constraint", {
    websites: [
      { kind: "wikipedia", title: "constraint", href: "https://en.wikipedia.org/wiki/Constraint_programming" },
      {
        kind: "wikipedia",
        title: "Constraint logic",
        href: "https://en.wikipedia.org/wiki/Constraint_logic_programming",
      },
    ],
  });

  lb.define("para+csp", "communicating sequential processes", {
    websites: [
      {
        kind: "wikipedia",
        title: "communicating sequential processes",
        href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
      },
    ],
  });

  lb.define("para+data", "Data-driven", {
    websites: [
      { kind: "wikipedia", title: "data-driven", href: "https://en.wikipedia.org/wiki/Data-driven_programming" },
      { kind: "wikipedia", title: "data exchange", href: "https://en.wikipedia.org/wiki/Data_exchange_language" },
    ],
  });

  lb.define("para+dataflow", "dataflow", {
    websites: [
      { kind: "wikipedia", title: "Dataflow programming", href: "https://en.wikipedia.org/wiki/Dataflow" },
      { kind: "wikipedia", title: "Dataflow", href: "https://en.wikipedia.org/wiki/Dataflow_programming" },
    ],
  });

  lb.define("para+dec", "Declarative", {
    websites: [
      { kind: "wikipedia", title: "declarative", href: "https://en.wikipedia.org/wiki/Declarative_programming" },
    ],
  });

  lb.define("para+dependent", "dependent typed", {
    websites: [{ kind: "wikipedia", title: "dependent typed", href: "https://en.wikipedia.org/wiki/Dependent_type" }],
  });

  lb.define("para+domain", "domain-specific", {
    websites: [
      { kind: "wikipedia", title: "domain-specific", href: "https://en.wikipedia.org/wiki/Domain-specific_language" },
    ],
  });

  lb.define("para+educational", "educational", {
    websites: [
      {
        kind: "wikipedia",
        title: "educational",
        href: "https://en.wikipedia.org/wiki/Educational_programming_language",
      },
      {
        kind: "wikipedia",
        title: "educational",
        href: "https://en.wikipedia.org/wiki/List_of_educational_programming_languages",
      },
    ],
  });

  lb.define("para+embedded", "embedded", {
    websites: [{ kind: "wikipedia", title: "embedded", href: "https://en.wikipedia.org/wiki/Embedded_system" }],
  });

  lb.define("para+esoteric", "Esoteric", {
    websites: [
      { kind: "wikipedia", title: "Esoteric", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language" },
    ],
  });

  lb.define("para+event", "event-driven", {
    websites: [
      { kind: "wikipedia", title: "Event-driven", href: "https://en.wikipedia.org/wiki/Event-driven_programming" },
    ],
  });

  lb.define("para+expert", "expert systems", {
    websites: [{ kind: "wikipedia", title: "expert systems", href: "https://en.wikipedia.org/wiki/Expert_systems" }],
  });

  lb.define("para+extensible", "extensible", {
    websites: [
      { kind: "wikipedia", title: "extensible", href: "https://en.wikipedia.org/wiki/Extensible_programming" },
    ],
  });

  lb.define("para+function", "function-level", {
    websites: [
      { kind: "wikipedia", title: "Function-level", href: "https://en.wikipedia.org/wiki/Function-level_programming" },
    ],
  });

  lb.define("para+general", "general-purpose", {
    websites: [
      {
        kind: "wikipedia",
        title: "general-purpose",
        href: "https://en.wikipedia.org/wiki/General-purpose_programming_language",
      },
    ],
  });

  lb.define("para+generic", "generic", {
    websites: [{ kind: "wikipedia", title: "generic", href: "https://en.wikipedia.org/wiki/Generic_programming" }],
  });

  lb.define("para+grid", "grid", {
    websites: [{ kind: "wikipedia", title: "grid", href: "https://en.wikipedia.org/wiki/Grid_computing" }],
  });

  lb.define("para+in", "in-memory database", {
    websites: [
      { kind: "wikipedia", title: "in-memory database", href: "https://en.wikipedia.org/wiki/In-memory_database" },
    ],
  });

  lb.define("para+information", "data and procedure hiding", {
    websites: [
      {
        kind: "wikipedia",
        title: "data and procedure hiding",
        href: "https://en.wikipedia.org/wiki/Information_hiding",
      },
    ],
  });

  lb.define("para+interface", "protocol-oriented", {
    websites: [
      {
        kind: "wikipedia",
        title: "protocol-oriented",
        href: "https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)",
      },
    ],
  });

  lb.define("para+interpreted", "interpreted", {
    websites: [{ kind: "wikipedia", title: "interpreted", href: "https://en.wikipedia.org/wiki/Interpreted_language" }],
  });

  lb.define("para+json", "JSON", {
    websites: [{ kind: "wikipedia", title: "JSON", href: "https://en.wikipedia.org/wiki/JSON" }],
  });

  lb.define("para+knowledge", "knowledge representation", {
    websites: [
      {
        kind: "wikipedia",
        title: "knowledge representation",
        href: "https://en.wikipedia.org/wiki/Knowledge_representation",
      },
    ],
  });

  lb.define("para+language", "language oriented programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "language oriented programming",
        href: "https://en.wikipedia.org/wiki/Language_oriented_programming",
      },
    ],
  });

  lb.define("para+lazy", "Lazy", {
    websites: [{ kind: "wikipedia", title: "lazy", href: "https://en.wikipedia.org/wiki/Lazy_evaluation" }],
  });

  lb.define("para+literate", "Literate", {
    websites: [{ kind: "wikipedia", title: "Literate", href: "https://en.wikipedia.org/wiki/Literate_programming" }],
  });

  lb.define("para+logic", "Logic Programming", {
    websites: [
      { kind: "wikipedia", title: "logic", href: "https://en.wikipedia.org/wiki/Logic_programming" },
      {
        kind: "wikipedia",
        title: "concurrent constraint logic",
        href: "https://en.wikipedia.org/wiki/Concurrent_constraint_logic_programming",
      },
    ],
  });

  lb.define("para+low", "Low-code", {
    websites: [
      { kind: "wikipedia", title: "Low-code", href: "https://en.wikipedia.org/wiki/Low-code_development_platform" },
    ],
  });

  lb.define("para+macros", "general-purpose macro processor", {
    websites: [
      { kind: "wikipedia", title: "macros", href: "https://en.wikipedia.org/wiki/Macro_(computer_science)" },
      {
        kind: "wikipedia",
        title: "general-purpose macro processor",
        href: "https://en.wikipedia.org/wiki/General-purpose_macro_processor",
      },
    ],
  });

  lb.define("para+markup", "markup", {
    websites: [{ kind: "wikipedia", title: "markup", href: "https://en.wikipedia.org/wiki/Markup_language" }],
  });

  lb.define("para+message", "message passing", {
    websites: [{ kind: "wikipedia", title: "message passing", href: "https://en.wikipedia.org/wiki/Message_passing" }],
  });

  lb.define("para+meta", "meta", {
    websites: [{ kind: "wikipedia", title: "meta", href: "https://en.wikipedia.org/wiki/Metaprogramming" }],
  });

  lb.define("para+modular", "modular", {
    websites: [{ kind: "wikipedia", title: "modular", href: "https://en.wikipedia.org/wiki/Modular_programming" }],
  });

  lb.define("para+natural", "natural language programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "Natural language programming",
        href: "https://en.wikipedia.org/wiki/Natural_language_programming",
      },
      {
        kind: "wikipedia",
        title: "natural-language",
        href: "https://en.wikipedia.org/wiki/Natural-language_programming",
      },
    ],
  });

  lb.define("para+non", "non-structured", {
    websites: [
      { kind: "wikipedia", title: "Non-structured", href: "https://en.wikipedia.org/wiki/Non-structured_programming" },
    ],
  });

  lb.define("para+nondeterministic", "nondeterministic", {
    websites: [
      {
        kind: "wikipedia",
        title: "nondeterministic",
        href: "https://en.wikipedia.org/wiki/Nondeterministic_programming",
      },
    ],
  });

  lb.define("para+numerical", "Numerical control", {
    websites: [
      { kind: "wikipedia", title: "Numerical control", href: "https://en.wikipedia.org/wiki/Numerical_control" },
    ],
  });

  lb.define("para+partitioned", "Partitioned global address space", {
    websites: [
      {
        kind: "wikipedia",
        title: "Partitioned global address space",
        href: "https://en.wikipedia.org/wiki/Partitioned_global_address_space",
      },
    ],
  });

  lb.define("para+pattern", "Pattern-matching", {
    websites: [
      { kind: "wikipedia", title: "Pattern-matching", href: "https://en.wikipedia.org/wiki/Pattern-matching" },
    ],
  });

  lb.define("para+people", "People Oriented Programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "People Oriented Programming",
        href: "https://en.wikipedia.org/w/index.php?title=People_Oriented_Programming&action=edit&redlink=1",
      },
    ],
  });

  lb.define("para+pipeline", "pipeline", {
    websites: [
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_(software)" },
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_programming" },
    ],
  });

  lb.define("para+process", "process-oriented", {
    websites: [
      {
        kind: "wikipedia",
        title: "process-oriented",
        href: "https://en.wikipedia.org/wiki/Process-oriented_programming",
      },
      { kind: "wikipedia", title: "processing", href: "https://en.wikipedia.org/wiki/In-memory_processing" },
    ],
  });

  lb.define("para+production", "rule processing", {
    websites: [
      {
        kind: "wikipedia",
        title: "rule processing",
        href: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
      },
    ],
  });

  lb.define("para+prototypes", "prototype-based", {
    websites: [
      {
        kind: "wikipedia",
        title: "prototype-based",
        href: "https://en.wikipedia.org/wiki/Prototype-based_programming",
      },
      {
        kind: "wikipedia",
        title: "prototype-based",
        href: "https://en.wikipedia.org/wiki/Prototype-oriented_programming",
      },
    ],
  });

  lb.define("para+quantum", "Quantum", {
    websites: [{ kind: "wikipedia", title: "Quantum", href: "https://en.wikipedia.org/wiki/Quantum_programming" }],
  });

  lb.define("para+query", "Query language", {
    websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
  });

  lb.define("para+reactive", "reactive", {
    websites: [{ kind: "wikipedia", title: "reactive", href: "https://en.wikipedia.org/wiki/Reactive_programming" }],
  });

  lb.define("para+real", "real-time", {
    websites: [{ kind: "wikipedia", title: "real-time", href: "https://en.wikipedia.org/wiki/Real-time_computing" }],
  });

  lb.define("para+reflection", "reflective", {
    websites: [
      { kind: "wikipedia", title: "Reflective", href: "https://en.wikipedia.org/wiki/Reflection_(computer_science)" },
      {
        kind: "wikipedia",
        title: "reflective",
        href: "https://en.wikipedia.org/wiki/Reflection_(computer_programming)",
      },
    ],
  });

  lb.define("para+reflective", "reflective", {
    websites: [
      { kind: "wikipedia", title: "reflective", href: "https://en.wikipedia.org/wiki/Reflective_programming" },
    ],
  });

  lb.define("para+reversible", "reversible", {
    websites: [{ kind: "wikipedia", title: "reversible", href: "https://en.wikipedia.org/wiki/Reversible_computing" }],
  });

  lb.define("para+scientific", "scientific workflow", {
    websites: [
      {
        kind: "wikipedia",
        title: "scientific workflow",
        href: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
      },
    ],
  });

  lb.define("para+scripting", "scripting", {
    websites: [{ kind: "wikipedia", title: "scripting", href: "https://en.wikipedia.org/wiki/Scripting_language" }],
  });

  lb.define("para+shared", "shared memory", {
    websites: [{ kind: "wikipedia", title: "shared memory", href: "https://en.wikipedia.org/wiki/Shared_memory" }],
  });

  lb.define("para+simulation", "simulation", {
    websites: [{ kind: "wikipedia", title: "simulation", href: "https://en.wikipedia.org/wiki/Simulation_language" }],
  });

  lb.define("para+strongly", "strongly typed", {
    websites: [{ kind: "wikipedia", title: "strongly typed", href: "https://en.wikipedia.org/wiki/Strongly_typed" }],
  });

  lb.define("para+structured", "structured", {
    websites: [
      { kind: "wikipedia", title: "structured", href: "https://en.wikipedia.org/wiki/Structured_programming" },
    ],
  });

  lb.define("para+symbolic", "symbolic", {
    websites: [{ kind: "wikipedia", title: "symbolic", href: "https://en.wikipedia.org/wiki/Symbolic_programming" }],
  });

  lb.define("para+tacit", "tacit programming", {
    websites: [{ kind: "wikipedia", title: "tacit", href: "https://en.wikipedia.org/wiki/Tacit_programming" }],
  });

  lb.define("para+term", "term-rewriting", {
    websites: [
      { kind: "wikipedia", title: "term rewriting", href: "https://en.wikipedia.org/wiki/Term_rewriting" },
      { kind: "wikipedia", title: "term-rewriting", href: "https://en.wikipedia.org/wiki/Term-rewriting" },
    ],
  });

  lb.define("para+the", "task-driven", {
    websites: [
      {
        kind: "wikipedia",
        title: "task-driven",
        href: "https://en.wikipedia.org/wiki/The_Task-based_Asynchronous_Pattern",
      },
    ],
  });

  lb.define("para+thread", "thread safe", {
    websites: [{ kind: "wikipedia", title: "thread safe", href: "https://en.wikipedia.org/wiki/Thread_safe" }],
  });

  lb.define("para+typed", "typed language", {
    websites: [{ kind: "wikipedia", title: "typed language", href: "https://en.wikipedia.org/wiki/Typed_language" }],
  });

  lb.define("para+unstructured", "unstructured", {
    websites: [
      { kind: "wikipedia", title: "unstructured", href: "https://en.wikipedia.org/wiki/Unstructured_programming" },
    ],
  });

  lb.define("para+visual", "visual", {
    websites: [
      { kind: "wikipedia", title: "Visual", href: "https://en.wikipedia.org/wiki/Visual_programming_language" },
    ],
  });
}
