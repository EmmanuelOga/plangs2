import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+jvm" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "JavaScript";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "JVM",
			href: "https://en.wikipedia.org/wiki/JVM",
		},
		{
			kind: "wikipedia",
			title: "Java",
			href: "https://en.wikipedia.org/wiki/Java_(software_platform)",
		},
		{
			kind: "wikipedia",
			title: "Java Virtual Machine",
			href: "https://en.wikipedia.org/wiki/Java_Virtual_Machine",
		},
		{
			kind: "wikipedia",
			title: "JavaScript",
			href: "https://en.wikipedia.org/wiki/JavaScript_engine",
		},
		{
			kind: "wikipedia",
			title: "Java virtual machine",
			href: "https://en.wikipedia.org/wiki/Java_virtual_machine",
		},
		{
			kind: "wikipedia",
			title: "JavaScript",
			href: "https://en.wikipedia.org/wiki/JavaScript",
		},
		{
			kind: "wikipedia",
			title: "Java",
			href: "https://en.wikipedia.org/wiki/Java_platform",
		},
		{
			kind: "wikipedia",
			title: "bytecode",
			href: "https://en.wikipedia.org/wiki/Java_bytecode",
		},
		{
			kind: "wikipedia",
			title: "Java Runtime Environment",
			href: "https://en.wikipedia.org/wiki/Java_Runtime_Environment",
		},
		{
			kind: "wikipedia",
			title: "Java SE",
			href: "https://en.wikipedia.org/wiki/Java_Platform,_Standard_Edition",
		},
		{
			kind: "wikipedia",
			title: "Java SE",
			href: "https://en.wikipedia.org/wiki/Java_SE",
		},
	]);
}
