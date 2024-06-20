import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.declare("license+boost", "Boost", [
		{
			kind: "wikipedia",
			title: "Boost",
			href: "https://en.wikipedia.org/wiki/Boost_Software_License",
		},
	]);

	lb.declare("license+bsd", "BSD", [
		{
			kind: "wikipedia",
			title: "BSD",
			href: "https://en.wikipedia.org/wiki/BSD_licenses",
		},
		{
			kind: "wikipedia",
			title: "BSD license",
			href: "https://en.wikipedia.org/wiki/BSD_license",
		},
		{
			kind: "wikipedia",
			title: "BSD",
			href: "https://en.wikipedia.org/wiki/BSD",
		},
		{
			kind: "wikipedia",
			title: "BSD",
			href: "https://en.wikipedia.org/wiki/Modified_BSD_License",
		},
		{
			kind: "wikipedia",
			title: "BSD License",
			href: "https://en.wikipedia.org/wiki/BSD_License",
		},
	]);

	lb.declare("license+bsd-2-clause", "BSD 2-Clause", [
		{
			kind: "wikipedia",
			title: "BSD 2-Clause",
			href: "https://en.wikipedia.org/wiki/BSD_licenses",
		},
	]);

	lb.declare("license+bsd-3", "BSD-3", [
		{
			kind: "wikipedia",
			title: "BSD-3",
			href: "https://en.wikipedia.org/wiki/BSD-3",
		},
	]);

	lb.declare("license+bsd-3-clause", "BSD-3-Clause", [
		{
			kind: "wikipedia",
			title: "BSD-3-Clause",
			href: "https://en.wikipedia.org/wiki/BSD_licenses",
		},
	]);

	lb.declare("license+bsd-like", "BSD-like", [
		{
			kind: "wikipedia",
			title: "BSD-like",
			href: "https://en.wikipedia.org/wiki/Permissive_software_license",
		},
		{
			kind: "wikipedia",
			title: "BSD-like",
			href: "https://en.wikipedia.org/wiki/BSD_licenses",
		},
	]);

	lb.declare("license+bsd-revised", "Revised BSD", [
		{
			kind: "wikipedia",
			title: "Revised BSD",
			href: "https://en.wikipedia.org/wiki/BSD_license",
		},
		{
			kind: "wikipedia",
			title: "BSD revised",
			href: "https://en.wikipedia.org/wiki/BSD_licenses",
		},
	]);

	lb.declare("license+bsds", "BSD licenses", [
		{
			kind: "wikipedia",
			title: "BSD licenses",
			href: "https://en.wikipedia.org/wiki/BSD_licenses",
		},
	]);
}
