import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+python", {
      name: "Python",
      description:
        "Python is a multi-paradigm programming language known for its readability, dynamic typing, and a vast standard library. Developed by Guido van Rossum and released in 1991, it supports object-oriented, procedural, and functional programming paradigms. The language is widely used for web development, data analysis, artificial intelligence, and more.",
      extensions: [".py", ".pyc", ".pyd", ".pyi", ".pyw", ".pyz"],
      keywords: ["python"],
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
      created: "1991",
    })
    .relInfluence.add(["pl+ada", "pl+apl", "pl+c", "pl+c++", "pl+haskell", "pl+lisp", "pl+perl", "pl+r5rs", "pl+scheme", "pl+standard-ml"])
    .relLicense.add(["lic+python"])
    .relParadigm.add([
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
      "para+scripting",
      "para+structured",
    ])
    .relPlBundles.add(["bundle+py-one"])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+raspberry", "plat+wasm", "plat+windows"])
    .relTags.add([
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
      "tag+interpreters",
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
    .relTsys.add(["tsys+duck", "tsys+dynamic", "tsys+optional", "tsys+strong"])
    .relWrittenIn.add(["pl+c", "pl+python"])
    .relApps.add(["app+aider", "app+glances", "app+harlequin", "app+zulip"])
    .relLibs.add(["lib+flask", "lib+msgspec"])
    .relTools.add(["tool+pixi", "tool+pyright", "tool+ruff", "tool+vscode-python"]);

  // TOOLS

  g.nodes.tool.set("tool+pixi", {
    name: "Pixi",
    keywords: ["dependency manager", "package management", "package manager"],
    description:
      "Pixi is a package management tool for developers. It allows the developer to install libraries and applications in a reproducible way. Use pixi cross-platform, on Windows, Mac and Linux.",
    extHomeURL: "https://pixi.sh/",
  });

  g.nodes.tool.set("tool+pyright", {
    name: "Pyright",
    keywords: ["static analysis", "type checker", "type inference"],
    description:
      "Pyright is a full-featured, standards-compliant static type checker for Python. It is designed for high performance and can be used with large Python source bases.",
    extHomeURL: "https://microsoft.github.io/pyright/",
  });

  g.nodes.tool.set("tool+ruff", {
    name: "Ruff",
    keywords: ["code quality", "formatter", "linter"],
    description: "An extremely fast Python linter and code formatter, written in Rust.",
    extHomeURL: "https://docs.astral.sh/ruff/",
  });

  g.nodes.tool.set("tool+vscode-python", {
    name: "Python for VSCode",
    keywords: ["debugging", "formatting", "intellisense", "linting", "refactoring"],
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
    .relTools.add(["tool+pixi", "tool+pyright", "tool+ruff", "tool+vscode-python"]);

  // LIBRARIES

  g.nodes.lib.set("lib+flask", {
    name: "Flask",
    keywords: ["framework", "web", "wsgi"],
    description: "Flask is a lightweight WSGI web application framework.",
    extHomeURL: "https://flask.palletsprojects.com/",
  });

  g.nodes.lib.set("lib+msgspec", {
    name: "Msgspec",
    keywords: ["json", "messagepack", "serialization", "toml", "validation", "yaml"],
    description: "msgspec is a fast serialization and validation library, with builtin support for JSON, MessagePack, YAML, and TOML.",
    extHomeURL: "https://jcristharif.com/msgspec/",
  });

  // APPS

  g.nodes.app.set("app+aider", {
    name: "Aider",
    keywords: ["git", "llm", "pair programming"],
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
    keywords: ["client", "database", "terminal"],
    description: "An easy, fast, and beautiful database client for the terminal.",
    extHomeURL: "https://harlequin.sh/",
  });

  g.nodes.app.set("app+zulip", {
    name: "Zulip",
    keywords: ["chat", "communication", "group"],
    description: "Zulip is a powerful, open source group chat application.",
    extHomeURL: "https://github.com/zulip/zulip",
  });
}
