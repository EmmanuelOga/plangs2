import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+arm" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "ARM Cortex-M";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "ARM",
			href: "https://en.wikipedia.org/wiki/ARM_architecture",
		},
		{
			kind: "wikipedia",
			title: "ARM",
			href: "https://en.wikipedia.org/wiki/ARM_architecture_family",
		},
		{
			kind: "wikipedia",
			title: "ARM64",
			href: "https://en.wikipedia.org/wiki/ARM64",
		},
		{
			kind: "wikipedia",
			title: "arm64",
			href: "https://en.wikipedia.org/wiki/Arm64",
		},
		{
			kind: "wikipedia",
			title: "64-bit Arm",
			href: "https://en.wikipedia.org/wiki/Armv8",
		},
		{
			kind: "wikipedia",
			title: "ARM32",
			href: "https://en.wikipedia.org/wiki/ARM32",
		},
		{
			kind: "wikipedia",
			title: "StrongARM",
			href: "https://en.wikipedia.org/wiki/StrongARM",
		},
		{
			kind: "wikipedia",
			title: "ARMv7",
			href: "https://en.wikipedia.org/wiki/ARMv7",
		},
		{
			kind: "wikipedia",
			title: "armhf",
			href: "https://en.wikipedia.org/wiki/ARM_architecture#Floating-point_(VFP)",
		},
		{
			kind: "wikipedia",
			title: "ARMv8",
			href: "https://en.wikipedia.org/wiki/ARMv8",
		},
		{
			kind: "wikipedia",
			title: "ARM Cortex-M",
			href: "https://en.wikipedia.org/wiki/ARM_Cortex-M",
		},
	]);
}
