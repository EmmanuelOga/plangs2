/**  Do not modify manually! Generated by graphgen on 2024-11-28T00:16:43.518Z. */

import { Edges, RelFrom, RelTo, type SerializedGraph, Vertices } from "@plangs/graphgen/library";

/** Import user defined classes and types. */
import { VApp, VBundle, VCommunity, VLearning, VLibrary, VLicense, VParadigm, VPlang, VPlatform, VPost, VTag, VTool, VTypeSystem } from ".";
import { PlangsVertex } from "./vertex_base";
import type {
  VAppData,
  VBundleData,
  VCommunityData,
  VLearningData,
  VLibraryData,
  VLicenseData,
  VParadigmData,
  VPlangData,
  VPlatformData,
  VPostData,
  VTagData,
  VToolData,
  VTypeSystemData,
} from "./vertex_data_schemas";

export type PlangsVertexName = keyof PlangsGraphBase["vertices"];
export type PlangsEdgeName = keyof PlangsGraphBase["edges"];

/** Base class for the Plangs graph, generated from its specification. */
export class PlangsGraphBase {
  readonly app = new Vertices<VApp>(key => new VApp(this, key));
  readonly bundle = new Vertices<VBundle>(key => new VBundle(this, key));
  readonly community = new Vertices<VCommunity>(key => new VCommunity(this, key));
  readonly learning = new Vertices<VLearning>(key => new VLearning(this, key));
  readonly library = new Vertices<VLibrary>(key => new VLibrary(this, key));
  readonly license = new Vertices<VLicense>(key => new VLicense(this, key));
  readonly paradigm = new Vertices<VParadigm>(key => new VParadigm(this, key));
  readonly plang = new Vertices<VPlang>(key => new VPlang(this, key));
  readonly platform = new Vertices<VPlatform>(key => new VPlatform(this, key));
  readonly post = new Vertices<VPost>(key => new VPost(this, key));
  readonly tag = new Vertices<VTag>(key => new VTag(this, key));
  readonly tool = new Vertices<VTool>(key => new VTool(this, key));
  readonly typeSystem = new Vertices<VTypeSystem>(key => new VTypeSystem(this, key));

  /** All vertex collections. */
  readonly vertices = {
    app: this.app,
    bundle: this.bundle,
    community: this.community,
    learning: this.learning,
    library: this.library,
    license: this.license,
    paradigm: this.paradigm,
    plang: this.plang,
    platform: this.platform,
    post: this.post,
    tag: this.tag,
    tool: this.tool,
    typeSystem: this.typeSystem,
  } as const;

  /** All edge collections. */
  readonly edges = {
    appPlang: new Edges(this.app, this.plang),
    appPlatform: new Edges(this.app, this.platform),
    appTag: new Edges(this.app, this.tag),
    bundleTool: new Edges(this.bundle, this.tool),
    communityPlang: new Edges(this.community, this.plang),
    communityTag: new Edges(this.community, this.tag),
    learningCommunity: new Edges(this.learning, this.community),
    learningPlang: new Edges(this.learning, this.plang),
    learningTag: new Edges(this.learning, this.tag),
    libraryPlang: new Edges(this.library, this.plang),
    libraryLibWrittenInPlang: new Edges(this.library, this.plang),
    libraryPlatform: new Edges(this.library, this.platform),
    libraryTag: new Edges(this.library, this.tag),
    licenseApp: new Edges(this.license, this.app),
    licenseLibrary: new Edges(this.license, this.library),
    licensePlang: new Edges(this.license, this.plang),
    licenseTool: new Edges(this.license, this.tool),
    plangParadigm: new Edges(this.plang, this.paradigm),
    plangCompilesToPlang: new Edges(this.plang, this.plang),
    plangDialectOfPlang: new Edges(this.plang, this.plang),
    plangImplementsPlang: new Edges(this.plang, this.plang),
    plangInfluencedByPlang: new Edges(this.plang, this.plang),
    plangWrittenInPlangPlang: new Edges(this.plang, this.plang),
    plangPlatform: new Edges(this.plang, this.platform),
    plangTag: new Edges(this.plang, this.tag),
    plangTool: new Edges(this.plang, this.tool),
    plangTypeSystem: new Edges(this.plang, this.typeSystem),
    postPlang: new Edges(this.post, this.plang),
    toolToolWrittenInPlang: new Edges(this.tool, this.plang),
    toolPlatform: new Edges(this.tool, this.platform),
    toolTag: new Edges(this.tool, this.tag),
  } as const;

