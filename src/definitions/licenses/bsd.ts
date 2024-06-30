import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+bsd", "BSD", {
		websites: [
			{
				kind: "wikipedia",
				title: "Revised BSD",
				href: "https://en.wikipedia.org/wiki/BSD_license",
			},
			{
				kind: "wikipedia",
				title: "BSD",
				href: "https://en.wikipedia.org/wiki/BSD",
			},
		],
	});

	lb.define("lic+bsd-3", "BSD-3", {
		websites: [
			{
				kind: "wikipedia",
				title: "BSD-3",
				href: "https://en.wikipedia.org/wiki/BSD-3",
			},
		],
	});

	lb.define("lic+bsd-c", "3-clause BSD", {
		websites: [
			{
				kind: "wikipedia",
				title: "3-clause BSD",
				href: "https://en.wikipedia.org/wiki/3-clause_BSD",
			},
		],
	});

	lb.define("lic+bsd-m", "BSD", {
		websites: [
			{
				kind: "wikipedia",
				title: "BSD",
				href: "https://en.wikipedia.org/wiki/Modified_BSD_License",
			},
		],
	});

	lb.define("lic+bsd-n", "New BSD License", {
		websites: [
			{
				kind: "wikipedia",
				title: "New BSD License",
				href: "https://en.wikipedia.org/wiki/New_BSD_License",
			},
		],
	});

	lb.define("lic+bsd-s", "BSD", {
		websites: [
			{
				kind: "wikipedia",
				title: "BSD",
				href: "https://en.wikipedia.org/wiki/BSD_licenses",
			},
			{
				kind: "wikipedia",
				title: "Simplified BSD",
				href: "https://en.wikipedia.org/wiki/Simplified_BSD_License",
			},
			{
				kind: "wikipedia",
				title: "Simplified BSD",
				href: "https://en.wikipedia.org/wiki/BSD_licenses#2-clause_license_.28.22Simplified_BSD_License.22_or_.22FreeBSD_License.22.29",
			},
		],
	});
}
