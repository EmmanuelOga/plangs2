/**
 * Process the wikipedia data we scrapped to .json files.
 */

import { Glob } from 'bun';
import { VID } from '../graph/vertex';
import { PlangsGraph } from '../plangs_graph';
import { Image, Link } from '../schemas';
import { WIKIPEDIA_URL, cachePath } from './wikipedia_json';

type DATA_ATTR =
    'designed_by' | 'developed_by' | 'developer' | 'developers' | 'dialects' | 'family' | 'filename_extension'
    | 'filename_extensions' | 'first_appeared' | 'founder' | 'implementation_language' | 'influenced'
    | 'influenced_by' | 'initial_release' | 'internet_media_type' | 'latest_release' | 'license'
    | 'major_implementations' | 'os' | 'paradigm' | 'paradigms' | 'platform' | 'preview_release'
    | 'scope' | 'stable_release' | 'type' | 'type_of_format' | 'typing_discipline' | 'website';

type DATA_TYPE = 'extensions' | 'links' | 'refs' | 'release' | 'text';

async function parseAll(g: PlangsGraph) {
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
    g.v_pl.merge(`pl+${pid}`, { name: title }, 'skipIfExists'); // We may already have the language, from an influence.

    const pl = g.v_pl.get(`pl+${pid}`);
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
    const pl = g.v_pl.get(pvid);
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
                
                if (g.v_pl.has(`pl+${impl}`) || pvid === `pl+${impl}`) {
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

                if (g.v_pl.has(`pl+${otherpl}`) || pvid === `pl+${otherpl}`) {
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

                    g.v_pl.merge(`pl+${whoId}`, { name: who.trim() }, 'skipIfExists');

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
                g.v_pl.merge(`pl+${who}`, {
                    name: title.trim(), websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                }, 'skipIfExists');

                if (key === 'influenced') {
                    g.e_influenced.connect({ from: pvid, to: `pl+${who}` });
                } else {
                    g.e_influenced.connect({ from: `pl+${who}`, to: pvid });
                }
            }
            return;

        case 'dialects':                // links, text
            if (type === 'text') {
                for (const dialect of val.split(',').filter((x: string) => !/[\(\)\[\]]/.test(x))) {
                    const did = toAlphaNum(dialect);
                    g.v_pl.merge(`pl+${did}`, { name: dialect.trim() }, 'skipIfExists');
                    g.e_dialect_of.connect({ from: `pl+${did}`, to: pvid });
                }
                return;
            }
            if (type !== 'links') return

            for (const { title, href } of val.filter(({ href }) => href.startsWith('/wiki'))) {
                const did = toAlphaNum(title);

                g.v_pl.merge(`pl+${did}`, {
                    name: title.trim(), websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                }, 'skipIfExists');

                g.e_dialect_of.connect({ from: `pl+${did}`, to: pvid });
            }
            return;

        case 'family':                  // links
            return;

        case 'license':                 // links
            return;

        case 'os':                      // links, text
            return;
        case 'platform':                // links
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
        case 'developer':               // refs, text, links
            return;
        case 'developers':              // text, links
            return;
        case 'founder':                 // refs, links
            return;

        case 'type_of_format':          // links, text
            return;

        case 'typing_discipline':       // links
            if (type === 'links') { }
            return;

        //////////////////////////////////////////////////////////////////////////////// 

        case 'first_appeared':          // release
            return;
        case 'initial_release':         // release
            return;
        case 'latest_release':          // release
            return;
        case 'preview_release':         // release
            return;
        case 'stable_release':          // release
            return;
    }
}

export async function buildGraph(): Promise<PlangsGraph> {
    const g = new PlangsGraph();
    await parseAll(g);
    const { vertices, edges, adjacency } = g.merge();
    return g;
}

function pushLinks(container: Link[], key: 'website', links: { title: string, kind: string, href: string }[]) {
    for (let { title, href } of links) {
        if (!title || !href) continue

        if (href.startsWith('//')) href = `https:${href}`;

        let url: URL;
        try {
            url = new URL(href); url.hostname = url.hostname.toLowerCase();
        } catch (e) {
            console.error(`WARNING: Invalid URL: ${href}`);
            continue;
        }

        let kind: Link['kind'] = 'other';
        if (href.startsWith('/wiki/')) {
            kind = 'wikipedia';
            href = WIKIPEDIA_URL + href;
        } else if (url.hostname.includes('wikipedia.org')) {
            kind = 'wikipedia';
        } else if (href.includes('git')) kind = 'repository';

        if (key === 'website' && kind !== 'wikipedia') {
            container.push({ kind: 'homepage', title, href });
        } else {
            container.push({ kind, title, href });
        }
    }
}

