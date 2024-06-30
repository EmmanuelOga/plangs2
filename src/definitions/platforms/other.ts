import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+64-bit-computing").merge({
    name: "64-bit",
    websites: [{ kind: "wikipedia", title: "64-bit", href: "https://en.wikipedia.org/wiki/64-bit_computing" }],
  });

  /**/

  g.buildPlatform("platf+6502").merge({
    name: "MOS Technology 6502",
    websites: [
      { kind: "wikipedia", title: "MOS Technology 6502", href: "https://en.wikipedia.org/wiki/MOS_Technology_6502" },
    ],
  });

  /**/

  g.buildPlatform("platf+74181").merge({
    name: "74181",
    websites: [{ kind: "wikipedia", title: "74181", href: "https://en.wikipedia.org/wiki/74181" }],
  });

  /**/

  g.buildPlatform("platf+amiga").merge({
    name: "Amiga",
    websites: [
      { kind: "wikipedia", title: "AmigaOS", href: "https://en.wikipedia.org/wiki/AmigaOS" },
      { kind: "wikipedia", title: "Amiga", href: "https://en.wikipedia.org/wiki/Amiga" },
    ],
  });

  /**/

  g.buildPlatform("platf+android").merge({
    name: "Android",
    websites: [
      { kind: "wikipedia", title: "Android", href: "https://en.wikipedia.org/wiki/Android_(operating_system)" },
    ],
  });

  /**/

  g.buildPlatform("platf+arcaos").merge({
    name: "ArcaOS",
    websites: [{ kind: "wikipedia", title: "ArcaOS", href: "https://en.wikipedia.org/wiki/ArcaOS" }],
  });

  /**/

  g.buildPlatform("platf+arduino").merge({
    name: "Arduino",
    websites: [{ kind: "wikipedia", title: "Arduino", href: "https://en.wikipedia.org/wiki/Arduino" }],
  });

  /**/

  g.buildPlatform("platf+aws").merge({
    name: "Amazon Web Services",
    websites: [
      { kind: "wikipedia", title: "Amazon Web Services", href: "https://en.wikipedia.org/wiki/Amazon_Web_Services" },
    ],
  });

  /**/

  g.buildPlatform("platf+axiom").merge({
    name: "Axiom computer algebra system",
    websites: [
      {
        kind: "wikipedia",
        title: "Axiom computer algebra system",
        href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)",
      },
    ],
  });

  /**/

  g.buildPlatform("platf+chromeos").merge({
    name: "ChromeOS",
    websites: [{ kind: "wikipedia", title: "ChromeOS", href: "https://en.wikipedia.org/wiki/ChromeOS" }],
  });

  /**/

  g.buildPlatform("platf+cross-platform").merge({
    name: "Cross-platform",
    websites: [
      { kind: "wikipedia", title: "Cross-platform", href: "https://en.wikipedia.org/wiki/Cross-platform" },
      { kind: "wikipedia", title: "Cross-platform", href: "https://en.wikipedia.org/wiki/Cross-platform_software" },
      { kind: "wikipedia", title: "Cross platform", href: "https://en.wikipedia.org/wiki/Cross_platform" },
      { kind: "wikipedia", title: "Platform independent", href: "https://en.wikipedia.org/wiki/Platform_independent" },
    ],
  });

  /**/

  g.buildPlatform("platf+cuda").merge({
    name: "CUDA",
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  /**/

  g.buildPlatform("platf+cygwin").merge({
    name: "Cygwin",
    websites: [{ kind: "wikipedia", title: "Cygwin", href: "https://en.wikipedia.org/wiki/Cygwin" }],
  });

  /**/

  g.buildPlatform("platf+emacs").merge({
    name: "Emacs",
    websites: [{ kind: "wikipedia", title: "Emacs", href: "https://en.wikipedia.org/wiki/Emacs" }],
  });

  /**/

  g.buildPlatform("platf+erlang").merge({
    name: "Erlang",
    websites: [
      { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
    ],
  });

  /**/

  g.buildPlatform("platf+fpga").merge({
    name: "FPGA",
    websites: [
      { kind: "wikipedia", title: "FPGA", href: "https://en.wikipedia.org/wiki/Field_Programmable_Gate_Array" },
    ],
  });

  /**/

  g.buildPlatform("platf+fuchsia").merge({
    name: "Google Fuchsia",
    websites: [{ kind: "wikipedia", title: "Google Fuchsia", href: "https://en.wikipedia.org/wiki/Google_Fuchsia" }],
  });

  /**/

  g.buildPlatform("platf+glib").merge({
    name: "GLib",
    websites: [{ kind: "wikipedia", title: "GLib", href: "https://en.wikipedia.org/wiki/GLib" }],
  });

  /**/

  g.buildPlatform("platf+gnu").merge({
    name: "GNU",
    websites: [{ kind: "wikipedia", title: "GNU", href: "https://en.wikipedia.org/wiki/GNU" }],
  });

  /**/

  g.buildPlatform("platf+haiku").merge({
    name: "Haiku",
    websites: [{ kind: "wikipedia", title: "Haiku", href: "https://en.wikipedia.org/wiki/Haiku_(operating_system)" }],
  });

  /**/

  g.buildPlatform("platf+jvm").merge({
    name: "Java Virtual Machine",
    websites: [
      { kind: "wikipedia", title: "JVM", href: "https://en.wikipedia.org/wiki/JVM" },
      { kind: "wikipedia", title: "Java SE", href: "https://en.wikipedia.org/wiki/Java_Platform,_Standard_Edition" },
      { kind: "wikipedia", title: "JVM", href: "https://en.wikipedia.org/wiki/Java_virtual_machine" },
      { kind: "wikipedia", title: "Java SE", href: "https://en.wikipedia.org/wiki/Java_SE" },
      { kind: "wikipedia", title: "bytecode", href: "https://en.wikipedia.org/wiki/Java_bytecode" },
      { kind: "wikipedia", title: "Java", href: "https://en.wikipedia.org/wiki/Java_platform" },
      {
        kind: "wikipedia",
        title: "Java Runtime Environment",
        href: "https://en.wikipedia.org/wiki/Java_Runtime_Environment",
      },
      { kind: "wikipedia", title: "Java", href: "https://en.wikipedia.org/wiki/Java_(software_platform)" },
      { kind: "wikipedia", title: "Java", href: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
    ],
  });

  /**/

  g.buildPlatform("platf+linux").merge({
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  /**/

  g.buildPlatform("platf+llvm").merge({
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  /**/

  g.buildPlatform("platf+mach").merge({
    name: "Mach",
    websites: [{ kind: "wikipedia", title: "Mach", href: "https://en.wikipedia.org/wiki/Mach_(kernel)" }],
  });

  /**/

  g.buildPlatform("platf+mingw").merge({
    name: "MinGW",
    websites: [{ kind: "wikipedia", title: "MinGW", href: "https://en.wikipedia.org/wiki/MinGW" }],
  });

  /**/

  g.buildPlatform("platf+mips").merge({
    name: "MIPS64",
    websites: [{ kind: "wikipedia", title: "MIPS", href: "https://en.wikipedia.org/wiki/MIPS_architecture" }],
  });

  /**/

  g.buildPlatform("platf+oneapi").merge({
    name: "oneAPI",
    websites: [
      { kind: "wikipedia", title: "oneAPI", href: "https://en.wikipedia.org/wiki/OneAPI_(compute_acceleration)" },
    ],
  });

  /**/

  g.buildPlatform("platf+openvms").merge({
    name: "OpenVMS",
    websites: [{ kind: "wikipedia", title: "VMS", href: "https://en.wikipedia.org/wiki/OpenVMS" }],
  });

  /**/

  g.buildPlatform("platf+parallel-computing").merge({
    name: "Parallel",
    websites: [{ kind: "wikipedia", title: "Parallel", href: "https://en.wikipedia.org/wiki/Parallel_computing" }],
  });

  /**/

  g.buildPlatform("platf+pic").merge({
    name: "PIC",
    websites: [{ kind: "wikipedia", title: "PIC", href: "https://en.wikipedia.org/wiki/PIC_microcontrollers" }],
  });

  /**/

  g.buildPlatform("platf+pip").merge({
    name: "pip (package manager)",
    websites: [
      {
        kind: "wikipedia",
        title: "pip (package manager)",
        href: "https://en.wikipedia.org/wiki/Pip_(package_manager)",
      },
    ],
  });

  /**/

  g.buildPlatform("platf+plan9").merge({
    name: "Plan 9 from User Space",
    websites: [
      {
        kind: "wikipedia",
        title: "Plan 9 from Bell Labs",
        href: "https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs",
      },
      {
        kind: "wikipedia",
        title: "Plan 9 from User Space",
        href: "https://en.wikipedia.org/wiki/Plan_9_from_User_Space",
      },
    ],
  });

  /**/

  g.buildPlatform("platf+playstation").merge({
    name: "PlayStation 3",
    websites: [
      { kind: "wikipedia", title: "PlayStation 2", href: "https://en.wikipedia.org/wiki/PlayStation_2" },
      { kind: "wikipedia", title: "PlayStation Portable", href: "https://en.wikipedia.org/wiki/PlayStation_Portable" },
      { kind: "wikipedia", title: "PlayStation 3", href: "https://en.wikipedia.org/wiki/PlayStation_3" },
    ],
  });

  /**/

  g.buildPlatform("platf+pocket-pc").merge({
    name: "Pocket PC",
    websites: [{ kind: "wikipedia", title: "Pocket PC", href: "https://en.wikipedia.org/wiki/Pocket_PC" }],
  });

  /**/

  g.buildPlatform("platf+posix").merge({
    name: "POSIX-compliant",
    websites: [{ kind: "wikipedia", title: "POSIX", href: "https://en.wikipedia.org/wiki/POSIX" }],
  });

  /**/

  g.buildPlatform("platf+power-isa").merge({
    name: "POWERPC64",
    websites: [{ kind: "wikipedia", title: "Power", href: "https://en.wikipedia.org/wiki/Power_ISA" }],
  });

  /**/

  g.buildPlatform("platf+python").merge({
    name: "Python",
    websites: [
      { kind: "wikipedia", title: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
    ],
  });

  /**/

  g.buildPlatform("platf+qnx").merge({
    name: "QNX",
    websites: [{ kind: "wikipedia", title: "QNX", href: "https://en.wikipedia.org/wiki/QNX" }],
  });

  /**/

  g.buildPlatform("platf+red-hat").merge({
    name: "Red Hat",
    websites: [{ kind: "wikipedia", title: "Red Hat", href: "https://en.wikipedia.org/wiki/Red_Hat" }],
  });

  /**/

  g.buildPlatform("platf+rocm").merge({
    name: "ROCm",
    websites: [{ kind: "wikipedia", title: "ROCm", href: "https://en.wikipedia.org/wiki/ROCm" }],
  });

  /**/

  g.buildPlatform("platf+stm32").merge({
    name: "STM32",
    websites: [{ kind: "wikipedia", title: "STM32", href: "https://en.wikipedia.org/wiki/STM32" }],
  });

  /**/

  g.buildPlatform("platf+unix").merge({
    name: "Unix-like",
    websites: [
      { kind: "wikipedia", title: "Unix-like", href: "https://en.wikipedia.org/wiki/Unix-like" },
      { kind: "wikipedia", title: "Unix", href: "https://en.wikipedia.org/wiki/Unix" },
    ],
  });

  /**/

  g.buildPlatform("platf+visionos").merge({
    name: "visionOS",
    websites: [{ kind: "wikipedia", title: "visionOS", href: "https://en.wikipedia.org/wiki/VisionOS" }],
  });

  /**/

  g.buildPlatform("platf+vm").merge({
    name: "VM/CMS",
    websites: [{ kind: "wikipedia", title: "VM/CMS", href: "https://en.wikipedia.org/wiki/VM_(operating_system)" }],
  });

  /**/

  g.buildPlatform("platf+vse").merge({
    name: "z/VSE",
    websites: [{ kind: "wikipedia", title: "DOS/VSE", href: "https://en.wikipedia.org/wiki/VSE_(operating_system)" }],
  });

  /**/

  g.buildPlatform("platf+wasm").merge({
    name: "WebAssembly",
    websites: [{ kind: "wikipedia", title: "WebAssembly", href: "https://en.wikipedia.org/wiki/WebAssembly" }],
  });

  /**/

  g.buildPlatform("platf+web").merge({
    name: "browser-based",
    websites: [
      { kind: "wikipedia", title: "Web browser", href: "https://en.wikipedia.org/wiki/Web_browser" },
      { kind: "wikipedia", title: "Web platform", href: "https://en.wikipedia.org/wiki/Web_platform" },
      { kind: "wikipedia", title: "HTML5", href: "https://en.wikipedia.org/wiki/HTML5" },
      { kind: "wikipedia", title: "browser-based", href: "https://en.wikipedia.org/wiki/Web_application" },
    ],
  });

  /**/

  g.buildPlatform("platf+win").merge({
    name: "Windows",
    websites: [
      { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Microsoft_Windows" },
      { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Windows" },
      { kind: "wikipedia", title: "Windows XP SP3", href: "https://en.wikipedia.org/wiki/Windows_XP_SP3" },
      { kind: "wikipedia", title: "Windows Server 2003", href: "https://en.wikipedia.org/wiki/Windows_Server_2003" },
      { kind: "wikipedia", title: "Windows XP", href: "https://en.wikipedia.org/wiki/Windows_XP" },
      { kind: "wikipedia", title: "Windows Vista", href: "https://en.wikipedia.org/wiki/Windows_Vista" },
      { kind: "wikipedia", title: "Windows Server 2008", href: "https://en.wikipedia.org/wiki/Windows_Server_2008" },
      { kind: "wikipedia", title: "Windows 7", href: "https://en.wikipedia.org/wiki/Windows_7" },
      { kind: "wikipedia", title: "Windows 10", href: "https://en.wikipedia.org/wiki/Windows_10" },
      { kind: "wikipedia", title: "WSL", href: "https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux" },
      { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Windows_(operating_system)" },
      { kind: "wikipedia", title: "Windows 8", href: "https://en.wikipedia.org/wiki/Windows_8" },
      { kind: "wikipedia", title: "Windows 8.1", href: "https://en.wikipedia.org/wiki/Windows_8.1" },
      {
        kind: "wikipedia",
        title: "Windows Server 2008 R2",
        href: "https://en.wikipedia.org/wiki/Windows_Server_2008_R2",
      },
      { kind: "wikipedia", title: "Windows 95", href: "https://en.wikipedia.org/wiki/Windows_95" },
      { kind: "wikipedia", title: "Windows 98", href: "https://en.wikipedia.org/wiki/Windows_98" },
      { kind: "wikipedia", title: "Windows Me", href: "https://en.wikipedia.org/wiki/Windows_Me" },
    ],
  });

  /**/

  g.buildPlatform("platf+z-slashos").merge({
    name: "z/OS",
    websites: [{ kind: "wikipedia", title: "z/OS", href: "https://en.wikipedia.org/wiki/Z/OS" }],
  });

  /**/

  g.buildPlatform("platf+z-slashvm").merge({
    name: "z/VM",
    websites: [{ kind: "wikipedia", title: "z/VM", href: "https://en.wikipedia.org/wiki/Z/VM" }],
  });

  /**/

  g.buildPlatform("platf+zephyr").merge({
    name: "Zephyr",
    websites: [{ kind: "wikipedia", title: "Zephyr", href: "https://en.wikipedia.org/wiki/Zephyr_(operating_system)" }],
  });

  /**/
}
