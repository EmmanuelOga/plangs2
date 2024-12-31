import { arrayMerge } from "@plangs/auxiliar/array";
import { IterTap } from "@plangs/auxiliar/iter_tap";
import { tap } from "@plangs/auxiliar/misc";
import { Vertex } from "@plangs/graphgen/library";

import { VPlang } from ".";
import type { PlangsGraphBase, TPlangsVertex, TPlangsVertexName } from "./generated";
import { type FieldGithub, FieldStrDate } from "./vertex_data_fields";
import type { Image, Link, VertexBaseData } from "./vertex_data_schemas";

/**
 * Vertex detail to display in an information box.
 * Having a stand-alone structure is useful for storing the info on localStorage.
 */
export type VertexDetail = {
  description: string;
  href: string;
  key: string;
  name: string;
  ranking?: number;
  shortDesc: string;
  thumbUrl?: string;
  urlGithub?: string;
  urlHome?: string;
  urlReddit?: string;
  urlStackov?: string;
  urlWikipedia?: string;
  urlLanguish?: string;
  vertexDesc: string;
  vertexKind: string;
  vertexName: string;

  /** Schema.org type */
  schemaType: string;

  /** Arbitrary "pill" data. */
  general: ({ kind: "text"; value: string; title?: string } | { kind: "link"; value: string; href: string; title?: string })[];

  /** Related vertex by relationship name. */
  relations: [string, { name: string; href: string }[]][];
};

// https://schema.org/Thing
const SCHEMA_TYPES: Record<TPlangsVertexName, string> = {
  app: "SoftwareApplication",
  author: "Person",
  bundle: "Collection",
  community: "Organization",
  learning: "CreativeWork",
  library: "SoftwareLibrary",
  license: "CreativeWork",
  paradigm: "CreativeWork",
  plang: "ComputerLanguage",
  platform: "CreativeWork",
  post: "BlogPosting",
  subsystem: "SoftwareApplication",
  tag: "DefinedTerm",
  tool: "SoftwareApplication",
  typeSystem: "CreativeWork",
};

export abstract class PlangsVertex<KeyPrefix extends string, Data extends VertexBaseData> extends Vertex<KeyPrefix, Data> {
  constructor(
    public readonly graph: PlangsGraphBase,
    key: `${KeyPrefix}+${string}`,
  ) {
    super(key);
  }

  /** Matches the key prefix of vertices, ex: name: "pl", for "plang" nodes ("pl+java").  */
  abstract readonly vertexKind: string;

  /** Matches the Vertex collection accessor on the Graph instance. */
  abstract readonly vertexDesc: string;

  /** General description of Vertices of this kind. */
  abstract readonly vertexName: TPlangsVertexName;

  get schemaType(): string {
    return SCHEMA_TYPES[this.vertexName];
  }

  /** Generate a detail of the vertex, used to render thumbnails and info boxes. */
  get detail(): VertexDetail {
    const relations: VertexDetail["relations"] = [];
    const vertex = this as unknown as TPlangsVertex;

    for (const rel of vertex.relations.values()) {
      const relValues = rel.values.filter(related => related.key !== vertex.key);
      if (relValues.length === 0) continue;
      relations.push([rel.edgeDesc, relValues.map(({ name, href }) => ({ name, href }))]);
    }

    const general: VertexDetail["general"] = [];
    if (vertex instanceof VPlang) {
      tap(vertex.created.year, year => year && general.push({ kind: "text", value: `Appeared ${vertex.created.year}` }));
      tap(vertex.isPopular, pop => pop && general.push({ kind: "text", value: "Popular", title: "Languish's Rank <= #25 or popular on Github." }));
      tap(vertex.isTranspiler, tsp => tsp && general.push({ kind: "text", value: "Transpiler", title: "a.k.a. Source-to-Source Compiler." }));
      tap(
        vertex.releases.last,
        rel => rel && general.push({ kind: "text", value: `Released ${rel.yearMonth ?? rel.version}`, title: "Last Release we know about." }),
      );
      tap(
        [vertex.urlLanguish, vertex.ranking && `#${vertex.ranking} on Languish`],
        ([href, value]) => href && value && general.push({ kind: "link", href, value, title: value }),
      );
    }

    for (const link of vertex.links ?? []) {
      general.push({ kind: "link", href: link.url, value: link.title ?? "Link" });
    }

    return {
      description: vertex.description,
      href: vertex.href,
      key: vertex.key,
      name: vertex.name,
      ranking: vertex.ranking,
      shortDesc: vertex.shortDesc,
      thumbUrl: vertex.thumbUrl,
      urlGithub: vertex.urlGithub,
      urlHome: vertex.urlHome,
      urlReddit: vertex.urlReddit,
      urlStackov: vertex.urlStackov,
      urlWikipedia: vertex.urlWikipedia,
      urlLanguish: vertex.urlLanguish,
      vertexDesc: vertex.vertexDesc,
      vertexKind: vertex.vertexKind,
      vertexName: vertex.vertexName,
      schemaType: vertex.schemaType,

      general,
      relations,
    };
  }

