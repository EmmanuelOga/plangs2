import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+64-bit-computing", {
    name: "64-bit",
    websites: [{ kind: "wikipedia", title: "64-bit", href: "https://en.wikipedia.org/wiki/64-bit_computing" }],
  });

  lb.define("platf+6502", {
    name: "MOS Technology 6502",
    websites: [
      { kind: "wikipedia", title: "MOS Technology 6502", href: "https://en.wikipedia.org/wiki/MOS_Technology_6502" },
    ],
  });

  lb.define("platf+74181", {
    name: "74181",
    websites: [{ kind: "wikipedia", title: "74181", href: "https://en.wikipedia.org/wiki/74181" }],
  });

  lb.define("platf+android", {
    name: "Android",
    websites: [
      { kind: "wikipedia", title: "Android", href: "https://en.wikipedia.org/wiki/Android_(operating_system)" },
    ],
  });

  lb.define("platf+arcaos", {
    name: "ArcaOS",
    websites: [{ kind: "wikipedia", title: "ArcaOS", href: "https://en.wikipedia.org/wiki/ArcaOS" }],
  });

  lb.define("platf+arduino", {
    name: "Arduino",
    websites: [{ kind: "wikipedia", title: "Arduino", href: "https://en.wikipedia.org/wiki/Arduino" }],
  });

  lb.define("platf+aws", {
    name: "Amazon Web Services",
    websites: [
      { kind: "wikipedia", title: "Amazon Web Services", href: "https://en.wikipedia.org/wiki/Amazon_Web_Services" },
    ],
  });

  lb.define("platf+axiom", {
    name: "Axiom computer algebra system",
    websites: [
      {
        kind: "wikipedia",
        title: "Axiom computer algebra system",
        href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)",
      },
    ],
  });

  lb.define("platf+chromeos", {
    name: "ChromeOS",
    websites: [{ kind: "wikipedia", title: "ChromeOS", href: "https://en.wikipedia.org/wiki/ChromeOS" }],
  });

  lb.define("platf+cuda", {
    name: "CUDA",
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  lb.define("platf+cygwin", {
    name: "Cygwin",
    websites: [{ kind: "wikipedia", title: "Cygwin", href: "https://en.wikipedia.org/wiki/Cygwin" }],
  });

  lb.define("platf+emacs", {
    name: "Emacs",
    websites: [{ kind: "wikipedia", title: "Emacs", href: "https://en.wikipedia.org/wiki/Emacs" }],
  });

  lb.define("platf+erlang", {
    name: "Erlang",
    websites: [
      { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
    ],
  });

  lb.define("platf+fpga", {
    name: "FPGA",
    websites: [
      { kind: "wikipedia", title: "FPGA", href: "https://en.wikipedia.org/wiki/Field_Programmable_Gate_Array" },
    ],
  });

  lb.define("platf+fuchsia", {
    name: "Google Fuchsia",
    websites: [{ kind: "wikipedia", title: "Google Fuchsia", href: "https://en.wikipedia.org/wiki/Google_Fuchsia" }],
  });

  lb.define("platf+glib", {
    name: "GLib",
    websites: [{ kind: "wikipedia", title: "GLib", href: "https://en.wikipedia.org/wiki/GLib" }],
  });

  lb.define("platf+gnu", {
    name: "GNU",
    websites: [{ kind: "wikipedia", title: "GNU", href: "https://en.wikipedia.org/wiki/GNU" }],
  });

  lb.define("platf+haiku", {
    name: "Haiku",
    websites: [{ kind: "wikipedia", title: "Haiku", href: "https://en.wikipedia.org/wiki/Haiku_(operating_system)" }],
  });

  lb.define("platf+linux", {
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  lb.define("platf+llvm", {
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  lb.define("platf+mach", {
    name: "Mach",
    websites: [{ kind: "wikipedia", title: "Mach", href: "https://en.wikipedia.org/wiki/Mach_(kernel)" }],
  });

  lb.define("platf+mingw", {
    name: "MinGW",
    websites: [{ kind: "wikipedia", title: "MinGW", href: "https://en.wikipedia.org/wiki/MinGW" }],
  });

  lb.define("platf+mips", {
    name: "MIPS64",
    websites: [{ kind: "wikipedia", title: "MIPS", href: "https://en.wikipedia.org/wiki/MIPS_architecture" }],
  });

  lb.define("platf+oneapi", {
    name: "oneAPI",
    websites: [
      { kind: "wikipedia", title: "oneAPI", href: "https://en.wikipedia.org/wiki/OneAPI_(compute_acceleration)" },
    ],
  });

  lb.define("platf+openvms", {
    name: "OpenVMS",
    websites: [{ kind: "wikipedia", title: "VMS", href: "https://en.wikipedia.org/wiki/OpenVMS" }],
  });

  lb.define("platf+parallel-computing", {
    name: "Parallel",
    websites: [{ kind: "wikipedia", title: "Parallel", href: "https://en.wikipedia.org/wiki/Parallel_computing" }],
  });

  lb.define("platf+pic", {
    name: "PIC",
    websites: [{ kind: "wikipedia", title: "PIC", href: "https://en.wikipedia.org/wiki/PIC_microcontrollers" }],
  });

  lb.define("platf+pip", {
    name: "pip (package manager)",
    websites: [
      {
        kind: "wikipedia",
        title: "pip (package manager)",
        href: "https://en.wikipedia.org/wiki/Pip_(package_manager)",
      },
    ],
  });

  lb.define("platf+pocket-pc", {
    name: "Pocket PC",
    websites: [{ kind: "wikipedia", title: "Pocket PC", href: "https://en.wikipedia.org/wiki/Pocket_PC" }],
  });

  lb.define("platf+posix", {
    name: "POSIX-compliant",
    websites: [{ kind: "wikipedia", title: "POSIX", href: "https://en.wikipedia.org/wiki/POSIX" }],
  });

  lb.define("platf+power-isa", {
    name: "POWERPC64",
    websites: [{ kind: "wikipedia", title: "Power", href: "https://en.wikipedia.org/wiki/Power_ISA" }],
  });

  lb.define("platf+python", {
    name: "Python",
    websites: [
      { kind: "wikipedia", title: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
    ],
  });

  lb.define("platf+qnx", {
    name: "QNX",
    websites: [{ kind: "wikipedia", title: "QNX", href: "https://en.wikipedia.org/wiki/QNX" }],
  });

  lb.define("platf+red-hat", {
    name: "Red Hat",
    websites: [{ kind: "wikipedia", title: "Red Hat", href: "https://en.wikipedia.org/wiki/Red_Hat" }],
  });

  lb.define("platf+rocm", {
    name: "ROCm",
    websites: [{ kind: "wikipedia", title: "ROCm", href: "https://en.wikipedia.org/wiki/ROCm" }],
  });

  lb.define("platf+stm32", {
    name: "STM32",
    websites: [{ kind: "wikipedia", title: "STM32", href: "https://en.wikipedia.org/wiki/STM32" }],
  });

  lb.define("platf+visionos", {
    name: "visionOS",
    websites: [{ kind: "wikipedia", title: "visionOS", href: "https://en.wikipedia.org/wiki/VisionOS" }],
  });

  lb.define("platf+vm", {
    name: "VM/CMS",
    websites: [{ kind: "wikipedia", title: "VM/CMS", href: "https://en.wikipedia.org/wiki/VM_(operating_system)" }],
  });

  lb.define("platf+vse", {
    name: "z/VSE",
    websites: [{ kind: "wikipedia", title: "DOS/VSE", href: "https://en.wikipedia.org/wiki/VSE_(operating_system)" }],
  });

  lb.define("platf+wasm", {
    name: "WebAssembly",
    websites: [{ kind: "wikipedia", title: "WebAssembly", href: "https://en.wikipedia.org/wiki/WebAssembly" }],
  });

  lb.define("platf+z-slashos", {
    name: "z/OS",
    websites: [{ kind: "wikipedia", title: "z/OS", href: "https://en.wikipedia.org/wiki/Z/OS" }],
  });

  lb.define("platf+z-slashvm", {
    name: "z/VM",
    websites: [{ kind: "wikipedia", title: "z/VM", href: "https://en.wikipedia.org/wiki/Z/VM" }],
  });

  lb.define("platf+zephyr", {
    name: "Zephyr",
    websites: [{ kind: "wikipedia", title: "Zephyr", href: "https://en.wikipedia.org/wiki/Zephyr_(operating_system)" }],
  });
}
