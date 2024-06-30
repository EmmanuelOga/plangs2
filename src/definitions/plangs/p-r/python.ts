import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+circuitpython")
    .merge({
      name: "CircuitPython",
      websites: [{ kind: "wikipedia", title: "CircuitPython", href: "https://en.wikipedia.org/wiki/CircuitPython" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Adafruit_blinka_angles-left.svg",
        },
      ],
      releases: [{ name: "CircuitPython", version: "9.0.4", date: "2024-01-01", kind: "stable" }],
    })
    .addLicense("lic+mit", {
      refs: [
        {
          href: "https://github.com/adafruit/circuitpython/blob/master/LICENSE/micropython",
          title: "circuitpython/LICENSE",
        },
      ],
    });

  /**/

  g.buildPlang("pl+cpython")
    .merge({
      name: "CPython",
      websites: [{ kind: "wikipedia", title: "CPython", href: "https://en.wikipedia.org/wiki/CPython" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg" },
      ],
      releases: [{ name: "CPython", version: "3.12.0", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+python-foundation"]);

  /**/

  g.buildPlang("pl+cython")
    .merge({
      name: "Cython",
      websites: [{ kind: "wikipedia", title: "Cython", href: "https://en.wikipedia.org/wiki/Cython" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg" }],
    })
    .addImplementations(["pl+python"])
    .addInfluences(["pl+c", "pl+python"])
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux"]);

  /**/

  g.buildPlang("pl+ironpython")
    .merge({
      name: "IronPython",
      websites: [{ kind: "wikipedia", title: "IronPython", href: "https://en.wikipedia.org/wiki/IronPython" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg" }],
      releases: [
        { name: "IronPython", version: "3.4.1", date: "2023-01-01", kind: "stable" },
        { name: "IronPython", version: "3.4.0", date: "2022-01-01", kind: "preview" },
      ],
    })
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+.net", "platf+mono"]);

  /**/

  g.buildPlang("pl+jython")
    .merge({
      name: "Jython",
      websites: [{ kind: "wikipedia", title: "Jython", href: "https://en.wikipedia.org/wiki/Jython" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/e/ea/Jython.png" }],
      releases: [{ name: "Jython", version: "2.7.3", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+python-foundation"])
    .addPlatforms(["platf+jvm"]);

  /**/

  g.buildPlang("pl+micropython")
    .merge({
      name: "MicroPython",
      websites: [{ kind: "wikipedia", title: "MicroPython", href: "https://en.wikipedia.org/wiki/MicroPython" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/MicroPython_new_logo.svg" }],
      releases: [{ name: "MicroPython", version: "1.23.0", date: "2024-01-01", kind: "stable" }],
    })
    .addLicense("lic+mit", {
      refs: [
        {
          href: "https://github.com/micropython/micropython/blob/master/LICENSE",
          title: "micropython/LICENSE at master · micropython/micropython",
        },
      ],
    })
    .addPlatforms([
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
    ]);

  /**/

  g.buildPlang("pl+numpy")
    .merge({
      name: "NumPy",
      websites: [{ kind: "wikipedia", title: "NumPy", href: "https://en.wikipedia.org/wiki/NumPy" }],
    })
    .addInfluence("pl+j", {
      refs: [
        {
          href: "https://traims.tumblr.com/post/33883718232/python-for-data-analysis-18-oct-2012-london",
          title: "Wes McKinney at 2012 meeting Python for Data Analysis",
        },
      ],
    });

  /**/

  g.buildPlang("pl+pyomo")
    .merge({
      name: "Pyomo",
      websites: [{ kind: "wikipedia", title: "Pyomo", href: "https://en.wikipedia.org/wiki/Pyomo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pyomo_Logo_Without_Text.png/121px-Pyomo_Logo_Without_Text.png",
        },
      ],
      releases: [{ name: "Pyomo", version: "6.4.2", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ampl", "pl+python", "pl+general-algebraic-modeling-system"])
    .addLicenses(["lic+bsd"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"]);

  /**/

  g.buildPlang("pl+pypy").merge({
    name: "RPython",
    websites: [
      { kind: "wikipedia", title: "PyPy", href: "https://en.wikipedia.org/wiki/PyPy" },
      { kind: "wikipedia", title: "RPython", href: "https://en.wikipedia.org/wiki/PyPy#RPython" },
    ],
  });

  /**/

  g.buildPlang("pl+python")
    .merge({
      name: "Python",
      websites: [
        { kind: "wikipedia", title: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" }],
      releases: [{ name: "Python", version: "3.12.4", date: "2024-01-01", kind: "stable" }],
    })
    .addDialects(["pl+mojo", "pl+cython", "pl+pypy"])
    .addDialect("pl+bazel", {
      refs: [
        {
          href: "https://web.archive.org/web/20200615140534/https://docs.bazel.build/versions/master/skylark/language.html",
          title: "Starlark Language",
        },
      ],
    })
    .addImplementations([
      "pl+cpython",
      "pl+pypy",
      "pl+stackless-python",
      "pl+micropython",
      "pl+circuitpython",
      "pl+ironpython",
      "pl+jython",
    ])
    .addInfluences(["pl+java", "pl+occam", "pl+apl", "pl+scheme", "pl+smalltalk"])
    .addInfluence("pl+abc", {
      refs: [
        {
          href: "https://web.archive.org/web/20121024164224/http://docs.python.org/faq/general.html#why-was-python-created-in-the-first-place",
          title: "Why was Python created in the first place?",
        },
      ],
    })
    .addInfluence("pl+ada", {
      refs: [
        {
          href: "https://web.archive.org/web/20191022155758/http://archive.adaic.com/standards/83lrm/html/lrm-11-03.html#11.3",
          title: "Ada 83 Reference Manual (raise statement)",
        },
      ],
    })
    .addInfluence("pl+c", {
      refs: [{ href: "https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.38.2023", title: "10.1.1.38.2023" }],
    })
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20121023030209/http://docs.python.org/tutorial/classes.html",
          title: "9. Classes — Python 3.6.4 documentation",
        },
      ],
    })
    .addInfluence("pl+clu", {
      refs: [
        {
          href: "https://web.archive.org/web/20191123043655/http://effbot.org/zone/call-by-object.htm",
          title: "Call By Object",
        },
      ],
    })
    .addInfluence("pl+dylan", {
      refs: [
        {
          href: "https://web.archive.org/web/20200820231854/https://www.python.org/download/releases/2.3/mro/",
          title: "The Python 2.3 Method Resolution Order",
        },
      ],
    })
    .addInfluence("pl+icon", {
      refs: [
        { href: "https://github.com/proebsting/goaldi", title: "Goaldi" },
        {
          href: "https://web.archive.org/web/20200605012926/https://www.python.org/dev/peps/pep-0255/",
          title: "PEP 255 – Simple Generators",
        },
      ],
    })
    .addInfluence("pl+modula", {
      refs: [{ href: "https://www.python.org/doc/essays/foreword/", title: "Programming Python: Foreword (1st ed.)" }],
    })
    .addInfluence("pl+poly-slashml", {
      refs: [
        {
          href: "https://docs.python.org/3/library/itertools.html",
          title: "itertools — Functions creating iterators for efficient looping — Python 3.7.1rc1 documentation",
        },
      ],
    })
    .addInfluence("pl+algol", {
      refs: [
        {
          href: "https://web.archive.org/web/20070501105422/http://www.amk.ca/python/writing/gvr-interview",
          title: "Interview with Guido van Rossum (July 1998)",
        },
      ],
    })
    .addInfluence("pl+haskell", {
      refs: [
        {
          href: "https://web.archive.org/web/20121024163217/http://docs.python.org/howto/functional.html",
          title: "Functional Programming HOWTO",
        },
      ],
    })
    .addInfluence("pl+lisp", {
      refs: [
        {
          href: "https://web.archive.org/web/20160604080843/https://docs.python.org/3.2/tutorial/controlflow.html",
          title: "More Control Flow Tools",
        },
      ],
    })
    .addInfluence("pl+perl", {
      refs: [
        {
          href: "https://web.archive.org/web/20180718132241/https://docs.python.org/3/library/re.html",
          title: "re – Regular expression operations – Python 3.10.6 documentation",
        },
      ],
    })
    .addInfluence("pl+sml", {
      refs: [
        {
          href: "https://docs.python.org/3/library/itertools.html",
          title: "itertools — Functions creating iterators for efficient looping — Python 3.7.1rc1 documentation",
        },
      ],
    })
    .addPerson("person+guido-van-rossum", { role: "designer" })
    .addLicenses(["lic+python-foundation"])
    .addParadigms(["para+multi", "para+imperative", "para+functional", "para+structured", "para+reflective"])
    .addParadigm("para+objects", {
      refs: [
        {
          href: "https://web.archive.org/web/20121024164224/http://docs.python.org/faq/general.html#what-is-python",
          title: "General Python FAQ – Python 3.9.2 documentation",
        },
      ],
    })
    .addPlatforms(["platf+linux", "platf+mac", "platf+wasm", "platf+bsd", "platf+ios", "platf+rpi", "platf+unix"])
    .addPlatform("platf+win", {
      refs: [
        { href: "https://peps.python.org/pep-0011/", title: "PEP 11 – CPython platform support | peps.python.org" },
      ],
    })
    .addPlatform("platf+android", {
      refs: [
        {
          href: "https://peps.python.org/pep-0738/",
          title: "PEP 738 – Adding Android as a supported platform | peps.python.org",
        },
      ],
    })
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addTypeSystem("tsys+strong", {
      refs: [
        {
          href: "https://web.archive.org/web/20210314173706/https://wiki.python.org/moin/Why%20is%20Python%20a%20dynamic%20language%20and%20also%20a%20strongly%20typed%20language",
          title: "Why is Python a dynamic language and also a strongly typed language",
        },
      ],
    })
    .addTypeSystem("tsys+optional", {
      refs: [
        {
          href: "https://web.archive.org/web/20200614153558/https://www.python.org/dev/peps/pep-0483/",
          title: "PEP 483 – The Theory of Type Hints",
        },
      ],
    });

  /**/

  g.buildPlang("pl+stackless-python")
    .merge({
      name: "Stackless Python",
      websites: [
        { kind: "wikipedia", title: "Stackless Python", href: "https://en.wikipedia.org/wiki/Stackless_Python" },
      ],
      releases: [
        { name: "Stackless Python", version: "3.8.1", date: "2020-01-01", kind: "stable" },
        { name: "Stackless Python", version: "unknown", date: "2021-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+dis-virtual-machine", "pl+limbo"])
    .addLicenses(["lic+python-foundation"]);

  /**/
}
