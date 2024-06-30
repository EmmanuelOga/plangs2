import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cpp",
    "C++",
    {
      name: "C++",
      websites: [{ kind: "wikipedia", title: "C++", href: "https://en.wikipedia.org/wiki/C%2B%2B" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" }],
      releases: [
        { version: "unknown", date: "1488-01-01", kind: "stable" },
        { version: "unknown", date: "2023-01-01", kind: "preview" },
      ],
      extensions: [".c++", ".h++"],
    },
    {
      influences: [
        "pl+ada",
        "pl+algol",
        "pl+c",
        "pl+bcpl",
        "pl+clu",
        "pl+f-sharp",
        "pl+ml",
        "pl+mesa",
        "pl+modula",
        "pl+simula",
        "pl+smalltalk",
      ],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+objects", "para+generic", "para+modular"],
      people: ["person+bjarne-stroustrup"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+nominative", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+cpp11",
    "C++11",
    {
      name: "C++11",
      websites: [{ kind: "wikipedia", title: "C++11", href: "https://en.wikipedia.org/wiki/C%2B%2B11" }],
    },
    { influences: ["pl+d", "pl+haskell"] },
  );

  lb.define(
    "pl+cpp14",
    "C++14",
    {
      name: "C++14",
      websites: [{ kind: "wikipedia", title: "C++14", href: "https://en.wikipedia.org/wiki/C%2B%2B14" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cpp17",
    "C++17",
    {
      name: "C++17",
      websites: [{ kind: "wikipedia", title: "C++17", href: "https://en.wikipedia.org/wiki/C%2B%2B17" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cpp20",
    "C++20",
    {
      name: "C++20",
      websites: [{ kind: "wikipedia", title: "C++20", href: "https://en.wikipedia.org/wiki/C%2B%2B20" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cppbuilder",
    "C++Builder",
    {
      name: "C++Builder",
      websites: [{ kind: "wikipedia", title: "C++Builder", href: "https://en.wikipedia.org/wiki/C%2B%2BBuilder" }],
      releases: [{ version: "12.1", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+delphi", "pl+cpp"],
      licenses: ["lic+trialware"],
      paradigms: ["para+objects", "para+functional", "para+strongly"],
      platforms: ["platf+x64", "platf+win"],
    },
  );

  lb.define(
    "pl+ibm-xl-cpp",
    "XL C/C++ Compilers and Open XL C/C++ Compilers",
    {
      name: "XL C/C++ Compilers and Open XL C/C++ Compilers",
      websites: [
        {
          kind: "wikipedia",
          title: "XL C/C++ Compilers and Open XL C/C++ Compilers",
          href: "https://en.wikipedia.org/wiki/IBM_XL_C%2B%2B",
        },
        {
          kind: "homepage",
          title: "www.ibm.com/products/c-and-c-plus-plus-compiler-family",
          href: "https://www.ibm.com/products/c-and-c-plus-plus-compiler-family",
        },
      ],
      releases: [{ version: "17.1.1", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+intel-cpp-compiler",
    "Intel oneAPI DPC++/C++ CompilerIntel C++ Compiler Classic",
    {
      name: "Intel oneAPI DPC++/C++ CompilerIntel C++ Compiler Classic",
      websites: [
        {
          kind: "wikipedia",
          title: "Intel oneAPI DPC++/C++ CompilerIntel C++ Compiler Classic",
          href: "https://en.wikipedia.org/wiki/Intel_C%2B%2B_Compiler",
        },
        {
          kind: "homepage",
          title: "software.intel.com/content/www/us/en/develop/tools/oneapi/components/dpc-compiler.html",
          href: "https://software.intel.com/content/www/us/en/develop/tools/oneapi/components/dpc-compiler.html",
        },
      ],
      releases: [{ version: "2021.10.0", date: "2021-01-01", kind: "stable" }],
    },
    { licenses: ["lic+freeware", "lic+proprietary"] },
  );

  lb.define(
    "pl+ms-visual-cpp",
    "Visual C++",
    {
      name: "Visual C++",
      websites: [
        { kind: "wikipedia", title: "Visual C++", href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B" },
        { kind: "homepage", title: "docs.microsoft.com/en-us/cpp/", href: "https://docs.microsoft.com/en-us/cpp/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg" },
      ],
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "14.40.33810", date: "3381-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+trialware", "lic+freeware"], platforms: ["platf+ia-32", "platf+x86-64", "platf+arm"] },
  );

  lb.define(
    "pl+objective-cpp",
    "Objective-C",
    {
      name: "Objective-C",
      websites: [
        { kind: "wikipedia", title: "Objective-C++", href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B" },
        {
          kind: "homepage",
          title: "developer.apple.com",
          href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
        },
      ],
      releases: [{ version: "2.0", kind: "stable" }],
    },
    {
      implementations: ["pl+clang", "pl+gcc"],
      influences: ["pl+cpp", "pl+c", "pl+smalltalk"],
      people: ["person+brad-cox"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define(
    "pl+watcom-c-slashcpp",
    "Open Watcom C/C++",
    {
      name: "Open Watcom C/C++",
      websites: [
        { kind: "wikipedia", title: "Open Watcom C/C++", href: "https://en.wikipedia.org/wiki/Watcom_C/C%2B%2B" },
        { kind: "homepage", title: "openwatcom.org", href: "http://openwatcom.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Watcom_logo.png" }],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "1.9", date: "2010-06-02", kind: "stable" },
        { version: "2.0", date: "2022-12-01", kind: "preview" },
      ],
    },
    { licenses: ["lic+sybase-open-watcom-public"], platforms: ["platf+x86", "platf+ia-32", "platf+x86-64"] },
  );
}
