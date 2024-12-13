import { arrayMerge } from "@plangs/auxiliar/array";
import { IterTap } from "@plangs/auxiliar/iter_tap";
import { Vertex } from "@plangs/graphgen/library";

import type { PlangsGraphBase, TPlangsVertexName } from "./generated";
import { type FieldGithub, FieldStrDate } from "./vertex_data_fields";
import type { Image, Link, VertexBaseData } from "./vertex_data_schemas";

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

  get links(): IterTap<Link> {
    return new IterTap(this.data.links);
  }

  get images() {
    return new IterTap(this.data.images);
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

  addLinks(links: Link[]): this {
    arrayMerge((this.data.links ??= []), links, (l1, l2) => l1.url === l2.url);
    return this;
  }
}
