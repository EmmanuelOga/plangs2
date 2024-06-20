import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.declare("para+scientific-workflow", "scientific workflow", [
		{
			kind: "wikipedia",
			title: "scientific workflow",
			href: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
		},
	]);

	lb.declare("para+scripting", "scripting", [
		{
			kind: "wikipedia",
			title: "scripting",
			href: "https://en.wikipedia.org/wiki/Scripting_language",
		},
	]);

	lb.declare("para+shared-memory", "shared memory", [
		{
			kind: "wikipedia",
			title: "shared memory",
			href: "https://en.wikipedia.org/wiki/Shared_memory",
		},
	]);

	lb.declare("para+simulation", "simulation", [
		{
			kind: "wikipedia",
			title: "simulation",
			href: "https://en.wikipedia.org/wiki/Simulation_language",
		},
	]);

	lb.declare("para+stack-oriented", "stack-based", [
		{
			kind: "wikipedia",
			title: "stack-based",
			href: "https://en.wikipedia.org/wiki/Stack-oriented_programming_language",
		},
		{
			kind: "wikipedia",
			title: "stack-based",
			href: "https://en.wikipedia.org/wiki/Stack-oriented_programming",
		},
		{
			kind: "wikipedia",
			title: "stack machine",
			href: "https://en.wikipedia.org/wiki/Stack_machine",
		},
	]);

	lb.declare("para+strongly-typed", "strongly typed", [
		{
			kind: "wikipedia",
			title: "strongly typed",
			href: "https://en.wikipedia.org/wiki/Strongly_typed",
		},
	]);

	lb.declare("para+structured", "structured", [
		{
			kind: "wikipedia",
			title: "Structured",
			href: "https://en.wikipedia.org/wiki/Structured_programming",
		},
	]);

	lb.declare("para+style-language", "style language", [
		{
			kind: "wikipedia",
			title: "Style language",
			href: "https://en.wikipedia.org/wiki/Style_language",
		},
	]);

	lb.declare("para+symbolic", "symbolic", [
		{
			kind: "wikipedia",
			title: "symbolic",
			href: "https://en.wikipedia.org/wiki/Symbolic_programming",
		},
	]);
}
