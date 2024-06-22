import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+agent-based", "agent-based", {
    websites: [
      { kind: "wikipedia", title: "agent-oriented", href: "https://en.wikipedia.org/wiki/Agent-oriented_programming" },
      { kind: "wikipedia", title: "agent-based", href: "https://en.wikipedia.org/wiki/Computer_simulation#Types" },
      { kind: "wikipedia", title: "agent-based", href: "https://en.wikipedia.org/wiki/Agent-based_model" },
    ],
  });

  /**/

  lb.define("para+algebraic-types", "algebraic types", {
    websites: [{ kind: "wikipedia", title: "algebraic types", href: "https://en.wikipedia.org/wiki/Algebraic_types" }],
  });

  /**/

  lb.define("para+algorithmic", "algorithmic", {
    websites: [
      {
        kind: "wikipedia",
        title: "algorithmic",
        href: "https://en.wikipedia.org/w/index.php?title=Algorithmic_programming&action=edit&redlink=1",
      },
    ],
  });

  /**/

  lb.define("para+array", "array", {
    websites: [{ kind: "wikipedia", title: "array", href: "https://en.wikipedia.org/wiki/Array_programming" }],
  });

  /**/

  lb.define("para+aspect-oriented", "aspect-oriented", {
    websites: [
      {
        kind: "wikipedia",
        title: "aspect-oriented",
        href: "https://en.wikipedia.org/wiki/Aspect-oriented_programming",
      },
    ],
  });

  /**/

  lb.define("para+assembly", "Assembly", {
    websites: [{ kind: "wikipedia", title: "Assembly", href: "https://en.wikipedia.org/wiki/Assembly_language" }],
  });

  /**/

  lb.define("para+block-structured", "block structured", {
    websites: [
      { kind: "wikipedia", title: "block structured", href: "https://en.wikipedia.org/wiki/Block_(programming)" },
    ],
  });

  /**/

  lb.define("para+class-based", "class-based", {
    websites: [
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class-based_programming" },
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class_(computer_programming)" },
    ],
  });

  /**/

  lb.define("para+compiled", "compiled", {
    websites: [{ kind: "wikipedia", title: "compiled", href: "https://en.wikipedia.org/wiki/Compiled_language" }],
  });

  /**/

  lb.define("para+component-based", "component-based", {
    websites: [
      {
        kind: "wikipedia",
        title: "component-based",
        href: "https://en.wikipedia.org/wiki/Component-based_software_engineering",
      },
    ],
  });

  /**/

  lb.define("para+concatenative", "concatenative", {
    websites: [
      { kind: "wikipedia", title: "Concatenative", href: "https://en.wikipedia.org/wiki/Concatenative_programming" },
      {
        kind: "wikipedia",
        title: "concatenative",
        href: "https://en.wikipedia.org/wiki/Concatenative_programming_language",
      },
    ],
  });

  /**/

  lb.define("para+concurrent", "concurrent", {
    websites: [
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_programming" },
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_programming_language" },
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_computing" },
      { kind: "wikipedia", title: "Concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_Programming" },
      {
        kind: "wikipedia",
        title: "Concurrent",
        href: "https://en.wikipedia.org/wiki/Concurrent_object-oriented_programming",
      },
    ],
  });

  /**/

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

  /**/

  lb.define("para+csp", "communicating sequential processes", {
    websites: [
      {
        kind: "wikipedia",
        title: "communicating sequential processes",
        href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
      },
    ],
  });

  /**/

  lb.define("para+data-driven", "data exchange", {
    websites: [
      {
        kind: "wikipedia",
        title: "data and procedure hiding",
        href: "https://en.wikipedia.org/wiki/Information_hiding",
      },
      { kind: "wikipedia", title: "data-driven", href: "https://en.wikipedia.org/wiki/Data-driven_programming" },
      { kind: "wikipedia", title: "data exchange", href: "https://en.wikipedia.org/wiki/Data_exchange_language" },
    ],
  });

  /**/

  lb.define("para+dataflow", "Dataflow", {
    websites: [
      { kind: "wikipedia", title: "Dataflow", href: "https://en.wikipedia.org/wiki/Dataflow_programming" },
      { kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" },
    ],
  });

  /**/

  lb.define("para+declarative", "declarative", {
    websites: [
      { kind: "wikipedia", title: "declarative", href: "https://en.wikipedia.org/wiki/Declarative_programming" },
    ],
  });

  /**/

  lb.define("para+dependent-typed", "dependent typed", {
    websites: [{ kind: "wikipedia", title: "dependent typed", href: "https://en.wikipedia.org/wiki/Dependent_type" }],
  });

  /**/

  lb.define("para+distributed", "distributed", {
    websites: [
      { kind: "wikipedia", title: "distributed", href: "https://en.wikipedia.org/wiki/Distributed_computing" },
      { kind: "wikipedia", title: "distributed", href: "https://en.wikipedia.org/wiki/Distributed_programming" },
      { kind: "wikipedia", title: "Distributed cache", href: "https://en.wikipedia.org/wiki/Distributed_cache" },
    ],
  });

  /**/

  lb.define("para+domain-specific", "domain-specific", {
    websites: [
      { kind: "wikipedia", title: "domain-specific", href: "https://en.wikipedia.org/wiki/Domain-specific_language" },
    ],
  });

  /**/

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

  /**/

  lb.define("para+embedded", "embedded", {
    websites: [{ kind: "wikipedia", title: "embedded", href: "https://en.wikipedia.org/wiki/Embedded_system" }],
  });

  /**/

  lb.define("para+esoteric", "Esoteric", {
    websites: [
      { kind: "wikipedia", title: "Esoteric", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language" },
    ],
  });

  /**/

  lb.define("para+event-driven", "event-driven", {
    websites: [
      { kind: "wikipedia", title: "Event-driven", href: "https://en.wikipedia.org/wiki/Event-driven_programming" },
    ],
  });

  /**/

  lb.define("para+exp-oriented", "exp-oriented", {
    websites: [
      {
        kind: "wikipedia",
        title: "exp-oriented",
        href: "https://en.wikipedia.org/wiki/Expression-oriented_programming_language",
      },
    ],
  });

  /**/

  lb.define("para+expert-systems", "expert systems", {
    websites: [{ kind: "wikipedia", title: "expert systems", href: "https://en.wikipedia.org/wiki/Expert_systems" }],
  });

  /**/

  lb.define("para+extensible", "extensible", {
    websites: [
      { kind: "wikipedia", title: "extensible", href: "https://en.wikipedia.org/wiki/Extensible_programming" },
    ],
  });

  /**/

  lb.define("para+function-level", "Function-level", {
    websites: [
      { kind: "wikipedia", title: "Function-level", href: "https://en.wikipedia.org/wiki/Function-level_programming" },
    ],
  });

  /**/

  lb.define("para+functional", "Functional", {
    websites: [
      { kind: "wikipedia", title: "functional", href: "https://en.wikipedia.org/wiki/Functional_programming" },
      {
        kind: "wikipedia",
        title: "Purely functional",
        href: "https://en.wikipedia.org/wiki/Purely_functional_programming",
      },
      { kind: "wikipedia", title: "Functional", href: "https://en.wikipedia.org/wiki/Functional_programming_language" },
      {
        kind: "wikipedia",
        title: "functional reactive",
        href: "https://en.wikipedia.org/wiki/Functional_reactive_programming",
      },
    ],
  });

  /**/

  lb.define("para+general-purpose", "general-purpose", {
    websites: [
      {
        kind: "wikipedia",
        title: "general-purpose",
        href: "https://en.wikipedia.org/wiki/General-purpose_programming_language",
      },
    ],
  });

  /**/

  lb.define("para+generic", "generic programming", {
    websites: [{ kind: "wikipedia", title: "generic", href: "https://en.wikipedia.org/wiki/Generic_programming" }],
  });

  /**/

  lb.define("para+grid", "grid", {
    websites: [{ kind: "wikipedia", title: "grid", href: "https://en.wikipedia.org/wiki/Grid_computing" }],
  });

  /**/

  lb.define("para+imperative", "procedural", {
    websites: [
      { kind: "wikipedia", title: "imperative", href: "https://en.wikipedia.org/wiki/Imperative_programming" },
      { kind: "wikipedia", title: "procedural", href: "https://en.wikipedia.org/wiki/Procedural_programming" },
      { kind: "wikipedia", title: "imperative", href: "https://en.wikipedia.org/wiki/Imperative_programming_language" },
      { kind: "wikipedia", title: "procedural", href: "https://en.wikipedia.org/wiki/Procedural_language" },
    ],
  });

  /**/

  lb.define("para+in-memory-database", "in-memory database", {
    websites: [
      { kind: "wikipedia", title: "in-memory database", href: "https://en.wikipedia.org/wiki/In-memory_database" },
    ],
  });

  /**/

  lb.define("para+interpreted", "interpreted", {
    websites: [{ kind: "wikipedia", title: "interpreted", href: "https://en.wikipedia.org/wiki/Interpreted_language" }],
  });

  /**/

  lb.define("para+json", "JSON", {
    websites: [{ kind: "wikipedia", title: "JSON", href: "https://en.wikipedia.org/wiki/JSON" }],
  });

  /**/

  lb.define("para+knowledge-representation", "knowledge representation", {
    websites: [
      {
        kind: "wikipedia",
        title: "knowledge representation",
        href: "https://en.wikipedia.org/wiki/Knowledge_representation",
      },
    ],
  });

  /**/

  lb.define("para+language-oriented", "language oriented programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "language oriented programming",
        href: "https://en.wikipedia.org/wiki/Language_oriented_programming",
      },
    ],
  });

  /**/

  lb.define("para+lazy", "Lazy", {
    websites: [{ kind: "wikipedia", title: "lazy", href: "https://en.wikipedia.org/wiki/Lazy_evaluation" }],
  });

  /**/

  lb.define("para+literate", "Literate", {
    websites: [{ kind: "wikipedia", title: "Literate", href: "https://en.wikipedia.org/wiki/Literate_programming" }],
  });

  /**/

  lb.define("para+logic", "logic", {
    websites: [
      { kind: "wikipedia", title: "logic", href: "https://en.wikipedia.org/wiki/Logic_programming" },
      { kind: "wikipedia", title: "Logic Programming", href: "https://en.wikipedia.org/wiki/Logic_Programming" },
    ],
  });

  /**/

  lb.define("para+low-code", "Low-code", {
    websites: [
      { kind: "wikipedia", title: "Low-code", href: "https://en.wikipedia.org/wiki/Low-code_development_platform" },
    ],
  });

  /**/

  lb.define("para+macros", "macros", {
    websites: [
      {
        kind: "wikipedia",
        title: "general-purpose macro processor",
        href: "https://en.wikipedia.org/wiki/General-purpose_macro_processor",
      },
      { kind: "wikipedia", title: "macro", href: "https://en.wikipedia.org/wiki/Macro_(computer_science)" },
    ],
  });

  /**/

  lb.define("para+markup", "markup", {
    websites: [{ kind: "wikipedia", title: "markup", href: "https://en.wikipedia.org/wiki/Markup_language" }],
  });

  /**/

  lb.define("para+message-passing", "message passing", {
    websites: [{ kind: "wikipedia", title: "message passing", href: "https://en.wikipedia.org/wiki/Message_passing" }],
  });

  /**/

  lb.define("para+meta", "meta", {
    websites: [{ kind: "wikipedia", title: "meta", href: "https://en.wikipedia.org/wiki/Metaprogramming" }],
  });

  /**/

  lb.define("para+modular", "modular", {
    websites: [{ kind: "wikipedia", title: "modular", href: "https://en.wikipedia.org/wiki/Modular_programming" }],
  });

  /**/

  lb.define("para+multi-paradigm", "multi-paradigm", {
    websites: [
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Multi-paradigm_programming_language",
      },
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Programming_paradigm#Multi-paradigm_programming_language",
      },
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Programming_paradigm#Multi-paradigm",
      },
      { kind: "wikipedia", title: "multi-paradigm", href: "https://en.wikipedia.org/wiki/Multi-paradigm" },
      { kind: "wikipedia", title: "Multi-paradigm", href: "https://en.wikipedia.org/wiki/Programming_paradigm" },
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Comparison_of_multi-paradigm_programming_languages",
      },
      {
        kind: "wikipedia",
        title: "Multiparadigm",
        href: "https://en.wikipedia.org/wiki/Multiparadigm_programming_language",
      },
      { kind: "wikipedia", title: "multiple dispatch", href: "https://en.wikipedia.org/wiki/Multiple_dispatch" },
      { kind: "wikipedia", title: "multistaged", href: "https://en.wikipedia.org/wiki/Multistaged_programming" },
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Programming_paradigm#Support_for_multiple_paradigms",
      },
    ],
  });

  /**/

  lb.define("para+natural-language", "natural-language", {
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

  /**/

  lb.define("para+non-structured", "Non-structured", {
    websites: [
      { kind: "wikipedia", title: "non-structured", href: "https://en.wikipedia.org/wiki/Non-structured_programming" },
    ],
  });

  /**/

  lb.define("para+nondeterministic", "nondeterministic", {
    websites: [
      {
        kind: "wikipedia",
        title: "nondeterministic",
        href: "https://en.wikipedia.org/wiki/Nondeterministic_programming",
      },
    ],
  });

  /**/

  lb.define("para+numerical-control", "Numerical control", {
    websites: [
      { kind: "wikipedia", title: "Numerical control", href: "https://en.wikipedia.org/wiki/Numerical_control" },
    ],
  });

  /**/

  lb.define("para+objects", "object-oriented", {
    websites: [
      {
        kind: "wikipedia",
        title: "object-oriented",
        href: "https://en.wikipedia.org/wiki/Object-oriented_programming",
      },
      { kind: "wikipedia", title: "object-based", href: "https://en.wikipedia.org/wiki/Object-based_language" },
      { kind: "wikipedia", title: "object-oriented", href: "https://en.wikipedia.org/wiki/Object-oriented" },
      {
        kind: "wikipedia",
        title: "Object-oriented",
        href: "https://en.wikipedia.org/wiki/Object-oriented_programming_language",
      },
      {
        kind: "wikipedia",
        title: "object oriented",
        href: "https://en.wikipedia.org/wiki/Object_oriented_programming",
      },
      { kind: "wikipedia", title: "Object database", href: "https://en.wikipedia.org/wiki/Object_database" },
      {
        kind: "wikipedia",
        title: "object-oriented",
        href: "https://en.wikipedia.org/wiki/Object-oriented_Programming",
      },
      {
        kind: "wikipedia",
        title: "Object oriented",
        href: "https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design",
      },
    ],
  });

  /**/

  lb.define("para+parallel", "parallel", {
    websites: [
      { kind: "wikipedia", title: "parallel", href: "https://en.wikipedia.org/wiki/Parallel_programming" },
      { kind: "wikipedia", title: "parallel", href: "https://en.wikipedia.org/wiki/Parallel_computing" },
      {
        kind: "wikipedia",
        title: "Parallel programming",
        href: "https://en.wikipedia.org/wiki/Parallel_programming_model",
      },
    ],
  });

  /**/

  lb.define("para+partitioned-global-address-space", "Partitioned global address space", {
    websites: [
      {
        kind: "wikipedia",
        title: "Partitioned global address space",
        href: "https://en.wikipedia.org/wiki/Partitioned_global_address_space",
      },
    ],
  });

  /**/

  lb.define("para+pattern-matching", "Pattern-matching", {
    websites: [
      { kind: "wikipedia", title: "Pattern-matching", href: "https://en.wikipedia.org/wiki/Pattern-matching" },
    ],
  });

  /**/

  lb.define("para+people-oriented", "People Oriented Programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "People Oriented Programming",
        href: "https://en.wikipedia.org/w/index.php?title=People_Oriented_Programming&action=edit&redlink=1",
      },
    ],
  });

  /**/

  lb.define("para+pipeline", "pipeline", {
    websites: [
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_(software)" },
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_programming" },
    ],
  });

  /**/

  lb.define("para+process-oriented", "processing", {
    websites: [
      {
        kind: "wikipedia",
        title: "process-oriented",
        href: "https://en.wikipedia.org/wiki/Process-oriented_programming",
      },
      {
        kind: "wikipedia",
        title: "rule processing",
        href: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
      },
      { kind: "wikipedia", title: "processing", href: "https://en.wikipedia.org/wiki/In-memory_processing" },
    ],
  });

  /**/

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

  /**/

  lb.define("para+query-language", "Query language", {
    websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
  });

  /**/

  lb.define("para+reactive", "reactive", {
    websites: [{ kind: "wikipedia", title: "reactive", href: "https://en.wikipedia.org/wiki/Reactive_programming" }],
  });

  /**/

  lb.define("para+real-time", "real-time", {
    websites: [{ kind: "wikipedia", title: "real-time", href: "https://en.wikipedia.org/wiki/Real-time_computing" }],
  });

  /**/

  lb.define("para+reflective", "Reflective", {
    websites: [
      { kind: "wikipedia", title: "reflective", href: "https://en.wikipedia.org/wiki/Reflective_programming" },
      {
        kind: "wikipedia",
        title: "reflective",
        href: "https://en.wikipedia.org/wiki/Reflection_(computer_programming)",
      },
      { kind: "wikipedia", title: "Reflective", href: "https://en.wikipedia.org/wiki/Reflection_(computer_science)" },
    ],
  });

  /**/

  lb.define("para+reversible", "reversible", {
    websites: [{ kind: "wikipedia", title: "reversible", href: "https://en.wikipedia.org/wiki/Reversible_computing" }],
  });

  /**/

  lb.define("para+scientific-workflow", "scientific workflow", {
    websites: [
      {
        kind: "wikipedia",
        title: "scientific workflow",
        href: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
      },
    ],
  });

  /**/

  lb.define("para+scripting", "scripting", {
    websites: [{ kind: "wikipedia", title: "scripting", href: "https://en.wikipedia.org/wiki/Scripting_language" }],
  });

  /**/

  lb.define("para+shared-memory", "shared memory", {
    websites: [{ kind: "wikipedia", title: "shared memory", href: "https://en.wikipedia.org/wiki/Shared_memory" }],
  });

  /**/

  lb.define("para+simulation", "simulation", {
    websites: [{ kind: "wikipedia", title: "simulation", href: "https://en.wikipedia.org/wiki/Simulation_language" }],
  });

  /**/

  lb.define("para+stack-oriented", "stack-based", {
    websites: [
      {
        kind: "wikipedia",
        title: "stack-based",
        href: "https://en.wikipedia.org/wiki/Stack-oriented_programming_language",
      },
      { kind: "wikipedia", title: "stack-based", href: "https://en.wikipedia.org/wiki/Stack-oriented_programming" },
      { kind: "wikipedia", title: "stack machine", href: "https://en.wikipedia.org/wiki/Stack_machine" },
    ],
  });

  /**/

  lb.define("para+strongly-typed", "strongly typed", {
    websites: [{ kind: "wikipedia", title: "strongly typed", href: "https://en.wikipedia.org/wiki/Strongly_typed" }],
  });

  /**/

  lb.define("para+structured", "structured", {
    websites: [
      { kind: "wikipedia", title: "Structured", href: "https://en.wikipedia.org/wiki/Structured_programming" },
    ],
  });

  /**/

  lb.define("para+style-language", "Style language", {
    websites: [{ kind: "wikipedia", title: "Style language", href: "https://en.wikipedia.org/wiki/Style_language" }],
  });

  /**/

  lb.define("para+symbolic", "symbolic", {
    websites: [{ kind: "wikipedia", title: "symbolic", href: "https://en.wikipedia.org/wiki/Symbolic_programming" }],
  });

  /**/

  lb.define("para+tacit", "tacit programming", {
    websites: [{ kind: "wikipedia", title: "tacit", href: "https://en.wikipedia.org/wiki/Tacit_programming" }],
  });

  /**/

  lb.define("para+term-rewriting", "Term-rewriting", {
    websites: [
      { kind: "wikipedia", title: "term rewriting", href: "https://en.wikipedia.org/wiki/Term_rewriting" },
      { kind: "wikipedia", title: "term-rewriting", href: "https://en.wikipedia.org/wiki/Term-rewriting" },
    ],
  });

  /**/

  lb.define("para+thread-safe", "thread safe", {
    websites: [{ kind: "wikipedia", title: "thread safe", href: "https://en.wikipedia.org/wiki/Thread_safe" }],
  });

  /**/

  lb.define("para+transformation-language", "Transformation language", {
    websites: [
      {
        kind: "wikipedia",
        title: "Transformation language",
        href: "https://en.wikipedia.org/wiki/Transformation_language",
      },
    ],
  });

  /**/

  lb.define("para+typed-language", "typed language", {
    websites: [{ kind: "wikipedia", title: "typed language", href: "https://en.wikipedia.org/wiki/Typed_language" }],
  });

  /**/

  lb.define("para+unstructured", "unstructured", {
    websites: [
      { kind: "wikipedia", title: "unstructured", href: "https://en.wikipedia.org/wiki/Unstructured_programming" },
    ],
  });

  /**/

  lb.define("para+vector-oriented", "vector-oriented programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "vector-oriented programming",
        href: "https://en.wikipedia.org/wiki/Array_programming",
      },
    ],
  });

  /**/

  lb.define("para+visual", "block-based", {
    websites: [
      { kind: "wikipedia", title: "Visual", href: "https://en.wikipedia.org/wiki/Visual_programming_language" },
    ],
  });

  /**/
}
