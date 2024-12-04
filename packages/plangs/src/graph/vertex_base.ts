import { arrayMerge } from "@plangs/auxiliar/array";
import { IterTap } from "@plangs/auxiliar/iter_tap";
import { Vertex } from "@plangs/graphgen/library";

import type { PlangsGraphBase } from "./generated";
import { FieldStrDate } from "./vertex_data_fields";
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
  abstract readonly vertexName: string;

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

  get urlHome(): string | undefined {
    return this.data.extHomeURL;
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
