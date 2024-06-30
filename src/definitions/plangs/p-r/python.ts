import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+circuitpython").merge({
    name: "CircuitPython",
    websites: [{ kind: "wikipedia", title: "CircuitPython", href: "https://en.wikipedia.org/wiki/CircuitPython" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Adafruit_blinka_angles-left.svg" },
    ],
    releases: [{ version: "9.0.4", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+cpython").merge({
    name: "CPython",
    websites: [{ kind: "wikipedia", title: "CPython", href: "https://en.wikipedia.org/wiki/CPython" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg" }],
    releases: [{ version: "3.12.0", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+cython").merge({
    name: "Cython",
    websites: [{ kind: "wikipedia", title: "Cython", href: "https://en.wikipedia.org/wiki/Cython" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg" }],
  });

  g.buildPlang("pl+ironpython").merge({
    name: "IronPython",
    websites: [{ kind: "wikipedia", title: "IronPython", href: "https://en.wikipedia.org/wiki/IronPython" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg" }],
    releases: [
      { version: "3.4.1", date: "2023-01-01", kind: "stable" },
      { version: "3.4.0", date: "2022-01-01", kind: "preview" },
    ],
  });

  g.buildPlang("pl+micropython").merge({
    name: "MicroPython",
    websites: [{ kind: "wikipedia", title: "MicroPython", href: "https://en.wikipedia.org/wiki/MicroPython" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/MicroPython_new_logo.svg" }],
    releases: [{ version: "1.23.0", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+numpy").merge({
    name: "NumPy",
    websites: [{ kind: "wikipedia", title: "NumPy", href: "https://en.wikipedia.org/wiki/NumPy" }],
  });

  g.buildPlang("pl+pyomo").merge({
    name: "Pyomo",
    websites: [{ kind: "wikipedia", title: "Pyomo", href: "https://en.wikipedia.org/wiki/Pyomo" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pyomo_Logo_Without_Text.png/121px-Pyomo_Logo_Without_Text.png",
      },
    ],
    releases: [{ version: "6.4.2", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pypy").merge({
    name: "RPython",
    websites: [
      { kind: "wikipedia", title: "PyPy", href: "https://en.wikipedia.org/wiki/PyPy" },
      { kind: "wikipedia", title: "RPython", href: "https://en.wikipedia.org/wiki/PyPy#RPython" },
    ],
  });

  g.buildPlang("pl+python").merge({
    name: "Python",
    websites: [
      { kind: "wikipedia", title: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" }],
    releases: [{ version: "3.12.4", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+stackless-python").merge({
    name: "Stackless Python",
    websites: [
      { kind: "wikipedia", title: "Stackless Python", href: "https://en.wikipedia.org/wiki/Stackless_Python" },
    ],
    releases: [
      { version: "3.8.1", date: "2020-01-01", kind: "stable" },
      { version: "unknown", date: "2021-01-01", kind: "preview" },
    ],
  });
}
