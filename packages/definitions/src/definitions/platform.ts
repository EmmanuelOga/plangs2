import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+.net", {
    name: ".NET",
    description: "Free and open-source software framework developed by Microsoft for building cross-platform applications.",
    extHomeURL: "https://en.wikipedia.org/wiki/.NET",
    keywords: [".net", "C#", "CLI", "CLR", "Common Language Runtime", "dotnet"],
  });

  g.platform.set("plat+android", {
    name: "Android",
    description: "Mobile operating system developed by Google, widely used in smartphones and other devices.",
    extHomeURL: "https://en.wikipedia.org/wiki/Android_(operating_system)",
    keywords: ["android"],
  });

  g.platform.set("plat+apple", {
    name: "Apple",
    description:
      "Apple's family of operating systems includes macOS for desktops, iOS for mobile, tvOS for Apple TV, watchOS for Apple Watch, and visionOS for mixed reality.",
    extHomeURL: "https://en.wikipedia.org/wiki/Apple_silicon",
    keywords: ["apple silicon", "ios", "m1", "m2", "macos", "tvos", "visionos", "watchos"],
  });

  g.platform.set("plat+arduino", {
    name: "Arduino",
    description: "Open-source electronics platform based on easy-to-use hardware and software, popular for building embedded systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Arduino",
    keywords: ["arduino", "microcontroller"],
  });

  g.platform.set("plat+arm", {
    name: "ARM",
    description: "ARM architecture is widely used in mobile devices and embedded systems, supporting 32-bit and 64-bit instruction sets.",
    extHomeURL: "https://en.wikipedia.org/wiki/ARM_architecture",
    keywords: ["aarch64", "arm32", "arm64", "armel", "armhf", "armv7"],
  });

  g.platform.set("plat+beam", {
    name: "Erlang BEAM/OTP",
    description: "Open Telecom Platform (OTP) is a collection of useful middleware, libraries, and tools written in the Erlang programming language.",
    extHomeURL: "https://en.wikipedia.org/wiki/Open_Telecom_Platform",
    keywords: ["beam", "erlang", "otp"],
  });

  g.platform.set("plat+bsd", {
    name: "BSD",
    description: "A family of Unix-like operating systems derived from the Berkeley Software Distribution, including FreeBSD, OpenBSD, and NetBSD.",
    extHomeURL: "https://en.wikipedia.org/wiki/BSD",
    keywords: ["bsd", "dragonflybsd", "freebsd", "netbsd", "openbsd"],
  });

  g.platform.set("plat+cross", {
    name: "Cross-Platform",
    description: "Cross-platform software is designed to run on multiple operating systems or hardware architectures.",
    extHomeURL: "https://en.wikipedia.org/wiki/Cross-platform",
    keywords: ["cross-platform", "multi-platform"],
  });

  g.platform.set("plat+dos", {
    name: "DOS",
    description: "Disk Operating System (DOS) refers to a family of operating systems primarily for IBM PCs, known for its command-line interface.",
    extHomeURL: "https://en.wikipedia.org/wiki/MS-DOS",
    keywords: ["dos", "ms-dos", "pc-dos"],
  });

  g.platform.set("plat+embedded", {
    name: "Embedded",
    description: "A microprocessor-based hardware system with software designed to perform a specific function, often real-time.",
    extHomeURL: "https://en.wikipedia.org/wiki/Embedded_system",
    keywords: ["embedded", "embedded systems", "microcontroller"],
  });

  g.platform.set("plat+esp32", {
    name: "ESP32",
    description: "Low-cost, low-power system-on-chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.",
    extHomeURL: "https://en.wikipedia.org/wiki/ESP32",
    keywords: ["bluetooth", "esp32", "esp8266", "microcontroller", "wifi"],
  });

  g.platform.set("plat+java", {
    name: "Java",
    description: "High-level, class-based, object-oriented programming language and computing platform.",
    extHomeURL: "https://en.wikipedia.org/wiki/Java_(software_platform)",
    keywords: ["java", "java development kit", "java-se", "jdk", "jre"],
  });

  g.platform.set("plat+linux", {
    name: "Linux",
    description:
      "A family of open-source Unix-like operating systems, with various distributions such as Ubuntu, Debian, CentOS, and Red Hat Enterprise Linux.",
    extHomeURL: "https://en.wikipedia.org/wiki/Linux",
    keywords: ["centos", "debian", "gnu/linux", "linux", "openSUSE", "redhat", "ubuntu"],
  });

  g.platform.set("plat+nodejs", {
    name: "Node.js",
    description: "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
    extHomeURL: "https://en.wikipedia.org/wiki/Node.js",
    keywords: ["javascript", "js", "nodejs", "server-side javascript"],
  });

  g.platform.set("plat+raspberry", {
    name: "Raspberry Pi",
    description: "A low-cost, single-board computer designed to promote teaching of computer science in schools and developing countries.",
    extHomeURL: "https://en.wikipedia.org/wiki/Raspberry_Pi",
    keywords: ["pi", "raspberry pi", "single-board computer"],
  });

  g.platform.set("plat+riscv", {
    name: "RISC-V",
    description: "An open standard instruction set architecture (ISA) based on the reduced instruction set computer (RISC) principles.",
    extHomeURL: "https://en.wikipedia.org/wiki/RISC-V",
    keywords: ["open isa", "risc-v", "riscv"],
  });

  g.platform.set("plat+wasm", {
    name: "WASM",
    description:
      "WebAssembly is a binary instruction format for a stack-based virtual machine, enabling high-performance applications in web environments.",
    extHomeURL: "https://en.wikipedia.org/wiki/WebAssembly",
    keywords: ["wasm", "webassembly"],
  });

  g.platform.set("plat+web", {
    name: "WWW",
    description:
      "The World Wide Web (WWW) is an information space where documents and other web resources are identified by URLs, interlinked by hypertext links.",
    extHomeURL: "https://en.wikipedia.org/wiki/World_Wide_Web",
    keywords: ["web"],
  });

  g.platform.set("plat+windows", {
    name: "Windows",
    description: "A series of operating systems developed by Microsoft, with versions for both personal computers and servers.",
    extHomeURL: "https://en.wikipedia.org/wiki/Microsoft_Windows",
    keywords: ["win32", "win64", "windows", "windows 10", "windows 11"],
  });

  g.platform.set("plat+x86-64", {
    name: "x86-64",
    description: "x86-64 is the 64-bit architecture for x86 processors, developed by AMD and used in modern processors from both Intel and AMD.",
    extHomeURL: "https://en.wikipedia.org/wiki/x86-64",
    keywords: ["amd64", "x64", "x86-64"],
  });
}
