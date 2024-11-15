import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.paradigm.set("paradigm+agents", {
    name: "Agent-oriented",
    keywords: ["agent"],
    description: "Agent-oriented programming simulates the actions and interactions of autonomous agents.",
    extHomeURL: "https://en.wikipedia.org/wiki/Agent-oriented_programming",
  });

  g.nodes.paradigm.set("paradigm+array", {
    name: "Array Programming",
    keywords: ["array", "vector"],
    description:
      "In computer science, array programming refers to solutions that allow the application of operations to an entire set of values at once. Such solutions are commonly used in scientific and engineering settings.",
    extHomeURL: "https://en.wikipedia.org/wiki/Array_programming",
  });

  g.nodes.paradigm.set("paradigm+aspect", {
    name: "Aspect-oriented",
    keywords: ["aspect"],
    description:
      "Programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns. This allows behaviors that are not central to the business logic (such as logging) to be added to a program without cluttering the code of core functions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Aspect-oriented_programming",
  });

  g.nodes.paradigm.set("paradigm+assembly", {
    name: "Assembly",
    keywords: ["assembly"],
    description:
      "Assembly language is a low-level programming language for a computer, or other programmable device, in which there is a very strong (generally one-to-one) correspondence between the language and the architecture's machine code instructions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Assembly_language",
  });

  g.nodes.paradigm.set("paradigm+async", {
    name: "Task-Driven Asynchronous Programming",
    keywords: ["task-driven", "async"],
    description:
      "Task-driven asynchronous programming allows tasks to be executed independently, enabling concurrency and efficient resource utilization.",
    extHomeURL: "https://en.wikipedia.org/wiki/Asynchronous_method_invocation",
  });

  g.nodes.paradigm.set("paradigm+bidirectional", {
    name: "Bidirectional Programming",
    keywords: ["bi-directional", "bidirectional"],
    description:
      "Programs in which a single piece of code can be run in several ways, such that the same data are sometimes considered as input, and sometimes as output.",
    extHomeURL: "https://en.wikipedia.org/wiki/Bidirectional_transformation",
  });

  g.nodes.paradigm.set("paradigm+compiled", {
    name: "Compiled Language",
    keywords: ["compiled", "compilation", "compiler"],
    description:
      "A compiled language is a programming language for which source code is typically compiled; not interpreted. The term is vague since, in principle, any language can be compiled or interpreted and in practice some languages are both (in different environments). In some environments, source code is first compiled (to an intermediate form; often bytecode) and then interpreted.",
    extHomeURL: "https://en.wikipedia.org/wiki/Compiled_language",
  });

  g.nodes.paradigm.set("paradigm+concatenative", {
    name: "Concatenative Programming",
    keywords: ["concatenative"],
    description:
      "A concatenative programming language is a point-free computer programming language in which all expressions denote functions, and the juxtaposition of expressions denotes function composition.",
    extHomeURL: "https://en.wikipedia.org/wiki/Concatenative_programming_language",
  });

  g.nodes.paradigm.set("paradigm+concurrent", {
    name: "Concurrent",
    keywords: ["concurrent", "parallel"],
    description:
      "Concurrent computing is a form of computing in which several computations are executed during overlapping time periods, concurrently, instead of sequentially. Concurrent computing is a form of modular programming. In its paradigm an overall computation is factored into subcomputations that may be executed concurrently.",
    extHomeURL: "https://en.wikipedia.org/wiki/Concurrent_computing",
  });

  g.nodes.paradigm.set("paradigm+constraint", {
    name: "Constraint Programming",
    keywords: ["constraint"],
    description: "In constraint programming, users declaratively state the constraints on the feasible solutions for a set of decision variables.",
    extHomeURL: "https://en.wikipedia.org/wiki/Constraint_programming",
  });

  g.nodes.paradigm.set("paradigm+contracts", {
    name: "Design by Contract",
    keywords: ["dbc", "design by contract", "contracts"],
    description:
      "Design by Contract is a software design approach that uses contracts to define the obligations and guarantees of software components.",
    extHomeURL: "https://en.wikipedia.org/wiki/Design_by_contract",
  });

  g.nodes.paradigm.set("paradigm+data-driven", {
    name: "Data-centric Programming",
    keywords: ["data-driven"],
    description: "Programs describe the data to be matched and the processing required rather than defining a sequence of steps to be taken.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data-driven_programming",
  });

  g.nodes.paradigm.set("paradigm+data-exchange", {
    name: "Data Exchange",
    keywords: ["data exchange"],
    description: "Data exchange languages allow data to be shared between systems in a structured format.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_exchange_language",
  });

  g.nodes.paradigm.set("paradigm+data-hiding", {
    name: "Data and Procedure Hiding",
    keywords: ["hiding", "hiding"],
    description: "Data and procedure hiding restrict access to certain parts of a program's code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Information_hiding",
  });

  g.nodes.paradigm.set("paradigm+dataflow", {
    name: "Dataflow Programming",
    keywords: ["dataflow"],
    description:
      "Models a program as a directed graph of the data flowing between operations, thus implementing dataflow principles and architecture.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dataflow_programming",
  });

  g.nodes.paradigm.set("paradigm+declarative", {
    name: "Declarative Programming",
    keywords: ["declarative"],
    description:
      "A style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow.",
    extHomeURL: "https://en.wikipedia.org/wiki/Declarative_programming",
  });

  g.nodes.paradigm.set("paradigm+distributed", {
    name: "Distributed Programming",
    keywords: ["distributed"],
    description: "Distributed programming involves multiple computers working together on a single task.",
    extHomeURL: "https://en.wikipedia.org/wiki/Distributed_programming",
  });

  g.nodes.paradigm.set("paradigm+dsl", {
    name: "Domain-Specific Language",
    keywords: ["domain-specific", "dsl"],
    description: "A domain-specific language is tailored to a particular application domain.",
    extHomeURL: "https://en.wikipedia.org/wiki/Domain-specific_language",
  });

  g.nodes.paradigm.set("paradigm+educational", {
    name: "Educational Programming",
    keywords: ["educational"],
    description: "Educational programming languages are designed mainly to teach programming concepts.",
    extHomeURL: "https://en.wikipedia.org/wiki/Educational_programming_language",
  });

  g.nodes.paradigm.set("paradigm+embedded", {
    name: "Embedded Systems",
    keywords: ["embedded"],
    description: "Embedded systems are specialized computing systems integrated into larger systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Embedded_system",
  });

  g.nodes.paradigm.set("paradigm+esoteric", {
    name: "Esoteric Programming",
    keywords: ["esoteric"],
    description: "Esoteric programming languages are created as experiments, jokes, or for artistic purposes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Esoteric_programming_language",
  });

  g.nodes.paradigm.set("paradigm+event-driven", {
    name: "Event-Driven Programming",
    keywords: ["event-driven"],
    description: "Event-driven programming centers around responding to user actions or other events.",
    extHomeURL: "https://en.wikipedia.org/wiki/Event-driven_programming",
  });

  g.nodes.paradigm.set("paradigm+exp-oriented", {
    name: "Expression-Oriented Programming",
    keywords: ["exp-oriented", "expression-oriented"],
    description: "Expression-oriented programming emphasizes the use of expressions over statements.",
    extHomeURL: "https://en.wikipedia.org/wiki/Expression-oriented_programming_language",
  });

  g.nodes.paradigm.set("paradigm+expert-system", {
    name: "Expert System",
    keywords: ["expert system"],
    description: "Expert systems use rule-based algorithms to simulate decision-making.",
    extHomeURL: "https://en.wikipedia.org/wiki/Expert_system",
  });

  g.nodes.paradigm.set("paradigm+extensible", {
    name: "Extensible Programming",
    keywords: ["extensible"],
    description: "Extensible programming languages are designed to be extended with new features.",
    extHomeURL: "https://en.wikipedia.org/wiki/Extensible_programming",
  });

  g.nodes.paradigm.set("paradigm+frp", {
    name: "Functional Reactive Programming",
    keywords: ["functional reactive", "frp"],
    description: "Functional reactive programming is a programming paradigm for reactive systems using functional programming.",
    extHomeURL: "https://en.wikipedia.org/wiki/Functional_reactive_programming",
  });

  g.nodes.paradigm.set("paradigm+functional", {
    name: "Functional Programming",
    keywords: ["functional", "lambda", "pure"],
    description:
      "A programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values.",
    extHomeURL: "https://en.wikipedia.org/wiki/Functional_programming",
  });

  g.nodes.paradigm.set("paradigm+general-purpose", {
    name: "General-Purpose Programming",
    keywords: ["general-purpose"],
    description: "General-purpose programming languages are designed to solve a wide range of problems.",
    extHomeURL: "https://en.wikipedia.org/wiki/General-purpose_programming_language",
  });

  g.nodes.paradigm.set("paradigm+imperative", {
    name: "Imperative Programming",
    keywords: ["imperative"],
    description: "Imperative programming uses statements to change a program's state.",
    extHomeURL: "https://en.wikipedia.org/wiki/Imperative_programming",
  });

  g.nodes.paradigm.set("paradigm+interpreted", {
    name: "Interpreted Programming",
    keywords: ["interpreted"],
    description: "Interpreted languages are executed directly, without prior compilation.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interpreted_language",
  });

  g.nodes.paradigm.set("paradigm+language-oriented", {
    name: "Language-Oriented Programming",
    keywords: ["language-oriented"],
    description: "Language-oriented programming involves the creation of domain-specific languages to solve specific problems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Language_oriented_programming",
  });

  g.nodes.paradigm.set("paradigm+lazy", {
    name: "Lazy Evaluation",
    keywords: ["lazy"],
    description: "Lazy evaluation delays the evaluation of an expression until its value is needed.",
    extHomeURL: "https://en.wikipedia.org/wiki/Lazy_evaluation",
  });

  g.nodes.paradigm.set("paradigm+logic", {
    name: "Logic Programming",
    keywords: ["logic"],
    description: "Logic programming is based on formal logic, using facts and rules to derive conclusions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Logic_Programming",
  });

  g.nodes.paradigm.set("paradigm+low-code", {
    name: "Low-Code Development",
    keywords: ["low-code"],
    description: "Low-code platforms enable software development with minimal hand-coding.",
    extHomeURL: "https://en.wikipedia.org/wiki/Low-code_development_platform",
  });

  g.nodes.paradigm.set("paradigm+macro", {
    name: "Macro Processor",
    keywords: ["macro", "macros"],
    description:
      'A macro (short for "macro instruction") is a rule or pattern that specifies how a certain input should be mapped to a replacement output.',
    extHomeURL: "https://en.wikipedia.org/wiki/Macro_(computer_science)",
  });

  g.nodes.paradigm.set("paradigm+message-passing", {
    name: "Message Passing",
    keywords: ["message-passing"],
    description: "Message passing involves communication between processes through the exchange of messages.",
    extHomeURL: "https://en.wikipedia.org/wiki/Message_passing",
  });

  g.nodes.paradigm.set("paradigm+metaprogramming", {
    name: "Metaprogramming",
    keywords: ["metaprogramming", "meta"],
    description: "Metaprogramming refers to writing programs that generate or manipulate other programs.",
    extHomeURL: "https://en.wikipedia.org/wiki/Metaprogramming",
  });

  g.nodes.paradigm.set("paradigm+modular", {
    name: "Modular Programming",
    keywords: ["modular"],
    description: "Modular programming involves dividing a program into separate, independent modules.",
    extHomeURL: "https://en.wikipedia.org/wiki/Modular_programming",
  });

  g.nodes.paradigm.set("paradigm+multi", {
    name: "Multi-paradigm",
    keywords: ["multi-paradigm", "multiparadigm"],
    description:
      "A programming paradigm is a relatively high-level way to conceptualize and structure the implementation of a computer program. Many/most languages are based on more than one paradigm.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multi-paradigm_programming_language",
  });

  g.nodes.paradigm.set("paradigm+multi-dispatch", {
    name: "Multiple Dispatch",
    keywords: ["multi-dispatch"],
    description: "Multiple dispatch selects a function to invoke based on the runtime types of multiple arguments.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multiple_dispatch",
  });

  g.nodes.paradigm.set("paradigm+natural-language", {
    name: "Natural Language Programming",
    keywords: ["natural language programming"],
    description: "Natural language programming enables the development of software using human language commands.",
    extHomeURL: "https://en.wikipedia.org/wiki/Natural_language_programming",
  });

  g.nodes.paradigm.set("paradigm+oop", {
    name: "Object-oriented",
    keywords: ["object", "oop", "class-based"],
    description:
      "Programming paradigm based on the concept of objects, which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods). In OOP, computer programs are designed by making them out of objects that interact with one another.",
    extHomeURL: "https://en.wikipedia.org/wiki/Object-orientation",
  });

  g.nodes.paradigm.set("paradigm+parallel", {
    name: "Parallel Programming",
    keywords: ["parallel programming"],
    description: "Parallel programming executes multiple tasks simultaneously to improve performance.",
    extHomeURL: "https://en.wikipedia.org/wiki/Parallel_programming_model",
  });

  g.nodes.paradigm.set("paradigm+pattern-matching", {
    name: "Pattern-Matching",
    keywords: ["pattern-matching"],
    description: "Pattern-matching allows for checking and decomposing data structures based on patterns.",
    extHomeURL: "https://en.wikipedia.org/wiki/Pattern-matching",
  });

  g.nodes.paradigm.set("paradigm+pipeline", {
    name: "Pipeline Programming",
    keywords: ["pipeline"],
    description: "Pipeline programming passes data through a series of processing stages, each stage producing input for the next.",
    extHomeURL: "https://en.wikipedia.org/wiki/Pipeline_(software)",
  });

  g.nodes.paradigm.set("paradigm+point-free", {
    name: "Point-free Programming",
    keywords: ["point-free", "tacit"],
    description:
      "Point-free (aka tacit) programming avoids specifying arguments in function definitions, focusing on composition rather than application.",
    extHomeURL: "https://en.wikipedia.org/wiki/Tacit_programming",
  });

  g.nodes.paradigm.set("paradigm+procedural", {
    name: "Procedural Programming",
    keywords: ["procedural"],
    description: "Procedural programming focuses on the use of procedures or functions to perform tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Procedural_programming",
  });

  g.nodes.paradigm.set("paradigm+process-oriented", {
    name: "Process-Oriented Programming",
    keywords: ["process-oriented"],
    description: "Process-oriented programming is based on the concept of processes as the primary abstraction.",
    extHomeURL: "https://en.wikipedia.org/wiki/Process-oriented_programming",
  });

  g.nodes.paradigm.set("paradigm+protocol", {
    name: "Protocol-Oriented Programming",
    keywords: ["protocol", "interface"],
    description: "Protocol-oriented programming focuses on the design and use of interfaces or protocols to define program behavior.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)",
  });

  g.nodes.paradigm.set("paradigm+prototype", {
    name: "Prototype-Based Programming",
    keywords: ["prototype"],
    description: "Prototype-based programming is a style of object-oriented programming where objects are created by cloning existing ones.",
    extHomeURL: "https://en.wikipedia.org/wiki/Prototype-based_programming",
  });

  g.nodes.paradigm.set("paradigm+quantum", {
    name: "Quantum Programming",
    keywords: ["quantum"],
    description: "Quantum programming deals with the development of algorithms for quantum computers.",
    extHomeURL: "https://en.wikipedia.org/wiki/Quantum_programming",
  });

  g.nodes.paradigm.set("paradigm+query", {
    name: "Query Language",
    keywords: ["query"],
    description: "A query language is used to make queries in databases and information systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Query_language",
  });

  g.nodes.paradigm.set("paradigm+reactive", {
    name: "Reactive Programming",
    keywords: ["reactive"],
    description: "Reactive programming focuses on asynchronous data streams and the propagation of change.",
    extHomeURL: "https://en.wikipedia.org/wiki/Reactive_programming",
  });

  g.nodes.paradigm.set("paradigm+real-time", {
    name: "Real-Time Computing",
    keywords: ["real-time"],
    description: "Real-time computing involves tasks that must be completed within strict timing constraints.",
    extHomeURL: "https://en.wikipedia.org/wiki/Real-time_computing",
  });

  g.nodes.paradigm.set("paradigm+reflective", {
    name: "Reflective Programming",
    keywords: ["reflective"],
    description: "Reflective programming allows a program to inspect and modify its own structure and behavior at runtime.",
    extHomeURL: "https://en.wikipedia.org/wiki/Reflective_programming",
  });

  g.nodes.paradigm.set("paradigm+rewriting", {
    name: "Term Rewriting",
    keywords: ["rewriting", "term-rewriting"],
    description: "Term-rewriting involves transforming expressions according to a set of rules to perform computation.",
    extHomeURL: "https://en.wikipedia.org/wiki/Term-rewriting",
  });

  g.nodes.paradigm.set("paradigm+rules", {
    name: "Rule-Based Processing",
    keywords: ["rule", "rules"],
    description: "Rule-based processing involves defining rules that control the logic of decision-making systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
  });

  g.nodes.paradigm.set("paradigm+scientific", {
    name: "Scientific Workflow",
    keywords: ["scientific"],
    description: "Scientific workflow systems support the automation of complex scientific processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
  });

  g.nodes.paradigm.set("paradigm+scripting", {
    name: "Scripting Language",
    keywords: ["scripting"],
    description: "Scripting languages are used for automating tasks within a software environment.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scripting_language",
  });

  g.nodes.paradigm.set("paradigm+shared-memory", {
    name: "Shared Memory",
    keywords: ["shared memory"],
    description: "Shared memory systems allow multiple processes to access the same memory space.",
    extHomeURL: "https://en.wikipedia.org/wiki/Shared_memory",
  });

  g.nodes.paradigm.set("paradigm+simulation", {
    name: "Simulation Language",
    keywords: ["simulation"],
    description: "Simulation languages are specialized for modeling and simulating complex systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Simulation_language",
  });

  g.nodes.paradigm.set("paradigm+stack-oriented", {
    name: "Stack-Oriented Programming",
    keywords: ["stack-oriented"],
    description: "Stack-oriented programming uses a stack-based data structure for passing parameters.",
    extHomeURL: "https://en.wikipedia.org/wiki/Stack-oriented_programming_language",
  });

  g.nodes.paradigm.set("paradigm+structured", {
    name: "Structured Programming",
    keywords: ["structured"],
    description: "Structured programming emphasizes control structures like loops and conditionals, avoiding the use of 'goto' statements.",
    extHomeURL: "https://en.wikipedia.org/wiki/Structured_programming",
  });

  g.nodes.paradigm.set("paradigm+symbolic", {
    name: "Symbolic Programming",
    keywords: ["symbolic"],
    description: "Symbolic programming involves manipulating symbols rather than numeric data.",
    extHomeURL: "https://en.wikipedia.org/wiki/Symbolic_programming",
  });

  g.nodes.paradigm.set("paradigm+synchronous", {
    name: "Synchronous Programming",
    keywords: ["synchronous"],
    description: "Synchronous programming operates in a time-driven manner where operations occur sequentially and in sync with a clock.",
    extHomeURL: "https://en.wikipedia.org/wiki/Synchronous_programming_language",
  });

  g.nodes.paradigm.set("paradigm+validation", {
    name: "Data Validation",
    keywords: ["validation"],
    description: "Data validation ensures that data conforms to predefined rules before it is processed.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_Validation",
  });

  g.nodes.paradigm.set("paradigm+visual", {
    name: "Visual Programming",
    keywords: ["visual", "block-based", "block-coding", "diagrammatic", "graphical"],
    description:
      "A programming language that lets users create programs by manipulating program elements graphically rather than by specifying them textually.",
    extHomeURL: "https://en.wikipedia.org/wiki/Visual_programming_language",
  });
}
