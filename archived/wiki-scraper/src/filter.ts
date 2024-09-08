import type { NPlang } from "@plangs/plangs/index";

// Arbitrary whitelist.
export const PL_WHITELIST = new Set<NPlang["key"]>([
  "pl+.net",
  "pl+actionscript",
  "pl+ada",
  "pl+agda",
  "pl+algol",
  "pl+alice",
  "pl+ampl",
  "pl+apl",
  "pl+asm.js",
  "pl+assembly",
  "pl+assemblyscript",
  "pl+awk",
  "pl+ballerina",
  "pl+bash",
  "pl+basic",
  "pl+befunge",
  "pl+boo",
  "pl+boomerang",
  "pl+borland-turbo-c",
  "pl+brainfuck",
  "pl+c",
  "pl+c++",
  "pl+c-sharp",
  "pl+ceylon",
  "pl+cg",
  "pl+chez",
  "pl+chuck",
  "pl+ciao",
  "pl+cilk",
  "pl+circuitpython",
  "pl+clang",
  "pl+clean",
  "pl+clojure",
  "pl+clozure",
  "pl+clu",
  "pl+cobra",
  "pl+codemonkey",
  "pl+coffeescript",
  "pl+coldfusion",
  "pl+colorforth",
  "pl+common-lisp",
  "pl+coq",
  "pl+cpython",
  "pl+crystal",
  "pl+csharp",
  "pl+csound",
  "pl+curry",
  "pl+cython",
  "pl+d",
  "pl+dart",
  "pl+datalog",
  "pl+datomic",
  "pl+delphi",
  "pl+dependent-ml",
  "pl+dylan",
  "pl+ecmascript",
  "pl+eiffel",
  "pl+elixir",
  "pl+emacs-lisp",
  "pl+erlang",
  "pl+euphoria",
  "pl+extempore",
  "pl+f-sharp",
  "pl+factor",
  "pl+fantom",
  "pl+faust",
  "pl+flix",
  "pl+flutter",
  "pl+forth",
  "pl+fortran",
  "pl+fortress",
  "pl+fp",
  "pl+free-pascal",
  "pl+freebasic",
  "pl+frink",
  "pl+futhark",
  "pl+g95",
  "pl+gambit",
  "pl+gdscript",
  "pl+gforth",
  "pl+gleam",
  "pl+glsl",
  "pl+gnat",
  "pl+go",
  "pl+gozu",
  "pl+graalvm",
  "pl+gremlin",
  "pl+groovy",
  "pl+hack",
  "pl+hackety-hack",
  "pl+haskell",
  "pl+haxe",
  "pl+hhvm",
  "pl+high-level-assembly",
  "pl+hotspot",
  "pl+hy",
  "pl+icon",
  "pl+idris",
  "pl+impromptu",
  "pl+inform",
  "pl+intel-c",
  "pl+intel-fortran-compiler",
  "pl+io",
  "pl+ironpython",
  "pl+ironruby",
  "pl+isabelle",
  "pl+javascript",
  "pl+javascriptcore",
  "pl+joy",
  "pl+jq",
  "pl+jruby",
  "pl+julia",
  "pl+jython",
  "pl+k",
  "pl+kornshell",
  "pl+kotlin",
  "pl+labview",
  "pl+lisp",
  "pl+llvm",
  "pl+logtalk",
  "pl+lua",
  "pl+luajit",
  "pl+macsyma",
  "pl+max-msp",
  "pl+micropython",
  "pl+minizinc",
  "pl+ml",
  "pl+mlton",
  "pl+modelica",
  "pl+modula",
  "pl+mono",
  "pl+moonscript",
  "pl+mruby",
  "pl+mzscheme",
  "pl+netlogo",
  "pl+netrexx",
  "pl+newlisp",
  "pl+newspeak",
  "pl+nim",
  "pl+oberon",
  "pl+ocaml",
  "pl+pascal",
  "pl+perl",
  "pl+powerbasic",
  "pl+processing",
  "pl+prolog",
  "pl+pure",
  "pl+purebasic",
  "pl+puredata",
  "pl+purescript",
  "pl+r",
  "pl+r5rs",
  "pl+racket",
  "pl+raku",
  "pl+rakudo",
  "pl+rascal",
  "pl+reason",
  "pl+rebol",
  "pl+pypy",
  "pl+red",
  "pl+ruby",
  "pl+rust",
  "pl+sass",
  "pl+sbcl",
  "pl+scala",
  "pl+scheme",
  "pl+scratch",
  "pl+scratchjr",
  "pl+scumm",
  "pl+sed",
  "pl+seed7",
  "pl+self",
  "pl+shacl",
  "pl+shex",
  "pl+simula",
  "pl+simulink",
  "pl+souffle",
  "pl+sql",
  "pl+squeak",
  "pl+squirrel",
  "pl+standard-ml",
  "pl+supercollider",
  "pl+swi-prolog",
  "pl+swift",
  "pl+tcl",
  "pl+tcsh",
  "pl+tex",
  "pl+tk",
  "pl+turbo-pascal",
  "pl+txl",
  "pl+v",
  "pl+v8",
  "pl+vala",
  "pl+visual-basic",
  "pl+vvvv",
  "pl+whiley",
  "pl+whitespace",
  "pl+wolfram-language",
  "pl+xojo",
  "pl+xpath",
  "pl+xproc",
  "pl+xquery",
  "pl+xsb",
  "pl+xslt",
  "pl+xtend",
  "pl+yabasic",
  "pl+yacc",
  "pl+zig",
]);
