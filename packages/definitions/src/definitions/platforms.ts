import type { PlangsGraph } from "@plangs/plangs";
import { wikipedia } from "@plangs/plangs/util";

export function define(g: PlangsGraph) {
  g.nodes.plat.set("plat+cross", {
    name: "Cross-Platform",
    keywords: ["cross-platform", "multi-platform"],
    description: "Cross-platform software is designed to run on multiple operating systems or hardware architectures.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Cross-platform", "Cross-Platform")],
  });

  g.nodes.plat.set("plat+.net", {
    name: ".NET",
    keywords: ["dotnet", ".net", "C#", "CLR", "Common Language Runtime", "CLI"],
    description: ".NET is a free and open-source software framework developed by Microsoft for building cross-platform applications.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/.NET", ".NET")],
  });

  g.nodes.plat.set("plat+x86-64", {
    name: "x86-64",
    keywords: ["amd64", "x86-64", "x64"],
    description: "x86-64 is the 64-bit architecture for x86 processors, developed by AMD and used in modern processors from both Intel and AMD.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/x86-64", "x86-64")],
  });

  g.nodes.plat.set("plat+arm", {
    name: "ARM",
    keywords: ["arm32", "arm64", "aarch64", "armel", "armhf", "armv7"],
    description: "ARM architecture is widely used in mobile devices and embedded systems, supporting 32-bit and 64-bit instruction sets.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/ARM_architecture", "ARM Architecture")],
  });

  g.nodes.plat.set("plat+apple", {
    name: "Apple Platforms (macOS, iOS, etc.)",
    keywords: ["macos", "ios", "tvos", "watchos", "visionos", "m1", "m2", "apple silicon"],
    description:
      "Apple's family of operating systems includes macOS for desktops, iOS for mobile, tvOS for Apple TV, watchOS for Apple Watch, and visionOS for mixed reality.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Apple_silicon", "Apple Silicon")],
  });

  g.nodes.plat.set("plat+android", {
    name: "Android",
    keywords: ["android"],
    description: "Android is a mobile operating system developed by Google, widely used in smartphones and other devices.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Android_(operating_system)", "Android")],
  });

  g.nodes.plat.set("plat+linux", {
    name: "Linux",
    keywords: ["linux", "gnu/linux", "ubuntu", "debian", "centos", "redhat", "openSUSE"],
    description:
      "Linux is a family of open-source Unix-like operating systems, with various distributions such as Ubuntu, Debian, CentOS, and Red Hat Enterprise Linux.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Linux", "Linux")],
  });

  g.nodes.plat.set("plat+windows", {
    name: "Microsoft Windows",
    keywords: ["windows", "win32", "win64", "windows 10", "windows 11"],
    description: "Microsoft Windows is a series of operating systems developed by Microsoft, with versions for both personal computers and servers.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Microsoft_Windows", "Microsoft Windows")],
  });

  g.nodes.plat.set("plat+bsd", {
    name: "BSD",
    keywords: ["bsd", "freebsd", "openbsd", "netbsd", "dragonflybsd"],
    description:
      "BSD is a family of Unix-like operating systems derived from the Berkeley Software Distribution, including FreeBSD, OpenBSD, and NetBSD.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/BSD", "BSD")],
  });

  g.nodes.plat.set("plat+riscv", {
    name: "RISC-V",
    keywords: ["riscv", "risc-v", "open isa"],
    description: "RISC-V is an open standard instruction set architecture (ISA) based on the reduced instruction set computer (RISC) principles.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/RISC-V", "RISC-V")],
  });

  g.nodes.plat.set("plat+java", {
    name: "Java",
    keywords: ["java", "jdk", "java-se", "jre", "java development kit"],
    description: "Java is a high-level, class-based, object-oriented programming language and computing platform.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Java_(software_platform)", "Java")],
  });

  g.nodes.plat.set("plat+wasm", {
    name: "WebAssembly",
    keywords: ["wasm", "webassembly"],
    description:
      "WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine, enabling high-performance applications in web environments.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/WebAssembly", "WebAssembly")],
  });

  g.nodes.plat.set("plat+dos", {
    name: "DOS",
    keywords: ["dos", "ms-dos", "pc-dos"],
    description: "DOS (Disk Operating System) refers to a family of operating systems primarily for IBM PCs, known for its command-line interface.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/MS-DOS", "MS-DOS")],
  });

  g.nodes.plat.set("plat+arduino", {
    name: "Arduino",
    keywords: ["arduino", "microcontroller"],
    description: "Arduino is an open-source electronics platform based on easy-to-use hardware and software, popular for building embedded systems.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Arduino", "Arduino")],
  });

  g.nodes.plat.set("plat+embedded", {
    name: "Embedded Systems",
    keywords: ["embedded", "embedded systems", "microcontroller"],
    description:
      "An embedded system is a microprocessor-based hardware system with software designed to perform a specific function, often real-time.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Embedded_system", "Embedded Systems")],
  });

  g.nodes.plat.set("plat+erlang", {
    name: "Erlang",
    keywords: ["erlang", "otp"],
    description:
      "Erlang Open Telecom Platform (OTP) is a collection of useful middleware, libraries, and tools written in the Erlang programming language.",
    websites: [
      wikipedia("https://en.wikipedia.org/wiki/Erlang_(programming_language)", "Erlang"),
      wikipedia("https://en.wikipedia.org/wiki/Open_Telecom_Platform", "Open Telecom Platform"),
    ],
  });

  g.nodes.plat.set("plat+nodejs", {
    name: "Node.js",
    keywords: ["nodejs", "javascript", "js", "server-side javascript"],
    description: "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Node.js", "Node.js")],
  });

  g.nodes.plat.set("plat+raspberry", {
    name: "Raspberry Pi",
    keywords: ["raspberry pi", "pi", "single-board computer"],
    description:
      "Raspberry Pi is a low-cost, single-board computer designed to promote teaching of computer science in schools and developing countries.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Raspberry_Pi", "Raspberry Pi")],
  });

  g.nodes.plat.set("plat+esp32", {
    name: "ESP32",
    keywords: ["esp32", "esp8266", "microcontroller", "wifi", "bluetooth"],
    description: "ESP32 is a series of low-cost, low-power system-on-chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/ESP32", "ESP32")],
  });
}
