/**
 * Process the wikipedia data we scrapped to .json files.
 */

import { Glob } from 'bun';
import type { VID } from '../graph/vertex';
import { PlangsGraph } from '../plangs_graph';
import type { Image, Link, Release, V_Plang } from '../schemas';
import { toAlphaNum } from '../util';
import { WIKIPEDIA_URL, cachePath } from './wikipedia_json';

type DATA_ATTR =
    'designed_by' | 'developed_by' | 'developer' | 'developers' | 'dialects' | 'family' | 'filename_extension'
    | 'filename_extensions' | 'first_appeared' | 'founder' | 'implementation_language' | 'influenced'
    | 'influenced_by' | 'initial_release' | 'internet_media_type' | 'latest_release' | 'license'
    | 'major_implementations' | 'os' | 'paradigm' | 'paradigms' | 'platform' | 'preview_release'
    | 'scope' | 'stable_release' | 'type' | 'type_of_format' | 'typing_discipline' | 'website';

type DATA_TYPE = 'extensions' | 'links' | 'refs' | 'release' | 'text';

/**
 * Returns a graph out of reading the cached JSON files from the Wikipedia scraping.
 */
export async function parseAll(g: PlangsGraph) {
    function addTsys(name: string, wiki: Link['href']) {
        g.v_tsystem.set(
            `tsys+${name.toLowerCase()}`,
            { name, websites: [{ title: '${name} Type System', href: `${WIKIPEDIA_URL}${wiki}`, kind: 'wikipedia' }] });
    }

    addTsys('Affine', '/wiki/affine_type_system');
    addTsys('Dependent', '/wiki/dependent_type');
    addTsys('Duck', '/wiki/duck_typing');
    addTsys('Dynamic', '/wiki/dynamic_typing');
    addTsys('Flow-Sensitive', '/wiki/flow-sensitive_typing');
    addTsys('Generic', '/wiki/generic_programming');
    addTsys('Gradual', '/wiki/gradual_typing');
    addTsys('Hindley-Milner', '/wiki/hindley%e2%80%93milner_type_system');
    addTsys('Inferred', '/wiki/type_inference');
    addTsys('Latent', '/wiki/latent_typing');
    addTsys('Manifest', '/wiki/manifest_typing');
    addTsys('Nominative', '/wiki/nominative_type_system');
    addTsys('Object-Oriented', '/wiki/object_(computer_science)');
    addTsys('Optional', '/wiki/optional_typing');
    addTsys('Parametric', '/wiki/parametric_polymorphism');
    addTsys('Polymorphic', '/wiki/polymorphism_(computer_science)');
    addTsys('Safe', '/wiki/type_safety');
    addTsys('Static', '/wiki/static_typing');
    addTsys('Strong', '/wiki/strong_typing');
    addTsys('Structural', '/wiki/structural_type_system');
    addTsys('Uniqueness', '/wiki/uniqueness_type');
    addTsys('Weak', '/wiki/weak_typing');

    const glob = new Glob('**/*.json');
    for await (const path of glob.scan(cachePath('json'))) {
        const j = JSON.parse(await Bun.file(cachePath('json', path)).text());
        const title: string = j.title;
        const image: string = j.image
        const wikiUrl: string = j.wikiUrl;
        const data: Record<DATA_ATTR, Record<DATA_TYPE, any>> = j.data;
        processLanguage(g, title, wikiUrl, image, data);
    }
}

function processLanguage(
    g: PlangsGraph,
    title: string,
    wikiUrl: string,
    image: string | undefined,
    data: Record<DATA_ATTR, Record<DATA_TYPE, any>>
) {
    const pid = toAlphaNum(title);
    g.v_plang.merge(`pl+${pid}`, { name: title }, 'skipIfExists'); // We may already have the language, from an influence.

    const pl = g.v_plang.get(`pl+${pid}`);
    if (!pl) throw new Error(`Language not found: ${pl}`);

    if (!pl.websites || !pl.websites.some((l: Link) => l.href === wikiUrl)) {
        pl.websites ??= [];
        pl.websites.push({ kind: 'wikipedia', title: title, href: wikiUrl });
    }

    if (image && (!pl.images || !pl.images?.some((i: Image) => i.url === image))) {
        pl.images ??= [];
        pl.images.push({ kind: 'logo', url: image });
    }

    for (const [attr, attrVal] of Object.entries(data)) {
        for (const [dataKey, dataVal] of Object.entries(attrVal)) {
            assign(g, `pl+${pid}`, attr as DATA_ATTR, dataKey as DATA_TYPE, dataVal);
        }
    }
}

