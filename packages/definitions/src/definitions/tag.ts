import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+3dg", {
    name: "3D Graphics",
    keywords: ["3D graphics", "rendering", "visualization"],
    description: "Software and tools for creating and manipulating 3D models and rendering graphics.",
    extHomeURL: "https://en.wikipedia.org/wiki/3D_computer_graphics",
  });

  g.tag.set("tag+4gl", {
    name: "4GL",
    keywords: ["4GL", "fourth-generation language", "high-level language"],
    description: "Fourth-generation programming languages designed to be more abstract and easier to use than third-generation languages.",
    extHomeURL: "https://en.wikipedia.org/wiki/4GL",
  });

  g.tag.set("tag+analysis", {
    name: "Data Analysis",
    keywords: ["analysis", "big data", "data processing"],
    description: "Software tools designed to analyze and interpret large datasets.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_analysis",
  });

  g.tag.set("tag+app", {
    name: "Application",
    keywords: ["applications"],
    description: "Software designed to perform specific tasks for users.",
    extHomeURL: "https://en.wikipedia.org/wiki/Application_software",
  });

  g.tag.set("tag+asm", {
    name: "Assembler",
    keywords: ["asm", "assembler", "assembly language", "low-level programming"],
    description: "Software that translates assembly language code into machine code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Assembly_language#Assembler",
  });

  g.tag.set("tag+audio-dev", {
    name: "Audio",
    keywords: ["audio", "audio processing", "sound", "synthesis"],
    description: "Languages and environments designed for programming and synthesizing sound.",
    extHomeURL: "https://en.wikipedia.org/wiki/Audio_programming_language",
  });

  g.tag.set("tag+automation", {
    name: "Automation",
    keywords: ["automated processes", "automation", "workflow"],
    description: "Software tools that automate repetitive tasks and processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Automation",
  });

  g.tag.set("tag+cas", {
    name: "CAS",
    keywords: ["algebra system", "computer algebra", "symbolic computation"],
    description: "Computer Algebra System: Software systems that facilitate symbolic mathematical computations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Computer_algebra_system",
  });

  g.tag.set("tag+cli", {
    name: "CLI",
    keywords: ["CLI", "command-line interface"],
    description: "Command Line Interface: Text-based input given to a computer to perform specific tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Command_(computing)",
  });

  g.tag.set("tag+collab", {
    name: "Collaborative",
    keywords: ["collab", "collaboration tools", "collaborative software", "groupware"],
    description: "Collaborative Software is designed to help multiple users work together on tasks and projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Collaborative_software",
  });

  g.tag.set("tag+compiler", {
    name: "Compiler",
    keywords: ["code optimization", "compiler", "source code translator"],
    description: "Software that translates high-level programming languages into machine code or another form.",
    extHomeURL: "https://en.wikipedia.org/wiki/Compiler",
  });

  g.tag.set("tag+control", {
    name: "Control",
    keywords: ["automation", "instrument control", "measurement"],
    description: "Instrument Control Software is used to control scientific and industrial instruments and processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Instrument_control",
  });

  g.tag.set("tag+dataflow", {
    name: "Dataflow",
    keywords: ["data-driven", "dataflow", "dataflow architecture"],
    description: "A programming paradigm where the flow of data determines the execution of operations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dataflow_programming",
  });

  g.tag.set("tag+dataq", {
    name: "Acquisition",
    keywords: ["DAQ", "acquisition", "data collection"],
    description: "Data Acquisition tools and systems, designed to gather and analyze data from various sources.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_acquisition",
  });

  g.tag.set("tag+dbms", {
    name: "DBMS",
    keywords: ["data storage", "database", "dbms", "gdbms", "rdbmds", "relational database"],
    description: "Database management system.",
    extHomeURL: "https://en.wikipedia.org/wiki/Database_management_system",
  });

  g.tag.set("tag+decision", {
    name: "Decision-making",
    keywords: ["DSS", "decision support", "decision-making"],
    description: "Tools designed to assist in making business and technical decisions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Decision-making_software",
  });

  g.tag.set("tag+dsp", {
    name: "DSP",
    keywords: ["DSP", "data analysis", "signal processing"],
    description: "Digital Signal Processing software for analyzing and manipulating signals, often used in audio and telecommunications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Signal_processing",
  });

  g.tag.set("tag+editor", {
    name: "Editor",
    keywords: ["code editor", "editor", "plain text", "text editor"],
    description: "Software used to create and edit text and other resources, often optimized for coding or document editing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Text_editor",
  });

  g.tag.set("tag+edu", {
    name: "Educational",
    keywords: ["e-learning", "education technology", "educational software"],
    description: "Educational software designed to facilitate learning and instruction.",
    extHomeURL: "https://en.wikipedia.org/wiki/Educational_software",
  });

  g.tag.set("tag+embedded", {
    name: "Embedded System",
    keywords: ["embedded system", "firmware", "real-time systems"],
    description: "A combination of hardware and software designed to perform a dedicated function.",
    extHomeURL: "https://en.wikipedia.org/wiki/Embedded_system",
  });

  g.tag.set("tag+flow", {
    name: "Flow-Based",
    keywords: ["FBP", "data flow", "flow-based programming"],
    description:
      "A programming paradigm where applications are defined as networks of black-box processes that exchange data across predefined connections.",
    extHomeURL: "https://en.wikipedia.org/wiki/Flow-based_programming",
  });

  g.tag.set("tag+framework", {
    name: "Application Framework",
    keywords: ["framework"],
    description: "A software framework that provides a structure for developing software applications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Application_framework",
  });

  g.tag.set("tag+games", {
    name: "Games",
    keywords: ["game development", "game engine", "gamedev", "games"],
    description: "Software frameworks designed for the development and creation of video games.",
    extHomeURL: "https://en.wikipedia.org/wiki/Game_engine",
  });

  g.tag.set("tag+genomics", {
    name: "Genomics",
    keywords: ["bioinformatics", "genetic analysis", "genomics"],
    description: "Software for studying and analyzing genomes and genetic data.",
    extHomeURL: "https://en.wikipedia.org/wiki/Genomics",
  });

  g.tag.set("tag+graph", {
    name: "Graph Theory",
    keywords: ["graph"],
    description: "Software for working with graphs and graph theory algorithms, graph traversals, etc.",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
  });

  g.tag.set("tag+if", {
    name: "Interactive Fiction",
    keywords: ["interactive fiction", "text-based games"],
    description: "Software for creating and playing narrative-driven interactive stories.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interactive_fiction",
  });

  g.tag.set("tag+industrial", {
    name: "Industrial Control",
    keywords: ["SCADA", "automation", "control", "industrial"],
    description: "Systems and software used to control and monitor industrial processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Industrial_control_system",
  });

  g.tag.set("tag+interpreters", {
    name: "Interpreter",
    keywords: ["interpreter", "programming language", "runtime execution"],
    description:
      "Software that directly executes instructions written in a programming language without requiring them to be compiled into machine code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interpreter_(computing)",
  });

  g.tag.set("tag+iot", {
    name: "IoT",
    keywords: ["IoT", "connected devices", "smart devices"],
    description: "Internet of Things: Software and platforms designed to connect and manage IoT devices and networks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Internet_of_things",
  });

  g.tag.set("tag+languages", {
    name: "Language Engineering",
    keywords: ["compilers", "interpreters", "lexers", "parsers", "programming languages", "semantics", "static analysis", "syntax"],
    description: "Tools and techniques for designing, implementing, and analyzing programming languages.",
    extHomeURL: "https://en.wikipedia.org/wiki/Programming_language",
  });

  g.tag.set("tag+low-code", {
    name: "Low Code",
    keywords: ["development platform", "low code", "rapid development"],
    description: "Development platforms that enable users to create applications with minimal hand-coding.",
    extHomeURL: "https://en.wikipedia.org/wiki/Low-code_development_platform",
  });

  g.tag.set("tag+midi", {
    name: "MIDI",
    keywords: ["MIDI", "digital audio", "music technology"],
    description: "Musical Instrument Digital Interface (MIDI) protocol and software for controlling music hardware and software.",
    extHomeURL: "https://en.wikipedia.org/wiki/MIDI",
  });

  g.tag.set("tag+modeling", {
    name: "Mathematical Modeling",
    keywords: ["mathematical modeling", "mathematics", "simulation"],
    description: "Software used for creating mathematical models and simulations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Mathematical_modeling",
  });

  g.tag.set("tag+modular", {
    name: "Modular Music Software",
    keywords: ["modular music", "music studio", "synthesizers"],
    description: "Software for creating and organizing music using modular components.",
    extHomeURL: "https://en.wikipedia.org/wiki/Modular_software_music_studio",
  });

  g.tag.set("tag+multimedia", {
    name: "Multimedia",
    keywords: ["audio-visual", "interactive media", "multimedia"],
    description: "Software for creating and manipulating multimedia content, including audio, video, and graphics.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multimedia",
  });

  g.tag.set("tag+multivar", {
    name: "Multivariate Analysis",
    keywords: ["data analysis", "multivariate analysis", "statistical analysis"],
    description: "Techniques used to analyze data that involves multiple variables to understand relationships and patterns.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multivariate_analysis",
  });

  g.tag.set("tag+numeric", {
    name: "Numeric Computation",
    keywords: ["numeric computation", "numerical analysis", "scientific computing"],
    description: "Software for performing numeric computations and algorithms.",
    extHomeURL: "https://en.wikipedia.org/wiki/Numeric_computation",
  });

  g.tag.set("tag+packaging", {
    name: "Packaging",
    keywords: ["dependency management", "package manager", "software distribution"],
    description: "Software tools for managing and distributing software packages and dependencies.",
    extHomeURL: "https://en.wikipedia.org/wiki/Package_manager",
  });

  g.tag.set("tag+proofs", {
    name: "Proof Assistant",
    keywords: ["formal verification", "proof assistant", "theorem proving"],
    description: "Software used to assist in proving mathematical theorems and verifying logical correctness.",
    extHomeURL: "https://en.wikipedia.org/wiki/Proof_assistant",
  });

  g.tag.set("tag+rad", {
    name: "RAD",
    keywords: ["RAD", "rapid development", "software development methodology"],
    description: "Rapid Application Development, a methodology focused on rapid prototyping and iterative development.",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
  });

  g.tag.set("tag+ray-tracer", {
    name: "Ray Tracer",
    keywords: ["3D rendering", "graphics", "ray tracer", "ray tracing"],
    description: "Software that uses ray tracing to generate realistic lighting and shadows in 3D environments.",
    extHomeURL: "https://en.wikipedia.org/wiki/Ray_tracing_(graphics)",
  });

  g.tag.set("tag+rdf", {
    name: "RDF",
    keywords: ["rdf"],
    description:
      "Resource Description Framework: A standard model for data interchange on the web, where everything is a tuple [subject, predicate, object].",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
  });

  g.tag.set("tag+sci", {
    name: "Scientific Computing",
    keywords: ["computational science", "numerical analysis", "scientific computing"],
    description: "Software designed for performing scientific calculations and simulations.",
    extHomeURL: "https://en.wikipedia.org/wiki/List_of_numerical-analysis_software",
  });

  g.tag.set("tag+scripting", {
    name: "Scripting",
    keywords: ["command language", "command-based language", "scripting", "scripting language"],
    description: "A language used to write commands for controlling a system or application.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scripting_language",
  });

  g.tag.set("tag+server", {
    name: "Server",
    keywords: ["application server", "backend server", "middleware"],
    description: 'A Server hosts and runs applications, often described as "running in the background".',
    extHomeURL: "https://en.wikipedia.org/wiki/Application_server",
  });

  g.tag.set("tag+shell", {
    name: "Shell",
    keywords: ["CLI", "command-line interface", "shell"],
    description: "A command-line interface that interprets text commands to control the operating system.",
    extHomeURL: "https://en.wikipedia.org/wiki/Shell_(computing)",
  });

  g.tag.set("tag+stats", {
    name: "Statistics",
    keywords: ["data analysis", "statistical software", "statistics"],
    description: "Software for statistical analysis and modeling of data.",
    extHomeURL: "https://en.wikipedia.org/wiki/List_of_statistical_packages",
  });

  g.tag.set("tag+testing", {
    name: "Testing",
    keywords: ["quality assurance", "software testing", "test automation", "testing"],
    description: "Tools that automatically execute tests on software to ensure quality and performance.",
    extHomeURL: "https://en.wikipedia.org/wiki/Test_automation",
  });

  g.tag.set("tag+gui", {
    name: "GUI",
    keywords: ["GUI", "UI"],
    description: "Software tools for designing and building graphical user interfaces.",
    extHomeURL: "https://en.wikipedia.org/wiki/Graphical_user_interface",
  });

  g.tag.set("tag+uml", {
    name: "Unified Modeling Language (UML)",
    keywords: ["UML", "software design", "system modeling"],
    description: "A standardized modeling language used in software engineering to visualize system architecture and design.",
    extHomeURL: "https://en.wikipedia.org/wiki/Unified_Modeling_Language",
  });

  g.tag.set("tag+video", {
    name: "Video",
    keywords: ["multimedia", "video editor", "video production"],
    description: "Software used to edit video footage and produce multimedia projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Video_editing_software",
  });

  g.tag.set("tag+viz", {
    name: "Visualization",
    keywords: ["data analysis", "data visualization", "information", "visualization", "viz"],
    description: "Software for visually representing complex data to assist in understanding patterns and trends.",
    extHomeURL: "https://en.wikipedia.org/wiki/Information_visualization",
  });

  g.tag.set("tag+wavelet", {
    name: "Wavelet",
    keywords: ["mathematics", "signal processing", "wavelet analysis"],
    description: "A mathematical technique used for analyzing waveforms and signals, often in signal processing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Wavelet",
  });

  g.tag.set("tag+webdev", {
    name: "WebDev",
    keywords: ["http", "web design", "web programming", "webdev"],
    description: "Design and development of websites and web applications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Web_development",
  });

  g.tag.set("tag+workflow", {
    name: "Workflow",
    keywords: ["business automation", "process automation", "workflow automation"],
    description: "Tools that automate business workflows to improve efficiency and reduce manual tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Workflow_automation",
  });
}
