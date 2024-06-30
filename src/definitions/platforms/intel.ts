import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+ia-32", "IA-32", {
		websites: [
			{
				kind: "wikipedia",
				title: "IA-32",
				href: "https://en.wikipedia.org/wiki/IA-32",
			},
		],
	});

	lb.define("platf+ia-64", "IA-64", {
		websites: [
			{
				kind: "wikipedia",
				title: "IA-64",
				href: "https://en.wikipedia.org/wiki/IA-64",
			},
		],
	});

	lb.define("platf+intel-80286", "Intel 286", {
		websites: [
			{
				kind: "wikipedia",
				title: "Intel 286",
				href: "https://en.wikipedia.org/wiki/Intel_80286",
			},
		],
	});

	lb.define("platf+intel-8080", "Intel 8080", {
		websites: [
			{
				kind: "wikipedia",
				title: "Intel 8080",
				href: "https://en.wikipedia.org/wiki/Intel_8080",
			},
		],
	});

	lb.define("platf+x64", "x64", {
		websites: [
			{
				kind: "wikipedia",
				title: "x64",
				href: "https://en.wikipedia.org/wiki/X64",
			},
		],
	});

	lb.define("platf+x86", "x86", {
		websites: [
			{
				kind: "wikipedia",
				title: "x86",
				href: "https://en.wikipedia.org/wiki/X86",
			},
		],
	});

	lb.define("platf+x86-64", "x86-64", {
		websites: [
			{
				kind: "wikipedia",
				title: "x86-64",
				href: "https://en.wikipedia.org/wiki/X86-64",
			},
		],
	});
}
