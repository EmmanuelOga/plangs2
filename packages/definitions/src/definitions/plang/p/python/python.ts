import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+python", {
      name: "Python",
      description:
        "Dynamic, high-level programming language known for its easy-to-read syntax and flexibility. It is a multi-paradigm language supporting procedural, object-oriented, and functional programming models, widely used in web development, data analysis, artificial intelligence, and more.",
      shortDesc: "Dynamic, high-level programming language known for its easy-to-read syntax.",
      created: "1991",
      extensions: [".py", ".pyc", ".pyd", ".pyi", ".pyo", ".pyw", ".pyz"],
      extGithubPath: "python/cpython",
      extHomeURL: "https://www.python.org/",
      extRedditPath: "Python",
      extWikipediaPath: "Python_(programming_language)",
      githubColor: "#3572A5",
      githubLangId: "303",
      githubName: "Python",
      githubPopular: true,
      githubStars: 64100,
      githubType: "programming",
      isTranspiler: false,
      languishRanking: 1,
      releases: [
        { version: "2.7.18", name: "Final Release of Python 2", date: "2020-04-19" },
        { version: "3.13.0", name: "Python 3.13.0", date: "2024-10-07" },
      ],
      stackovTags: ["python"],
    })
    .relInfluencedBy.add("pl+ada", "pl+apl", "pl+c", "pl+c++", "pl+haskell", "pl+lisp", "pl+perl", "pl+r5rs", "pl+scheme", "pl+standard-ml")
    .relLicenses.add("lic+python")
    .relParadigms.add(
      "para+functional",
      "para+imperative",
      "para+interpreted",
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
      "tag+webdev",
    )
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+inferred", "tsys+optional", "tsys+strong")
    .relWrittenWith.add("pl+c", "pl+python");

  // TOOLS

  g.tool
    .set("tool+pixi", {
      name: "Pixi",
      description:
        "Pixi is a package management tool for developers. It allows the developer to install libraries and applications in a reproducible way. Use pixi cross-platform, on Windows, Mac and Linux.",
      extHomeURL: "https://pixi.sh/",
      keywords: ["dependency manager", "package management", "package manager"],
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+rust");

  g.tool
    .set("tool+pyright", {
      name: "Pyright",
      description:
        "Pyright is a full-featured, standards-compliant static type checker for Python. It is designed for high performance and can be used with large Python source bases.",
      extHomeURL: "https://microsoft.github.io/pyright/",
      keywords: ["static analysis", "type checker", "type inference"],
    })
    .relPlangs.add("pl+python");

  g.tool
    .set("tool+ruff", {
      name: "Ruff",
      description: "An extremely fast Python linter and code formatter, written in Rust.",
      extHomeURL: "https://docs.astral.sh/ruff/",
      keywords: ["code quality", "formatter", "linter"],
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+rust");

  g.tool
    .set("tool+vscode-python", {
      name: "Python for VSCode",
      description:
        "Python language support with extension access points for IntelliSense (Pylance), Debugging (Python Debugger), linting, formatting, refactoring, unit tests, and more.",
      extHomeURL: "https://marketplace.visualstudio.com/items?itemName=ms-python.python",
      keywords: ["debugging", "formatting", "intellisense", "linting", "refactoring"],
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
      description: "Flask is a lightweight WSGI web application framework.",
      extHomeURL: "https://flask.palletsprojects.com/",
      keywords: ["framework", "web", "wsgi"],
    })
    .relPlangs.add("pl+python");

  g.library
    .set("lib+msgspec", {
      name: "msgspec",
      description: "msgspec is a fast serialization and validation library, with builtin support for JSON, MessagePack, YAML, and TOML.",
      extHomeURL: "https://jcristharif.com/msgspec/",
      keywords: ["json", "messagepack", "serialization", "toml", "validation", "yaml"],
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+python", "pl+rust");

  // APPS

  g.app
    .set("app+aider", {
      name: "Aider",
      description:
        "Aider lets you pair program with LLMs, to edit code in your local git repository. Start a new project or work with an existing git repo. Aider works best with GPT-4o & Claude 3.5 Sonnet and can connect to almost any LLM.",
      extHomeURL: "https://aider.chat/",
      keywords: ["git", "llm", "pair programming"],
    })
    .relWrittenWith.add("pl+python");

  g.app
    .set("app+glances", {
      name: "Glances",
      description: "Glances is a cross-platform system monitoring tool written in Python.",
      extHomeURL: "https://nicolargo.github.io/glances/",
      keywords: ["monitoring", "system", "terminal"],
    })
    .relWrittenWith.add("pl+python");

  g.app
    .set("app+harlequin", {
      name: "Harlequin",
      description: "An easy, fast, and beautiful database client for the terminal.",
      extHomeURL: "https://harlequin.sh/",
      keywords: ["client", "database", "terminal"],
    })
    .relWrittenWith.add("pl+python");

  g.app
    .set("app+zulip", {
      name: "Zulip",
      description: "Zulip is a powerful, open source group chat application.",
      extHomeURL: "https://github.com/zulip/zulip",
      keywords: ["chat", "communication", "group"],
    })
    .relWrittenWith.add("pl+python");
}