  toJSON(): SerializedGraph {
    return {
      vertices: Object.fromEntries(Object.entries(this.vertices).map(([k, v]) => [k, v.toJSON()])),
      edges: Object.fromEntries(Object.entries(this.edges).map(([k, e]) => [k, e.toJSON()])),
    };
  }

  loadJSON(data: SerializedGraph) {
    for (const [vertexName, vertices] of Object.entries(data.vertices)) {
      this.vertices[vertexName as PlangsVertexName].setMany(vertices as [any, any]);
    }
    for (const [edgeName, edges] of Object.entries(data.edges)) {
      this.edges[edgeName as PlangsEdgeName].addMany(edges as [any, any]);
    }
  }
}

/** Software application. */
export abstract class VAppBase extends PlangsVertex<"app", VAppData> {
  static readonly kind = "app" as const;
  static readonly desc = "Software application.";
  override kind = VAppBase.kind;

  /** **this -> plang**: Plangs used to write the App. */
  get relPlang() {
    return new RelFrom(this as unknown as VApp, this.graph.edges.appPlang);
  }

  /** **this -> platform**: Platforms supported by the App. */
  get relPlatform() {
    return new RelFrom(this as unknown as VApp, this.graph.edges.appPlatform);
  }

  /** **this -> tag**: Tags for this App. */
  get relTag() {
    return new RelFrom(this as unknown as VApp, this.graph.edges.appTag);
  }

  /** **license -> this**: Licenses for an App. */
  get relLicense() {
    return new RelTo(this as unknown as VApp, this.graph.edges.licenseApp);
  }
}

/** Bundle of Tools. */
export abstract class VBundleBase extends PlangsVertex<"bun", VBundleData> {
  static readonly kind = "bun" as const;
  static readonly desc = "Bundle of Tools.";
  override kind = VBundleBase.kind;

  /** **this -> tool**: Tools in a Bundle. */
  get relTool() {
    return new RelFrom(this as unknown as VBundle, this.graph.edges.bundleTool);
  }
}

/** Community. */
export abstract class VCommunityBase extends PlangsVertex<"comm", VCommunityData> {
  static readonly kind = "comm" as const;
  static readonly desc = "Community.";
  override kind = VCommunityBase.kind;

  /** **this -> plang**: Plangs the Community is interested in. */
  get relPlang() {
    return new RelFrom(this as unknown as VCommunity, this.graph.edges.communityPlang);
  }

  /** **this -> tag**: Tags for this Community. */
  get relTag() {
    return new RelFrom(this as unknown as VCommunity, this.graph.edges.communityTag);
  }

  /** **learning -> this**: Communities helpful when using the Learning resource. */
  get relLearning() {
    return new RelTo(this as unknown as VCommunity, this.graph.edges.learningCommunity);
  }
}

/** Learning resources. */
export abstract class VLearningBase extends PlangsVertex<"learn", VLearningData> {
  static readonly kind = "learn" as const;
  static readonly desc = "Learning resources.";
  override kind = VLearningBase.kind;

  /** **this -> community**: Communities helpful when using the Learning resource. */
  get relCommunity() {
    return new RelFrom(this as unknown as VLearning, this.graph.edges.learningCommunity);
  }

  /** **this -> plang**: Plangs covered by the Learning resource. */
  get relPlang() {
    return new RelFrom(this as unknown as VLearning, this.graph.edges.learningPlang);
  }

  /** **this -> tag**: Tags for this Learning resource. */
  get relTag() {
    return new RelFrom(this as unknown as VLearning, this.graph.edges.learningTag);
  }
}

/** Software Libraries. */
export abstract class VLibraryBase extends PlangsVertex<"lib", VLibraryData> {
  static readonly kind = "lib" as const;
  static readonly desc = "Software Libraries.";
  override kind = VLibraryBase.kind;

  /** **this -> plang**: Plangs that can use this Library. */
  get relPlang() {
    return new RelFrom(this as unknown as VLibrary, this.graph.edges.libraryPlang);
  }

  /** **this -> plang**: Plangs used in the Library implementation. */
  get relLibWrittenIn() {
    return new RelFrom(this as unknown as VLibrary, this.graph.edges.libraryLibWrittenInPlang);
  }

  /** **this -> platform**: Platforms supported by this Library. */
  get relPlatform() {
    return new RelFrom(this as unknown as VLibrary, this.graph.edges.libraryPlatform);
  }

  /** **this -> tag**: Tags for this Library. */
  get relTag() {
    return new RelFrom(this as unknown as VLibrary, this.graph.edges.libraryTag);
  }