  /** Internal path name for rendering the vertex in the web UI.  */
  get href(): string {
    if (this.vertexName === "plang") return `/${this.plainKey}`;
    if (this.vertexName === "post") return `/blog/${this.plainKey}`;
    return `/${this.vertexName.toLowerCase()}/${this.plainKey}`;
  }

  /** Node ranking, if the nodes are ranked. For instance, Plangs use Linguist data for ranking popularity. */
  get ranking(): number | undefined {
    return undefined;
  }

  get name(): string {
    return this.data.name ? this.data.name : this.plainKey;
  }

  #lcName: string | undefined;

  /** Lower case Name, used to compare agasint user search string. */
  get lcName(): string {
    if (!this.#lcName) this.#lcName = this.name.toLowerCase();
    return this.#lcName;
  }

  get created(): FieldStrDate<"created"> {
    return new FieldStrDate("created", this);
  }

  get description(): string {
    return this.data.description || this.name;
  }

  get shortDesc(): string {
    if (this.data.shortDesc) return this.data.shortDesc;
    const desc = this.description;
    return desc.length > 100 ? `${desc.slice(0, 80)} ...` : desc;
  }

  get urlHome(): string | undefined {
    return this.data.extHomeURL;
  }

  get urlGithub(): string | undefined {
    return "github" in this ? (this.github as FieldGithub).url : undefined;
  }

  get urlStackov(): string | undefined {
    return this.data.stackovTags ? `https://stackoverflow.com/questions/tagged/${this.data.stackovTags.join("+")}` : undefined;
  }

  get urlReddit(): string | undefined {
    return this.data.extRedditPath ? `https://reddit.com/r/${this.data.extRedditPath}` : undefined;
  }

  get urlWikipedia(): string | undefined {
    return this.data.extWikipediaPath ? `https://en.wikipedia.org/wiki/${this.data.extWikipediaPath}` : undefined;
  }

  get urlLanguish(): string | undefined {
    if (!(this instanceof VPlang) || !this.data.languishRanking) return undefined;
    return `https://tjpalmer.github.io/languish/#names=${encodeURIComponent(this.name.toLowerCase())}`;
  }

  get links(): IterTap<Link> {
    return new IterTap(this.data.links);
  }

  get images() {
    return new IterTap(this.data.images);
  }

  get hasLogo(): boolean {
    return this.images.some(img => img.kind === "logo");
  }

  get keywords(): IterTap<string> {
    return new IterTap(this.data.keywords);
  }

  get keywordsRegexp(): RegExp | undefined {
    const { keywords } = this.data;
    if (!keywords) return undefined;
    const lenient = keywords.map(k => k.replaceAll(/[- ]/g, "\\s*.?\\s*"));
    return new RegExp(`\\b(${lenient.join("|")})\\b`, "i");
  }

  get thumbUrl(): string | undefined {
    return (this.images.find(({ kind }) => kind === "logo") ?? this.images.first)?.url;
  }

  addImages(images: Image[]): this {
    arrayMerge((this.data.images ??= []), images, (i1, i2) => i1.url === i2.url);
    return this;
  }

  addKeywords(keywords: string[]): this {
    arrayMerge((this.data.keywords ??= []), keywords);
    return this;
  }

  addLinks(links: Link[]): this {
    arrayMerge((this.data.links ??= []), links, (l1, l2) => l1.url === l2.url);
    return this;
  }

  addStackovTags(stackovTags: string[]): this {
    arrayMerge((this.data.stackovTags ??= []), stackovTags);
    return this;
  }

  /** Override merge to handle some array fields better. */
  override merge(data: Partial<Data>): this {
    const { keywords, images, links, stackovTags, ...rest } = data;

    if (images) this.addImages(images);
    if (keywords) this.addKeywords(keywords);
    if (links) this.addLinks(links);
    if (stackovTags) this.addStackovTags(stackovTags);

    return super.merge(rest as Data);
  }
}
