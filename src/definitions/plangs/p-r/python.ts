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
      references: {
        initial_release: [
          { href: "https://blog.adafruit.com/2017/07/19/circuitpython-1-0-0/", title: "CircuitPython 1.0.0!" },
        ],
        stable_release: [
          { href: "https://github.com/adafruit/circuitpython/releases/tag/9.0.4", title: "Release 9.0.4" },
        ],
        written_in: [{ href: "https://github.com/adafruit/circuitpython", title: "adafruit/circuitpython" }],
        license: [
          {
            href: "https://github.com/adafruit/circuitpython/blob/master/LICENSE/micropython",
            title: "circuitpython/LICENSE",
          },
        ],
      },
      releases: [
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
        { version: "3.12.0", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://discuss.python.org/t/python-3-12-0-final-is-here/35186",
            title: "Python 3.12.0 (final) is here",
          },
        ],
      },
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
      references: {
        first_appeared: [
          {
            href: "http://www.behnel.de/cythonEP2008/cython-ep2008.html",
            title: "The Cython Compiler for C-Extensions in Python",
          },
        ],
        stable_release: [{ href: "https://github.com/cython/cython/releases/tag/3.0.10", title: "Release 3.0.10" }],
        preview_release: [
          { href: "https://github.com/cython/cython/blob/61c079e/CHANGES.rst", title: "Cython Changelog" },
        ],
        filename_extensions: [
          {
            href: "https://cython.readthedocs.io/en/latest/src/userguide/language_basics.html#cython-file-types",
            title: "Language Basics — Cython 3.0.0a9 documentation",
          },
        ],
      },
      releases: [
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
      people: [
        ["person+robert-bradshaw", "developer"],
        ["person+stefan-behnel", "developer"],
      ],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
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
      references: {
        initial_release: [
          {
            href: "https://web.archive.org/web/20171226082609/http://ironpython.codeplex.com/releases/view/423",
            title: "CodePlex Archive",
          },
        ],
      },
      releases: [
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
      references: {
        license: [
          {
            href: "https://github.com/micropython/micropython/blob/master/LICENSE",
            title: "micropython/LICENSE at master · micropython/micropython",
          },
        ],
      },
    },
    {
      licenses: ["lic+mit"],
      people: [["person+damien-p-george", "developer"]],
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
      influences: ["pl+ampl", "pl+general-algebraic-modeling-system", "pl+python"],
      licenses: ["lic+bsd"],
      people: [
        ["person+carl-laird", "designer"],
        ["person+david-woodruff", "designer"],
        ["person+gabriel-hackebeil", "designer"],
        ["person+jean-paul-watson", "designer"],
        ["person+john-siirola", "designer"],
        ["person+william-e-hart", "designer"],
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
      references: {
        paradigm: [
          {
            href: "https://web.archive.org/web/20121024164224/http://docs.python.org/faq/general.html#what-is-python",
            title: "General Python FAQ – Python 3.9.2 documentation",
          },
        ],
        first_appeared: [
          {
            href: "https://web.archive.org/web/20210811171015/https://www.tuhs.org/Usenet/alt.sources/1991-February/001749.html",
            title: "Python 0.9.1 part 01/21",
          },
        ],
        typing_discipline: [
          {
            href: "https://web.archive.org/web/20210314173706/https://wiki.python.org/moin/Why%20is%20Python%20a%20dynamic%20language%20and%20also%20a%20strongly%20typed%20language",
            title: "Why is Python a dynamic language and also a strongly typed language",
          },
          {
            href: "https://web.archive.org/web/20200614153558/https://www.python.org/dev/peps/pep-0483/",
            title: "PEP 483 – The Theory of Type Hints",
          },
        ],
        os: [
          { href: "https://peps.python.org/pep-0011/", title: "PEP 11 – CPython platform support | peps.python.org" },
          {
            href: "https://peps.python.org/pep-0738/",
            title: "PEP 738 – Adding Android as a supported platform | peps.python.org",
          },
          {
            href: "https://web.archive.org/web/20201127015815/https://www.python.org/download/other/",
            title: "Download Python for Other Platforms",
          },
          {
            href: "https://web.archive.org/web/20220517151240/https://docs.python.org/3.7/library/test.html?highlight=android#test.support.is_android",
            title: "test – Regression tests package for Python – Python 3.7.13 documentation",
          },
          {
            href: "https://web.archive.org/web/20220517150826/https://docs.python.org/3/library/platform.html?highlight=android",
            title: "platform – Access to underlying platform's identifying data – Python 3.10.4 documentation",
          },
        ],
        filename_extensions: [
          {
            href: "https://web.archive.org/web/20181226141117/https://www.python.org/dev/peps/pep-0441/%20",
            title: "PEP 0441 – Improving Python ZIP Application Support",
          },
        ],
        dialects: [
          {
            href: "https://web.archive.org/web/20200615140534/https://docs.bazel.build/versions/master/skylark/language.html",
            title: "Starlark Language",
          },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20121024164224/http://docs.python.org/faq/general.html#why-was-python-created-in-the-first-place",
            title: "Why was Python created in the first place?",
          },
          {
            href: "https://web.archive.org/web/20191022155758/http://archive.adaic.com/standards/83lrm/html/lrm-11-03.html#11.3",
            title: "Ada 83 Reference Manual (raise statement)",
          },
          {
            href: "https://web.archive.org/web/20070501105422/http://www.amk.ca/python/writing/gvr-interview",
            title: "Interview with Guido van Rossum (July 1998)",
          },
          { href: "https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.38.2023", title: "10.1.1.38.2023" },
          {
            href: "https://web.archive.org/web/20121023030209/http://docs.python.org/tutorial/classes.html",
            title: "Classes",
          },
          {
            href: "https://web.archive.org/web/20191123043655/http://effbot.org/zone/call-by-object.htm",
            title: "Call By Object",
          },
          {
            href: "https://web.archive.org/web/20200820231854/https://www.python.org/download/releases/2.3/mro/",
            title: "The Python 2.3 Method Resolution Order",
          },
          {
            href: "https://web.archive.org/web/20121024163217/http://docs.python.org/howto/functional.html",
            title: "Functional Programming HOWTO",
          },
          {
            href: "https://web.archive.org/web/20200605012926/https://www.python.org/dev/peps/pep-0255/",
            title: "PEP 255 – Simple Generators",
          },
          {
            href: "https://web.archive.org/web/20160604080843/https://docs.python.org/3.2/tutorial/controlflow.html",
            title: "More Control Flow Tools",
          },
          {
            href: "https://web.archive.org/web/20180718132241/https://docs.python.org/3/library/re.html",
            title: "re – Regular expression operations – Python 3.10.6 documentation",
          },
        ],
        influenced: [
          { href: "https://web.archive.org/web/20200612100004/http://coffeescript.org/", title: "CoffeeScript" },
          {
            href: "https://web.archive.org/web/20200601133216/https://wiki.gnome.org/action/show/Projects/Genie",
            title: "The Genie Programming Language Tutorial",
          },
          {
            href: "https://web.archive.org/web/20181226141121/http://2ality.com/2013/02/javascript-influences.html%0A",
            title: "Perl and Python influences in JavaScript",
          },
          {
            href: "https://web.archive.org/web/20181226141123/http://speakingjs.com/es5/ch03.html%0A",
            title: "Chapter 3: The Nature of JavaScript; Influences",
          },
          {
            href: "https://web.archive.org/web/20200502144010/https://julialang.org/blog/2012/02/why-we-created-julia/",
            title: "Why We Created Julia",
          },
          {
            href: "https://web.archive.org/web/20230505064554/https://www.infoworld.com/article/3695588/mojo-language-marries-python-and-mlir-for-ai-development.html",
            title: "Mojo language marries Python and MLIR for AI development",
          },
          {
            href: "https://web.archive.org/web/20181225175312/http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
            title: "Ring and other languages",
          },
          {
            href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
            title: "Practical JRuby on Rails Web 2.0 Projects: bringing Ruby on Rails to the Java platform",
          },
          {
            href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
            title: "Chris Lattner's Homepage",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1991-02-20", kind: "first" },
        { version: "3.12.4", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".py", ".pyw", ".pyz", ".pyi", ".pyc", ".pyd"],
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
        "pl+scheme",
        "pl+smalltalk",
        "pl+sml",
      ],
      licenses: ["lic+python-foundation"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflective",
        "para+structured",
      ],
      people: [["person+guido-van-rossum", "designer"]],
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
    "Stackless Python",
    {
      name: "Stackless Python",
      websites: [
        { kind: "wikipedia", title: "Stackless Python", href: "https://en.wikipedia.org/wiki/Stackless_Python" },
        { kind: "homepage", title: "www.stackless.com", href: "http://www.stackless.com/" },
      ],
      releases: [
        { version: "unknown", date: "1998-01-01", kind: "first" },
        { version: "3.8.1", date: "2020-01-22", kind: "stable" },
        { version: "unknown", date: "2021-01-01", kind: "preview" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/stackless-dev/stackless/releases/tag/v3.8.1-slp", title: "Release v3.8.1-slp" },
        ],
      },
    },
    { influences: ["pl+limbo"], licenses: ["lic+python-foundation"], people: [["person+anselm-kruis", "developer"]] },
  );
}
