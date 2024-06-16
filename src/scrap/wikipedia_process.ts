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
}

function toAlphaNum(s: string) {
    return s.trim()
        .replace(/\+/g, '-plus')
        .replace(/\#/g, '-sharp')
        .replace(/[\/\:]/g, '-')
        .replace(/[^a-zA-Z0-9]/g, '');
}

function processLanguage(
    g: PlangsGraph,
    title: string,
    wikiUrl: string,
    image: string | undefined,
    data: Record<DATA_ATTR, Record<DATA_TYPE, any>>
) {
    const pid = toAlphaNum(title);
    const images: Image[] = image ? [{ kind: 'logo', url: image }] : [];
    const websites: Link[] = [{ kind: 'wikipedia', title: title, href: wikiUrl }];

    g.v_pl.merge(`pl+${pid}`, { name: title, images, websites });

    for (const [attr, attrVal] of Object.entries(data)) {
        for (const [dataKey, dataVal] of Object.entries(attrVal)) {
            assign(g, `pl+${pid}`, attr as DATA_ATTR, dataKey as DATA_TYPE, dataVal);
        }
    }
}

function assign(g: PlangsGraph, pvid: VID<'pl'>, key: DATA_ATTR, type: DATA_TYPE, val: any) {
    const pl = g.v_pl.get(pvid)!;

    switch (key) {
        case 'designed_by':             // text, links, refs
            break;
        case 'developed_by':            // links
            break;
        case 'developer':               // refs, text, links
            break;
        case 'developers':              // text, links
            break;
        case 'dialects':                // links, text, refs
            break;
        case 'family':                  // links
            break;
        case 'filename_extension':      // extensions
            break;
        case 'filename_extensions':     // extensions, refs
            break;
        case 'first_appeared':          // release, refs
            break;
        case 'founder':                 // refs, links
            break;
        case 'implementation_language': // text, links, refs
            break;

        case 'influenced':              // text, refs, links
            break;
        case 'influenced_by':           // links, refs
            break;

        case 'initial_release':         // release
            break;
        case 'internet_media_type':     // text
            break;
        case 'latest_release':          // release
            break;
        case 'license':                 // links, refs
            break;
        case 'major_implementations':   // refs, links, text
            break;
        case 'os':                      // links, refs, text
            break;
        case 'paradigm':                // links, refs
            break;
        case 'paradigms':               // links, refs
            break;
        case 'platform':                // links, refs
            break;
        case 'preview_release':         // release, refs
            break;
        case 'scope':                   // links, text
            break;
        case 'stable_release':          // refs, release
            break;
        case 'type':                    // links
            break;

        case 'type_of_format':          // links, text
            break;

        case 'typing_discipline':       // refs, links
            if (type === 'refs') { }
            if (type === 'links') { }
            break;

        case 'website':
            if (type === 'links') pushLinks(pl.websites!, 'website', val);
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

