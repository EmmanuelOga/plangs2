import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+python", {
      name: "Python",
      description:
        "Python is a multi-paradigm programming language known for its readability, dynamic typing, and a vast standard library. Developed by Guido van Rossum and released in 1991, it supports object-oriented, procedural, and functional programming paradigms. The language is widely used for web development, data analysis, artificial intelligence, and more.",
      shortDesc:
        "Python, created in 1991 by Guido van Rossum, is a readable, multi-paradigm language widely used in web development, AI, and data analysis.",
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
    .relInfluencedBy.add("pl+ada", "pl+apl", "pl+c", "pl+c++", "pl+haskell", "pl+lisp", "pl+perl", "pl+r5rs", "pl+scheme", "pl+standard-ml")
    .relLicenses.add("lic+python")
    .relParadigms.add(
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
      "para+scripting",
      "para+structured",
    )
    .relPlatforms.add("plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+raspberry", "plat+wasm", "plat+windows")
    .relTags.add(
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
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+low-code",
      "tag+modeling",
      "tag+numeric",
      "tag+sci",
      "tag+scripting",
      "tag+testing",
      "tag+viz",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+optional", "tsys+strong")
    .relWrittenWith.add("pl+c", "pl+python");

  // TOOLS

  g.tool
    .set("tool+pixi", {
      name: "Pixi",
      keywords: ["dependency manager", "package management", "package manager"],
      description:
        "Pixi is a package management tool for developers. It allows the developer to install libraries and applications in a reproducible way. Use pixi cross-platform, on Windows, Mac and Linux.",
      extHomeURL: "https://pixi.sh/",
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+rust");

  g.tool
    .set("tool+pyright", {
      name: "Pyright",
      keywords: ["static analysis", "type checker", "type inference"],
      description:
        "Pyright is a full-featured, standards-compliant static type checker for Python. It is designed for high performance and can be used with large Python source bases.",
      extHomeURL: "https://microsoft.github.io/pyright/",
    })
    .relPlangs.add("pl+python");

  g.tool
    .set("tool+ruff", {
      name: "Ruff",
      keywords: ["code quality", "formatter", "linter"],
      description: "An extremely fast Python linter and code formatter, written in Rust.",
      extHomeURL: "https://docs.astral.sh/ruff/",
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+rust");

  g.tool
    .set("tool+vscode-python", {
      name: "Python for VSCode",
      keywords: ["debugging", "formatting", "intellisense", "linting", "refactoring"],
      description:
        "Python language support with extension access points for IntelliSense (Pylance), Debugging (Python Debugger), linting, formatting, refactoring, unit tests, and more.",
      extHomeURL: "https://marketplace.visualstudio.com/items?itemName=ms-python.python",
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+typescript");

  // TOOL BUNDLES

  g.bundle
    .set("bun+py-one", {
      description:
        "Manage Python dependencies with Pixi, lint and format code with Ruff, and use Pyright for type checking. Includes the Python extension for VSCode.",
    })
    .relTools.add("tool+pixi", "tool+pyright", "tool+ruff", "tool+vscode-python");

  // LIBRARIES

  g.library
    .set("lib+flask", {
      name: "Flask",
      keywords: ["framework", "web", "wsgi"],
      description: "Flask is a lightweight WSGI web application framework.",
      extHomeURL: "https://flask.palletsprojects.com/",
    })
    .relPlangs.add("pl+python");

  g.library
    .set("lib+msgspec", {
      name: "msgspec",
      keywords: ["json", "messagepack", "serialization", "toml", "validation", "yaml"],
      description: "msgspec is a fast serialization and validation library, with builtin support for JSON, MessagePack, YAML, and TOML.",
      extHomeURL: "https://jcristharif.com/msgspec/",
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+python", "pl+rust");

  // APPS

  g.app
    .set("app+aider", {
      name: "Aider",
      keywords: ["git", "llm", "pair programming"],
      description:
        "Aider lets you pair program with LLMs, to edit code in your local git repository. Start a new project or work with an existing git repo. Aider works best with GPT-4o & Claude 3.5 Sonnet and can connect to almost any LLM.",
      extHomeURL: "https://aider.chat/",
    })
    .relWrittenWith.add("pl+python");

  g.app
    .set("app+glances", {
      name: "Glances",
      keywords: ["monitoring", "system", "terminal"],
      description: "Glances is a cross-platform system monitoring tool written in Python.",
      extHomeURL: "https://nicolargo.github.io/glances/",
    })
    .relWrittenWith.add("pl+python");

  g.app
    .set("app+harlequin", {
      name: "Harlequin",
      keywords: ["client", "database", "terminal"],
      description: "An easy, fast, and beautiful database client for the terminal.",
      extHomeURL: "https://harlequin.sh/",
    })
    .relWrittenWith.add("pl+python");

  g.app
    .set("app+zulip", {
      name: "Zulip",
      keywords: ["chat", "communication", "group"],
      description: "Zulip is a powerful, open source group chat application.",
      extHomeURL: "https://github.com/zulip/zulip",
    })
    .relWrittenWith.add("pl+python");
}
