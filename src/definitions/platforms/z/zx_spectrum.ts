import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+zx_spectrum" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "ZX Spectrum, +, 128, +2, +3";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "ZX Spectrum, +, 128, +2, +3",
			href: "https://en.wikipedia.org/wiki/ZX_Spectrum",
		},
	]);
}