  /** **license -> this**: Licenses for a Library. */
  get relLicense() {
    return new RelTo(this as unknown as VLibrary, this.graph.edges.licenseLibrary);
  }
}

/** Software Licenses. */
export abstract class VLicenseBase extends PlangsVertex<"lic", VLicenseData> {
  static readonly kind = "lic" as const;
  static readonly desc = "Software Licenses.";
  override kind = VLicenseBase.kind;

  /** **this -> app**: Licenses for an App. */
  get relApp() {
    return new RelFrom(this as unknown as VLicense, this.graph.edges.licenseApp);
  }

  /** **this -> library**: Licenses for a Library. */
  get relLibrary() {
    return new RelFrom(this as unknown as VLicense, this.graph.edges.licenseLibrary);
  }

  /** **this -> plang**: Licenses for a Plang. */
  get relPlang() {
    return new RelFrom(this as unknown as VLicense, this.graph.edges.licensePlang);
  }

  /** **this -> tool**: Licenses for a Tool. */
  get relTool() {
    return new RelFrom(this as unknown as VLicense, this.graph.edges.licenseTool);
  }
}

/** Programming Language Paradigms. */
export abstract class VParadigmBase extends PlangsVertex<"para", VParadigmData> {
  static readonly kind = "para" as const;
  static readonly desc = "Programming Language Paradigms.";
  override kind = VParadigmBase.kind;

  /** **plang -> this**: Paradigms implemented by the Plang. */
  get relPlang() {
    return new RelTo(this as unknown as VParadigm, this.graph.edges.plangParadigm);
  }
}

/** Programming languages. */
export abstract class VPlangBase extends PlangsVertex<"pl", VPlangData> {
  static readonly kind = "pl" as const;
  static readonly desc = "Programming languages.";
  override kind = VPlangBase.kind;

  /** **app -> this**: Plangs used to write the App. */
  get relApp() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.appPlang);
  }

  /** **community -> this**: Plangs the Community is interested in. */
  get relCommunity() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.communityPlang);
  }

  /** **learning -> this**: Plangs covered by the Learning resource. */
  get relLearning() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.learningPlang);
  }

  /** **library -> this**: Plangs that can use this Library. */
  get relLibrary() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.libraryPlang);
  }

  /** **library -> this**: Plangs used in the Library implementation. */
  get relLibWrittenIn() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.libraryLibWrittenInPlang);
  }

  /** **license -> this**: Licenses for a Plang. */
  get relLicense() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.licensePlang);
  }

  /** **this -> paradigm**: Paradigms implemented by the Plang. */
  get relParadigm() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangParadigm);
  }

  /** **this -> plang**: Plangs target when transpiling. */
  get relCompilesTo() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangCompilesToPlang);
  }

  /** **plang -> this**: Plangs target when transpiling. */
  get relCompilesToRev() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.plangCompilesToPlang);
  }

  /** **this -> plang**: Plangs is a Dialect of another. */
  get relDialectOf() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangDialectOfPlang);
  }

  /** **plang -> this**: Plangs is a Dialect of another. */
  get relDialectOfRev() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.plangDialectOfPlang);
  }

  /** **this -> plang**: Plangs is an implementation of another. */
  get relImplements() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangImplementsPlang);
  }

  /** **plang -> this**: Plangs is an implementation of another. */
  get relImplementsRev() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.plangImplementsPlang);
  }

  /** **this -> plang**: Plangs that influenced this Plang. */
  get relInfluencedBy() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangInfluencedByPlang);
  }

  /** **plang -> this**: Plangs that influenced this Plang. */
  get relInfluencedByRev() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.plangInfluencedByPlang);
  }

  /** **this -> plang**: Plangs used to create this Plang. */
  get relWrittenInPlang() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangWrittenInPlangPlang);
  }

  /** **plang -> this**: Plangs used to create this Plang. */
  get relWrittenInPlangRev() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.plangWrittenInPlangPlang);
  }

  /** **this -> platform**: Platforms supported by the Plang. */
  get relPlatform() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangPlatform);
  }

  /** **this -> tag**: Tags associated with the Plang. */
  get relTag() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangTag);
  }

  /** **this -> tool**: Plangs that benefits from this tool. */
  get relTool() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangTool);
  }

  /** **this -> typeSystem**: Type systems used by the Plang. */
  get relTypeSystem() {
    return new RelFrom(this as unknown as VPlang, this.graph.edges.plangTypeSystem);
  }

  /** **post -> this**: Plangs covered by the Post. */
  get relPost() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.postPlang);
  }

  /** **tool -> this**: Plangs used to write the tool. */
  get relToolWrittenIn() {
    return new RelTo(this as unknown as VPlang, this.graph.edges.toolToolWrittenInPlang);
  }
}

