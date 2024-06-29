import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+circuitpython",
    "CircuitPython",
    {
      name: "CircuitPython",
      websites: [
        { kind: "wikipedia", title: "CircuitPython", href: "https://en.wikipedia.org/wiki/CircuitPython" },
        { kind: "homepage", title: "circuitpython.org", href: "https://circuitpython.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Adafruit_blinka_angles-left.svg" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2017-07-19", kind: "first" },
        { version: "9.0.4", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+mit"] },
  );

  lb.define(
    "pl+cpython",
    "CPython",
    {
      name: "CPython",
      websites: [
        { kind: "wikipedia", title: "CPython", href: "https://en.wikipedia.org/wiki/CPython" },
        { kind: "homepage", title: "www.python.org", href: "https://www.python.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg" },
      ],
      releases: [
        { version: "unknown", date: "1994-01-26", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "3.12.0", date: "2023-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+python-foundation"] },
  );

  lb.define(
    "pl+cython",
    "Cython",
    {
      name: "Cython",
      websites: [
        { kind: "wikipedia", title: "Cython", href: "https://en.wikipedia.org/wiki/Cython" },
        { kind: "homepage", title: "cython.org", href: "https://cython.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2007-07-28", kind: "first" },
        { version: "3.0.10", date: "2024-01-01", kind: "stable" },
        { version: "3.0.0", date: "2023-03-27", kind: "preview" },
      ],
      extensions: [".pyx", ".pxd", ".pxi"],
    },
    {
      implementations: ["pl+python"],
      influences: ["pl+c", "pl+python"],
      licenses: ["lic+apache"],
      people: ["person+robert-bradshaw", "person+stefan-behnel"],
      platforms: ["platf+win", "platf+mac", "platf+linux"],
    },
  );

  lb.define(
    "pl+ironpython",
    "IronPython",
    {
      name: "IronPython",
      websites: [
        { kind: "wikipedia", title: "IronPython", href: "https://en.wikipedia.org/wiki/IronPython" },
        { kind: "homepage", title: "ironpython.net", href: "https://ironpython.net" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2006-09-05", kind: "first" },
        { version: "3.4.1", date: "2023-07-12", kind: "stable" },
        { version: "3.4.0", date: "2022-04-30", kind: "preview" },
      ],
    },
    { licenses: ["lic+apache"], platforms: ["platf+.net", "platf+mono"] },
  );

  lb.define(
    "pl+jupyter",
    "Jupyter",
    {
      name: "Jupyter",
      websites: [{ kind: "wikipedia", title: "Jupyter", href: "https://en.wikipedia.org/wiki/Jupyter" }],
    },
    { influences: ["pl+wolfram"] },
  );

  lb.define(
    "pl+micropython",
    "MicroPython",
    {
      name: "MicroPython",
      websites: [
        { kind: "wikipedia", title: "MicroPython", href: "https://en.wikipedia.org/wiki/MicroPython" },
        { kind: "homepage", title: "micropython.org", href: "https://micropython.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/MicroPython_new_logo.svg" }],
      releases: [
        { version: "unknown", date: "2014-05-03", kind: "first" },
        { version: "1.23.0", date: "2024-01-01", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+mit"],
      people: ["person+damien-p-george"],
      platforms: [
        "platf+arm",
        "platf+stm32",
        "platf+esp8266",
        "platf+esp32",
        "platf+pic",
        "platf+unix",
        "platf+win",
        "platf+zephyr",
        "platf+javascript",
        "platf+rp2040",
      ],
    },
  );

  lb.define(
    "pl+numpy",
    "NumPy",
    { name: "NumPy", websites: [{ kind: "wikipedia", title: "NumPy", href: "https://en.wikipedia.org/wiki/NumPy" }] },
    { influences: ["pl+j"] },
  );

  lb.define(
    "pl+pyomo",
    "Pyomo",
    {
      name: "Pyomo",
      websites: [
        { kind: "wikipedia", title: "Pyomo", href: "https://en.wikipedia.org/wiki/Pyomo" },
        { kind: "homepage", title: "www.pyomo.org", href: "https://www.pyomo.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pyomo_Logo_Without_Text.png/121px-Pyomo_Logo_Without_Text.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "6.4.2", date: "2022-08-17", kind: "stable" },
      ],
      extensions: [".py"],
    },
    {
      influences: ["pl+python", "pl+ampl", "pl+general-algebraic-modeling-system"],
      licenses: ["lic+bsd"],
      people: [
        "person+gabriel-hackebeil",
        "person+william-e-hart",
        "person+carl-laird",
        "person+john-siirola",
        "person+jean-paul-watson",
        "person+david-woodruff",
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  lb.define("pl+pypy", "RPython", {
    name: "RPython",
    websites: [
      { kind: "wikipedia", title: "PyPy", href: "https://en.wikipedia.org/wiki/PyPy" },
      { kind: "wikipedia", title: "RPython", href: "https://en.wikipedia.org/wiki/PyPy#RPython" },
    ],
  });

  lb.define(
    "pl+python",
    "Python",
    {
      name: "Python",
      websites: [
        { kind: "wikipedia", title: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
        { kind: "homepage", title: "python.org", href: "https://www.python.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1991-02-20", kind: "first" },
        { version: "3.12.4", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".py", ".pyw", ".pyz", ".pyi", ".pyc", ".pyd"],
    },
    {
      dialects: ["pl+mojo", "pl+cython", "pl+pypy", "pl+bazel"],
      implementations: [
        "pl+cpython",
        "pl+pypy",
        "pl+stackless-python",
        "pl+micropython",
        "pl+circuitpython",
        "pl+ironpython",
        "pl+jython",
      ],
      influences: [
        "pl+ada",
        "pl+java",
        "pl+sml",
        "pl+scheme",
        "pl+lisp",
        "pl+cpp",
        "pl+dylan",
        "pl+modula",
        "pl+icon",
        "pl+apl",
        "pl+occam",
        "pl+c",
        "pl+clu",
        "pl+abc",
        "pl+algol",
        "pl+haskell",
        "pl+perl",
        "pl+smalltalk",
      ],
      licenses: ["lic+python-foundation"],
      paradigms: [
        "para+multi",
        "para+objects",
        "para+imperative",
        "para+functional",
        "para+structured",
        "para+reflective",
      ],
      people: ["person+guido-van-rossum"],
      platforms: [
        "platf+linux",
        "platf+mac",
        "platf+win",
        "platf+wasm",
        "platf+bsd",
        "platf+ios",
        "platf+rpi",
        "platf+unix",
        "platf+android",
      ],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong", "tsys+optional"],
    },
  );

  lb.define(
    "pl+stackless-python",
    "Stackless Python",
    {
      name: "Stackless Python",
      websites: [
        { kind: "wikipedia", title: "Stackless Python", href: "https://en.wikipedia.org/wiki/Stackless_Python" },
        { kind: "homepage", title: "www.stackless.com", href: "http://www.stackless.com/" },
      ],
      releases: [
        { version: "unknown", date: "1998-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "3.8.1", date: "2020-01-22", kind: "stable" },
        { version: "unknown", date: "2021-01-01", kind: "preview" },
      ],
    },
    { influences: ["pl+limbo"], licenses: ["lic+python-foundation"], people: ["person+anselm-kruis"] },
  );
}
