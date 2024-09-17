import { mkdir } from "node:fs/promises";
import { extname, join } from "node:path";

import type { IterTap } from "@plangs/graph/auxiliar";
import type { Image, Link, NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys, PlangsGraph } from "@plangs/plangs";
import { type WikiPage, keyFromWikiURL } from "./wikipedia";

export const DEFINTIONS_PATH = join(import.meta.dir, "../../../packages/definitions/src/definitions/plangs/");

/** Add a plang instance to the graph using the given wiki page. Attempts to fetch teh plang image if any. */
export async function toPlang(g: PlangsGraph, page: WikiPage, plKeys: Set<NPlang["key"]>): Promise<NPlang | undefined> {
  if (!page.infobox || !page.key) return;

  const plang = g.nodes.pl.set(page.key);

  console.log("Processing", plang.key);

  const images = [] as Image[];

  const fetchImage = await page.fetchImage();
  if (fetchImage) {
    const [imgHref, imgBlob] = fetchImage;

    const kind = /logo/i.test(imgHref) ? "logo" : /screen/i.test(imgHref) ? "screenshot" : "other";

    const name = plang.plainKey;
    const path = join(
      DEFINTIONS_PATH,
      plang.keyPrefix,
      name.startsWith(".") ? `_${name.slice(1)}` : name,
      `${kind}${extname(imgHref).toLowerCase()}`,
    );
    Bun.write(path, imgBlob);

    images.push({ kind, title: page.title, url: `/images${path.split("src/definitions")[1]}` });
  }

  const data: NPlang["data"] = {
    name: page.title,
    description: page.description,
    firstAppeared: page.infobox.firstAppeared,
    extensions: page.infobox.extensions.sort(),
    websites: page.websites.sort(),
    releases: page.infobox.releases.sort(),
    images,
  };

  // biome-ignore lint/suspicious/noExplicitAny: we want to remove _any_ empty values.
  const generic = data as any;
  for (const [key, value] of Object.entries(generic)) {
    if (!value) delete generic[key];
    if (Array.isArray(value) && value.length === 0) delete generic[key];
  }

  g.nodes.pl.set(page.key, data);

  ////////////////////////////////////////////////////////////////////////////////

  type PGNodeMap = (typeof g.nodes)[keyof typeof g.nodes];

  function* findMatching<T>(links: Link[], nodeMap: PGNodeMap): Generator<T> {
    for (const link of links) {
      for (const node of nodeMap.findAll(node => !!node.keywordsRegexp?.test(link.title))) {
        yield node.key as T;
      }
    }
  }

  const keys_license = [...findMatching<NLicense["key"]>(page.infobox.licenses, g.nodes.license)].sort();
  const keys_paradigm = [...findMatching<NParadigm["key"]>(page.infobox.paradigms, g.nodes.paradigm)].sort();
  const keys_platform = [...findMatching<NPlatform["key"]>(page.infobox.platforms, g.nodes.plat)].sort();
  const keys_tags = [...findMatching<NTag["key"]>(page.infobox.tags, g.nodes.tag)].sort();
  const keys_tsystem = [...findMatching<NTsys["key"]>(page.infobox.typeSystem, g.nodes.tsys)].sort();

  // Check the content text for tags.
  const contentText = page.contentText;
  for (const [_, tag] of g.nodes.tag) {
    if (tag.keywordsRegexp?.test(contentText)) keys_tags.push(tag.key);
  }

  plang.addLicenses(keys_license).addParadigms(keys_paradigm).addPlatforms(keys_platform).addTags(keys_tags).addTypeSystems(keys_tsystem);

  ////////////////////////////////////////////////////////////////////////////////

  function mapToPlKeys(links: Link[]): NPlang["key"][] {
    return links
      .map(link => keyFromWikiURL(new URL(link.href)))
      .filter(key => {
        if (!key) return false;
        if (plKeys.size === 0) return true;
        return plKeys.has(key);
      }) as NPlang["key"][];
  }

  for (const other of mapToPlKeys(page.infobox.dialects)) g.edges.dialect.connect(other, plang.key);
  for (const other of mapToPlKeys(page.infobox.family)) g.edges.dialect.connect(plang.key, other);

  for (const other of mapToPlKeys(page.infobox.implementations)) g.edges.impl.connect(other, plang.key);

  for (const other of mapToPlKeys(page.infobox.influenced)) g.edges.influence.connect(other, plang.key);
  for (const other of mapToPlKeys(page.infobox.influencedBy)) g.edges.influence.connect(plang.key, other);

  for (const other of mapToPlKeys(page.infobox.writtenIn)) g.edges.writtenIn.connect(plang.key, other);

  return plang;
}

/** Convert a plang instance to the code that can generate it. */
export function generateCode(plang: NPlang): string {
  const relations: string[] = [];

  function addRel(methodName: string, keys: IterTap<string>) {
    if (keys.size === 0) return;
    relations.push(`\n    .${methodName}(${JSON.stringify(keys.sort())})`);
  }

  addRel("addDialectOf", plang.relDialectOf.keys);
  addRel("addImplements", plang.relImplements.keys);
  addRel("addInfluencedBy", plang.relInfluencedBy.keys);
  addRel("addLicenses", plang.relLicenses.keys);
  addRel("addParadigms", plang.relParadigms.keys);
  addRel("addPlatforms", plang.relPlatforms.keys);
  addRel("addTags", plang.relTags.keys);
  addRel("addTypeSystems", plang.relTsys.keys);
  addRel("addWrittenIn", plang.relWrittenIn.keys);

  const code = `import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {

    g.nodes.pl.set(${JSON.stringify(plang.key)}, ${JSON.stringify(plang.data)})${relations.join("")}

  }
  `;

  return code;
}

export async function genAllPlangs(g: PlangsGraph) {
  for (const [key, plang] of [...g.nodes.pl].sort()) {
    const code = generateCode(plang);

    await mkdir(join(DEFINTIONS_PATH, plang.keyPrefix), { recursive: true }).catch(_ => {});

    const name = plang.plainKey;
    const escaped = name.startsWith(".") ? `_${name.slice(1)}` : name;
    const path = join(DEFINTIONS_PATH, plang.keyPrefix, escaped, `${escaped}.ts`);

    console.log("Generating", key, "->", path);

    const result = await Bun.write(path, code);

    if (!result) console.error("Failed to write", path);
  }
}
