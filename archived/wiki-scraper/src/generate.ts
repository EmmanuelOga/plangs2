// @ts-ignore types for node:fs/promises?
import { mkdir } from "node:fs/promises";
// @ts-ignore types for node:fs/promises?
import { extname, join } from "node:path";

import type { Vertices } from "@plangs/graphgen/library";
import type { PlangsGraph, VLicense, VParadigm, VPlang, VPlatform, VTag, VTypeSystem } from "@plangs/plangs/graph";
import { type Link, type WikiPage, keyFromWikiURL } from "./wikipedia";

export const DEFINTIONS_PATH = join(import.meta.dir, "../../../packages/definitions/src/definitions/plangs/");

/** Add a plang instance to the graph using the given wiki page. Attempts to fetch teh plang image if any. */
export async function toPlang(g: PlangsGraph, page: WikiPage, plKeys: Set<VPlang["key"]>): Promise<VPlang | undefined> {
  if (!page.infobox || !page.key) return;

  const plang = g.plang.get(page.key) ?? g.plang.set(page.key, {});

  console.log("Processing", plang.key);

  const fetchImage = await page.fetchImage();
  if (fetchImage) {
    const [imgHref, imgBlob] = fetchImage;

    const kind = /logo/i.test(imgHref) ? "logo" : /screen/i.test(imgHref) ? "screenshot" : "other";

    const name = plang.plainKey;
    const escapedName = name.startsWith(".") ? `_${name.slice(1)}` : name;
    const path = join(DEFINTIONS_PATH, plang.classifier, escapedName, `${escapedName}.${kind}${extname(imgHref).toLowerCase()}`);
    Bun.write(path, imgBlob);
  }

  const data: VPlang["data"] = {
    name: page.title,
    description: page.description,
    created: page.infobox.year ? `${page.infobox.year}` : undefined,
    extensions: page.infobox.extensions.sort(),
    releases: page.infobox.releases.sort(),
  };

  // biome-ignore lint/suspicious/noExplicitAny: we want to remove _any_ empty values.
  const generic = data as any;
  for (const [key, value] of Object.entries(generic)) {
    if (!value) delete generic[key];
    if (Array.isArray(value) && value.length === 0) delete generic[key];
  }

  g.plang.set(page.key, data);

  ////////////////////////////////////////////////////////////////////////////////

  function* findMatching<T>(links: Link[], vertices: Vertices<any>): Generator<T> {
    for (const link of links) {
      for (const vertex of [...vertices.values].filter(vertex => !!vertex.keywordsRegexp?.test(link.title))) {
        yield vertex.key as T;
      }
    }
  }

  const keys_license = [...findMatching<VLicense["key"]>(page.infobox.licenses, g.license)].sort();
  const keys_paradigm = [...findMatching<VParadigm["key"]>(page.infobox.paradigms, g.paradigm)].sort();
  const keys_platform = [...findMatching<VPlatform["key"]>(page.infobox.platforms, g.platform)].sort();
  const keys_tags = [...findMatching<VTag["key"]>(page.infobox.tags, g.tag)].sort();
  const keys_tsystem = [...findMatching<VTypeSystem["key"]>(page.infobox.typeSystem, g.typeSystem)].sort();

  // Check the content text for tags.
  const contentText = page.contentText;
  for (const tag of g.tag.values) {
    if (tag.keywordsRegexp?.test(contentText)) keys_tags.push(tag.key);
  }

  plang.relLicenses
    .add(...keys_license)
    .relParadigms.add(...keys_paradigm)
    .relPlatforms.add(...keys_platform)
    .relTags.add(...keys_tags)
    .relTypeSystems.add(...keys_tsystem);

  ////////////////////////////////////////////////////////////////////////////////

  function mapToPlKeys(links: Link[]): VPlang["key"][] {
    return links
      .map(link => keyFromWikiURL(new URL(link.href)))
      .filter(key => {
        if (!key) return false;
        if (plKeys.size === 0) return true;
        return plKeys.has(key);
      }) as VPlang["key"][];
  }

  for (const other of mapToPlKeys(page.infobox.dialects)) g.edges.plangRelDialectOf.add(other, plang.key);
  for (const other of mapToPlKeys(page.infobox.family)) g.edges.plangRelDialectOf.add(plang.key, other);

  for (const other of mapToPlKeys(page.infobox.implementations)) g.edges.plangRelImplements.add(other, plang.key);

  for (const other of mapToPlKeys(page.infobox.influenced)) g.edges.plangRelInfluencedBy.add(other, plang.key);
  for (const other of mapToPlKeys(page.infobox.influencedBy)) g.edges.plangRelInfluencedBy.add(plang.key, other);

  for (const other of mapToPlKeys(page.infobox.writtenIn)) g.edges.plangRelWrittenWith.add(other, plang.key);

  return plang;
}

/** Convert a plang instance to the code that can generate it. */
export function generateCode(plang: VPlang): string {
  const relations: string[] = [];

  function addRel(methodName: string, keys: Set<string>) {
    if (keys.size === 0) return;
    relations.push(`\n    .${methodName}(${JSON.stringify(Array.from(keys).sort())})`);
  }

  addRel("addDialectOf", plang.relDialectOf.keys);
  addRel("addImplements", plang.relImplements.keys);
  addRel("addInfluencedBy", plang.relInfluencedBy.keys);
  addRel("addLicenses", plang.relLicenses.keys);
  addRel("addParadigms", plang.relParadigms.keys);
  addRel("addPlatforms", plang.relPlatforms.keys);
  addRel("addTags", plang.relTags.keys);
  addRel("addTypeSystems", plang.relTypeSystems.keys);
  addRel("addWrittenIn", plang.relWrittenWith.keys);

  const code = `import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {

    g.vertices.pl.set(${JSON.stringify(plang.key)}, ${JSON.stringify(plang.data)})${relations.join("")}

  }
  `;

  return code;
}

export async function genAllPlangs(g: PlangsGraph) {
  for (const [key, plang] of [...g.plang.entries].sort()) {
    const code = generateCode(plang);

    await mkdir(join(DEFINTIONS_PATH, plang.classifier), { recursive: true }).catch(_ => {});

    const name = plang.plainKey;
    const escaped = name.startsWith(".") ? `_${name.slice(1)}` : name;
    const path = join(DEFINTIONS_PATH, plang.classifier, escaped, `${escaped}.ts`);

    console.log("Generating", key, "->", path);

    const result = await Bun.write(path, code);

    if (!result) console.error("Failed to write", path);
  }
}
