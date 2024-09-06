import type { PlangsGraph } from "@plangs/plangs";
import { wikipedia } from "@plangs/plangs/util";

export function define(g: PlangsGraph) {
  g.n_tags.set("tag+3dg", {
    name: "3D Computer Graphics",
    keywords: ["3D graphics", "rendering", "visualization"],
    description: "Software and tools for creating and manipulating 3D models and rendering graphics.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/3D_computer_graphics", "3D Computer Graphics")],
  });

  g.n_tags.set("tag+4gl", {
    name: "4GL",
    keywords: ["4GL", "fourth-generation language", "high-level language"],
    description: "Fourth-generation programming languages designed to be more abstract and easier to use than third-generation languages.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/4GL", "4GL")],
  });

  g.n_tags.set("tag+framework", {
    name: "Application Framework",
    keywords: ["framework"],
    description: "A software framework that provides a structure for developing software applications.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Application_framework", "Application Framework")],
  });

  g.n_tags.set("tag+server", {
    name: "Application Server",
    keywords: ["application server", "backend server", "middleware"],
    description: "A server that hosts and runs applications, providing essential services for enterprise-level systems.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Application_server", "Application Server")],
  });

  g.n_tags.set("tag+app", {
    name: "Application Software",
    keywords: ["application", "app", "program"],
    description: "Software designed to perform specific tasks for users.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Application_software", "Application Software")],
  });

  g.n_tags.set("tag+asm", {
    name: "Assembler",
    keywords: ["asm", "assembler", "assembly language", "low-level programming"],
    description: "Software that translates assembly language code into machine code.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Assembly_language#Assembler", "Assembler")],
  });

  g.n_tags.set("tag+audio-dev", {
    name: "Audio Programming",
    keywords: ["audio", "sound", "synthesis", "audio processing"],
    description: "Languages and environments designed for programming and synthesizing sound.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Audio_programming_language", "Audio Programming Language")],
  });

  g.n_tags.set("tag+automation", {
    name: "Automation",
    keywords: ["automation", "automated processes", "workflow"],
    description: "Software tools that automate repetitive tasks and processes.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Automation", "Automation")],
  });

  g.n_tags.set("tag+collab", {
    name: "Collaborative Software",
    keywords: ["collaborative software", "collaboration tools", "groupware", "collab"],
    description: "Software designed to help multiple users work together on tasks and projects.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Collaborative_software", "Collaborative Software")],
  });

  g.n_tags.set("tag+cli", {
    name: "Command Line Interface",
    keywords: ["CLI", "command-line interface"],
    description: "Text-based input given to a computer to perform specific tasks.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Command_(computing)", "Command")],
  });

  g.n_tags.set("tag+scripting", {
    name: "Scripting",
    keywords: ["scripting", "command language", "command-based language", "scripting language"],
    description: "A language used to write commands for controlling a system or application.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Scripting_language", "Scripting Language")],
  });

  g.n_tags.set("tag+compiler", {
    name: "Compiler",
    keywords: ["compiler", "source code translator", "code optimization"],
    description: "Software that translates high-level programming languages into machine code or another form.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Compiler", "Compiler")],
  });

  g.n_tags.set("tag+cas", {
    name: "Computer Algebra System",
    keywords: ["computer algebra", "symbolic computation", "algebra system"],
    description: "Software systems that facilitate symbolic mathematical computations.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Computer_algebra_system", "Computer Algebra System")],
  });

  g.n_tags.set("tag+dataq", {
    name: "Data Acquisition",
    keywords: ["acquisition", "DAQ", "data collection"],
    description: "Tools and systems designed to gather and analyze data from various sources.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Data_acquisition", "Data Acquisition")],
  });

  g.n_tags.set("tag+analysis", {
    name: "Data Analysis",
    keywords: ["analysis", "data processing", "big data"],
    description: "Software tools designed to analyze and interpret large datasets.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Data_analysis", "Data Analysis")],
  });

  g.n_tags.set("tag+dbms", {
    name: "Database Management System (DBMS)",
    keywords: ["dbms", "database", "data storage", "relational database", "rdbmds", "gdbms"],
    description: "Software for managing and interacting with databases.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Database_management_system", "Database Management System (DBMS)")],
  });

  g.n_tags.set("tag+dataflow", {
    name: "Dataflow Programming",
    keywords: ["dataflow", "data-driven", "dataflow architecture"],
    description: "A programming paradigm where the flow of data determines the execution of operations.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Dataflow_programming", "Dataflow Programming")],
  });

  g.n_tags.set("tag+decision", {
    name: "Decision-making Software",
    keywords: ["decision-making", "decision support", "DSS"],
    description: "Tools designed to assist in making business and technical decisions.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Decision-making_software", "Decision-making Software")],
  });

  g.n_tags.set("tag+edu", {
    name: "Educational Software",
    keywords: ["educational software", "e-learning", "education technology"],
    description: "Software designed to facilitate learning and instruction.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Educational_software", "Educational Software")],
  });

  g.n_tags.set("tag+embedded", {
    name: "Embedded System",
    keywords: ["embedded system", "firmware", "real-time systems"],
    description: "A combination of hardware and software designed to perform a dedicated function.",
    websites: [
      wikipedia("https://en.wikipedia.org/wiki/Embedded_operating_system", "Embedded Operating System"),
      wikipedia("https://en.wikipedia.org/wiki/Embedded_system", "Embedded System"),
    ],
  });
  g.n_tags.set("tag+flow", {
    name: "Flow-Based Programming",
    keywords: ["flow-based programming", "FBP", "data flow"],
    description:
      "A programming paradigm where applications are defined as networks of black-box processes that exchange data across predefined connections.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Flow-based_programming", "Flow-Based Programming")],
  });

  g.n_tags.set("tag+multivar", {
    name: "Multivariate Analysis",
    keywords: ["multivariate analysis", "statistical analysis", "data analysis"],
    description: "Techniques used to analyze data that involves multiple variables to understand relationships and patterns.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Multivariate_analysis", "Multivariate Analysis")],
  });

  g.n_tags.set("tag+games", {
    name: "Games",
    keywords: ["game engine", "game development", "gamedev", "games"],
    description: "Software frameworks designed for the development and creation of video games.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Game_engine", "Game Engine")],
  });

  g.n_tags.set("tag+genomics", {
    name: "Genomics",
    keywords: ["genomics", "bioinformatics", "genetic analysis"],
    description: "Software for studying and analyzing genomes and genetic data.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Genomics", "Genomics")],
  });

  g.n_tags.set("tag+ui", {
    name: "User Interface",
    keywords: ["UI", "GUI", "interface design"],
    description: "Software tools for designing and building user interfaces.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Graphical_user_interface", "User Interface")],
  });

  g.n_tags.set("tag+industrial", {
    name: "Industrial Control",
    keywords: ["industrial", "control", "automation", "SCADA"],
    description: "Systems and software used to control and monitor industrial processes.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Industrial_control_system", "Industrial Control")],
  });

  g.n_tags.set("tag+viz", {
    name: "Information Visualization",
    keywords: ["data visualization", "information", "visualization", "data analysis", "viz"],
    description: "Software for visually representing complex data to assist in understanding patterns and trends.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Information_visualization", "Information Visualization")],
  });

  g.n_tags.set("tag+instrument_control", {
    name: "Instrument Control",
    keywords: ["instrument control", "automation", "measurement"],
    description: "Software used to control scientific and industrial instruments.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Instrument_control", "Instrument Control")],
  });

  g.n_tags.set("tag+if", {
    name: "Interactive Fiction",
    keywords: ["interactive fiction", "text-based games", "IF"],
    description: "Software for creating and playing narrative-driven interactive stories.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Interactive_fiction", "Interactive Fiction")],
  });

  g.n_tags.set("tag+iot", {
    name: "Internet of Things",
    keywords: ["IoT", "connected devices", "smart devices"],
    description: "Software and platforms designed to connect and manage IoT devices and networks.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Internet_of_things", "Internet of Things")],
  });

  g.n_tags.set("tag+interpreter", {
    name: "Interpreter",
    keywords: ["interpreter", "programming language", "runtime execution"],
    description:
      "Software that directly executes instructions written in a programming language without requiring them to be compiled into machine code.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Interpreter_(computing)", "Interpreter")],
  });

  g.n_tags.set("tag+sci", {
    name: "Scientific Computing",
    keywords: ["scientific computing", "numerical analysis", "computational science"],
    description: "Software designed for performing scientific calculations and simulations.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/List_of_numerical-analysis_software", "Scientific Computing")],
  });

  g.n_tags.set("tag+stats", {
    name: "Statistics",
    keywords: ["statistics", "data analysis", "statistical software"],
    description: "Software for statistical analysis and modeling of data.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/List_of_statistical_packages", "Statistics")],
  });

  g.n_tags.set("tag+low-code", {
    name: "Low Code",
    keywords: ["low code", "development platform", "rapid development"],
    description: "Development platforms that enable users to create applications with minimal hand-coding.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Low-code_development_platform", "Low Code")],
  });

  g.n_tags.set("tag+midi", {
    name: "MIDI",
    keywords: ["MIDI", "music technology", "digital audio"],
    description: "Musical Instrument Digital Interface (MIDI) protocol and software for controlling music hardware and software.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/MIDI", "MIDI")],
  });

  g.n_tags.set("tag+modeling", {
    name: "Mathematical Modeling",
    keywords: ["mathematical modeling", "simulation", "mathematics"],
    description: "Software used for creating mathematical models and simulations.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Mathematical_modeling", "Mathematical Modeling")],
  });

  g.n_tags.set("tag+modular", {
    name: "Modular Music Software",
    keywords: ["modular music", "music studio", "synthesizers"],
    description: "Software for creating and organizing music using modular components.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Modular_software_music_studio", "Modular Music Software")],
  });

  g.n_tags.set("tag+multimedia", {
    name: "Multimedia",
    keywords: ["multimedia", "audio-visual", "interactive media"],
    description: "Software for creating and manipulating multimedia content, including audio, video, and graphics.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Multimedia", "Multimedia")],
  });

  g.n_tags.set("tag+numeric", {
    name: "Numeric Computation",
    keywords: ["numeric computation", "numerical analysis", "scientific computing"],
    description: "Software for performing numeric computations and algorithms.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Numeric_computation", "Numeric Computation")],
  });

  g.n_tags.set("tag+proofs", {
    name: "Proof Assistant",
    keywords: ["proof assistant", "formal verification", "theorem proving"],
    description: "Software used to assist in proving mathematical theorems and verifying logical correctness.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Proof_assistant", "Proof Assistant")],
  });

  g.n_tags.set("tag+rad", {
    name: "Rapid Application Development",
    keywords: ["RAD", "rapid development", "software development methodology"],
    description: "A software development methodology focused on rapid prototyping and iterative development.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Rapid_Application_Development", "Rapid Application Development")],
  });

  g.n_tags.set("tag+ray-tracer", {
    name: "Ray Tracer",
    keywords: ["ray tracing", "ray tracer", "3D rendering", "graphics"],
    description: "Software that uses ray tracing to generate realistic lighting and shadows in 3D environments.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Ray_tracing_(graphics)", "Ray Tracer")],
  });

  g.n_tags.set("tag+dsp", {
    name: "Digital Signal Processing",
    keywords: ["signal processing", "DSP", "data analysis"],
    description: "Software for analyzing and manipulating signals, often used in audio and telecommunications.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Signal_processing", "Signal Processing")],
  });

  g.n_tags.set("tag+testing", {
    name: "Test Automation",
    keywords: ["test automation", "software testing", "quality assurance", "testing"],
    description: "Tools that automatically execute tests on software to ensure quality and performance.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Test_automation", "Test Automation")],
  });

  g.n_tags.set("tag+editor", {
    name: "Text Editor",
    keywords: ["text editor", "code editor", "plain text", "editor"],
    description: "Software used to create and edit text, often optimized for coding or document editing.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Text_editor", "Text Editor")],
  });

  g.n_tags.set("tag+uml", {
    name: "Unified Modeling Language (UML)",
    keywords: ["UML", "software design", "system modeling"],
    description: "A standardized modeling language used in software engineering to visualize system architecture and design.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Unified_Modeling_Language", "Unified Modeling Language (UML)")],
  });

  g.n_tags.set("tag+video", {
    name: "Video Editor",
    keywords: ["video editor", "video production", "multimedia"],
    description: "Software used to edit video footage and produce multimedia projects.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Video_editing_software", "Video Editor")],
  });

  g.n_tags.set("tag+wavelet", {
    name: "Wavelet Analysis",
    keywords: ["wavelet analysis", "signal processing", "mathematics"],
    description: "A mathematical technique used for analyzing waveforms and signals, often in signal processing.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Wavelet", "Wavelet Analysis")],
  });

  g.n_tags.set("tag+workflow", {
    name: "Workflow Automation",
    keywords: ["workflow automation", "business automation", "process automation"],
    description: "Tools that automate business workflows to improve efficiency and reduce manual tasks.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Workflow_automation", "Workflow Automation")],
  });
}
