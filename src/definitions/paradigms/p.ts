import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+parallel", "parallel", [
		{
			kind: "wikipedia",
			title: "parallel",
			href: "https://en.wikipedia.org/wiki/Parallel_programming",
		},
		{
			kind: "wikipedia",
			title: "parallel",
			href: "https://en.wikipedia.org/wiki/Parallel_computing",
		},
		{
			kind: "wikipedia",
			title: "Parallel programming",
			href: "https://en.wikipedia.org/wiki/Parallel_programming_model",
		},
	]);

	lb.define(
		"para+partitioned-global-address-space",
		"Partitioned global address space",
		[
			{
				kind: "wikipedia",
				title: "Partitioned global address space",
				href: "https://en.wikipedia.org/wiki/Partitioned_global_address_space",
			},
		],
	);

	lb.define("para+pattern-matching", "Pattern-matching", [
		{
			kind: "wikipedia",
			title: "Pattern-matching",
			href: "https://en.wikipedia.org/wiki/Pattern-matching",
		},
	]);

	lb.define("para+people-oriented", "People Oriented Programming", [
		{
			kind: "wikipedia",
			title: "People Oriented Programming",
			href: "https://en.wikipedia.org/w/index.php?title=People_Oriented_Programming&action=edit&redlink=1",
		},
	]);

	lb.define("para+pipeline", "pipeline", [
		{
			kind: "wikipedia",
			title: "pipeline",
			href: "https://en.wikipedia.org/wiki/Pipeline_(software)",
		},
		{
			kind: "wikipedia",
			title: "pipeline",
			href: "https://en.wikipedia.org/wiki/Pipeline_programming",
		},
	]);

	lb.define("para+process-oriented", "processing", [
		{
			kind: "wikipedia",
			title: "process-oriented",
			href: "https://en.wikipedia.org/wiki/Process-oriented_programming",
		},
		{
			kind: "wikipedia",
			title: "rule processing",
			href: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
		},
		{
			kind: "wikipedia",
			title: "processing",
			href: "https://en.wikipedia.org/wiki/In-memory_processing",
		},
	]);

	lb.define("para+prototypes", "prototype-based", [
		{
			kind: "wikipedia",
			title: "prototype-based",
			href: "https://en.wikipedia.org/wiki/Prototype-based_programming",
		},
		{
			kind: "wikipedia",
			title: "prototype-based",
			href: "https://en.wikipedia.org/wiki/Prototype-oriented_programming",
		},
	]);
}