function assign(g: PlangsGraph, pvid: VID<'pl'>, key: DATA_ATTR, type: DATA_TYPE, val: any) {
    const pl = g.v_plang.get(pvid) as Partial<V_Plang>;
    if (!pl) throw new Error(`Language not found: ${pl}`);

    // Would be nice to map the reference to the exact edge it belongs to,
    // but that would need more careful scraping... maybe later.
    if (type === 'refs') {
        pl.references ??= {};
        pl.references[key] ??= []
        pl.references[key].push(...val);
        return;
    }

    switch (key) {
        case 'website':
            if (type !== 'links') return
            {
                pl.websites ??= [];
                for (let { title, href } of val) {
                    if (!title || !href) continue

                    if (href.startsWith('//')) href = `https:${href}`;
                    if (href.startsWith('/wiki')) href = WIKIPEDIA_URL + href;

                    let url: URL;
                    try {
                        url = new URL(href); url.hostname = url.hostname.toLowerCase();
                    } catch (e) {
                        console.error(`WARNING: Invalid URL: ${href}`);
                        continue;
                    }

                    let kind: Link['kind'];
                    if (url.hostname.toLowerCase().includes('wikipedia.org')) {
                        kind = 'wikipedia';
                    } else if (href.includes('git')) kind = 'repository';
                    else kind = 'homepage';

                    const link: Link = { kind, title, href };
                    pl.websites.push(link);
                }
                return;
            }

        case 'filename_extension':
        case 'filename_extensions':
            pl.extensions ??= [];
            pl.extensions.push(...val.filter((x: string) => x.length < 8));
            return;

        case 'internet_media_type':
            return; // Ignore.

        case 'major_implementations':
            if (type !== 'links') return;
            for (const { title, href } of val.filter(({ href }) => href.startsWith('/wiki'))) {
                const impl = toAlphaNum(title);

                if (g.v_plang.has(`pl+${impl}`) || pvid === `pl+${impl}`) {
                    pl.selfHosted = true;
                    continue;
                }

                g.v_impl.merge(`impl+${impl}`, {
                    name: title.trim(), websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                }, 'skipIfExists');

                g.e_implements.connect({ from: `impl+${impl}`, to: pvid });
            }
            return;

        case 'implementation_language':
            if (type !== 'links') return;

            for (const { title, href } of val.filter(({ href }) => href.startsWith('/wiki'))) {
                const otherpl = toAlphaNum(title);

                if (g.v_plang.has(`pl+${otherpl}`) || pvid === `pl+${otherpl}`) {
                    pl.selfHosted = true;
                    continue;
                }

                g.v_impl.merge(`impl+${otherpl}`, {
                    name: title.trim(), websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                }, 'skipIfExists');

                g.e_implemented_with.connect({ from: pvid, to: `pl+${otherpl}` });
            }
            return;

        case 'influenced':
        case 'influenced_by':
            if (type === 'text') {
                for (const who of val.split(', ')) {
                    const whoId = toAlphaNum(who);

                    g.v_plang.merge(`pl+${whoId}`, { name: who.trim() }, 'skipIfExists');

                    if (key === 'influenced') {
                        g.e_influenced.connect({ from: pvid, to: `pl+${whoId}` });
                    } else {
                        g.e_influenced.connect({ from: `pl+${whoId}`, to: pvid });
                    }
                }
                return;
            }
            if (type !== 'links') return;

            for (const { title, href } of val.filter(({ href }) => href.startsWith('/wiki'))) {
                const who = toAlphaNum(title);
                g.v_plang.merge(`pl+${who}`, {
                    name: title.trim(), websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                }, 'skipIfExists');

                if (key === 'influenced') {
                    g.e_influenced.connect({ from: pvid, to: `pl+${who}` });
                } else {
                    g.e_influenced.connect({ from: `pl+${who}`, to: pvid });
                }
            }
            return;

        case 'dialects':
        case 'family':
            if (type === 'text') {
                for (const dialect of val.split(',').filter((x: string) => !/[\(\)\[\]]/.test(x))) {
                    const did = toAlphaNum(dialect);
                    g.v_plang.merge(`pl+${did}`, { name: dialect.trim() }, 'skipIfExists');
                    if (key === 'dialects') {
                        g.e_dialect_of.connect({ from: `pl+${did}`, to: pvid });
                    } else {
                        g.e_dialect_of.connect({ from: pvid, to: `pl+${did}`, });
                    }
                }
                return;
            }
            if (type !== 'links') return

            for (const { title, href } of val.filter(({ href }) => href.startsWith('/wiki'))) {
                const did = toAlphaNum(title);

                g.v_plang.merge(`pl+${did}`, {
                    name: title.trim(), websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                }, 'skipIfExists');

                if (key === 'dialects') {
                    g.e_dialect_of.connect({ from: `pl+${did}`, to: pvid });
                } else {
                    g.e_dialect_of.connect({ from: pvid, to: `pl+${did}` });
                }
            }
            return;

        case 'license':                 // links
            if (type !== 'links') return
            for (const { title, href } of val.filter(({ href }) => href.startsWith('/wiki'))) {
                const lic = toAlphaNum(title);
                g.v_license.merge(`license+${lic}`, {
                    name: title.trim(), websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                }, 'skipIfExists');
                g.e_has_license.connect({ from: pvid, to: `license+${lic}` });
            }
            return;

        case 'os':
        case 'platform':
            if (type !== 'links') return;
            for (const { title, href } of val.filter(({ href }) => href.startsWith('/wiki'))) {
                const platf = toAlphaNum(title);
                g.v_platform.merge(`platf+${platf}`, {
                    name: title.trim(), websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                }, 'skipIfExists');
                g.e_supports_platf.connect({ from: pvid, to: `platf+${platf}` });
            }
            return;

        case 'paradigm':
        case 'paradigms':
            if (type !== 'links') return;
            for (const { href, title } of val) {
                for (let name of title.split(',').map((s: string) => s.replace('programming', '').trim().toLowerCase())) {
                    if (name.includes('multi')) name = 'multi-paradigm';
                    if (name.includes('procedural')) name = 'imperative';
                    if (name.includes('generics')) name = 'generic';
                    if (name.includes('declarative')) name = 'declarative';
                    if (name.includes('visual') || name.includes('block-')) name = 'visual';
                    if (name.includes('parallel')) name = 'parallel';
                    if (name.includes('stack')) name = 'stack-oriented';
                    if (name.includes('functional')) name = 'functional';

                    const para = toAlphaNum(name);
                    g.v_paradigm.merge(`para+${name}`, {
                        name: name, websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                    }, 'skipIfExists');
                    g.e_plang_para.connect({ from: pvid, to: `para+${para}` });
                }
            }
            return;

        case 'scope':
            {
                function processScope(scopes: string): void {
                    if (scopes.includes('lexical')) { pl.scoping ??= []; pl.scoping.push('lexical'); }
                    if (scopes.includes('static')) { pl.scoping ??= []; pl.scoping.push('static'); }
                    if (scopes.includes('dynamic')) { pl.scoping ??= []; pl.scoping.push('dynamic'); }
                }
                if (type === 'text') processScope(val);
                if (type !== 'links') return;
                for (const { title, href } of val) { processScope(title); }
            }
            return;

        case 'type': // links
            // Things lile "educational", "markup", etc... not very useful (also present in very few languages).
            return;

        case 'founder':
        case 'developer':
        case 'designed_by':
        case 'developed_by':
        case 'developers':
            {

                function addPerson(name: string, link?: Link) {
                    const pid = toAlphaNum(name);
                    g.v_person.merge(`person+${pid}`, link ? { name, websites: [link] } : { name }, 'skipIfExists');
                    g.e_people.merge(
                        { from: `person+${pid}`, to: pvid },
                        { role: key === 'developers' ? 'contributor' : 'designer' }, 'skipIfExists');
                }

                if (type === 'text') {
                    for (const who of extractNames(val)) addPerson(who);
                } else if (type === 'links') {
                    for (const { title, href } of val.filter(({ href }) => href.startsWith('/wiki'))) {
                        const names = extractNames(title);
                        if (names.length !== 1) continue;
                        addPerson(names[0], { title, href, kind: 'wikipedia' });
                    }
                }
                return;
            }

        case 'typing_discipline':
            {
                function typeFromText(str: string): void {
                    for (const t of str.split(',').map((s: string) => s.toLowerCase())) {
                        let tsys: string | undefined;

                        if (t.includes('affine')) tsys = 'affine';
                        else if (t.includes('dependent')) tsys = 'dependent';
                        else if (t.includes('duck')) tsys = 'duck';
                        else if (t.includes('dynamic')) tsys = 'dynamic';
                        else if (t.includes('flow')) tsys = 'flow-sensitive';
                        else if (t.includes('generic')) tsys = 'generic';
                        else if (t.includes('gradual')) tsys = 'gradual';
                        else if (t.includes('hindley-milner')) tsys = 'hindley-milner';
                        else if (t.includes('implicit') || t.includes('infer')) tsys = 'inferred';
                        else if (t.includes('latent')) tsys = 'latent';
                        else if (t.includes('manifest')) tsys = 'manifest';
                        else if (t.includes('nomin')) tsys = 'nominative';
                        else if (t.includes('object')) tsys = 'object-oriented';
                        else if (t.includes('optional')) tsys = 'optional';
                        else if (t.includes('parametric')) tsys = 'parametric';
                        else if (t.includes('polymorphic')) tsys = 'polymorphic';
                        else if (t.includes('safe')) tsys = 'safe';
                        else if (t.includes('static')) tsys = 'static';
                        else if (t.includes('strong')) tsys = 'strong';
                        else if (t.includes('structural')) tsys = 'structural';
                        else if (t.includes('uniqueness')) tsys = 'uniqueness';
                        else if (t.includes('weak')) tsys = 'weak';

                        if (tsys) g.e_plang_tsys.connect({ from: pvid, to: `tsys+${tsys}` });
                    }
                }
                if (type === 'text') typeFromText(val);
                else if (type === 'links') for (const { title } of val) typeFromText(title);
            }
            return;

        case 'first_appeared':
        case 'initial_release':
        case 'latest_release':
        case 'preview_release':
        case 'stable_release':
            {
                const KINDS: Record<string, Release['kind']> = {
                    'first_appeared': 'first',
                    'initial_release': 'first',
                    'latest_release': 'other',
                    'preview_release': 'preview',
                    'stable_release': 'stable',
                }
                const rel: Release = {
                    version: val.version ?? 'unknown',
                    date: val.year ? `${val.year}-01-01` : val.date,
                    kind: KINDS[key],
                };
                pl.releases ??= [];
                pl.releases.push(rel);
            }
            return;

        case 'type_of_format': // Only a handful, lke "scripting", not very useful.
            return;
    }
}

const NON_PEOPLE = /\d|eth|commercial|community|consortium|hewlett-packard|honeywell|labs|ansi|center|academ.*|harvard|mit\b|ieee|ibm|huawei|xerox|wso2|w3c|iso\b|inria|institute|research|computer|science|foundation|tech.+|polytech.*|university|comittee|jetbrains|sap\b|sas\b|institute|original|contributors|others|open|source|students|nvidia|organization|group|comunity|project|corp|chair|galois|foundation|ltd|tech|core|team|inc|systems|university|software/i;

function extractNames(str: string): string[] {
    return str
        .replace(/et\s+al.*/, '')
        .split(/,|&|;|\sand\s/)
        .map((s: string) => {
            const match = s.match(/([^\()]+)\).*/i);
            return (match ? match[1] : s).trim();
        })
        .filter((s: string) => s.length > 5 && s.length < 25)
        .filter((s: string) => s.includes(' '))
    // .filter((s: string) => !NON_PEOPLE.test(s))
}