import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+circuitpython",
    {
      name: "CircuitPython",
      websites: [{ kind: "wikipedia", title: "CircuitPython", href: "https://en.wikipedia.org/wiki/CircuitPython" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Adafruit_blinka_angles-left.svg" },
      ],
      releases: [{ version: "9.0.4", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+mit"] },
  );

  lb.define(
    "pl+cpython",
    {
      name: "CPython",
      websites: [{ kind: "wikipedia", title: "CPython", href: "https://en.wikipedia.org/wiki/CPython" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg" },
      ],
      releases: [{ version: "3.12.0", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+python-foundation"] },
  );

  lb.define(
    "pl+cython",
    {
      name: "Cython",
      websites: [{ kind: "wikipedia", title: "Cython", href: "https://en.wikipedia.org/wiki/Cython" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg" }],
    },
    {
      implementations: ["pl+python"],
      influences: ["pl+c", "pl+python"],
      licenses: ["lic+apache"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
    },
  );

  lb.define(
    "pl+ironpython",
    {
      name: "IronPython",
      websites: [{ kind: "wikipedia", title: "IronPython", href: "https://en.wikipedia.org/wiki/IronPython" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg" }],
      releases: [
        { version: "3.4.1", date: "2023-01-01", kind: "stable" },
        { version: "3.4.0", date: "2022-01-01", kind: "preview" },
      ],
    },
    { licenses: ["lic+apache"], platforms: ["platf+.net", "platf+mono"] },
  );

  lb.define(
    "pl+micropython",
    {
      name: "MicroPython",
      websites: [{ kind: "wikipedia", title: "MicroPython", href: "https://en.wikipedia.org/wiki/MicroPython" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/MicroPython_new_logo.svg" }],
      releases: [{ version: "1.23.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+mit"],
      platforms: [
        "platf+arm",
        "platf+esp32",
        "platf+esp8266",
        "platf+javascript",
        "platf+pic",
        "platf+rp2040",
        "platf+stm32",
        "platf+unix",
        "platf+win",
        "platf+zephyr",
      ],
    },
  );

  lb.define(
    "pl+numpy",
    { name: "NumPy", websites: [{ kind: "wikipedia", title: "NumPy", href: "https://en.wikipedia.org/wiki/NumPy" }] },
    { influences: ["pl+j"] },
  );

  lb.define(
    "pl+pyomo",
    {
      name: "Pyomo",
      websites: [{ kind: "wikipedia", title: "Pyomo", href: "https://en.wikipedia.org/wiki/Pyomo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pyomo_Logo_Without_Text.png/121px-Pyomo_Logo_Without_Text.png",
        },
      ],
      releases: [{ version: "6.4.2", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ampl", "pl+general-algebraic-modeling-system", "pl+python"],
      licenses: ["lic+bsd"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  lb.define("pl+pypy", {
    name: "RPython",
    websites: [
      { kind: "wikipedia", title: "PyPy", href: "https://en.wikipedia.org/wiki/PyPy" },
      { kind: "wikipedia", title: "RPython", href: "https://en.wikipedia.org/wiki/PyPy#RPython" },
    ],
  });

  lb.define(
    "pl+python",
    {
      name: "Python",
      websites: [
        { kind: "wikipedia", title: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" }],
      releases: [{ version: "3.12.4", date: "2024-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+bazel", "pl+cython", "pl+mojo", "pl+pypy"],
      implementations: [
        "pl+circuitpython",
        "pl+cpython",
        "pl+ironpython",
        "pl+jython",
        "pl+micropython",
        "pl+pypy",
        "pl+stackless-python",
      ],
      influences: [
        "pl+abc",
        "pl+ada",
        "pl+algol",
        "pl+apl",
        "pl+c",
        "pl+clu",
        "pl+cpp",
        "pl+dylan",
        "pl+haskell",
        "pl+icon",
        "pl+java",
        "pl+lisp",
        "pl+modula",
        "pl+occam",
        "pl+perl",
        "pl+poly-slashml",
        "pl+scheme",
        "pl+smalltalk",
        "pl+sml",
      ],
      people: ["person+guido-van-rossum"],
      licenses: ["lic+python-foundation"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflective",
        "para+structured",
      ],
      platforms: [
        "platf+android",
        "platf+bsd",
        "platf+ios",
        "platf+linux",
        "platf+mac",
        "platf+rpi",
        "platf+unix",
        "platf+wasm",
        "platf+win",
      ],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+optional", "tsys+strong"],
    },
  );

  lb.define(
    "pl+stackless-python",
    {
      name: "Stackless Python",
      websites: [
        { kind: "wikipedia", title: "Stackless Python", href: "https://en.wikipedia.org/wiki/Stackless_Python" },
      ],
      releases: [
        { version: "3.8.1", date: "2020-01-01", kind: "stable" },
        { version: "unknown", date: "2021-01-01", kind: "preview" },
      ],
    },
    { influences: ["pl+dis-virtual-machine", "pl+limbo"], licenses: ["lic+python-foundation"] },
  );
}
