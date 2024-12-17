import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+agents", {
    name: "Agents",
    description: "Agent-oriented programming simulates the actions and interactions of autonomous agents.",
    extHomeURL: "https://en.wikipedia.org/wiki/Agent-oriented_programming",
    keywords: ["agent"],
  });

  g.paradigm.set("para+array", {
    name: "Array",
    description:
      "In computer science, array programming refers to solutions that allow the application of operations to an entire set of values at once. Such solutions are commonly used in scientific and engineering settings.",
    extHomeURL: "https://en.wikipedia.org/wiki/Array_programming",
    keywords: ["array", "vector"],
  });

  g.paradigm.set("para+aspect", {
    name: "Aspects",
    description:
      "Aims to increase modularity by allowing the separation of cross-cutting concerns. This allows behaviors that are not central to the business logic (such as logging) to be added to a program without cluttering the code of core functions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Aspect-oriented_programming",
    keywords: ["aspect"],
  });

  g.paradigm.set("para+assembly", {
    name: "Assembly",
    description:
      "Assembly language is a low-level programming language for a computer, or other programmable device, in which there is a very strong (generally one-to-one) correspondence between the language and the architecture's machine code instructions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Assembly_language",
    keywords: ["assembly"],
  });

  g.paradigm.set("para+async", {
    name: "Task-Driven",
    description:
      "Task-driven asynchronous programming allows tasks to be executed independently, enabling concurrency and efficient resource utilization.",
    extHomeURL: "https://en.wikipedia.org/wiki/Asynchronous_method_invocation",
    keywords: ["async", "task-driven"],
  });

  g.paradigm.set("para+bidirectional", {
    name: "Bidi",
    description:
      "Programs in which a single piece of code can be run in several ways, such that the same data are sometimes considered as input, and sometimes as output.",
    extHomeURL: "https://en.wikipedia.org/wiki/Bidirectional_transformation",
    keywords: ["bi-directional", "bidirectional"],
  });

  g.paradigm.set("para+compiled", {
    name: "Compiled",
    description:
      "A compiled language is a programming language for which source code is typically compiled; not interpreted. The term is vague since, in principle, any language can be compiled or interpreted and in practice some languages are both (in different environments). In some environments, source code is first compiled (to an intermediate form; often bytecode) and then interpreted.",
    extHomeURL: "https://en.wikipedia.org/wiki/Compiled_language",
    keywords: ["compilation", "compiled", "compiler"],
  });

  g.paradigm.set("para+concatenative", {
    name: "Concatenative",
    description:
      "A concatenative programming language is a point-free computer programming language in which all expressions denote functions, and the juxtaposition of expressions denotes function composition.",
    extHomeURL: "https://en.wikipedia.org/wiki/Concatenative_programming_language",
    keywords: ["concatenative"],
  });

  g.paradigm.set("para+concurrent", {
    name: "Concurrent",
    description:
      "Concurrent computing is a form of computing in which several computations are executed during overlapping time periods, concurrently, instead of sequentially. Concurrent computing is a form of modular programming. In its paradigm an overall computation is factored into subcomputations that may be executed concurrently.",
    extHomeURL: "https://en.wikipedia.org/wiki/Concurrent_computing",
    keywords: ["concurrent", "parallel"],
  });

  g.paradigm.set("para+constraint", {
    name: "Constraint",
    description: "In constraint programming, users declaratively state the constraints on the feasible solutions for a set of decision variables.",
    extHomeURL: "https://en.wikipedia.org/wiki/Constraint_programming",
    keywords: ["constraint"],
  });

  g.paradigm.set("para+contracts", {
    name: "DbC",
    description:
      "Design by Contract is a software design approach that uses contracts to define the obligations and guarantees of software components.",
    extHomeURL: "https://en.wikipedia.org/wiki/Design_by_contract",
    keywords: ["contracts", "dbc", "design by contract"],
  });

  g.paradigm.set("para+data-driven", {
    name: "Data-Centric",
    description: "Programs describe the data to be matched and the processing required rather than defining a sequence of steps to be taken.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data-driven_programming",
    keywords: ["data-driven"],
  });

  g.paradigm.set("para+data-exchange", {
    name: "Data Exchange",
    description: "Data exchange languages allow data to be shared between systems in a structured format.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_exchange_language",
    keywords: ["data exchange"],
  });

  g.paradigm.set("para+data-hiding", {
    name: "Data Hiding",
    description: "Data and procedure hiding restrict access to certain parts of a program's code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Information_hiding",
    keywords: ["hiding"],
  });

  g.paradigm.set("para+dataflow", {
    name: "Dataflow",
    description:
      "Models a program as a directed graph of the data flowing between operations, thus implementing dataflow principles and architecture.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dataflow_programming",
    keywords: ["dataflow"],
  });

  g.paradigm.set("para+declarative", {
    name: "Declarative",
    description:
      "A style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow.",
    extHomeURL: "https://en.wikipedia.org/wiki/Declarative_programming",
    keywords: ["declarative"],
  });

  g.paradigm.set("para+distributed", {
    name: "Distributed",
    description: "Distributed programming involves multiple computers working together on a single task.",
    extHomeURL: "https://en.wikipedia.org/wiki/Distributed_programming",
    keywords: ["distributed"],
  });

  g.paradigm.set("para+dsl", {
    name: "DSL",
    description: "A domain-specific language is tailored to a particular application domain.",
    extHomeURL: "https://en.wikipedia.org/wiki/Domain-specific_language",
    keywords: ["domain-specific", "dsl"],
  });

  g.paradigm.set("para+educational", {
    name: "Edu",
    description: "Educational programming languages are designed mainly to teach programming concepts.",
    extHomeURL: "https://en.wikipedia.org/wiki/Educational_programming_language",
    keywords: ["educational"],
  });

  g.paradigm.set("para+embedded", {
    name: "Embedded",
    description: "Embedded systems are specialized computing systems integrated into larger systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Embedded_system",
    keywords: ["embedded"],
  });

  g.paradigm.set("para+esoteric", {
    name: "Esoteric",
    description: "Esoteric programming languages are created as experiments, jokes, or for artistic purposes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Esoteric_programming_language",
    keywords: ["esoteric"],
  });

  g.paradigm.set("para+event-driven", {
    name: "Event-Driven",
    description: "Event-driven programming centers around responding to user actions or other events.",
    extHomeURL: "https://en.wikipedia.org/wiki/Event-driven_programming",
    keywords: ["event-driven"],
  });

  g.paradigm.set("para+exp-oriented", {
    name: "Expression-Oriented",
    description: "Expression-oriented programming emphasizes the use of expressions over statements.",
    extHomeURL: "https://en.wikipedia.org/wiki/Expression-oriented_programming_language",
    keywords: ["exp-oriented", "expression-oriented"],
  });

  g.paradigm.set("para+expert-system", {
    name: "Expert System",
    description: "Expert systems use rule-based algorithms to simulate decision-making.",
    extHomeURL: "https://en.wikipedia.org/wiki/Expert_system",
    keywords: ["expert system"],
  });

  g.paradigm.set("para+extensible", {
    name: "Extensible",
    description: "Extensible programming languages are designed to be extended with new features.",
    extHomeURL: "https://en.wikipedia.org/wiki/Extensible_programming",
    keywords: ["extensible"],
  });

  g.paradigm.set("para+frp", {
    name: "Functional Reactive",
    description: "Functional reactive programming is a programming paradigm for reactive systems using functional programming.",
    extHomeURL: "https://en.wikipedia.org/wiki/Functional_reactive_programming",
    keywords: ["frp", "functional reactive"],
  });

  g.paradigm.set("para+functional", {
    name: "Functional",
    description:
      "A programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values.",
    extHomeURL: "https://en.wikipedia.org/wiki/Functional_programming",
    keywords: ["functional", "lambda", "pure"],
  });

  g.paradigm.set("para+general-purpose", {
    name: "General-Purpose",
    description: "General-purpose programming languages are designed to solve a wide range of problems.",
    extHomeURL: "https://en.wikipedia.org/wiki/General-purpose_programming_language",
    keywords: ["general-purpose"],
  });

  g.paradigm.set("para+imperative", {
    name: "Imperative",
    description: "Imperative programming uses statements to change a program's state.",
    extHomeURL: "https://en.wikipedia.org/wiki/Imperative_programming",
    keywords: ["imperative"],
  });

  g.paradigm.set("para+interpreted", {
    name: "Interpreted",
    description: "Interpreted languages are executed directly, without prior compilation.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interpreted_language",
    keywords: ["interpreted"],
  });

  g.paradigm.set("para+language-oriented", {
    name: "Lang-Oriented",
    description: "Language-oriented programming involves the creation of domain-specific languages to solve specific problems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Language_oriented_programming",
    keywords: ["language-oriented"],
  });

  g.paradigm.set("para+lazy", {
    name: "Lazy Eval",
    description: "Lazy evaluation delays the evaluation of an expression until its value is needed.",
    extHomeURL: "https://en.wikipedia.org/wiki/Lazy_evaluation",
    keywords: ["lazy"],
  });

  g.paradigm.set("para+logic", {
    name: "Logic",
    description: "Logic programming is based on formal logic, using facts and rules to derive conclusions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Logic_Programming",
    keywords: ["logic"],
  });

  g.paradigm.set("para+low-code", {
    name: "Low-Code",
    description: "Low-code platforms enable software development with minimal hand-coding.",
    extHomeURL: "https://en.wikipedia.org/wiki/Low-code_development_platform",
    keywords: ["low-code"],
  });

  g.paradigm.set("para+macro", {
    name: "Macros",
    description:
      'A macro (short for "macro instruction") is a rule or pattern that specifies how a certain input should be mapped to a replacement output.',
    extHomeURL: "https://en.wikipedia.org/wiki/Macro_(computer_science)",
    keywords: ["macro", "macros"],
  });

  g.paradigm.set("para+message-passing", {
    name: "Message Passing",
    description: "Message passing involves communication between processes through the exchange of messages.",
    extHomeURL: "https://en.wikipedia.org/wiki/Message_passing",
    keywords: ["message-passing"],
  });

  g.paradigm.set("para+metaprogramming", {
    name: "Metaprog",
    description: "Metaprogramming refers to writing programs that generate or manipulate other programs.",
    extHomeURL: "https://en.wikipedia.org/wiki/Metaprogramming",
    keywords: ["meta", "metaprogramming"],
  });

  g.paradigm.set("para+modular", {
    name: "Modular",
    description: "Modular programming involves dividing a program into separate, independent modules.",
    extHomeURL: "https://en.wikipedia.org/wiki/Modular_programming",
    keywords: ["modular"],
  });

  g.paradigm.set("para+multi", {
    name: "Multi",
    description: "Many (most) languages are based on more than one paradigm.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multi-paradigm_programming_language",
    keywords: ["multi-paradigm", "multiparadigm"],
  });

  g.paradigm.set("para+multi-dispatch", {
    name: "Mult-Dispatch",
    description: "Multiple dispatch selects a function to invoke based on the runtime types of multiple arguments.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multiple_dispatch",
    keywords: ["multi-dispatch"],
  });

  g.paradigm.set("para+natural-language", {
    name: "Natural Lang",
    description: "Natural language programming enables the development of software using human language commands.",
    extHomeURL: "https://en.wikipedia.org/wiki/Natural_language_programming",
    keywords: ["natural language programming"],
  });

  g.paradigm.set("para+oop", {
    name: "Object-Oriented",
    description:
      "Based on the concept of objects, which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods). In OOP, computer programs are designed by making them out of objects that interact with one another.",
    extHomeURL: "https://en.wikipedia.org/wiki/Object-orientation",
    keywords: ["class-based", "object", "oop"],
  });

  g.paradigm.set("para+parallel", {
    name: "Parallel",
    description: "Parallel programming executes multiple tasks simultaneously to improve performance.",
    extHomeURL: "https://en.wikipedia.org/wiki/Parallel_programming_model",
    keywords: ["parallel programming"],
  });

  g.paradigm.set("para+pattern-matching", {
    name: "Pattern-Matching",
    description: "Pattern-matching allows for checking and decomposing data structures based on patterns.",
    extHomeURL: "https://en.wikipedia.org/wiki/Pattern-matching",
    keywords: ["pattern-matching"],
  });

  g.paradigm.set("para+pipeline", {
    name: "Pipeline",
    description: "Pipeline programming passes data through a series of processing stages, each stage producing input for the next.",
    extHomeURL: "https://en.wikipedia.org/wiki/Pipeline_(software)",
    keywords: ["pipeline"],
  });

  g.paradigm.set("para+point-free", {
    name: "Point-free",
    description:
      "Point-free (aka tacit) programming avoids specifying arguments in function definitions, focusing on composition rather than application.",
    extHomeURL: "https://en.wikipedia.org/wiki/Tacit_programming",
    keywords: ["point-free", "tacit"],
  });

  g.paradigm.set("para+procedural", {
    name: "Procedural",
    description: "Procedural programming focuses on the use of procedures or functions to perform tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Procedural_programming",
    keywords: ["procedural"],
  });

  g.paradigm.set("para+process-oriented", {
    name: "Process-Oriented",
    description: "Process-oriented programming is based on the concept of processes as the primary abstraction.",
    extHomeURL: "https://en.wikipedia.org/wiki/Process-oriented_programming",
    keywords: ["process-oriented"],
  });

  g.paradigm.set("para+protocol", {
    name: "Protocol-Oriented",
    description: "Protocol-oriented programming focuses on the design and use of interfaces or protocols to define program behavior.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)",
    keywords: ["interface", "protocol"],
  });

  g.paradigm.set("para+prototype", {
    name: "Prototype-Based",
    description: "Prototype-based programming is a style of object-oriented programming where objects are created by cloning existing ones.",
    extHomeURL: "https://en.wikipedia.org/wiki/Prototype-based_programming",
    keywords: ["prototype"],
  });

  g.paradigm.set("para+quantum", {
    name: "Quantum",
    description: "Quantum programming deals with the development of algorithms for quantum computers.",
    extHomeURL: "https://en.wikipedia.org/wiki/Quantum_programming",
    keywords: ["quantum"],
  });

  g.paradigm.set("para+query", {
    name: "Query",
    description: "A query language is used to make queries in databases and information systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Query_language",
    keywords: ["query"],
  });

  g.paradigm.set("para+reactive", {
    name: "Reactive",
    description: "Reactive programming focuses on asynchronous data streams and the propagation of change.",
    extHomeURL: "https://en.wikipedia.org/wiki/Reactive_programming",
    keywords: ["reactive"],
  });

  g.paradigm.set("para+real-time", {
    name: "Real-Time",
    description: "Real-time computing involves tasks that must be completed within strict timing constraints.",
    extHomeURL: "https://en.wikipedia.org/wiki/Real-time_computing",
    keywords: ["real-time"],
  });

  g.paradigm.set("para+reflective", {
    name: "Reflective",
    description: "Reflective programming allows a program to inspect and modify its own structure and behavior at runtime.",
    extHomeURL: "https://en.wikipedia.org/wiki/Reflective_programming",
    keywords: ["reflective"],
  });

  g.paradigm.set("para+rewriting", {
    name: "Term Rewriting",
    description: "Term-rewriting involves transforming expressions according to a set of rules to perform computation.",
    extHomeURL: "https://en.wikipedia.org/wiki/Term-rewriting",
    keywords: ["rewriting", "term-rewriting"],
  });

  g.paradigm.set("para+rules", {
    name: "Rule-Based",
    description: "Rule-based processing involves defining rules that control the logic of decision-making systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
    keywords: ["rule", "rules"],
  });

  g.paradigm.set("para+scientific", {
    name: "Scientific",
    description: "Scientific workflow systems support the automation of complex scientific processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
    keywords: ["scientific"],
  });

  g.paradigm.set("para+scripting", {
    name: "Scripting",
    description: "Scripting languages are used for automating tasks within a software environment.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scripting_language",
    keywords: ["scripting"],
  });

  g.paradigm.set("para+shared-memory", {
    name: "Shared Mem",
    description: "Shared memory systems allow multiple processes to access the same memory space.",
    extHomeURL: "https://en.wikipedia.org/wiki/Shared_memory",
    keywords: ["shared memory"],
  });

  g.paradigm.set("para+simulation", {
    name: "Simulation",
    description: "Simulation languages are specialized for modeling and simulating complex systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Simulation_language",
    keywords: ["simulation"],
  });

  g.paradigm.set("para+stack-oriented", {
    name: "Stack-Oriented",
    description: "Stack-oriented programming uses a stack-based data structure for passing parameters.",
    extHomeURL: "https://en.wikipedia.org/wiki/Stack-oriented_programming_language",
    keywords: ["stack-oriented"],
  });

  g.paradigm.set("para+structured", {
    name: "Structured",
    description: "Structured programming emphasizes control structures like loops and conditionals, avoiding the use of 'goto' statements.",
    extHomeURL: "https://en.wikipedia.org/wiki/Structured_programming",
    keywords: ["structured"],
  });

  g.paradigm.set("para+symbolic", {
    name: "Symbolic",
    description: "Symbolic programming involves manipulating symbols rather than numeric data.",
    extHomeURL: "https://en.wikipedia.org/wiki/Symbolic_programming",
    keywords: ["symbolic"],
  });

  g.paradigm.set("para+synchronous", {
    name: "Sync",
    description: "Synchronous programming operates in a time-driven manner where operations occur sequentially and in sync with a clock.",
    extHomeURL: "https://en.wikipedia.org/wiki/Synchronous_programming_language",
    keywords: ["synchronous"],
  });

  g.paradigm.set("para+validation", {
    name: "Validation",
    description: "Data validation ensures that data conforms to predefined rules before it is processed.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_Validation",
    keywords: ["validation"],
  });

  g.paradigm.set("para+visual", {
    name: "Visual",
    description:
      "A programming language that lets users create programs by manipulating program elements graphically rather than by specifying them textually.",
    extHomeURL: "https://en.wikipedia.org/wiki/Visual_programming_language",
    keywords: ["block-based", "block-coding", "diagrammatic", "graphical", "visual"],
  });
}
