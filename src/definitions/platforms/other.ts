import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+64-bit-computing", "64-bit", {
    websites: [{ kind: "wikipedia", title: "64-bit", href: "https://en.wikipedia.org/wiki/64-bit_computing" }],
  });

  lb.define("platf+6502", "MOS Technology 6502", {
    websites: [
      { kind: "wikipedia", title: "MOS Technology 6502", href: "https://en.wikipedia.org/wiki/MOS_Technology_6502" },
    ],
  });

  lb.define("platf+74181", "74181", {
    websites: [{ kind: "wikipedia", title: "74181", href: "https://en.wikipedia.org/wiki/74181" }],
  });

  lb.define("platf+aarch64", "AArch64", {
    websites: [{ kind: "wikipedia", title: "Aarch64", href: "https://en.wikipedia.org/wiki/Aarch64" }],
  });

  lb.define("platf+amazon-firetv", "Amazon Fire TV", {
    websites: [{ kind: "wikipedia", title: "Amazon Fire TV", href: "https://en.wikipedia.org/wiki/Amazon_Fire_TV" }],
  });

  lb.define("platf+arcaos", "ArcaOS", {
    websites: [{ kind: "wikipedia", title: "ArcaOS", href: "https://en.wikipedia.org/wiki/ArcaOS" }],
  });

  lb.define("platf+arduino", "Arduino", {
    websites: [{ kind: "wikipedia", title: "Arduino", href: "https://en.wikipedia.org/wiki/Arduino" }],
  });

  lb.define("platf+aws", "Amazon Web Services", {
    websites: [
      { kind: "wikipedia", title: "Amazon Web Services", href: "https://en.wikipedia.org/wiki/Amazon_Web_Services" },
    ],
  });

  lb.define("platf+chromeos", "ChromeOS", {
    websites: [{ kind: "wikipedia", title: "ChromeOS", href: "https://en.wikipedia.org/wiki/ChromeOS" }],
  });

  lb.define("platf+cuda", "CUDA", {
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  lb.define("platf+cygwin", "Cygwin", {
    websites: [{ kind: "wikipedia", title: "Cygwin", href: "https://en.wikipedia.org/wiki/Cygwin" }],
  });

  lb.define("platf+emacs", "Emacs", {
    websites: [{ kind: "wikipedia", title: "Emacs", href: "https://en.wikipedia.org/wiki/Emacs" }],
  });

  lb.define("platf+erlang", "Erlang", {
    websites: [
      { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
    ],
  });

  lb.define("platf+fpga", "FPGA", {
    websites: [
      { kind: "wikipedia", title: "FPGA", href: "https://en.wikipedia.org/wiki/Field_Programmable_Gate_Array" },
    ],
  });

  lb.define("platf+fuchsia", "Google Fuchsia", {
    websites: [{ kind: "wikipedia", title: "Google Fuchsia", href: "https://en.wikipedia.org/wiki/Google_Fuchsia" }],
  });

  lb.define("platf+glib", "GLib", {
    websites: [{ kind: "wikipedia", title: "GLib", href: "https://en.wikipedia.org/wiki/GLib" }],
  });

  lb.define("platf+gnu", "GNU", {
    websites: [{ kind: "wikipedia", title: "GNU", href: "https://en.wikipedia.org/wiki/GNU" }],
  });

  lb.define("platf+haiku", "Haiku", {
    websites: [{ kind: "wikipedia", title: "Haiku", href: "https://en.wikipedia.org/wiki/Haiku_(operating_system)" }],
  });

  lb.define("platf+lisp-machine", "Lisp machines", {
    websites: [{ kind: "wikipedia", title: "Lisp machines", href: "https://en.wikipedia.org/wiki/Lisp_machine" }],
  });

  lb.define("platf+llvm", "LLVM", {
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  lb.define("platf+mach", "Mach", {
    websites: [{ kind: "wikipedia", title: "Mach", href: "https://en.wikipedia.org/wiki/Mach_(kernel)" }],
  });

  lb.define("platf+mingw", "MinGW", {
    websites: [{ kind: "wikipedia", title: "MinGW", href: "https://en.wikipedia.org/wiki/MinGW" }],
  });

  lb.define("platf+mips", "MIPS", {
    websites: [
      { kind: "wikipedia", title: "MIPS, MIPS64el, MIPSel", href: "https://en.wikipedia.org/wiki/MIPS_architecture" },
    ],
  });

  lb.define("platf+nintendo-switch", "Nintendo Switch", {
    websites: [{ kind: "wikipedia", title: "Nintendo Switch", href: "https://en.wikipedia.org/wiki/Nintendo_Switch" }],
  });

  lb.define("platf+oneapi", "oneAPI", {
    websites: [
      { kind: "wikipedia", title: "oneAPI", href: "https://en.wikipedia.org/wiki/OneAPI_(compute_acceleration)" },
    ],
  });

  lb.define("platf+openvms", "VMS", {
    websites: [{ kind: "wikipedia", title: "OpenVMS", href: "https://en.wikipedia.org/wiki/OpenVMS" }],
  });

  lb.define("platf+parallel-computing", "Parallel", {
    websites: [{ kind: "wikipedia", title: "Parallel", href: "https://en.wikipedia.org/wiki/Parallel_computing" }],
  });

  lb.define("platf+pic", "PIC", {
    websites: [{ kind: "wikipedia", title: "PIC", href: "https://en.wikipedia.org/wiki/PIC_microcontrollers" }],
  });

  lb.define("platf+pip", "pip (package manager)", {
    websites: [
      {
        kind: "wikipedia",
        title: "pip (package manager)",
        href: "https://en.wikipedia.org/wiki/Pip_(package_manager)",
      },
    ],
  });

  lb.define("platf+pocket-pc", "Pocket PC", {
    websites: [{ kind: "wikipedia", title: "Pocket PC", href: "https://en.wikipedia.org/wiki/Pocket_PC" }],
  });

  lb.define("platf+posix", "POSIX", {
    websites: [{ kind: "wikipedia", title: "POSIX", href: "https://en.wikipedia.org/wiki/POSIX" }],
  });

  lb.define("platf+power-isa", "Power", {
    websites: [{ kind: "wikipedia", title: "POWERPC64", href: "https://en.wikipedia.org/wiki/Power_ISA" }],
  });

  lb.define("platf+python", "Python", {
    websites: [
      { kind: "wikipedia", title: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
    ],
  });

  lb.define("platf+qnx", "QNX", {
    websites: [{ kind: "wikipedia", title: "QNX", href: "https://en.wikipedia.org/wiki/QNX" }],
  });

  lb.define("platf+red-hat", "Red Hat", {
    websites: [{ kind: "wikipedia", title: "Red Hat", href: "https://en.wikipedia.org/wiki/Red_Hat" }],
  });

  lb.define("platf+rocm", "ROCm", {
    websites: [{ kind: "wikipedia", title: "ROCm", href: "https://en.wikipedia.org/wiki/ROCm" }],
  });

  lb.define("platf+stm32", "STM32", {
    websites: [{ kind: "wikipedia", title: "STM32", href: "https://en.wikipedia.org/wiki/STM32" }],
  });

  lb.define("platf+vm", "VM/CMS", {
    websites: [{ kind: "wikipedia", title: "VM/CMS", href: "https://en.wikipedia.org/wiki/VM_(operating_system)" }],
  });

  lb.define("platf+vse", "z/VSE", {
    websites: [{ kind: "wikipedia", title: "DOS/VSE", href: "https://en.wikipedia.org/wiki/VSE_(operating_system)" }],
  });

  lb.define("platf+wasm", "WebAssembly", {
    websites: [{ kind: "wikipedia", title: "WebAssembly", href: "https://en.wikipedia.org/wiki/WebAssembly" }],
  });

  lb.define("platf+z-slashos", "z/OS", {
    websites: [{ kind: "wikipedia", title: "z/OS", href: "https://en.wikipedia.org/wiki/Z/OS" }],
  });

  lb.define("platf+z-slashvm", "z/VM", {
    websites: [{ kind: "wikipedia", title: "z/VM", href: "https://en.wikipedia.org/wiki/Z/VM" }],
  });

  lb.define("platf+zephyr", "Zephyr", {
    websites: [{ kind: "wikipedia", title: "Zephyr", href: "https://en.wikipedia.org/wiki/Zephyr_(operating_system)" }],
  });
}
