import { mkdir } from "node:fs/promises";
import { extname, join } from "node:path";

import type { NodeMap } from "@plangs/graph";
import type { Image, Link, NBase, NPlang, PlangsGraph } from "@plangs/plangs";
import { type WikiPage, keyFromWikiURL } from "./wikipedia";

export const DEFINTIONS_PATH = join(import.meta.dir, "../../../packages/definitions/src/definitions/plangs/");

/** Add a plang instance to the graph using the given wiki page. Attempts to fetch teh plang image if any. */
export async function toPlang(g: PlangsGraph, page: WikiPage, plKeys: Set<NPlang["key"]>): Promise<NPlang | undefined> {
  if (!page.infobox || !page.key) return;

  const plang = g.n_plang.get(page.key);

  console.log("Processing", plang.key);

  const images = [] as Image[];

  const fetchImage = await page.fetchImage();
  if (fetchImage) {
    const [imgHref, imgBlob] = fetchImage;

    const kind = /logo/i.test(imgHref) ? "logo" : /screen/i.test(imgHref) ? "screenshot" : "other";

    const name = plang.plainKey;
    const path = join(
      DEFINTIONS_PATH,
      plang.keyFolder,
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

  g.n_plang.set(page.key, data);

  ////////////////////////////////////////////////////////////////////////////////

  function* findMatching<K extends string>(links: Link[], nodeMap: NodeMap<PlangsGraph, NBase<K, any>>): Generator<K> {
    for (const link of links) {
      for (const node of nodeMap.findAll((node) => node.matchesKeyword(link.title))) {
        yield node.key;
      }
    }
  }

  const keys_license = [...findMatching(page.infobox.licenses, g.n_license)].sort();
  const keys_paradigm = [...findMatching(page.infobox.paradigms, g.n_paradigm)].sort();
  const keys_platform = [...findMatching(page.infobox.platforms, g.n_platform)].sort();
  const keys_tags = [...findMatching(page.infobox.tags, g.n_tags)].sort();
  const keys_tsystem = [...findMatching(page.infobox.typeSystem, g.n_tsystem)].sort();

  plang.addLicenses(keys_license).addParadigms(keys_paradigm).addPlatforms(keys_platform).addTags(keys_tags).addTypeSystems(keys_tsystem);

  ////////////////////////////////////////////////////////////////////////////////

  function mapToPlKeys(links: Link[]): NPlang["key"][] {
    return links
      .map((link) => keyFromWikiURL(new URL(link.href)))
      .filter((key) => {
        if (!key) return false;
        if (plKeys.size === 0) return true;
        return plKeys.has(key);
      }) as NPlang["key"][];
  }

  // e_dialect
  for (const other of mapToPlKeys(page.infobox.dialects)) g.e_dialectOf.connect(other, plang.key);
  for (const other of mapToPlKeys(page.infobox.family)) g.e_dialectOf.connect(plang.key, other);

  // e_implementation
  for (const other of mapToPlKeys(page.infobox.implementations)) g.e_implements.connect(other, plang.key);

  // e_influencedBy
  for (const other of mapToPlKeys(page.infobox.influenced)) g.e_influencedBy.connect(other, plang.key);
  for (const other of mapToPlKeys(page.infobox.influencedBy)) g.e_influencedBy.connect(plang.key, other);

  // e_writtenIn
  for (const other of mapToPlKeys(page.infobox.writtenIn)) g.e_writtenIn.connect(plang.key, other);

  return plang;
}

/** Convert a plang instance to the code that can generate it. */
export function generateCode(plang: NPlang): string {
  const relations: string[] = [];

  function addRel(methodName: string, keys?: Iterable<string>) {
    if (!keys) return;
    relations.push(`\n    .${methodName}(${JSON.stringify([...keys].sort())})`);
  }

  addRel("addDialectOf", plang.relDialectOf?.keys());
  addRel("addImplements", plang.relImplements?.keys());
  addRel("addInfluencedBy", plang.relInfluencedBy?.keys());
  addRel("addLicenses", plang.relLicenses?.keys());
  addRel("addParadigms", plang.relParadigms?.keys());
  addRel("addPlatforms", plang.relPlatforms?.keys());
  addRel("addTags", plang.relTags?.keys());
  addRel("addTypeSystems", plang.relTypeSystems?.keys());
  addRel("addWrittenIn", plang.relWrittenIn?.keys());

  const code = `import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {

    g.n_plang.set(${JSON.stringify(plang.key)}, ${JSON.stringify(plang.data)})${relations.join("")}

  }
  `;

  return code;
}

export async function genAllPlangs(g: PlangsGraph) {
  for (const [key, plang] of [...g.n_plang].sort()) {
    const code = generateCode(plang);

    await mkdir(join(DEFINTIONS_PATH, plang.keyFolder), { recursive: true }).catch((_) => {});

    const name = plang.plainKey;
    const path = join(DEFINTIONS_PATH, plang.keyFolder, name.startsWith(".") ? `_${name.slice(1)}` : name, "plang.ts");

    console.log("Generating", key, "->", path);

    const result = await Bun.write(path, code);

    if (!result) console.error("Failed to write", path);
  }
}
