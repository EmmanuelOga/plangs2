import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+algol",
		"ALGOL W",
		{
			name: "ALGOL W",
			websites: [
				{
					kind: "wikipedia",
					title: "ALGOL 68",
					href: "https://en.wikipedia.org/wiki/ALGOL_68",
				},
				{
					kind: "wikipedia",
					title: "ALGOL 58",
					href: "https://en.wikipedia.org/wiki/ALGOL_58",
				},
				{
					kind: "wikipedia",
					title: "ALGOL",
					href: "https://en.wikipedia.org/wiki/ALGOL",
				},
				{
					kind: "wikipedia",
					title: "ALGOL 60",
					href: "https://en.wikipedia.org/wiki/ALGOL_60",
				},
				{
					kind: "wikipedia",
					title: "ALGOL 68C",
					href: "https://en.wikipedia.org/wiki/ALGOL_68C",
				},
				{
					kind: "wikipedia",
					title: "ALGOL 68-R",
					href: "https://en.wikipedia.org/wiki/ALGOL_68-R",
				},
				{
					kind: "wikipedia",
					title: "ALGOL 68RS",
					href: "https://en.wikipedia.org/wiki/ALGOL_68RS",
				},
				{
					kind: "wikipedia",
					title: "ALGOL 68S",
					href: "https://en.wikipedia.org/wiki/ALGOL_68S",
				},
				{
					kind: "wikipedia",
					title: "ALGOL Y",
					href: "https://en.wikipedia.org/wiki/ALGOL_Y",
				},
				{
					kind: "wikipedia",
					title: "ALGOL",
					href: "https://en.wikipedia.org/wiki/Algol-like",
				},
				{
					kind: "wikipedia",
					title: "ALGOL W",
					href: "https://en.wikipedia.org/wiki/ALGOL_W",
				},
				{
					kind: "wikipedia",
					title: "Dartmouth ALGOL 30",
					href: "https://en.wikipedia.org/wiki/Dartmouth_ALGOL_30",
				},
				{
					kind: "wikipedia",
					title: "S-algol",
					href: "https://en.wikipedia.org/wiki/S-algol",
				},
				{
					kind: "wikipedia",
					title: "PS-algol",
					href: "https://en.wikipedia.org/wiki/PS-algol",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Algol68RevisedReportCover.jpg/121px-Algol68RevisedReportCover.jpg",
				},
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg/121px-1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg",
				},
			],
			releases: [
				{ version: "unknown", date: "1973-01-01", kind: "stable" },
				{ version: "unknown", date: "1958-01-01", kind: "first" },
			],
		},
		{
			dialects: [
				"pl+algol",
				"pl+atlas-autocode",
				"pl+coral",
				"pl+edinburgh-imp",
				"pl+euler",
				"pl+executive-systems-problem-oriented",
				"pl+imp",
				"pl+jovial",
				"pl+mad",
				"pl+napier88",
				"pl+newp",
				"pl+pl360",
				"pl+rtl-slash2",
				"pl+sail",
				"pl+simula-67",
				"pl+simula",
				"pl+simula67",
				"pl+small",
			],
			implementations: [
				"pl+algol",
				"pl+flacc",
				"pl+odra",
				"pl+bliss",
				"pl+pl360",
				"pl+assembly",
			],
			influences: [
				"pl+fortran",
				"pl+plankalkul",
				"pl+superplan",
				"pl+algol",
				"pl+pl360",
				"pl+speedcoding",
			],
			paradigms: [
				"para+imperative",
				"para+structured",
				"para+multi",
				"para+concurrent",
			],
			people: [
				"person+friedrich-l-bauer",
				"person+hermann-bottenbruch",
				"person+heinz-rutishauser",
				"person+klaus-samelson",
				"person+john-backus",
				"person+charles-katz",
				"person+alan-perlis",
				"person+joseph-henry-wegstein",
				"person+van-wijngaarden",
				"person+a-van-wijngaarden",
				"person+b-j-mailloux",
				"person+j-e-l-peck",
				"person+c-h-a-koster",
				"person+charles-h-lindsey",
				"person+niklaus-wirth",
				"person+tony-hoare",
				"person+anthony-w-knapp",
				"person+thomas-e-kurtz",
				"person+ron-morrison",
				"person+paul-cockshott",
			],
			platforms: ["platf+atari"],
			typeSystems: [
				"tsys+static",
				"tsys+strong",
				"tsys+safe",
				"tsys+structural",
			],
		},
	);
}