/** Platforms where software runs. */
export abstract class VPlatformBase extends PlangsVertex<"plat", VPlatformData> {
  static readonly kind = "plat" as const;
  static readonly desc = "Platforms where software runs.";
  override kind = VPlatformBase.kind;

  /** **app -> this**: Platforms supported by the App. */
  get relApp() {
    return new RelTo(this as unknown as VPlatform, this.graph.edges.appPlatform);
  }

  /** **library -> this**: Platforms supported by this Library. */
  get relLibrary() {
    return new RelTo(this as unknown as VPlatform, this.graph.edges.libraryPlatform);
  }

  /** **plang -> this**: Platforms supported by the Plang. */
  get relPlang() {
    return new RelTo(this as unknown as VPlatform, this.graph.edges.plangPlatform);
  }

  /** **tool -> this**: Platforms supported by the tool. */
  get relTool() {
    return new RelTo(this as unknown as VPlatform, this.graph.edges.toolPlatform);
  }
}

/** Blog Posts. */
export abstract class VPostBase extends PlangsVertex<"post", VPostData> {
  static readonly kind = "post" as const;
  static readonly desc = "Blog Posts.";
  override kind = VPostBase.kind;

  /** **this -> plang**: Plangs covered by the Post. */
  get relPlang() {
    return new RelFrom(this as unknown as VPost, this.graph.edges.postPlang);
  }
}

/** Tags. */
export abstract class VTagBase extends PlangsVertex<"tag", VTagData> {
  static readonly kind = "tag" as const;
  static readonly desc = "Tags.";
  override kind = VTagBase.kind;

  /** **app -> this**: Tags for this App. */
  get relApp() {
    return new RelTo(this as unknown as VTag, this.graph.edges.appTag);
  }

  /** **community -> this**: Tags for this Community. */
  get relCommunity() {
    return new RelTo(this as unknown as VTag, this.graph.edges.communityTag);
  }

  /** **learning -> this**: Tags for this Learning resource. */
  get relLearning() {
    return new RelTo(this as unknown as VTag, this.graph.edges.learningTag);
  }

  /** **library -> this**: Tags for this Library. */
  get relLibrary() {
    return new RelTo(this as unknown as VTag, this.graph.edges.libraryTag);
  }

  /** **plang -> this**: Tags associated with the Plang. */
  get relPlang() {
    return new RelTo(this as unknown as VTag, this.graph.edges.plangTag);
  }

  /** **tool -> this**: Tags associated with the tool. */
  get relTool() {
    return new RelTo(this as unknown as VTag, this.graph.edges.toolTag);
  }
}

/** Programmer's Tools. */
export abstract class VToolBase extends PlangsVertex<"tool", VToolData> {
  static readonly kind = "tool" as const;
  static readonly desc = "Programmer's Tools.";
  override kind = VToolBase.kind;

  /** **bundle -> this**: Tools in a Bundle. */
  get relBundle() {
    return new RelTo(this as unknown as VTool, this.graph.edges.bundleTool);
  }

  /** **license -> this**: Licenses for a Tool. */
  get relLicense() {
    return new RelTo(this as unknown as VTool, this.graph.edges.licenseTool);
  }

  /** **plang -> this**: Plangs that benefits from this tool. */
  get relPlang() {
    return new RelTo(this as unknown as VTool, this.graph.edges.plangTool);
  }

  /** **this -> plang**: Plangs used to write the tool. */
  get relToolWrittenIn() {
    return new RelFrom(this as unknown as VTool, this.graph.edges.toolToolWrittenInPlang);
  }

  /** **this -> platform**: Platforms supported by the tool. */
  get relPlatform() {
    return new RelFrom(this as unknown as VTool, this.graph.edges.toolPlatform);
  }

  /** **this -> tag**: Tags associated with the tool. */
  get relTag() {
    return new RelFrom(this as unknown as VTool, this.graph.edges.toolTag);
  }
}

/** Type systems. */
export abstract class VTypeSystemBase extends PlangsVertex<"tsys", VTypeSystemData> {
  static readonly kind = "tsys" as const;
  static readonly desc = "Type systems.";
  override kind = VTypeSystemBase.kind;

  /** **plang -> this**: Type systems used by the Plang. */
  get relPlang() {
    return new RelTo(this as unknown as VTypeSystem, this.graph.edges.plangTypeSystem);
  }
}
