import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.declare("license+academic-free", "Academic Free License", [
		{
			kind: "wikipedia",
			title: "Academic Free License",
			href: "https://en.wikipedia.org/wiki/Academic_Free_License",
		},
	]);

	lb.declare("license+agpl", "AGPL", [
		{
			kind: "wikipedia",
			title: "AGPL",
			href: "https://en.wikipedia.org/wiki/Affero_General_Public_License",
		},
	]);

	lb.declare("license+agpl-3", "AGPLv3", [
		{
			kind: "wikipedia",
			title: "AGPL-3.0-or-later",
			href: "https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License",
		},
		{
			kind: "wikipedia",
			title: "AGPLv3",
			href: "https://en.wikipedia.org/wiki/Affero_General_Public_License",
		},
	]);

	lb.declare("license+apache", "APSL", [
		{
			kind: "wikipedia",
			title: "Apache",
			href: "https://en.wikipedia.org/wiki/Apache_License",
		},
		{
			kind: "wikipedia",
			title: "APSL",
			href: "https://en.wikipedia.org/wiki/Apple_Public_Source_License",
		},
		{
			kind: "wikipedia",
			title: "Apache",
			href: "https://en.wikipedia.org/wiki/Apache_Licence",
		},
	]);

	lb.declare("license+apache-2", "Apache 2", [
		{
			kind: "wikipedia",
			title: "Apache License 2.0",
			href: "https://en.wikipedia.org/wiki/Apache_License_2.0",
		},
		{
			kind: "wikipedia",
			title: "Apache 2",
			href: "https://en.wikipedia.org/wiki/Apache_License",
		},
		{
			kind: "wikipedia",
			title: "Apache 2.0",
			href: "https://en.wikipedia.org/wiki/Apache_2.0",
		},
		{
			kind: "wikipedia",
			title: "Apache 2.0",
			href: "https://en.wikipedia.org/wiki/Apache_license",
		},
	]);

	lb.declare(
		"license+apache-2-with-llvm-exception",
		"Apache-2.0-with-LLVM-Exception",
		[
			{
				kind: "wikipedia",
				title: "Apache-2.0-with-LLVM-Exception",
				href: "https://en.wikipedia.org/wiki/Apache-2.0-with-LLVM-Exception",
			},
		],
	);

	lb.declare("license+artistic", "Artistic License", [
		{
			kind: "wikipedia",
			title: "Artistic License",
			href: "https://en.wikipedia.org/wiki/Artistic_License",
		},
	]);

	lb.declare("license+artistic-2", "Artistic License 2", [
		{
			kind: "wikipedia",
			title: "Artistic License 2.0",
			href: "https://en.wikipedia.org/wiki/Artistic_License_2.0",
		},
		{
			kind: "wikipedia",
			title: "Artistic License 2",
			href: "https://en.wikipedia.org/wiki/Artistic_License",
		},
	]);

	lb.declare("license+asl-2", "ASL 2.0", [
		{
			kind: "wikipedia",
			title: "ASL 2.0",
			href: "https://en.wikipedia.org/wiki/Apache_Software_License",
		},
	]);
}
