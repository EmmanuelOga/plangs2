import { Eta } from "eta";
import { PlangsGraph } from "../entities/plangs_graph";
import type {
	T_Id_V_License,
	T_Id_V_Paradigm,
	T_Id_V_Person,
	T_Id_V_Plang,
	T_Id_V_TypeSystem,
} from "../entities/schemas";
import { toAlphaNum } from "../util";
import { parseAll } from "./wikipedia_process";
import { groupBy } from "lodash-es";
import { PLANG_IDS } from "./plang_ids";

const Templ = new Eta({ views: __dirname, autoEscape: false });

const DEF_PATH = Bun.fileURLToPath(`file:${__dirname}/../definitions`);

function longTsPath(type: string, name: string): string {
	const p = toAlphaNum(name).toLowerCase();
	return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/${p[0]}/${p}.ts`);
}

function alphaTsPath(type: string, name: string): string {
	const p = toAlphaNum(name).toLowerCase();
	return Bun.fileURLToPath(`file:${DEF_PATH}/${type}/${p[0]}.ts`);
}

async function generateAll() {
	const g = new PlangsGraph();
	await parseAll(g);

	console.log(new Date().toISOString());

	await genLicenses(g);
	await genParadigms(g);
	await genPeople(g);
	await genPlatforms(g);
	await genTypeSystems(g);

	for (const vid of PLANG_IDS) {
		if (!(await genPlang(g, vid))) {
			console.log(`Failed to generate ${vid}`);
		}
	}

	console.log("Finished generating definitions.");
}

async function genPlang(g: PlangsGraph, plvid: T_Id_V_Plang): Promise<boolean> {
	const pl = g.v_plang.get(plvid);

	if (!pl || !pl.name) return false;

	const templ: Record<string, string | string[] | string[][]> = {
		plvid: json(plvid),
		name: json(pl.name),
	};

	templ.images = json(pl.images ?? []);

	templ.websites = json(pl.websites ?? []);

	templ.extensions = json(pl.extensions ?? []);

	templ.scopings = json(pl.scoping ?? []);

	templ.references = "{}"; // json(pl.references);

	templ.releases = json(pl.releases ?? []);

	templ.people = json(
		[...g.e_person_plang_role.adjacentTo(plvid)].map(({ from, edata }) => [
			from,
			edata?.role,
		]),
	);

	templ.licenses = json(
		[...g.e_has_license.adjacentFrom(plvid)].map(({ to }) => to),
	);

	templ.paradigms = json(
		[...g.e_plang_para.adjacentFrom(plvid)].map(({ to }) => to),
	);

	templ.typeSystems = json(
		[...g.e_plang_tsys.adjacentFrom(plvid)].map(({ to }) => to),
	);

	templ.platforms = json(
		[...g.e_supports_platf.adjacentFrom(plvid)].map(({ to }) => to),
	);

	templ.implementations = json(
		[...g.e_implements.adjacentTo(plvid)].map(({ from }) => from),
	);

	templ.dialects = json(
		[...g.e_dialect_of.adjacentTo(plvid)].map(({ from }) => from),
	);

	templ.influences = json(
		[...g.e_l_influenced_l.adjacentTo(plvid)].map(({ from }) => from),
	);

	templ.influenced = json(
		[...g.e_l_influenced_l.adjacentFrom(plvid)].map(({ to }) => to),
	);

	const res = Templ.render("./plang", templ);
	const path = longTsPath("plang", plvid.split("+")[1]);
	await Bun.write(path, res);

	return true;
}

async function genLicenses(g: PlangsGraph) {
	const allIds = [...g.v_license.keys()].sort((id0, id1) =>
		id0.toLowerCase().localeCompare(id1.toLowerCase()),
	);

	const grouped: Record<string, string[]> = groupBy(allIds, (id: string) =>
		id["license+".length].toLowerCase(),
	);

	for (const [prefix, ids] of Object.entries(grouped)) {
		const templ: Record<string, string[][]> = { licenses: [] };
		for (const lid of ids) {
			const lic = g.v_license.get(lid as T_Id_V_License);
			if (!lic) {
				console.log("License not found:", lid);
				continue;
			}
			templ.licenses.push([
				json(lid),
				json(lic.name),
				json(lic.websites ?? []),
			]);
		}

		const res = Templ.render("./license", templ);
		const path = alphaTsPath("licenses", prefix);
		await Bun.write(path, res);
	}
}

async function genParadigms(g: PlangsGraph) {
	const allIds = [...g.v_paradigm.keys()].sort((id0, id1) =>
		id0.toLowerCase().localeCompare(id1.toLowerCase()),
	);

	const grouped: Record<string, string[]> = groupBy(allIds, (id: string) =>
		id["para+".length].toLowerCase(),
	);

	for (const [prefix, ids] of Object.entries(grouped)) {
		const templ: Record<string, string[][]> = { paradigms: [] };
		for (const pid of ids) {
			const para = g.v_paradigm.get(pid as T_Id_V_Paradigm);
			if (!para) {
				console.log("Paradigm not found:", pid);
				continue;
			}
			templ.paradigms.push([
				json(pid),
				json(para.name ?? pid.split("+")[1]),
				json(para.websites ?? []),
			]);
		}

		const res = Templ.render("./paradigm", templ);
		const path = alphaTsPath("paradigms", prefix);
		await Bun.write(path, res);
	}
}

async function genPeople(g: PlangsGraph) {
	const allIds = [...g.v_person.keys()].sort((id0, id1) =>
		id0.toLowerCase().localeCompare(id1.toLowerCase()),
	);

	const grouped: Record<string, string[]> = groupBy(allIds, (id: string) =>
		id["person+".length].toLowerCase(),
	);

	for (const [prefix, ids] of Object.entries(grouped)) {
		const templ: Record<string, string[][]> = { people: [] };
		for (const pid of ids) {
			const person = g.v_person.get(pid as T_Id_V_Person);
			if (!person) {
				console.log("Person not found:", pid);
				continue;
			}
			templ.people.push([
				json(pid),
				json(person.name),
				json(person.websites ?? []),
			]);
		}
		const res = Templ.render("./person", templ);
		const path = alphaTsPath("people", prefix);
		await Bun.write(path, res);
	}
}

async function genPlatforms(g: PlangsGraph) {
	for (const [pid, p] of g.v_platform) {
		const templ: Record<string, string | string[] | string[][]> = {
			pfvid: json(pid),
			name: json(p.name),
			websites: json(p.websites ?? []),
		};
		const res = Templ.render("./platform", templ);
		const path = longTsPath("platforms", pid.split("+")[1]);
		await Bun.write(path, res);
	}
}

async function genTypeSystems(g: PlangsGraph) {
	const allIds = [...g.v_tsystem.keys()].sort((id0, id1) =>
		id0.toLowerCase().localeCompare(id1.toLowerCase()),
	);

	const grouped: Record<string, string[]> = groupBy(allIds, (id: string) =>
		id["tsys+".length].toLowerCase(),
	);

	for (const [prefix, ids] of Object.entries(grouped)) {
		const templ: Record<string, string[][]> = { licenses: [] };
		for (const tsid of ids) {
			const tsys = g.v_tsystem.get(tsid as T_Id_V_TypeSystem);
			if (!tsys) {
				console.log("Type system not found:", tsid);
				continue;
			}
			templ.licenses.push([
				json(tsid),
				json(tsys.name),
				json(tsys.websites ?? []),
			]);
		}

		const res = Templ.render("./type_system", templ);
		const path = alphaTsPath("type_systems", prefix);
		await Bun.write(path, res);
	}
}

// biome-ignore lint/suspicious/noExplicitAny: it's ok.
function json(v: any): string {
	if (typeof v === "string") return JSON.stringify(v);

	if (Array.isArray(v)) {
		if (v.length > 1) {
			v.sort();
			const uninndented = JSON.stringify(v);
			if (uninndented.length < 70) return uninndented;
			return JSON.stringify(v, null, 2);
		}
		return JSON.stringify(v);
	}

	return JSON.stringify(v, null, 2);
}

await generateAll();
