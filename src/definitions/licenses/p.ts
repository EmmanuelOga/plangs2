import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.declare("license+patent", "patent", [
		{
			kind: "wikipedia",
			title: "patent",
			href: "https://en.wikipedia.org/wiki/Software_patents",
		},
	]);

	lb.declare("license+perl-artistic-2", "Perl Artistic License 2.0", [
		{
			kind: "wikipedia",
			title: "Perl Artistic License 2.0",
			href: "https://en.wikipedia.org/wiki/Artistic_License",
		},
	]);

	lb.declare("license+permissive", "Permissive", [
		{
			kind: "wikipedia",
			title: "Permissive",
			href: "https://en.wikipedia.org/wiki/Permissive_license",
		},
	]);

	lb.declare("license+permissive-free-software", "Permissive free software", [
		{
			kind: "wikipedia",
			title: "Permissive free software licence",
			href: "https://en.wikipedia.org/wiki/Permissive_free_software_licence",
		},
		{
			kind: "wikipedia",
			title: "Permissive free software",
			href: "https://en.wikipedia.org/wiki/Permissive_free_software_license",
		},
	]);

	lb.declare("license+php", "PHP License", [
		{
			kind: "wikipedia",
			title: "PHP License",
			href: "https://en.wikipedia.org/wiki/PHP_License",
		},
	]);

	lb.declare("license+proprietary", "Proprietary", [
		{
			kind: "wikipedia",
			title: "Proprietary",
			href: "https://en.wikipedia.org/wiki/Proprietary_software",
		},
		{
			kind: "wikipedia",
			title: "Proprietary",
			href: "https://en.wikipedia.org/wiki/Proprietary_license",
		},
		{
			kind: "wikipedia",
			title: "Proprietary",
			href: "https://en.wikipedia.org/wiki/Proprietary_Software",
		},
	]);

	lb.declare("license+proprietary-software", "proprietary software", [
		{
			kind: "wikipedia",
			title: "proprietary software",
			href: "https://en.wikipedia.org/wiki/Proprietary_software",
		},
	]);

	lb.declare("license+public-domain", "Public domain", [
		{
			kind: "wikipedia",
			title: "Public domain",
			href: "https://en.wikipedia.org/wiki/Public_domain",
		},
		{
			kind: "wikipedia",
			title: "Public Domain",
			href: "https://en.wikipedia.org/wiki/Public_Domain",
		},
	]);

	lb.declare(
		"license+python-software-foundation",
		"Python Software Foundation License",
		[
			{
				kind: "wikipedia",
				title: "Python Software Foundation License",
				href: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
			},
		],
	);
}