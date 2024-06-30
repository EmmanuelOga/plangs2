import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+allegro-common-lisp",
		"Allegro Common Lisp",
		{
			name: "Allegro Common Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Allegro Common Lisp",
					href: "https://en.wikipedia.org/wiki/Allegro_Common_Lisp",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Allegro_Common_Lisp_emblem.png/121px-Allegro_Common_Lisp_emblem.png",
				},
			],
			releases: [{ version: "11.0", date: "2024-01-01", kind: "stable" }],
			scoping: ["dynamic"],
		},
		{
			implementations: ["pl+common-lisp"],
			influences: ["pl+lisp", "pl+maclisp", "pl+macsyma", "pl+franz-lisp"],
			licenses: ["lic+proprietary", "lic+freeware"],
			paradigms: [
				"para+multi",
				"para+imperative",
				"para+functional",
				"para+objects",
				"para+meta",
				"para+reflective",
				"para+generic",
			],
			platforms: [
				"platf+ia-32",
				"platf+x86-64",
				"platf+arm",
				"platf+win",
				"platf+mac",
				"platf+linux",
				"platf+bsd",
			],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+armed-bear-common-lisp",
		"ABCL",
		{
			name: "ABCL",
			websites: [
				{
					kind: "wikipedia",
					title: "Common Lisp",
					href: "https://en.wikipedia.org/wiki/Armed_Bear_Common_Lisp",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg",
				},
			],
		},
		{
			implementations: [
				"pl+allegro-common-lisp",
				"pl+armed-bear-common-lisp",
				"pl+clisp",
				"pl+clozure-cl",
				"pl+cmucl",
				"pl+embeddable-common-lisp",
				"pl+gnu-common-lisp",
				"pl+lispworks",
				"pl+sbcl",
				"pl+genera",
			],
			influences: ["pl+lisp", "pl+maclisp", "pl+scheme", "pl+interlisp"],
			paradigms: [
				"para+multi",
				"para+imperative",
				"para+functional",
				"para+objects",
				"para+meta",
				"para+reflective",
				"para+generic",
			],
			people: [
				"person+scott-fahlman",
				"person+richard-p-gabriel",
				"person+david-a-moon",
				"person+kent-pitman",
				"person+guy-steele",
				"person+dan-weinreb",
			],
			platforms: ["platf+cross-platform"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+autolisp",
		"AutoLisp",
		{
			name: "AutoLisp",
			websites: [
				{
					kind: "wikipedia",
					title: "AutoLisp",
					href: "https://en.wikipedia.org/wiki/AutoLisp",
				},
			],
			releases: [{ version: "unknown", date: "1995-01-01", kind: "stable" }],
		},
		{
			influences: ["pl+armed-bear-common-lisp", "pl+lisp", "pl+common-lisp"],
			platforms: ["platf+ia-32", "platf+linux"],
			typeSystems: ["tsys+dynamic"],
		},
	);

	lb.define("pl+bbn-lisp", "BBN LISP", {
		name: "BBN LISP",
		websites: [
			{
				kind: "wikipedia",
				title: "BBN LISP",
				href: "https://en.wikipedia.org/wiki/BBN_LISP",
			},
		],
	});

	lb.define(
		"pl+clisp",
		"CLISP",
		{
			name: "CLISP",
			websites: [
				{
					kind: "wikipedia",
					title: "CLISP",
					href: "https://en.wikipedia.org/wiki/CLISP",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LogoCLISP.jpg",
				},
			],
			releases: [{ version: "2.49", date: "2010-01-01", kind: "stable" }],
		},
		{ licenses: ["lic+gpl"] },
	);

	lb.define(
		"pl+common-lisp",
		"Common Lisp",
		{
			name: "Common Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Common Lisp",
					href: "https://en.wikipedia.org/wiki/Common_Lisp",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg",
				},
			],
		},
		{
			implementations: [
				"pl+allegro-common-lisp",
				"pl+armed-bear-common-lisp",
				"pl+clisp",
				"pl+clozure-cl",
				"pl+cmucl",
				"pl+embeddable-common-lisp",
				"pl+gnu-common-lisp",
				"pl+lispworks",
				"pl+sbcl",
				"pl+genera",
			],
			influences: [
				"pl+lisp",
				"pl+maclisp",
				"pl+scheme",
				"pl+interlisp",
				"pl+mdl",
				"pl+zetalisp",
			],
			paradigms: [
				"para+multi",
				"para+imperative",
				"para+functional",
				"para+objects",
				"para+meta",
				"para+reflective",
				"para+generic",
			],
			people: [
				"person+scott-fahlman",
				"person+richard-p-gabriel",
				"person+david-a-moon",
				"person+kent-pitman",
				"person+guy-steele",
				"person+dan-weinreb",
			],
			platforms: ["platf+cross-platform"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+common-lisp-object-system",
		"Common Lisp Object System",
		{
			name: "Common Lisp Object System",
			websites: [
				{
					kind: "wikipedia",
					title: "CLOS",
					href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System",
				},
			],
		},
		{ influences: ["pl+smalltalk"] },
	);

	lb.define(
		"pl+emacs-lisp",
		"Emacs Lisp",
		{
			name: "Emacs Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Emacs Lisp",
					href: "https://en.wikipedia.org/wiki/Emacs_Lisp",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg",
				},
			],
			releases: [{ version: "29.1", date: "2023-01-01", kind: "stable" }],
		},
		{
			influences: ["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+maclisp"],
			licenses: ["lic+gpl"],
			paradigms: ["para+functional", "para+meta", "para+reflective"],
			people: ["person+richard-stallman", "person+guy-l-steele"],
			platforms: ["platf+emacs"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+embeddable-common-lisp",
		"Embeddable Common Lisp",
		{
			name: "Embeddable Common Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "ECL",
					href: "https://en.wikipedia.org/wiki/Embeddable_Common_Lisp",
				},
			],
			releases: [{ version: "23.9.9", date: "2023-01-01", kind: "stable" }],
		},
		{
			implementations: ["pl+c", "pl+common-lisp"],
			influences: ["pl+lisp", "pl+common-lisp", "pl+c"],
			licenses: ["lic+lgpl"],
			paradigms: [
				"para+multi",
				"para+imperative",
				"para+functional",
				"para+objects",
				"para+meta",
				"para+reflective",
				"para+generic",
			],
			platforms: [
				"platf+arm",
				"platf+x86",
				"platf+unix",
				"platf+android",
				"platf+win",
			],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+eulisp",
		"EuLisp",
		{
			name: "EuLisp",
			websites: [
				{
					kind: "wikipedia",
					title: "EuLisp",
					href: "https://en.wikipedia.org/wiki/EuLisp",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/8/88/EuLispLogo.png",
				},
			],
			releases: [{ version: "0.991", date: "2010-01-01", kind: "preview" }],
			scoping: ["static", "dynamic"],
		},
		{
			influences: [
				"pl+armed-bear-common-lisp",
				"pl+common-lisp",
				"pl+interlisp",
				"pl+lelisp",
				"pl+scheme",
				"pl+t",
				"pl+common-lisp-object-system",
				"pl+objvlisp",
				"pl+oaklisp",
				"pl+sml",
				"pl+haskell",
			],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+meta",
				"para+objects",
			],
			platforms: ["platf+linux"],
			typeSystems: ["tsys+strong", "tsys+dynamic"],
		},
	);

	lb.define(
		"pl+franz-lisp",
		"Franz Lisp",
		{
			name: "Franz Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Franz Lisp",
					href: "https://en.wikipedia.org/wiki/Franz_Lisp",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png/300px-4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png",
				},
			],
			scoping: ["lexical"],
		},
		{
			implementations: ["pl+c"],
			influences: ["pl+lisp", "pl+maclisp", "pl+common-lisp"],
			licenses: ["lic+proprietary", "lic+freeware"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+reflection",
				"para+meta",
			],
			people: ["person+richard-fateman"],
			platforms: ["platf+openvms", "platf+unix"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+gnu-common-lisp",
		"GNU Common Lisp",
		{
			name: "GNU Common Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "GCL",
					href: "https://en.wikipedia.org/wiki/GNU_Common_Lisp",
				},
			],
			releases: [{ version: "2.6.14", date: "2023-01-01", kind: "stable" }],
		},
		{ licenses: ["lic+gnu-library-gpl"] },
	);

	lb.define(
		"pl+interlisp",
		"Interlisp",
		{
			name: "Interlisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Interlisp",
					href: "https://en.wikipedia.org/wiki/Interlisp",
				},
			],
		},
		{
			implementations: ["pl+c"],
			influences: ["pl+lisp", "pl+bbn-lisp", "pl+multilisp"],
			licenses: ["lic+proprietary"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+objects",
				"para+dec",
				"para+reflective",
				"para+meta",
			],
			platforms: ["platf+6502", "platf+atari"],
		},
	);

	lb.define(
		"pl+islisp",
		"ISLISP",
		{
			name: "ISLISP",
			websites: [
				{
					kind: "wikipedia",
					title: "ISLISP",
					href: "https://en.wikipedia.org/wiki/ISLISP",
				},
			],
		},
		{
			dialects: ["pl+openlisp"],
			implementations: [
				"pl+c",
				"pl+c-sharp",
				"pl+go",
				"pl+java",
				"pl+javascript",
				"pl+lisp",
			],
			influences: [
				"pl+armed-bear-common-lisp",
				"pl+common-lisp",
				"pl+eulisp",
				"pl+le-lisp",
				"pl+scheme",
				"pl+lelisp",
			],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+objects",
				"para+reflection",
				"para+meta",
			],
			platforms: [
				"platf+ia-32",
				"platf+x86-64",
				"platf+win",
				"platf+mac",
				"platf+linux",
				"platf+bsd",
				"platf+android",
				"platf+qnx",
			],
		},
	);

	lb.define(
		"pl+le-lisp",
		"Le Lisp",
		{
			name: "Le Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Le Lisp",
					href: "https://en.wikipedia.org/wiki/Le_Lisp",
				},
			],
			releases: [{ version: "15.26.13", date: "2020-01-01", kind: "stable" }],
		},
		{
			implementations: ["pl+c"],
			influences: ["pl+lisp"],
			licenses: ["lic+proprietary", "lic+bsd-s"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+reflection",
				"para+meta",
			],
			platforms: [
				"platf+x86",
				"platf+mips",
				"platf+dec",
				"platf+openvms",
				"platf+win",
				"platf+unix",
				"platf+linux",
				"platf+mac",
				"platf+bsd",
			],
		},
	);

	lb.define(
		"pl+lelisp",
		"Le Lisp",
		{
			name: "Le Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "LeLisp",
					href: "https://en.wikipedia.org/wiki/LeLisp",
				},
			],
			releases: [{ version: "15.26.13", date: "2020-01-01", kind: "stable" }],
		},
		{
			implementations: ["pl+c"],
			influences: ["pl+lisp"],
			licenses: ["lic+proprietary", "lic+bsd-s"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+reflection",
				"para+meta",
			],
			platforms: [
				"platf+x86",
				"platf+mips",
				"platf+dec",
				"platf+openvms",
				"platf+win",
				"platf+unix",
				"platf+linux",
				"platf+mac",
				"platf+bsd",
			],
		},
	);

	lb.define(
		"pl+lisp",
		"Lisp",
		{
			name: "Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Lisp",
					href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)",
				},
				{
					kind: "wikipedia",
					title: "Lisp",
					href: "https://en.wikipedia.org/wiki/Lisp_programming_language",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg",
				},
			],
		},
		{
			dialects: [
				"pl+allegro-common-lisp",
				"pl+arc",
				"pl+armed-bear-common-lisp",
				"pl+autolisp",
				"pl+clojure",
				"pl+common-lisp",
				"pl+cowsel",
				"pl+emacs-lisp",
				"pl+embeddable-common-lisp",
				"pl+eulisp",
				"pl+franz-lisp",
				"pl+gambit",
				"pl+game-oriented-assembly-lisp",
				"pl+gnu-guile",
				"pl+hy",
				"pl+interlisp",
				"pl+islisp",
				"pl+kawa",
				"pl+le-lisp",
				"pl+lelisp",
				"pl+lfe",
				"pl+lispworks",
				"pl+logo",
				"pl+maclisp",
				"pl+mdl",
				"pl+multilisp",
				"pl+netlogo",
				"pl+newlisp",
				"pl+objectlogo",
				"pl+openlisp",
				"pl+pico",
				"pl+picolisp",
				"pl+pop-11",
				"pl+pop-2",
				"pl+racket",
				"pl+scheme",
				"pl+scm",
				"pl+siod",
				"pl+star-lisp",
				"pl+starlogo",
				"pl+t",
				"pl+ucblogo",
				"pl+zetalisp",
			],
			influences: ["pl+information-processing"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+reflective",
				"para+meta",
			],
			people: ["person+john-mccarthy", "person+steve-russell"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+lispworks",
		"LispWorks",
		{
			name: "LispWorks",
			websites: [
				{
					kind: "wikipedia",
					title: "LispWorks",
					href: "https://en.wikipedia.org/wiki/LispWorks",
				},
			],
			releases: [{ version: "8.0.1", date: "2022-01-01", kind: "stable" }],
			scoping: ["dynamic"],
		},
		{
			implementations: ["pl+common-lisp"],
			influences: ["pl+lisp", "pl+common-lisp"],
			licenses: ["lic+proprietary"],
			paradigms: [
				"para+multi",
				"para+imperative",
				"para+functional",
				"para+objects",
				"para+meta",
				"para+reflective",
				"para+generic",
			],
			platforms: [
				"platf+ia-32",
				"platf+x86-64",
				"platf+arm",
				"platf+win",
				"platf+mac",
				"platf+linux",
				"platf+bsd",
				"platf+android",
				"platf+ios",
			],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+maclisp",
		"Maclisp",
		{
			name: "Maclisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Maclisp",
					href: "https://en.wikipedia.org/wiki/Maclisp",
				},
			],
			extensions: [".lisp", ".fasl"],
		},
		{
			implementations: ["pl+assembly", "pl+pl-slash"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+reflection",
				"para+meta",
			],
			people: ["person+richard-greenblatt"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+multilisp",
		"MultiLisp",
		{
			name: "MultiLisp",
			websites: [
				{
					kind: "wikipedia",
					title: "MultiLisp",
					href: "https://en.wikipedia.org/wiki/MultiLisp",
				},
			],
		},
		{
			implementations: ["pl+interlisp"],
			influences: ["pl+lisp", "pl+scheme"],
			licenses: ["lic+proprietary"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+concurrent",
				"para+meta",
			],
			typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
		},
	);

	lb.define(
		"pl+newlisp",
		"newLISP",
		{
			name: "newLISP",
			websites: [
				{
					kind: "wikipedia",
					title: "newLISP",
					href: "https://en.wikipedia.org/wiki/NewLISP",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Nl_logo_libel_side_color_240X100.png/121px-Nl_logo_libel_side_color_240X100.png",
				},
			],
			releases: [
				{ version: "10.7.5", date: "2019-01-01", kind: "stable" },
				{ version: "10.7.4", date: "2018-01-01", kind: "preview" },
			],
		},
		{
			influences: ["pl+c", "pl+common-lisp", "pl+perl", "pl+scheme"],
			licenses: ["lic+gpl"],
			platforms: [
				"platf+ia-32",
				"platf+x86-64",
				"platf+cross-platform",
				"platf+unix",
				"platf+win",
			],
		},
	);

	lb.define(
		"pl+oaklisp",
		"Oaklisp",
		{
			name: "Oaklisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Oaklisp",
					href: "https://en.wikipedia.org/wiki/Oaklisp",
				},
			],
			releases: [{ version: "unknown", date: "2000-01-01", kind: "stable" }],
		},
		{
			influences: ["pl+scheme", "pl+t", "pl+smalltalk"],
			paradigms: [
				"para+multi",
				"para+objects",
				"para+functional",
				"para+imperative",
			],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define("pl+objvlisp", "ObjVlisp", {
		name: "ObjVlisp",
		websites: [
			{
				kind: "wikipedia",
				title: "ObjVlisp",
				href: "https://en.wikipedia.org/wiki/ObjVlisp",
			},
		],
	});

	lb.define(
		"pl+openlisp",
		"OpenLisp",
		{
			name: "OpenLisp",
			websites: [
				{
					kind: "wikipedia",
					title: "OpenLisp",
					href: "https://en.wikipedia.org/wiki/OpenLisp",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/OpenLisp_runnning_inside_GNU_Emacs.jpg/300px-OpenLisp_runnning_inside_GNU_Emacs.jpg",
				},
			],
			releases: [{ version: "11.7.0", date: "2022-01-01", kind: "stable" }],
		},
		{
			implementations: ["pl+c"],
			influences: ["pl+le-lisp", "pl+lelisp", "pl+lisp", "pl+islisp"],
			licenses: ["lic+proprietary"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+objects",
				"para+reflection",
				"para+meta",
			],
			platforms: [
				"platf+x86",
				"platf+x86-64",
				"platf+ia-64",
				"platf+mips",
				"platf+dec",
				"platf+arm",
				"platf+aarch64",
				"platf+risc-v",
				"platf+win",
				"platf+unix",
				"platf+linux",
				"platf+mac",
				"platf+bsd",
				"platf+qnx",
				"platf+dos",
				"platf+pocket-pc",
				"platf+openvms",
				"platf+z-slashos",
				"platf+cygwin",
			],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+picolisp",
		"PicoLisp",
		{
			name: "PicoLisp",
			websites: [
				{
					kind: "wikipedia",
					title: "PicoLisp",
					href: "https://en.wikipedia.org/wiki/Picolisp",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/4/40/PicoLisp_Logo.svg",
				},
			],
		},
		{
			implementations: ["pl+llvm"],
			licenses: ["lic+mit"],
			paradigms: [
				"para+functional",
				"para+imperative",
				"para+objects",
				"para+dec",
				"para+reflective",
				"para+meta",
			],
			platforms: ["platf+posix"],
			typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+star-lisp",
		"*Lisp (StarLisp)",
		{
			name: "*Lisp (StarLisp)",
			websites: [
				{
					kind: "wikipedia",
					title: "*Lisp",
					href: "https://en.wikipedia.org/wiki/*Lisp",
				},
			],
			scoping: ["lexical"],
		},
		{
			implementations: ["pl+common-lisp"],
			influences: ["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+lisp"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+reflection",
				"para+meta",
				"para+parallel",
			],
			people: ["person+steve-omohundro"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);

	lb.define(
		"pl+zetalisp",
		"Lisp Machine Lisp",
		{
			name: "Lisp Machine Lisp",
			websites: [
				{
					kind: "wikipedia",
					title: "Lisp Machine Lisp",
					href: "https://en.wikipedia.org/wiki/ZetaLisp",
				},
			],
			extensions: [".lisp", ".qfasl"],
		},
		{
			implementations: ["pl+lisp"],
			influences: ["pl+lisp", "pl+maclisp", "pl+interlisp"],
			people: [
				"person+david-a-moon",
				"person+richard-stallman",
				"person+daniel-weinreb",
				"person+lisp-machines",
			],
		},
	);
}
