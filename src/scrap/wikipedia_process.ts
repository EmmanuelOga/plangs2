/**
 * Process the wikipedia data we scrapped to .json files.
 */

import { Glob } from 'bun';
import type { VID } from '../graph/vertex';
import { PlangsGraph } from '../plangs_graph';
import type { Image, Link, Release } from '../schemas';
import { WIKIPEDIA_URL, cachePath } from './wikipedia_json';

type DATA_ATTR =
    'designed_by' | 'developed_by' | 'developer' | 'developers' | 'dialects' | 'family' | 'filename_extension'
    | 'filename_extensions' | 'first_appeared' | 'founder' | 'implementation_language' | 'influenced'
    | 'influenced_by' | 'initial_release' | 'internet_media_type' | 'latest_release' | 'license'
    | 'major_implementations' | 'os' | 'paradigm' | 'paradigms' | 'platform' | 'preview_release'
    | 'scope' | 'stable_release' | 'type' | 'type_of_format' | 'typing_discipline' | 'website';

type DATA_TYPE = 'extensions' | 'links' | 'refs' | 'release' | 'text';

function addTsys(g: PlangsGraph, name: string, wiki: Link['href']) {
    g.v_tsystem.set(
        `tsys+${name.toLowerCase()}`,
        { name, websites: [{ title: '${name} Type System', href: `${WIKIPEDIA_URL}${wiki}`, kind: 'wikipedia' }] });
}


async function parseAll(g: PlangsGraph) {
    addTsys(g, 'Affine', '/wiki/affine_type_system');
    addTsys(g, 'Dependent', '/wiki/dependent_type');
    addTsys(g, 'Duck', '/wiki/duck_typing');
    addTsys(g, 'Dynamic', '/wiki/dynamic_typing');
    addTsys(g, 'Flow-Sensitive', '/wiki/flow-sensitive_typing');
    addTsys(g, 'Generic', '/wiki/generic_programming');
    addTsys(g, 'Gradual', '/wiki/gradual_typing');
    addTsys(g, 'Hindley-Milner', '/wiki/hindley%e2%80%93milner_type_system');
    addTsys(g, 'Inferred', '/wiki/type_inference');
    addTsys(g, 'Latent', '/wiki/latent_typing');
    addTsys(g, 'Manifest', '/wiki/manifest_typing');
    addTsys(g, 'Nominative', '/wiki/nominative_type_system');
    addTsys(g, 'Object-Oriented', '/wiki/object_(computer_science)');
    addTsys(g, 'Optional', '/wiki/optional_typing');
    addTsys(g, 'Parametric', '/wiki/parametric_polymorphism');
    addTsys(g, 'Polymorphic', '/wiki/polymorphism_(computer_science)');
    addTsys(g, 'Safe', '/wiki/type_safety');
    addTsys(g, 'Static', '/wiki/static_typing');
    addTsys(g, 'Strong', '/wiki/strong_typing');
    addTsys(g, 'Structural', '/wiki/structural_type_system');
    addTsys(g, 'Uniqueness', '/wiki/uniqueness_type');
    addTsys(g, 'Weak', '/wiki/weak_typing');

    const glob = new Glob('**/*.json');
    for await (const path of glob.scan(cachePath('json'))) {
        const j = JSON.parse(await Bun.file(cachePath('json', path)).text());
        const title: string = j.title;
        const image: string = j.image
        const wikiUrl: string = j.wikiUrl;
        const data: Record<DATA_ATTR, Record<DATA_TYPE, any>> = j.data;
        processLanguage(g, title, wikiUrl, image, data);
    }
    console.log('Done processing languages.', new Date());
}

function toAlphaNum(s: string) {
    return s.trim()
        // biome-ignore lint/suspicious/noMisleadingCharacterClass: removes accents/diacritics.
        .normalize("NFD").replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s/g, '-')
        .replace('.', 'dot')
        .replace(/\//g, 'Slash')
        .replace(/\\/g, 'Backslash')
        .replace(/[\*]/g, 'Star')
        .replace(/\+/g, 'P')
        .replace(/\#/g, 'Sharp')
        .replace(/[\/\:]/g, '-')
        .replace(/[^a-zA-Z0-9]/g, '-');
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
    const pl = g.v_plang.get(pvid);
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
            pl.websites ??= [];
            pushLinks(pl.websites, 'website', val);
            return;

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

        case 'paradigm':                // links
        case 'paradigms':               // links
            return;

        case 'scope':                   // links, text
            return;
        case 'type':                    // links
            return;

        case 'designed_by':             // text, links
            return;
        case 'developed_by':            // links
            return;
        case 'developer':               // text, links
            return;
        case 'developers':              // text, links
            return;
        case 'founder':                 // links
            return;

        case 'type_of_format': // Only a handful "scripting", not very useful.
            return;

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

        //////////////////////////////////////////////////////////////////////////////// 

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
    }
}

export async function buildGraph(): Promise<PlangsGraph> {
    const g = new PlangsGraph();
    await parseAll(g);
    return g;
}

function pushLinks(container: Link[], key: 'website', links: { title: string, kind: string, href: string }[]) {
    for (let { title, href } of links) {
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

        let kind: Link['kind'] = 'other';
        if (url.hostname.toLowerCase().includes('wikipedia.org')) {
            kind = 'wikipedia';
        } else if (href.includes('git')) kind = 'repository';

        if (key === 'website' && kind !== 'wikipedia') {
            container.push({ kind: 'homepage', title, href });
        } else {
            container.push({ kind, title, href });
        }
    }
}

