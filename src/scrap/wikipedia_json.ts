/**
 * Simple Wikipedia crawler for programming language pages.
 */

import { unlinkSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { type Cheerio, type Element, load } from 'cheerio';

export const WIKIPEDIA_URL = 'https://en.wikipedia.org';

const START_PAGES = [
    '/wiki/List_of_programming_languages',
    '/wiki/Category:C_programming_language_family',
];

const SHORTLIST = [
    '/wiki/C%2B%2B',
    '/wiki/C_(programming_language)',
    '/wiki/Crystal_(programming_language)',
    '/wiki/Go_(programming_language)',
    '/wiki/Julia_(programming_language)',
    '/wiki/Lua_(programming_language)',
    '/wiki/Nim_(programming_language)',
    '/wiki/PHP',
    '/wiki/Perl',
    '/wiki/Python_(programming_language)',
    '/wiki/Red_(programming_language)',
    '/wiki/V_(programming_language)',
    '/wiki/Zig_(programming_language)',
];

// Some keys that seem consistent across pages.
const INFOBOX_KEYS = new Set<string>([
    'available_in', 'bits', 'defunct', 'design', 'designed_by', 'designer', 'developed_by', 'developer',
    'developers', 'dialects', 'discontinued', 'encoding', 'endianness', 'family', 'filename_extension', 'filename_extensions',
    'final_release', 'first_appeared', 'floating_point', 'founded', 'founder', 'general-purpose', 'implementation_language',
    'industry', 'influenced', 'influenced_by', 'initial_release', 'internet_media_type', 'introduced', 'kernel_type', 'key_people',
    'latest_release', 'license', 'major_implementations', 'official_website', 'operating_system', 'original_authors', 'os',
    'os_family', 'paradigm', 'paradigms', 'platform', 'platforms', 'predecessor', 'preview_release', 'products', 'release_date',
    'repository', 'revenue', 'scope', 'size', 'software_used', 'source_model', 'stable_release', 'successor', 'type',
    'type_of_format', 'typing_discipline', 'website', 'working_state', 'written_in',
]);

// Arbitrary.
const SKIP = new Set<string>([
    '.QL', 'A+', 'ABC', 'AIMACO', 'ALF', 'ALGOL 58', 'ALGOL 60', 'ALGOL 68', 'ALGOL W', 'AMPL', 'AWK', 'AdvPL', 'Agda', 'AgentCubes', 'Aldor', 'Alef', 'Alice', 'Alma-0', 'Analitik', 'Arc', 'ArkTS', 'AutoIt', 'AutoLISP', 'A♯', 'B', 'BASIC', 'BASIC-PLUS', 'BCPL', 'BETA', 'BLISS', 'BeanShell', 'Befunge', 'Boomerang', 'Bosque', 'Brainfuck', 'C*', 'C++Builder', 'C--', 'C/AL', 'CHILL', 'CLU', 'CMS-2', 'COBOL', 'COMAL', 'COMTRAN', 'CPL', 'Caml', 'Catrobat', 'Ceylon', 'Chapel', 'Charm', 'Ciao', 'Claire', 'Clean', 'CorVision', 'Coral 66', 'Cuneiform', 'Curl', 'Curry', 'Cyclone', 'DIBOL', 'DRAKON', 'Darwin', 'Draco', 'E', 'Ease', 'Eiffel', 'Elan', 'Emerald', 'Epigram', 'Etoys', 'EuLisp', 'Euclid', 'Euler', 'Euphoria', 'Ezhil', 'F language', 'F*', 'FL', 'FLOW-MATIC', 'FOCAL', 'FP', 'Fantom', 'FpgaC', 'GW-BASIC', 'Gambas', 'Genie', 'Go!', 'Gosu', 'Hack', 'Handel-C', 'Hop', 'Hume', 'HyperTalk', 'IMP', 'ISLISP', 'ISWIM', 'Icon', 'J', 'JOVIAL', 'JS++', 'Join Java', 'Joule', 'Joy', 'KRC', 'Kawa', 'Language H', 'Lasso', 'Le Lisp', 'Lean', 'Limbo', 'Lisp', 'Little b', 'LiveScript', 'Logo', 'Logtalk', 'Lucid', 'MAD', 'MATH-MATIC', 'ML', 'MSX BASIC', 'MUMPS', 'Maclisp', 'Malbolge', 'Mercury', 'Mesa[1]', 'Mirah', 'Miranda', 'Modula', 'Modula-2', 'Modula-2+', 'Modula-3', 'MultiLisp', 'NEWP', 'Napier88', 'Nemerle', 'NetRexx', 'Newspeak', 'Newsqueak', 'Nial', 'Nu', 'Oaklisp', 'Oberon', 'Oberon-2', 'Obliq', 'Opa', 'OpenLisp', 'OptimJ', 'Orc', 'Orwell', 'Oxygene', 'Oz', 'PCASTL', 'PL/C', 'PL/I', 'PL/M', 'PL360', 'POP-11', 'POP-2', 'PROMAL', 'PS-algol', 'ParaSail', 'Pict', 'Pipelines', 'Pizza', 'Plankalkül', 'Plus', 'Prograph', 'ProvideX', 'Pyomo', 'Q#', 'QuakeC', 'R', 'RAPID', 'RPL', 'RTL/2', 'Rapira', 'Ratfor', 'Rexx', 'S', 'S3', 'SAC', 'SAIL', 'SASL', 'SCM', 'SETL', 'SIOD', 'SISAL', 'SKILL', 'SNOBOL', 'SP/k', 'SPARK', 'SQL/PSM', 'STOIC', 'Sather', 'Scratch', 'Script.NET', 'Seed7', 'Self', 'SenseTalk', 'Short Code', 'Simula', 'Snap!', 'Source', 'Split-C', 'StarLogo', 'Strongtalk', 'Superplan', 'TELCOMP', 'TRAC', 'TTM', 'Tea', 'UCBLogo', 'Unicon', 'VHDL', 'Verse', 'X10', 'XOTcl', 'XSB', 'Xtend', 'ZPL', 'Zonnon', 'eC', 'newLISP', 'occam', 'occam-π', 'q', 'rc', 'sed', 'urbiscript', 'قلب', 'bs', 'PL/pgSQL',
]);


const CACHE_PATH = Bun.fileURLToPath(`file:///${__dirname}/../../.cache`)

export function cachePath(type: string, path = ''): string {
    return Bun.fileURLToPath(`file:///${CACHE_PATH}/${type}/${path}`);
}

export function toBasename(str: string, type = 'html'): string {
    return `${str.replace(/\/|\\|\:/g, '_')}.${type}`;
}

// Keep track of some state.
const STATE = {
    reqCount: 0,
    fetchCache: new Map<string, string>(),
    wikiPathScraped: new Set<string>(),
    plangs: new Map<string, any>(),
}

/**
 * Fetches a page, caching both to disk and to memory.
 */
async function fetchWiki(wikiPath: string): Promise<string> {
    // biome-ignore lint/style/noNonNullAssertion: the map _has_ the key.
    if (STATE.fetchCache.has(wikiPath)) return STATE.fetchCache.get(wikiPath)!;

    const cacheFile = cachePath('wiki', toBasename(wikiPath, 'html'));
    const file = Bun.file(cacheFile);
    if (await file.exists()) {
        const text = await file.text();
        STATE.fetchCache.set(wikiPath, text);
        return text;
    }

    const fullUrl = `${WIKIPEDIA_URL}${wikiPath}`;
    console.info(`Fetching ${fullUrl}`);
    STATE.reqCount++;

    const response = await fetch(fullUrl);
    if (response.ok === false) throw new Error(`Failed to fetch ${wikiPath}`);

    const text = await response.text();
    Bun.write(cacheFile, text);
    STATE.fetchCache.set(wikiPath, text);

    return text;
}

// Do something with the language data.
function emit({ title, wikiUrl, img, data }: { title: string, wikiUrl: string, img: string, data: {} }) {
    STATE.plangs.set(title, { title, wikiUrl, img, data });
}

async function scrapLanguagePage(wikiPath: string) {
    if (STATE.wikiPathScraped.has(wikiPath)) return;
    STATE.wikiPathScraped.add(wikiPath);

    const $ = load(await fetchWiki(wikiPath));
    const $infobox = $('table.infobox');
    if ($infobox.length === 0) return;

    const title = $infobox.find('.infobox-title.summary').text();

    if (!title || title.length > 10 || !/programming\s+language/ig.test($('#catlinks').text())) {
        return;
    }

    const img = cleanImgUrl($infobox.find('.infobox-image img').attr('src'));

    function processA($a: Cheerio<Element>): { href?: string, title?: string } {
        return { href: $a.attr('href')?.trim(), title: $a.text().trim() };
    }

    function getVersion(str: string): { version: string; } | undefined {
        const match = str.match(/(\d+\.\d+(\.\d+)*)/);
        if (match?.[0]) return { version: match[0] };
    }

    function getMonth(str: string): number {
        const s = str.toLocaleLowerCase();
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        for (const [i, p] of months.entries()) {
            if (s.includes(p)) return i + 1;
        }
        return 0;
    }

    function date(year: number, month: number, day: number): { date: string; } | undefined {
        if (year < 1900 || year > 2100) return undefined;
        if (month < 1 || month > 12) return undefined;
        if (day < 1 || day > 31) return undefined;
        return { date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}` };
    }

    function getDate(str: string): { date: string; } | { year: number; } | undefined {
        let match = str.match(/(\d{4}).(\d{2}).(\d{2})/);
        if (match) {
            const d = date(Number.parseInt(match[1]), Number.parseInt(match[2]), Number.parseInt(match[3]));
            if (d) return d;
        }

        match = str.match(/(\d+)\s+([a-zA-Z]+)\s+(\d{4})/);
        if (match) {
            const d = date(Number.parseInt(match[1]), getMonth(match[2]), Number.parseInt(match[3]));
            if (d) return d;
        }

        match = str.match(/(\d{4})/);
        if (match) return { year: Number.parseInt(match[1]) };
    }

    function unquote(title: string): string {
        if (title.startsWith('"') && title.endsWith('"')) return title.slice(1, -1);
        return title;
    }

    function extractData(type: string, el: Cheerio<Element>): {} {
        // biome-ignore lint/suspicious/noExplicitAny: who knows what the data is.
        const result: { [index: string]: any } = {};

        const sup = el.find('sup').remove();
        const links = el.find('a').remove();
        el.find('br').replaceWith(',');

        for (const a of sup.find('a')) {
            const id = $(a).attr('href');
            const [ref1, ref2] = $(id).find('a')
                .map((i, a) => processA($(a))).toArray()
                .filter((a) => a.href?.startsWith('http'));
            // When archived the first contains the title, and the second the URL.
            if (ref1 && ref2 && ref2.title?.toLowerCase().includes('archived')) {
                ref2.title = unquote(ref1.title ?? '');
                if (ref2.title) {
                    result.refs ??= []
                    result.refs.push(ref2);
                }
            } else if (ref1) {
                ref1.title = unquote(ref1.title ?? '');
                if (ref1.title) {
                    result.refs ??= []
                    result.refs.push(ref1);
                }
            }
        }

        if (type.includes('release') || type.includes('appear')) {
            const data = { ...getDate(el.text()), ...getVersion(el.text()) };
            if (Object.keys(data).length > 0) result.release = data;
        } else if (type.includes('extension')) {
            const data = el.text().split(',').map((s) => s.trim()).filter(Boolean);
            if (data.length) result.extensions = data;
        } else {
            if (links.length) {
                result.links = links
                    .map((i, a) => processA($(a)))
                    .toArray().filter((a) => a.href);
            } else {
                result.text = el.text().replace((/\n/g), ' ');
            }
        }

        return result;
    }

    function toKey(str: string): string {
        return str
            .trim()
            .toLocaleLowerCase()
            .replace(/\s/g, '_')
            .replace(/\(|\)/g, '');
    }

    const infobox = {};

    for (const row of $infobox.find('tr')) {
        try {
            const $row = $(row);
            // Option (1): tr > td.key , td.val
            const key = toKey($row.find('.infobox-label').text());
            if (key) {
                if (!INFOBOX_KEYS.has(key)) continue;
                infobox[key] = extractData(key, $row.find('.infobox-data'));
            } else {
                // Option (2): tr.key tr.val
                const key = toKey($row.find('.infobox-header').text());
                if (!INFOBOX_KEYS.has(key)) continue;
                const $elem = $row.next().find('.infobox-full-data').first();
                if ($elem.length) infobox[key] = extractData(key, $elem)
            }
        } catch (e) {
            // Parsing error handling a row of the infobox... ignore.
        }
    }

    for (const key of [
        'implementation_language',
        'influenced',
        'influenced_by',
        'major_implementations',
        'software_used',
        'successor',
        'written_in',
    ]) {
        if (Array.isArray(infobox[key]?.links)) {
            for (const link of infobox[key].links) {
                if (!link.href?.startsWith('/wiki')) continue;
                await scrapLanguagePage(link.href);
            }
        }
    }

    emit({ title, wikiUrl: `${WIKIPEDIA_URL}${wikiPath}`, img, data: infobox });
}

function cleanImgUrl(url: string | undefined): string {
    if (!url) return '';
    let u = url.replace(/^\/\//, '');
    if (u.indexOf('.svg') < 0) return `https://${u}`;
    u = u.replace(/\/thumb\//, '/');
    return `https://${u.split('.svg')[0]}.svg`;
}

/**
 * Scrap the Wikipedia page for programming languages.
 */
async function wikiScrape(refresh = false) {
    console.log('Scraping Wikipedia. Using cache: ', CACHE_PATH);

    await mkdir(cachePath('wiki'), { recursive: true }).catch((_) => { });
    await mkdir(cachePath('json'), { recursive: true }).catch((_) => { });

    if (refresh) {
        // Delete starting cache files.
        for (const start of START_PAGES) {
            try {
                const p = cachePath('wiki', toBasename(start, 'html'))
                unlinkSync(p);
            } catch (_) { }
        }
    }

    for (const lang of SHORTLIST) {
        await scrapLanguagePage(lang);
    }

    for (const start of START_PAGES) {
        const $ = load(await fetchWiki(start));
        for (const link of $('#mw-content-text').find('a')) {
            if (link.attribs.href === undefined) continue;
            if (!link.attribs.href?.startsWith('/wiki/')) continue;
            await scrapLanguagePage(link.attribs.href);
        }
    }

    console.log(`Writing ${STATE.plangs.size} programming languages to ${cachePath('json')}.`);

    for (const [key, value] of STATE.plangs) {
        Bun.write(
            cachePath('json', toBasename(key, 'json')),
            JSON.stringify(value, null, 2)
        );
    }
}

if (process.env.WIKI_SCRAPE) wikiScrape(process.env.WIKI_SCRAPE === 'REFRESH');