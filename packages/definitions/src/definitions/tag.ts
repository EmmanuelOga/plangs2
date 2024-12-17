import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+3dg", {
    name: "3D Graphics",
    description: "Software and tools for creating and manipulating 3D models and rendering graphics.",
    extHomeURL: "https://en.wikipedia.org/wiki/3D_computer_graphics",
    keywords: ["3D graphics", "rendering", "visualization"],
  });

  g.tag.set("tag+4gl", {
    name: "4GL",
    description: "Fourth-generation programming languages designed to be more abstract and easier to use than third-generation languages.",
    extHomeURL: "https://en.wikipedia.org/wiki/4GL",
    keywords: ["4GL", "fourth-generation language", "high-level language"],
  });

  g.tag.set("tag+analysis", {
    name: "Data Analysis",
    description: "Software tools designed to analyze and interpret large datasets.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_analysis",
    keywords: ["analysis", "big data", "data processing"],
  });

  g.tag.set("tag+app", {
    name: "Application",
    description: "Software designed to perform specific tasks for users.",
    extHomeURL: "https://en.wikipedia.org/wiki/Application_software",
    keywords: ["applications"],
  });

  g.tag.set("tag+asm", {
    name: "Assembler",
    description: "Software that translates assembly language code into machine code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Assembly_language#Assembler",
    keywords: ["asm", "assembler", "assembly language", "low-level programming"],
  });

  g.tag.set("tag+audio-dev", {
    name: "Audio",
    description: "Languages and environments designed for programming and synthesizing sound.",
    extHomeURL: "https://en.wikipedia.org/wiki/Audio_programming_language",
    keywords: ["audio", "audio processing", "sound", "synthesis"],
  });

  g.tag.set("tag+automation", {
    name: "Automation",
    description: "Software tools that automate repetitive tasks and processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Automation",
    keywords: ["automated processes", "automation", "workflow"],
  });

  g.tag.set("tag+cas", {
    name: "CAS",
    description: "Computer Algebra System: Software systems that facilitate symbolic mathematical computations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Computer_algebra_system",
    keywords: ["algebra system", "computer algebra", "symbolic computation"],
  });

  g.tag.set("tag+cli", {
    name: "CLI",
    description: "Command Line Interface: Text-based input given to a computer to perform specific tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Command_(computing)",
    keywords: ["CLI", "command-line interface"],
  });

  g.tag.set("tag+collab", {
    name: "Collaborative",
    description: "Collaborative Software is designed to help multiple users work together on tasks and projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Collaborative_software",
    keywords: ["collab", "collaboration tools", "collaborative software", "groupware"],
  });

  g.tag.set("tag+compiler", {
    name: "Compiler",
    description: "Software that translates high-level programming languages into machine code or another form.",
    extHomeURL: "https://en.wikipedia.org/wiki/Compiler",
    keywords: ["code optimization", "compiler", "source code translator"],
  });

  g.tag.set("tag+control", {
    name: "Control",
    description: "Instrument Control Software is used to control scientific and industrial instruments and processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Instrument_control",
    keywords: ["automation", "instrument control", "measurement"],
  });

  g.tag.set("tag+dataflow", {
    name: "Dataflow",
    description: "Programming paradigm where the flow of data determines the execution of operations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dataflow_programming",
    keywords: ["data-driven", "dataflow", "dataflow architecture"],
  });

  g.tag.set("tag+dataq", {
    name: "Acquisition",
    description: "Data Acquisition tools and systems, designed to gather and analyze data from various sources.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_acquisition",
    keywords: ["DAQ", "acquisition", "data collection"],
  });

  g.tag.set("tag+dbms", {
    name: "DBMS",
    description: "Database management system.",
    extHomeURL: "https://en.wikipedia.org/wiki/Database_management_system",
    keywords: ["data storage", "database", "dbms", "gdbms", "rdbmds", "relational database"],
  });

  g.tag.set("tag+decision", {
    name: "Decision-making",
    description: "Tools designed to assist in making business and technical decisions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Decision-making_software",
    keywords: ["DSS", "decision support", "decision-making"],
  });

  g.tag.set("tag+dsp", {
    name: "DSP",
    description: "Digital Signal Processing software for analyzing and manipulating signals, often used in audio and telecommunications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Signal_processing",
    keywords: ["DSP", "data analysis", "signal processing"],
  });

  g.tag.set("tag+editor", {
    name: "Editor",
    description: "Software used to create and edit text and other resources, often optimized for coding or document editing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Text_editor",
    keywords: ["code editor", "editor", "plain text", "text editor"],
  });

  g.tag.set("tag+edu", {
    name: "Educational",
    description: "Educational software designed to facilitate learning and instruction.",
    extHomeURL: "https://en.wikipedia.org/wiki/Educational_software",
    keywords: ["e-learning", "education technology", "educational software"],
  });

  g.tag.set("tag+embedded", {
    name: "Embedded System",
    description: "Combination of hardware and software designed to perform a dedicated function.",
    extHomeURL: "https://en.wikipedia.org/wiki/Embedded_system",
    keywords: ["embedded system", "firmware", "real-time systems"],
  });

  g.tag.set("tag+flow", {
    name: "Flow-Based",
    description:
      "A programming paradigm where applications are defined as networks of black-box processes that exchange data across predefined connections.",
    extHomeURL: "https://en.wikipedia.org/wiki/Flow-based_programming",
    keywords: ["FBP", "data flow", "flow-based programming"],
  });

  g.tag.set("tag+framework", {
    name: "Application Framework",
    description: "Software framework that provides a structure for developing software applications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Application_framework",
    keywords: ["framework"],
  });

  g.tag.set("tag+games", {
    name: "Games",
    description: "Software frameworks designed for the development and creation of video games.",
    extHomeURL: "https://en.wikipedia.org/wiki/Game_engine",
    keywords: ["game development", "game engine", "gamedev", "games"],
  });

  g.tag.set("tag+genomics", {
    name: "Genomics",
    description: "Software for studying and analyzing genomes and genetic data.",
    extHomeURL: "https://en.wikipedia.org/wiki/Genomics",
    keywords: ["bioinformatics", "genetic analysis", "genomics"],
  });

  g.tag.set("tag+graph", {
    name: "Graph Theory",
    description: "Software for working with graphs and graph theory algorithms, graph traversals, etc.",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
    keywords: ["graph"],
  });

  g.tag.set("tag+if", {
    name: "Interactive Fiction",
    description: "Software for creating and playing narrative-driven interactive stories.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interactive_fiction",
    keywords: ["interactive fiction", "text-based games"],
  });

  g.tag.set("tag+industrial", {
    name: "Industrial Control",
    description: "Systems and software used to control and monitor industrial processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Industrial_control_system",
    keywords: ["SCADA", "automation", "control", "industrial"],
  });

  g.tag.set("tag+interpreters", {
    name: "Interpreter",
    description:
      "Software that directly executes instructions written in a programming language without requiring them to be compiled into machine code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interpreter_(computing)",
    keywords: ["interpreter", "programming language", "runtime execution"],
  });

  g.tag.set("tag+iot", {
    name: "IoT",
    description: "Internet of Things: Software and platforms designed to connect and manage IoT devices and networks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Internet_of_things",
    keywords: ["IoT", "connected devices", "smart devices"],
  });

  g.tag.set("tag+languages", {
    name: "Language Engineering",
    description: "Tools and techniques for designing, implementing, and analyzing programming languages.",
    extHomeURL: "https://en.wikipedia.org/wiki/Programming_language",
    keywords: ["compilers", "interpreters", "lexers", "parsers", "programming languages", "semantics", "static analysis", "syntax"],
  });

  g.tag.set("tag+low-code", {
    name: "Low Code",
    description: "Development platforms that enable users to create applications with minimal hand-coding.",
    extHomeURL: "https://en.wikipedia.org/wiki/Low-code_development_platform",
    keywords: ["development platform", "low code", "rapid development"],
  });

  g.tag.set("tag+midi", {
    name: "MIDI",
    description: "Musical Instrument Digital Interface (MIDI) protocol and software for controlling music hardware and software.",
    extHomeURL: "https://en.wikipedia.org/wiki/MIDI",
    keywords: ["MIDI", "digital audio", "music technology"],
  });

  g.tag.set("tag+modeling", {
    name: "Mathematical Modeling",
    description: "Software used for creating mathematical models and simulations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Mathematical_modeling",
    keywords: ["mathematical modeling", "mathematics", "simulation"],
  });

  g.tag.set("tag+modular", {
    name: "Modular Music Software",
    description: "Software for creating and organizing music using modular components.",
    extHomeURL: "https://en.wikipedia.org/wiki/Modular_software_music_studio",
    keywords: ["modular music", "music studio", "synthesizers"],
  });

  g.tag.set("tag+multimedia", {
    name: "Multimedia",
    description: "Software for creating and manipulating multimedia content, including audio, video, and graphics.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multimedia",
    keywords: ["audio-visual", "interactive media", "multimedia"],
  });

  g.tag.set("tag+multivar", {
    name: "Multivariate Analysis",
    description: "Techniques used to analyze data that involves multiple variables to understand relationships and patterns.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multivariate_analysis",
    keywords: ["data analysis", "multivariate analysis", "statistical analysis"],
  });

  g.tag.set("tag+numeric", {
    name: "Numeric Computation",
    description: "Software for performing numeric computations and algorithms.",
    extHomeURL: "https://en.wikipedia.org/wiki/Numeric_computation",
    keywords: ["numeric computation", "numerical analysis", "scientific computing"],
  });

  g.tag.set("tag+packaging", {
    name: "Packaging",
    description: "Software tools for managing and distributing software packages and dependencies.",
    extHomeURL: "https://en.wikipedia.org/wiki/Package_manager",
    keywords: ["dependency management", "package manager", "software distribution"],
  });

  g.tag.set("tag+proofs", {
    name: "Proof Assistant",
    description: "Software used to assist in proving mathematical theorems and verifying logical correctness.",
    extHomeURL: "https://en.wikipedia.org/wiki/Proof_assistant",
    keywords: ["formal verification", "proof assistant", "theorem proving"],
  });

  g.tag.set("tag+rad", {
    name: "RAD",
    description: "Rapid Application Development, a methodology focused on rapid prototyping and iterative development.",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
    keywords: ["RAD", "rapid development", "software development methodology"],
  });

  g.tag.set("tag+ray-tracer", {
    name: "Ray Tracer",
    description: "Software that uses ray tracing to generate realistic lighting and shadows in 3D environments.",
    extHomeURL: "https://en.wikipedia.org/wiki/Ray_tracing_(graphics)",
    keywords: ["3D rendering", "graphics", "ray tracer", "ray tracing"],
  });

  g.tag.set("tag+rdf", {
    name: "RDF",
    description:
      "Resource Description Framework: A standard model for data interchange on the web, where everything is a tuple [subject, predicate, object].",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
    keywords: ["rdf"],
  });

  g.tag.set("tag+sci", {
    name: "Scientific Computing",
    description: "Software designed for performing scientific calculations and simulations.",
    extHomeURL: "https://en.wikipedia.org/wiki/List_of_numerical-analysis_software",
    keywords: ["computational science", "numerical analysis", "scientific computing"],
  });

  g.tag.set("tag+scripting", {
    name: "Scripting",
    description: "Language used to write commands for controlling a system or application.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scripting_language",
    keywords: ["command language", "command-based language", "scripting", "scripting language"],
  });

  g.tag.set("tag+server", {
    name: "Server",
    description: 'A Server hosts and runs applications, often described as "running in the background".',
    extHomeURL: "https://en.wikipedia.org/wiki/Application_server",
    keywords: ["application server", "backend server", "middleware"],
  });

  g.tag.set("tag+shell", {
    name: "Shell",
    description: "Command-line interface that interprets text commands to control the operating system.",
    extHomeURL: "https://en.wikipedia.org/wiki/Shell_(computing)",
    keywords: ["CLI", "command-line interface", "shell"],
  });

  g.tag.set("tag+stats", {
    name: "Statistics",
    description: "Software for statistical analysis and modeling of data.",
    extHomeURL: "https://en.wikipedia.org/wiki/List_of_statistical_packages",
    keywords: ["data analysis", "statistical software", "statistics"],
  });

  g.tag.set("tag+testing", {
    name: "Testing",
    description: "Tools that automatically execute tests on software to ensure quality and performance.",
    extHomeURL: "https://en.wikipedia.org/wiki/Test_automation",
    keywords: ["quality assurance", "software testing", "test automation", "testing"],
  });

  g.tag.set("tag+gui", {
    name: "GUI",
    description: "Software tools for designing and building graphical user interfaces.",
    extHomeURL: "https://en.wikipedia.org/wiki/Graphical_user_interface",
    keywords: ["GUI", "UI"],
  });

  g.tag.set("tag+uml", {
    name: "Unified Modeling Language (UML)",
    description: "Standardized modeling language used in software engineering to visualize system architecture and design.",
    extHomeURL: "https://en.wikipedia.org/wiki/Unified_Modeling_Language",
    keywords: ["UML", "software design", "system modeling"],
  });

  g.tag.set("tag+video", {
    name: "Video",
    description: "Software used to edit video footage and produce multimedia projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Video_editing_software",
    keywords: ["multimedia", "video editor", "video production"],
  });

  g.tag.set("tag+viz", {
    name: "Visualization",
    description: "Software for visually representing complex data to assist in understanding patterns and trends.",
    extHomeURL: "https://en.wikipedia.org/wiki/Information_visualization",
    keywords: ["data analysis", "data visualization", "information", "visualization", "viz"],
  });

  g.tag.set("tag+wavelet", {
    name: "Wavelet",
    description: "Mathematical technique used for analyzing waveforms and signals, often in signal processing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Wavelet",
    keywords: ["mathematics", "signal processing", "wavelet analysis"],
  });

  g.tag.set("tag+webdev", {
    name: "WebDev",
    description: "Design and development of websites and web applications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Web_development",
    keywords: ["http", "web design", "web programming", "webdev"],
  });

  g.tag.set("tag+workflow", {
    name: "Workflow",
    description: "Tools that automate business workflows to improve efficiency and reduce manual tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Workflow_automation",
    keywords: ["business automation", "process automation", "workflow automation"],
  });
}
