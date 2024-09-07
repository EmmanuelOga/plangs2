import type { NodeMap } from "@plangs/graph";
import type { PlangsGraph, NPlang, Link, NBase } from "@plangs/plangs";
import { type WikiPage, keyFromWikiURL } from "./wikipedia";
import { add } from "node_modules/cheerio/dist/esm/api/traversing";

/** Add a plang instance to the graph using the given wiki page. */
export function toPlang(g: PlangsGraph, page: WikiPage, plKeys: Set<NPlang["key"]>): NPlang | undefined {
  if (!page.infobox) return;

  const data: NPlang["data"] = {
    name: page.title,
    description: page.description,
    websites: page.websites,
    extensions: page.infobox.extensions,
    images: page.images,
    releases: page.infobox.releases,
  };

  const plang = g.n_plang.set(page.key, data);

  ////////////////////////////////////////////////////////////////////////////////

  function* findMatching<K extends string>(links: Link[], nodeMap: NodeMap<PlangsGraph, NBase<K, any>>): Generator<K> {
    for (const link of links) {
      for (const node of nodeMap.findAll((node) => node.matchesKeyword(link.title))) {
        yield node.key;
      }
    }
  }

  const keys_license = [...findMatching(page.infobox.licenses, g.n_license)];
  const keys_paradigm = [...findMatching(page.infobox.paradigms, g.n_paradigm)];
  const keys_platform = [...findMatching(page.infobox.platforms, g.n_platform)];
  const keys_tags = [...findMatching(page.infobox.tags, g.n_tags)];
  const keys_tsystem = [...findMatching(page.infobox.typeSystem, g.n_tsystem)];

  plang.addLicenses(keys_license).addParadigms(keys_paradigm).addPlatforms(keys_platform).addTags(keys_tags).addTypeSystems(keys_tsystem);

  ////////////////////////////////////////////////////////////////////////////////

  function mapToPlKeys(links: Link[]): NPlang["key"][] {
    return links.map((link) => keyFromWikiURL(new URL(link.href))).filter((key) => key && plKeys.has(key)) as NPlang["key"][];
  }

  // e_dialect
  const keys_dialects = mapToPlKeys(page.infobox.dialects);
  for (const other of keys_dialects) g.e_dialect.connect(other, plang.key);

  const keys_family = mapToPlKeys(page.infobox.family);
  for (const other of keys_family) g.e_dialect.connect(plang.key, other);

  // e_implementation
  const keys_implementations = mapToPlKeys(page.infobox.implementations);
  for (const other of keys_implementations) g.e_implementation.connect(other, plang.key);

  // e_influence
  const keys_influenced = mapToPlKeys(page.infobox.influenced);
  for (const other of keys_influenced) g.e_influence.connect(plang.key, other);

  const keys_influencedBy = mapToPlKeys(page.infobox.influencedBy);
  for (const other of keys_influencedBy) g.e_influence.connect(plang.key, other);

  // e_writtenIn
  const keys_writtenIn = mapToPlKeys(page.infobox.writtenIn);
  for (const other of keys_writtenIn) g.e_writtenIn.connect(plang.key, other);

  return plang;
}

/** Convert a plang instance to the code that can generate it. */
export function generateCode(plang: NPlang): string {
  const relations: string[] = [];

  function addRel(methodName: string, keys?: Iterable<string>) {
    if (!keys) return;
    relations.push(`\n    .${methodName}(${JSON.stringify([...keys])})`);
  }

  addRel("addDialects", plang.relDialects?.keys());
  addRel("addImplementations", plang.relImplementedWith?.keys());
  addRel("addInfluenced", plang.relInfluenced?.keys());
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
