import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+python", {
      name: "Python",
      description:
        "Python is a multi-paradigm programming language known for its readability, dynamic typing, and a vast standard library. Developed by Guido van Rossum and released in 1991, it supports object-oriented, procedural, and functional programming paradigms. The language is widely used for web development, data analysis, artificial intelligence, and more.",
      year: 1991,
      extensions: [".py", ".pyc", ".pyd", ".pyi", ".pyw", ".pyz"],
      keywords: ["python"],
      isMainstream: true,
      releases: [
        { version: "2.0", name: "Python 2.0", date: "2000-10-16" },
        { version: "3.0", name: "Python 3.0", date: "2008-12-03" },
        { version: "2.7.18", name: "Final Release of Python 2", date: "2020-04-19" },
        { version: "3.13.0", name: "Python 3.13.0", date: "2024-10-07" },
        { version: "3.10.0", name: "Python 3.10.0", date: "2021-10-04" },
      ],
      stackovTags: ["python"],
      githubName: "Python",
      languishRanking: 1,
      githubLangId: "303",
      githubColor: "#3572A5",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Python_(programming_language)",
      extRedditPath: "Python",
      extHomeURL: "https://www.python.org/",
    })
    .addInfluencedBy(["pl+ada", "pl+apl", "pl+c", "pl+c++", "pl+haskell", "pl+lisp", "pl+perl", "pl+r5rs", "pl+scheme", "pl+standard-ml"])
    .addLicenses(["license+python"])
    .addParadigms([
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+reflective",
      "paradigm+scripting",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+raspberry", "plat+wasm", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+automation",
      "tag+cas",
      "tag+cli",
      "tag+compiler",
      "tag+dataflow",
      "tag+dbms",
      "tag+framework",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+low-code",
      "tag+modeling",
      "tag+numeric",
      "tag+sci",
      "tag+scripting",
      "tag+testing",
      "tag+ui",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+optional", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+python"])
    .addTools(["tool+pixi", "tool+pyright", "tool+ruff", "tool+vscode-python"])
    .addBundles(["bundle+py-one"])
    .addLibs(["lib+flask", "lib+msgspec"])
    .addApps(["app+aider", "app+glances", "app+harlequin", "app+zulip"]);

  // TOOLS

  g.nodes.tool.set("tool+pixi", {
    name: "Pixi",
    keywords: ["package manager", "dependency manager", "package management"],
    description:
      "Pixi is a package management tool for developers. It allows the developer to install libraries and applications in a reproducible way. Use pixi cross-platform, on Windows, Mac and Linux.",
    extHomeURL: "https://pixi.sh/",
  });

  g.nodes.tool.set("tool+pyright", {
    name: "Pyright",
    keywords: ["type checker", "static analysis", "type inference"],
    description:
      "Pyright is a full-featured, standards-compliant static type checker for Python. It is designed for high performance and can be used with large Python source bases.",
    extHomeURL: "https://microsoft.github.io/pyright/",
  });

  g.nodes.tool.set("tool+ruff", {
    name: "Ruff",
    keywords: ["linter", "formatter", "code quality"],
    description: "An extremely fast Python linter and code formatter, written in Rust.",
    extHomeURL: "https://docs.astral.sh/ruff/",
  });

  g.nodes.tool.set("tool+vscode-python", {
    name: "Python for Visual Studio Code",
    keywords: ["intellisense", "debugging", "linting", "formatting", "refactoring"],
    description:
      "Python language support with extension access points for IntelliSense (Pylance), Debugging (Python Debugger), linting, formatting, refactoring, unit tests, and more.",
    extHomeURL: "https://marketplace.visualstudio.com/items?itemName=ms-python.python",
  });

  // TOOL BUNDLES

  g.nodes.bundle
    .set("bundle+py-one", {
      description:
        "Python is well known for having a confusing package management story, but with Pixi you can manage your dependencies with ease, including non-Python dependencies like C libraries. Ruff is a super fast linter and code formatter. Type checking in Python is optional but highly recommended, specially as code grows larger. Pyright is a full-featured, standards-compliant static type checker. This bundle also includes the Python extension for Visual Studio Code.",
    })
    .addTools(["tool+pixi", "tool+pyright", "tool+ruff", "tool+vscode-python"]);

  // LIBRARIES

  g.nodes.lib.set("lib+flask", {
    name: "Flask",
    keywords: ["web", "framework", "wsgi"],
    description: "Flask is a lightweight WSGI web application framework.",
    extHomeURL: "https://flask.palletsprojects.com/",
  });

  g.nodes.lib.set("lib+msgspec", {
    name: "Msgspec",
    keywords: ["serialization", "validation", "json", "messagepack", "yaml", "toml"],
    description: "msgspec is a fast serialization and validation library, with builtin support for JSON, MessagePack, YAML, and TOML.",
    extHomeURL: "https://jcristharif.com/msgspec/",
  });

  // APPS

  g.nodes.app.set("app+aider", {
    name: "Aider",
    keywords: ["pair programming", "llm", "git"],
    description:
      "Aider lets you pair program with LLMs, to edit code in your local git repository. Start a new project or work with an existing git repo. Aider works best with GPT-4o & Claude 3.5 Sonnet and can connect to almost any LLM.",
    extHomeURL: "https://aider.chat/",
  });

  g.nodes.app.set("app+glances", {
    name: "Glances",
    keywords: ["monitoring", "system", "terminal"],
    description: "Glances is a cross-platform system monitoring tool written in Python.",
    extHomeURL: "https://nicolargo.github.io/glances/",
  });

  g.nodes.app.set("app+harlequin", {
    name: "Harlequin",
    keywords: ["database", "client", "terminal"],
    description: "An easy, fast, and beautiful database client for the terminal.",
    extHomeURL: "https://harlequin.sh/",
  });

  g.nodes.app.set("app+zulip", {
    name: "Zulip",
    keywords: ["chat", "group", "communication"],
    description: "Zulip is a powerful, open source group chat application.",
    extHomeURL: "https://github.com/zulip/zulip",
  });
}
