import type { NApp, NBundle, NLibrary, NTool, PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+python", {
      name: "Python",
      description:
        "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
      firstAppeared: "1991-01-01",
      extensions: [".py", ".pyc", ".pyd", ".pyi", ".pyw", ".pyz"],
      websites: [
        { href: "https://www.python.org/", title: "python.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Python_(programming_language)", title: "Python", kind: "wikipedia" },
      ],
      releases: [{ version: "3.12.5", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Python", url: "/images/plangs/p/python/logo.png" }],
    })
    .addInfluencedBy([
      "pl+ada",
      "pl+apl",
      "pl+c",
      "pl+c++",
      "pl+clu",
      "pl+dylan",
      "pl+haskell",
      "pl+icon",
      "pl+lisp",
      "pl+perl",
      "pl+r5rs",
      "pl+scheme",
      "pl+standard-ml",
    ])
    .addLicenses(["license+python"])
    .addParadigms([
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+reflective",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+linux", "plat+raspberry", "plat+wasm", "plat+windows"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+optional", "tsys+strong"]);

  const addPyTool = (key: NTool["key"], data: NTool["data"]) => g.nodes.tool.set(key, data).addPls(["pl+python"]);

  addPyTool("tool+pixi", {
    name: "Pixi",
    keywords: ["package manager", "dependency manager", "package management"],
    description:
      "Pixi is a package management tool for developers. It allows the developer to install libraries and applications in a reproducible way. Use pixi cross-platform, on Windows, Mac and Linux.",
    websites: [{ href: "https://pixi.sh/", title: "Pixi", kind: "homepage" }],
  });

  addPyTool("tool+ruff", {
    name: "Ruff",
    keywords: ["linter", "formatter", "code quality"],
    description: "An extremely fast Python linter and code formatter, written in Rust.",
    websites: [{ href: "https://docs.astral.sh/ruff/", title: "Ruff", kind: "homepage" }],
  });

  addPyTool("tool+pyright", {
    name: "Pyright",
    keywords: ["type checker", "static analysis", "type inference"],
    description:
      "Pyright is a full-featured, standards-compliant static type checker for Python. It is designed for high performance and can be used with large Python source bases.",
    websites: [{ href: "https://microsoft.github.io/pyright/", kind: "homepage", title: "Pyright" }],
  });

  addPyTool("tool+vscode-python", {
    name: "Python for Visual Studio Code",
    keywords: ["intellisense", "debugging", "linting", "formatting", "refactoring"],
    description:
      "Python language support with extension access points for IntelliSense (Pylance), Debugging (Python Debugger), linting, formatting, refactoring, unit tests, and more.",
    websites: [
      { href: "https://marketplace.visualstudio.com/items?itemName=ms-python.python", title: "Python for Visual Studio Code", kind: "homepage" },
    ],
  });

  const addPyBundle = (key: NBundle["key"], data: NBundle["data"], tools: NTool["key"][]) => {
    g.nodes.bundle.set(key, data).addTools(tools);
  };

  addPyBundle(
    "bundle+py-one",
    {
      description:
        "Python is well known for having a confusing package management story, but with Pixi you can manage your dependencies with ease, including non-Python dependencies like C libraries. Ruff is a super fast linter and code formatter. Type checking in Python is optional but highly recommended, specially as code grows larger. Pyright is a full-featured, standards-compliant static type checker. This bundle also includes the Python extension for Visual Studio Code.",
    },
    ["tool+pixi", "tool+ruff", "tool+pyright", "tool+vscode-python"],
  );

  const addPyLib = (key: NLibrary["key"], data: NLibrary["data"]) => g.nodes.lib.set(key, data).addPls(["pl+python"]);

  addPyLib("lib+msgspec", {
    name: "Msgspec",
    description: "msgspec is a fast serialization and validation library, with builtin support for JSON, MessagePack, YAML, and TOML.",
    websites: [{ href: "https://jcristharif.com/msgspec/", title: "Msgspec", kind: "homepage" }],
  });

  addPyLib("lib+flask", {
    name: "Flask",
    description: "Flask is a lightweight WSGI web application framework.",
    websites: [{ href: "https://flask.palletsprojects.com/", title: "Flask", kind: "homepage" }],
  });

  const addPyApp = (key: NApp["key"], data: NApp["data"]) => g.nodes.app.set(key, data).addPls(["pl+python"]);

  addPyApp("app+harlequin", {
    name: "Harlequin",
    description: "An easy, fast, and beautiful database client for the terminal.",
    websites: [{ href: "https://harlequin.sh/", title: "Harlequin", kind: "homepage" }],
  });

  addPyApp("app+glances", {
    name: "Glances",
    description: "Glances is a cross-platform system monitoring tool written in Python.",
    websites: [{ href: "https://nicolargo.github.io/glances/", title: "Glances", kind: "homepage" }],
  });

  addPyApp("app+zulip", {
    name: "Zulip",
    description: "Zulip is a powerful, open source group chat application.",
    websites: [{ href: "https://github.com/zulip/zulip", title: "Zulip", kind: "homepage" }],
  });

  addPyApp("app+aider", {
    name: "Aider",
    description:
      "Aider lets you pair program with LLMs, to edit code in your local git repository. Start a new project or work with an existing git repo. Aider works best with GPT-4o & Claude 3.5 Sonnet and can connect to almost any LLM.",
    websites: [{ href: "https://aider.chat/", title: "Aider", kind: "homepage" }],
  });
}