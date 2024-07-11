import type { PlangsGraph } from "../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+agent").merge({
    name: "agent-based",
    websites: [
      { kind: "wikipedia", title: "agent-oriented", href: "https://en.wikipedia.org/wiki/Agent-oriented_programming" },
      { kind: "wikipedia", title: "agent-based", href: "https://en.wikipedia.org/wiki/Agent-based_model" },
    ],
  });

  /**/

  g.buildParadigm("para+algebraic").merge({
    name: "algebraic types",
    websites: [{ kind: "wikipedia", title: "algebraic types", href: "https://en.wikipedia.org/wiki/Algebraic_types" }],
  });

  /**/

  g.buildParadigm("para+algorithmic").merge({
    name: "algorithmic",
    websites: [
      {
        kind: "wikipedia",
        title: "algorithmic",
        href: "https://en.wikipedia.org/w/index.php?title=Algorithmic_programming&action=edit&redlink=1",
      },
    ],
  });

  /**/

  g.buildParadigm("para+array").merge({
    name: "Array",
    websites: [{ kind: "wikipedia", title: "Array", href: "https://en.wikipedia.org/wiki/Array_programming" }],
  });

  /**/

  g.buildParadigm("para+aspect").merge({
    name: "aspect-oriented",
    websites: [
      {
        kind: "wikipedia",
        title: "aspect-oriented",
        href: "https://en.wikipedia.org/wiki/Aspect-oriented_programming",
      },
    ],
  });

  /**/

  g.buildParadigm("para+assembly").merge({
    name: "Assembly",
    websites: [{ kind: "wikipedia", title: "Assembly", href: "https://en.wikipedia.org/wiki/Assembly_language" }],
  });

  /**/

  g.buildParadigm("para+block").merge({
    name: "block structured",
    websites: [
      { kind: "wikipedia", title: "block structured", href: "https://en.wikipedia.org/wiki/Block_(programming)" },
    ],
  });

  /**/

  g.buildParadigm("para+class").merge({
    name: "class-based",
    websites: [
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class_(computer_programming)" },
      { kind: "wikipedia", title: "Class-based", href: "https://en.wikipedia.org/wiki/Class-based_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+compiled").merge({
    name: "compiled",
    websites: [{ kind: "wikipedia", title: "compiled", href: "https://en.wikipedia.org/wiki/Compiled_language" }],
  });

  /**/

  g.buildParadigm("para+component").merge({
    name: "component-based",
    websites: [
      {
        kind: "wikipedia",
        title: "component-based",
        href: "https://en.wikipedia.org/wiki/Component-based_software_engineering",
      },
    ],
  });

  /**/

  g.buildParadigm("para+computer").merge({
    name: "agent-based",
    websites: [
      { kind: "wikipedia", title: "agent-based", href: "https://en.wikipedia.org/wiki/Computer_simulation#Types" },
    ],
  });

  /**/

  g.buildParadigm("para+concatenative").merge({
    name: "concatenative",
    websites: [
      {
        kind: "wikipedia",
        title: "concatenative",
        href: "https://en.wikipedia.org/wiki/Concatenative_programming_language",
      },
      { kind: "wikipedia", title: "Concatenative", href: "https://en.wikipedia.org/wiki/Concatenative_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+concurrent").merge({
    name: "concurrent",
    websites: [
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_computing" },
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_programming" },
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_programming_language" },
      {
        kind: "wikipedia",
        title: "Concurrent",
        href: "https://en.wikipedia.org/wiki/Concurrent_object-oriented_programming",
      },
    ],
  });

  /**/

  g.buildParadigm("para+constraint").merge({
    name: "constraint",
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

  g.buildParadigm("para+csp").merge({
    name: "communicating sequential processes",
    websites: [
      {
        kind: "wikipedia",
        title: "communicating sequential processes",
        href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
      },
    ],
  });

  /**/

  g.buildParadigm("para+data").merge({
    name: "Data-driven",
    websites: [
      { kind: "wikipedia", title: "data-driven", href: "https://en.wikipedia.org/wiki/Data-driven_programming" },
      { kind: "wikipedia", title: "data exchange", href: "https://en.wikipedia.org/wiki/Data_exchange_language" },
    ],
  });

  /**/

  g.buildParadigm("para+dataflow").merge({
    name: "dataflow",
    websites: [
      { kind: "wikipedia", title: "Dataflow programming", href: "https://en.wikipedia.org/wiki/Dataflow" },
      { kind: "wikipedia", title: "Dataflow", href: "https://en.wikipedia.org/wiki/Dataflow_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+dec").merge({
    name: "Declarative",
    websites: [
      { kind: "wikipedia", title: "declarative", href: "https://en.wikipedia.org/wiki/Declarative_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+dependent").merge({
    name: "dependent typed",
    websites: [{ kind: "wikipedia", title: "dependent typed", href: "https://en.wikipedia.org/wiki/Dependent_type" }],
  });

  /**/

  g.buildParadigm("para+distributed").merge({
    name: "distributed",
    websites: [
      { kind: "wikipedia", title: "distributed", href: "https://en.wikipedia.org/wiki/Distributed_computing" },
      { kind: "wikipedia", title: "distributed", href: "https://en.wikipedia.org/wiki/Distributed_programming" },
      { kind: "wikipedia", title: "Distributed cache", href: "https://en.wikipedia.org/wiki/Distributed_cache" },
    ],
  });

  /**/

  g.buildParadigm("para+domain").merge({
    name: "domain-specific",
    websites: [
      { kind: "wikipedia", title: "domain-specific", href: "https://en.wikipedia.org/wiki/Domain-specific_language" },
    ],
  });

  /**/

  g.buildParadigm("para+educational").merge({
    name: "educational",
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

  g.buildParadigm("para+embedded").merge({
    name: "embedded",
    websites: [{ kind: "wikipedia", title: "embedded", href: "https://en.wikipedia.org/wiki/Embedded_system" }],
  });

  /**/

  g.buildParadigm("para+esoteric").merge({
    name: "Esoteric",
    websites: [
      { kind: "wikipedia", title: "Esoteric", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language" },
    ],
  });

  /**/

  g.buildParadigm("para+event").merge({
    name: "event-driven",
    websites: [
      { kind: "wikipedia", title: "Event-driven", href: "https://en.wikipedia.org/wiki/Event-driven_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+expert").merge({
    name: "expert systems",
    websites: [{ kind: "wikipedia", title: "expert systems", href: "https://en.wikipedia.org/wiki/Expert_systems" }],
  });

  /**/

  g.buildParadigm("para+extensible").merge({
    name: "extensible",
    websites: [
      { kind: "wikipedia", title: "extensible", href: "https://en.wikipedia.org/wiki/Extensible_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+function").merge({
    name: "function-level",
    websites: [
      { kind: "wikipedia", title: "Function-level", href: "https://en.wikipedia.org/wiki/Function-level_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+functional").merge({
    name: "functional",
    websites: [
      { kind: "wikipedia", title: "functional", href: "https://en.wikipedia.org/wiki/Functional_programming" },
      { kind: "wikipedia", title: "functional", href: "https://en.wikipedia.org/wiki/Functional_programming_language" },
      {
        kind: "wikipedia",
        title: "Purely functional",
        href: "https://en.wikipedia.org/wiki/Purely_functional_programming",
      },
      {
        kind: "wikipedia",
        title: "functional reactive",
        href: "https://en.wikipedia.org/wiki/Functional_reactive_programming",
      },
    ],
  });

  /**/

  g.buildParadigm("para+general").merge({
    name: "general-purpose",
    websites: [
      {
        kind: "wikipedia",
        title: "general-purpose",
        href: "https://en.wikipedia.org/wiki/General-purpose_programming_language",
      },
    ],
  });

  /**/

  g.buildParadigm("para+generic").merge({
    name: "generic",
    websites: [{ kind: "wikipedia", title: "generic", href: "https://en.wikipedia.org/wiki/Generic_programming" }],
  });

  /**/

  g.buildParadigm("para+grid").merge({
    name: "grid",
    websites: [{ kind: "wikipedia", title: "grid", href: "https://en.wikipedia.org/wiki/Grid_computing" }],
  });

  /**/

  g.buildParadigm("para+imperative").merge({
    name: "Imperative",
    websites: [
      { kind: "wikipedia", title: "imperative", href: "https://en.wikipedia.org/wiki/Imperative_programming" },
      { kind: "wikipedia", title: "procedural", href: "https://en.wikipedia.org/wiki/Procedural_programming" },
      { kind: "wikipedia", title: "imperative", href: "https://en.wikipedia.org/wiki/Imperative_programming_language" },
      { kind: "wikipedia", title: "procedural", href: "https://en.wikipedia.org/wiki/Procedural_language" },
    ],
  });

  /**/

  g.buildParadigm("para+in").merge({
    name: "in-memory database",
    websites: [
      { kind: "wikipedia", title: "in-memory database", href: "https://en.wikipedia.org/wiki/In-memory_database" },
    ],
  });

  /**/

  g.buildParadigm("para+information").merge({
    name: "data and procedure hiding",
    websites: [
      {
        kind: "wikipedia",
        title: "data and procedure hiding",
        href: "https://en.wikipedia.org/wiki/Information_hiding",
      },
    ],
  });

  /**/

  g.buildParadigm("para+interface").merge({
    name: "protocol-oriented",
    websites: [
      {
        kind: "wikipedia",
        title: "protocol-oriented",
        href: "https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)",
      },
    ],
  });

  /**/

  g.buildParadigm("para+interpreted").merge({
    name: "interpreted",
    websites: [{ kind: "wikipedia", title: "interpreted", href: "https://en.wikipedia.org/wiki/Interpreted_language" }],
  });

  /**/

  g.buildParadigm("para+json").merge({
    name: "JSON",
    websites: [{ kind: "wikipedia", title: "JSON", href: "https://en.wikipedia.org/wiki/JSON" }],
  });

  /**/

  g.buildParadigm("para+knowledge").merge({
    name: "knowledge representation",
    websites: [
      {
        kind: "wikipedia",
        title: "knowledge representation",
        href: "https://en.wikipedia.org/wiki/Knowledge_representation",
      },
    ],
  });

  /**/

  g.buildParadigm("para+language").merge({
    name: "language oriented programming",
    websites: [
      {
        kind: "wikipedia",
        title: "language oriented programming",
        href: "https://en.wikipedia.org/wiki/Language_oriented_programming",
      },
    ],
  });

  /**/

  g.buildParadigm("para+lazy").merge({
    name: "Lazy",
    websites: [{ kind: "wikipedia", title: "lazy", href: "https://en.wikipedia.org/wiki/Lazy_evaluation" }],
  });

  /**/

  g.buildParadigm("para+literate").merge({
    name: "Literate",
    websites: [{ kind: "wikipedia", title: "Literate", href: "https://en.wikipedia.org/wiki/Literate_programming" }],
  });

  /**/

  g.buildParadigm("para+logic").merge({
    name: "Logic Programming",
    websites: [
      { kind: "wikipedia", title: "logic", href: "https://en.wikipedia.org/wiki/Logic_programming" },
      {
        kind: "wikipedia",
        title: "concurrent constraint logic",
        href: "https://en.wikipedia.org/wiki/Concurrent_constraint_logic_programming",
      },
    ],
  });

  /**/

  g.buildParadigm("para+low").merge({
    name: "Low-code",
    websites: [
      { kind: "wikipedia", title: "Low-code", href: "https://en.wikipedia.org/wiki/Low-code_development_platform" },
    ],
  });

  /**/

  g.buildParadigm("para+macros").merge({
    name: "general-purpose macro processor",
    websites: [
      { kind: "wikipedia", title: "macros", href: "https://en.wikipedia.org/wiki/Macro_(computer_science)" },
      {
        kind: "wikipedia",
        title: "general-purpose macro processor",
        href: "https://en.wikipedia.org/wiki/General-purpose_macro_processor",
      },
    ],
  });

  /**/

  g.buildParadigm("para+markup").merge({
    name: "markup",
    websites: [{ kind: "wikipedia", title: "markup", href: "https://en.wikipedia.org/wiki/Markup_language" }],
  });

  /**/

  g.buildParadigm("para+message").merge({
    name: "message passing",
    websites: [{ kind: "wikipedia", title: "message passing", href: "https://en.wikipedia.org/wiki/Message_passing" }],
  });

  /**/

  g.buildParadigm("para+meta").merge({
    name: "meta",
    websites: [{ kind: "wikipedia", title: "meta", href: "https://en.wikipedia.org/wiki/Metaprogramming" }],
  });

  /**/

  g.buildParadigm("para+modular").merge({
    name: "modular",
    websites: [{ kind: "wikipedia", title: "modular", href: "https://en.wikipedia.org/wiki/Modular_programming" }],
  });

  /**/

  g.buildParadigm("para+natural").merge({
    name: "natural language programming",
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

  g.buildParadigm("para+non").merge({
    name: "non-structured",
    websites: [
      { kind: "wikipedia", title: "Non-structured", href: "https://en.wikipedia.org/wiki/Non-structured_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+nondeterministic").merge({
    name: "nondeterministic",
    websites: [
      {
        kind: "wikipedia",
        title: "nondeterministic",
        href: "https://en.wikipedia.org/wiki/Nondeterministic_programming",
      },
    ],
  });

  /**/

  g.buildParadigm("para+numerical").merge({
    name: "Numerical control",
    websites: [
      { kind: "wikipedia", title: "Numerical control", href: "https://en.wikipedia.org/wiki/Numerical_control" },
    ],
  });

  /**/

  g.buildParadigm("para+objects").merge({
    name: "object-oriented",
    websites: [
      {
        kind: "wikipedia",
        title: "object-oriented",
        href: "https://en.wikipedia.org/wiki/Object-oriented_programming",
      },
      { kind: "wikipedia", title: "object-oriented", href: "https://en.wikipedia.org/wiki/Object-oriented" },
      {
        kind: "wikipedia",
        title: "Object oriented",
        href: "https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design",
      },
      {
        kind: "wikipedia",
        title: "object oriented",
        href: "https://en.wikipedia.org/wiki/Object_oriented_programming",
      },
      { kind: "wikipedia", title: "Object database", href: "https://en.wikipedia.org/wiki/Object_database" },
      { kind: "wikipedia", title: "object-based", href: "https://en.wikipedia.org/wiki/Object-based_language" },
      {
        kind: "wikipedia",
        title: "Object-oriented",
        href: "https://en.wikipedia.org/wiki/Object-oriented_programming_language",
      },
    ],
  });

  /**/

  g.buildParadigm("para+parallel").merge({
    name: "parallel",
    websites: [
      { kind: "wikipedia", title: "parallel", href: "https://en.wikipedia.org/wiki/Parallel_programming" },
      {
        kind: "wikipedia",
        title: "Parallel programming",
        href: "https://en.wikipedia.org/wiki/Parallel_programming_model",
      },
      { kind: "wikipedia", title: "parallel", href: "https://en.wikipedia.org/wiki/Parallel_computing" },
    ],
  });

  /**/

  g.buildParadigm("para+partitioned").merge({
    name: "Partitioned global address space",
    websites: [
      {
        kind: "wikipedia",
        title: "Partitioned global address space",
        href: "https://en.wikipedia.org/wiki/Partitioned_global_address_space",
      },
    ],
  });

  /**/

  g.buildParadigm("para+pattern").merge({
    name: "Pattern-matching",
    websites: [
      { kind: "wikipedia", title: "Pattern-matching", href: "https://en.wikipedia.org/wiki/Pattern-matching" },
    ],
  });

  /**/

  g.buildParadigm("para+people").merge({
    name: "People Oriented Programming",
    websites: [
      {
        kind: "wikipedia",
        title: "People Oriented Programming",
        href: "https://en.wikipedia.org/w/index.php?title=People_Oriented_Programming&action=edit&redlink=1",
      },
    ],
  });

  /**/

  g.buildParadigm("para+pipeline").merge({
    name: "pipeline",
    websites: [
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_(software)" },
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+process").merge({
    name: "process-oriented",
    websites: [
      {
        kind: "wikipedia",
        title: "process-oriented",
        href: "https://en.wikipedia.org/wiki/Process-oriented_programming",
      },
      { kind: "wikipedia", title: "processing", href: "https://en.wikipedia.org/wiki/In-memory_processing" },
    ],
  });

  /**/

  g.buildParadigm("para+production").merge({
    name: "rule processing",
    websites: [
      {
        kind: "wikipedia",
        title: "rule processing",
        href: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
      },
    ],
  });

  /**/

  g.buildParadigm("para+prototypes").merge({
    name: "prototype-based",
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

  g.buildParadigm("para+quantum").merge({
    name: "Quantum",
    websites: [{ kind: "wikipedia", title: "Quantum", href: "https://en.wikipedia.org/wiki/Quantum_programming" }],
  });

  /**/

  g.buildParadigm("para+query").merge({
    name: "Query language",
    websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
  });

  /**/

  g.buildParadigm("para+reactive").merge({
    name: "reactive",
    websites: [{ kind: "wikipedia", title: "reactive", href: "https://en.wikipedia.org/wiki/Reactive_programming" }],
  });

  /**/

  g.buildParadigm("para+real").merge({
    name: "real-time",
    websites: [{ kind: "wikipedia", title: "real-time", href: "https://en.wikipedia.org/wiki/Real-time_computing" }],
  });

  /**/

  g.buildParadigm("para+reflection").merge({
    name: "reflective",
    websites: [
      { kind: "wikipedia", title: "Reflective", href: "https://en.wikipedia.org/wiki/Reflection_(computer_science)" },
      {
        kind: "wikipedia",
        title: "reflective",
        href: "https://en.wikipedia.org/wiki/Reflection_(computer_programming)",
      },
    ],
  });

  /**/

  g.buildParadigm("para+reflective").merge({
    name: "reflective",
    websites: [
      { kind: "wikipedia", title: "reflective", href: "https://en.wikipedia.org/wiki/Reflective_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+reversible").merge({
    name: "reversible",
    websites: [{ kind: "wikipedia", title: "reversible", href: "https://en.wikipedia.org/wiki/Reversible_computing" }],
  });

  /**/

  g.buildParadigm("para+scientific").merge({
    name: "scientific workflow",
    websites: [
      {
        kind: "wikipedia",
        title: "scientific workflow",
        href: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
      },
    ],
  });

  /**/

  g.buildParadigm("para+scripting").merge({
    name: "scripting",
    websites: [{ kind: "wikipedia", title: "scripting", href: "https://en.wikipedia.org/wiki/Scripting_language" }],
  });

  /**/

  g.buildParadigm("para+shared").merge({
    name: "shared memory",
    websites: [{ kind: "wikipedia", title: "shared memory", href: "https://en.wikipedia.org/wiki/Shared_memory" }],
  });

  /**/

  g.buildParadigm("para+simulation").merge({
    name: "simulation",
    websites: [{ kind: "wikipedia", title: "simulation", href: "https://en.wikipedia.org/wiki/Simulation_language" }],
  });

  /**/

  g.buildParadigm("para+stack").merge({
    name: "stack machine",
    websites: [
      { kind: "wikipedia", title: "stack-based", href: "https://en.wikipedia.org/wiki/Stack-oriented_programming" },
      {
        kind: "wikipedia",
        title: "stack-oriented",
        href: "https://en.wikipedia.org/wiki/Stack-oriented_programming_language",
      },
      { kind: "wikipedia", title: "stack machine", href: "https://en.wikipedia.org/wiki/Stack_machine" },
    ],
  });

  /**/

  g.buildParadigm("para+strongly").merge({
    name: "strongly typed",
    websites: [{ kind: "wikipedia", title: "strongly typed", href: "https://en.wikipedia.org/wiki/Strongly_typed" }],
  });

  /**/

  g.buildParadigm("para+structured").merge({
    name: "structured",
    websites: [
      { kind: "wikipedia", title: "structured", href: "https://en.wikipedia.org/wiki/Structured_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+symbolic").merge({
    name: "symbolic",
    websites: [{ kind: "wikipedia", title: "symbolic", href: "https://en.wikipedia.org/wiki/Symbolic_programming" }],
  });

  /**/

  g.buildParadigm("para+tacit").merge({
    name: "tacit programming",
    websites: [{ kind: "wikipedia", title: "tacit", href: "https://en.wikipedia.org/wiki/Tacit_programming" }],
  });

  /**/

  g.buildParadigm("para+term").merge({
    name: "term-rewriting",
    websites: [
      { kind: "wikipedia", title: "term rewriting", href: "https://en.wikipedia.org/wiki/Term_rewriting" },
      { kind: "wikipedia", title: "term-rewriting", href: "https://en.wikipedia.org/wiki/Term-rewriting" },
    ],
  });

  /**/

  g.buildParadigm("para+the").merge({
    name: "task-driven",
    websites: [
      {
        kind: "wikipedia",
        title: "task-driven",
        href: "https://en.wikipedia.org/wiki/The_Task-based_Asynchronous_Pattern",
      },
    ],
  });

  /**/

  g.buildParadigm("para+thread").merge({
    name: "thread safe",
    websites: [{ kind: "wikipedia", title: "thread safe", href: "https://en.wikipedia.org/wiki/Thread_safe" }],
  });

  /**/

  g.buildParadigm("para+typed").merge({
    name: "typed language",
    websites: [{ kind: "wikipedia", title: "typed language", href: "https://en.wikipedia.org/wiki/Typed_language" }],
  });

  /**/

  g.buildParadigm("para+unstructured").merge({
    name: "unstructured",
    websites: [
      { kind: "wikipedia", title: "unstructured", href: "https://en.wikipedia.org/wiki/Unstructured_programming" },
    ],
  });

  /**/

  g.buildParadigm("para+visual").merge({
    name: "visual",
    websites: [
      { kind: "wikipedia", title: "Visual", href: "https://en.wikipedia.org/wiki/Visual_programming_language" },
    ],
  });

  /**/
}
