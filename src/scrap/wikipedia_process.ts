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
        .replace(/\s+/g, ' ')
        .replace(/\s/g, '-')
        .replace(/\//g, 'Slash')
        .replace(/\\/g, 'Backslash')
        .replace(/\*/g, 'Star')
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

    g.v_pl.merge(`pl+${pid}`, { name: title }); // We may already have the language, from an influence.

    const pl = g.v_pl.get(`pl+${pid}`)!;

    if (!pl.websites || !pl.websites.some((l: Link) => l.href === wikiUrl)) {
        (pl.websites ??= []).push({ kind: 'wikipedia', title: title, href: wikiUrl });
    }

    if (image && (!pl.images || !pl.images?.some((i: Image) => i.url === image))) {
        (pl.images ??= []).push({ kind: 'logo', url: image });
    }

    for (const [attr, attrVal] of Object.entries(data)) {
        for (const [dataKey, dataVal] of Object.entries(attrVal)) {
            assign(g, `pl+${pid}`, attr as DATA_ATTR, dataKey as DATA_TYPE, dataVal);
        }
    }
}

function assign(g: PlangsGraph, pvid: VID<'pl'>, key: DATA_ATTR, type: DATA_TYPE, val: any) {
    const pl = g.v_pl.get(pvid)!;

    // Would be nice to map the reference to the exact edge it belongs to,
    // but that would need more careful scraping... maybe later.
    if (type === 'refs') {
        pl.references ??= {};
        (pl.references[key] ??= []).push(...val);
        return;
    }

    switch (key) {
        case 'website':
            if (type === 'links') pushLinks(pl.websites!, 'website', val);
            break;

        //////////////////////////////////////////////////////////////////////////////// 

        case 'filename_extension':      // extensions
        case 'filename_extensions':     // extensions
            break;

        case 'internet_media_type':     // text
            break;

        //////////////////////////////////////////////////////////////////////////////// 

        case 'major_implementations':
            if (type === 'links') {
                for (const { title, href } of val) {
                    if (!href.startsWith('/wiki')) { continue; } // Few occurrences.
                    const impl = toAlphaNum(title);

                    if (!g.v_impl.has(`impl+${impl}`)) {
                        g.v_impl.merge(`impl+${impl}`, {
                            name: title,
                            websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                        });
                    }

                    g.e_impl_pl.connect({ from: `impl+${impl}`, to: pvid });
                }
            }
            break;

        case 'implementation_language': // text, links
            if (type === 'links') {
                console.log(key, val);
            }
            break;

        case 'influenced':
        case 'influenced_by':
            if (type === 'text') {
                for (const who of val.split(', ')) {
                    const whoId = toAlphaNum(who);
                    if (!g.v_pl.has(`pl+${whoId}`)) g.v_pl.merge(`pl+${whoId}`, { name: who });
                    if (key === 'influenced') {
                        g.e_influenced.connect({ from: pvid, to: `pl+${whoId}` });
                    } else {
                        g.e_influenced.connect({ from: `pl+${whoId}`, to: pvid });
                    }
                }
                break;
            }

            if (type === 'links') {
                for (const { title, href } of val) {
                    if (!href.startsWith('/wiki')) { continue; } // Few occurrences.
                    const who = toAlphaNum(title);

                    if (!g.v_pl.has(`pl+${who}`)) {
                        g.v_pl.merge(`pl+${who}`, {
                            name: title,
                            websites: [{ kind: 'wikipedia', title, href: `${WIKIPEDIA_URL}${href}` }]
                        });
                    }

                    if (key === 'influenced') {
                        g.e_influenced.connect({ from: pvid, to: `pl+${who}` });
                    } else {
                        g.e_influenced.connect({ from: `pl+${who}`, to: pvid });
                    }
                }
            }
            break;

        case 'dialects':                // links, text
            break;
        case 'family':                  // links
            break;

        case 'license':                 // links
            break;

        case 'os':                      // links, text
            break;
        case 'platform':                // links
            break;

        case 'paradigm':                // links
        case 'paradigms':               // links
            break;

        case 'scope':                   // links, text
            break;
        case 'type':                    // links
            break;

        case 'designed_by':             // text, links
            break;
        case 'developed_by':            // links
            break;
        case 'developer':               // refs, text, links
            break;
        case 'developers':              // text, links
            break;
        case 'founder':                 // refs, links
            break;

        case 'type_of_format':          // links, text
            break;

        case 'typing_discipline':       // links
            if (type === 'links') { }
            break;

        //////////////////////////////////////////////////////////////////////////////// 

        case 'first_appeared':          // release
            break;
        case 'initial_release':         // release
            break;
        case 'latest_release':          // release
            break;
        case 'preview_release':         // release
            break;
        case 'stable_release':          // release
            break;
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

