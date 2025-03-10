import type { StrDate } from "@plangs/auxiliar/str_date";

/**
 * Fields that *more or less* shared across vertices.
 *
 * Some vertices will likely miss some fields, adding things here is a tradeoff.
 * For instance, Authors will likely not have a reddit or wikipedia path.
 */
export type VertexBaseData = {
  /* Name of the vertex. */
  name: string;
  /* Description of the vertex. */
  description: string;
  /* Shorter description of the vertex. */
  shortDesc: string;
  /** Date this first appeared, in the format: YYYY-MM-DD or YYYY-MMM or YYYY. */
  created: StrDate;
  /** Keywords can be used to match against text content. */
  keywords: string[];
  /** Homepage URL of the vertex, if any. */
  extHomeURL?: string;
  /** Logos, screenshots, profile pics, or other images. */
  images: Image[];
  /** External Links. */
  links: Link[];
  /** Reddit Path: we can access it at `https://reddit.com/r/${path}` */
  extRedditPath?: string;
  /** Wikipedia Path: we can access it at `https://en.wikipedia.org/wiki/${path}` */
  extWikipediaPath?: string;
  /** Stack Overflow tags, if applicable. */
  stackovTags: string[];
};

/**
 * Programming language data. Extending various other types helps when converting
 * the types to JSONSchemas for OpenAI's structured output:
 * we can pick and choose groups of fields we want to include.
 */
export type VPlangData = VPlangBaseData & VPlangRelData & VertexBaseData & GithubRepo;

/** Programming language information. */
export type VPlangBaseData = {
  /** File Extensions, including the dot. Example: [".pas", ".tpu"]. */
  extensions: string[];
  /** File names are names that are associated with an specific language. Example: ['Makefile']. */
  filenames: string[];
  /** Can this particular implementation compile source-code to source-code? */
  isTranspiler: boolean;
};

/**
 * Data relations to other sources, like those coming from Languish and Github.
 * Note that the Github fields only apply to languages, not general repos. They come from the GH Linguist ruby gem.
 */
export type VPlangRelData = {
  /** Ranking according to Languish. The ranking should correspond to metrios calculated a given quarter (for instance, Q3 2024). */
  languishRanking: number;
  /** Github Name, matching the data on github-linguist Ruby gem. */
  githubName?: string;
  /** Github Group name */
  githubGroupName?: string;
  /** Internal ID of the language in Github. Looks like a numeric id ("1", "2", "3") wrapped in a string. */
  githubLangId?: string;
  /** An HTML color name that Github assigns to some languages. Example: "#2A6277". */
  githubColor?: string;
  /** Languages that Github considers "popular", for whatever reason. */
  githubPopular?: boolean;
  /** Language Type, according to Github's linguist. */
  githubType?: string;
};

export type VLicenseData = VLicenseBaseData & VertexBaseData;

export type VLicenseBaseData = {
  /** spdx: The SPDX identifier from https://spdx.org/licenses/. */
  spdx?: string;
  /** Wether the license is recognized as Free/Libre by the Free Software Foundation (FSF). */
  isFSFLibre?: boolean;
  /** Wether the license is approved by the Open Source Initiative (OSI).*/
  isOSIApproved?: boolean;
};

/* Blog post data. */
export type VPostData = VPostBaseData & VertexBaseData;

export type VPostBaseData = {
  /** Path of the blog post at https://plangs.page */
  path: string;
  /** Author of the blog post. */
  author: string;
  /** Website of the author of the blog post. */
  authorHref?: string;
};

/** Learning resource data. */
export type VLearningData = VLearningBaseData & VertexBaseData;

export type VLearningBaseData = {
  /** Kinds of the learning resource. */
  kinds: LearningKind[];
};

export type VAppData = VertexBaseData & GithubRepo;
export type VAuthorData = VertexBaseData;
export type VLibraryData = VertexBaseData & GithubRepo;
export type VToolData = VertexBaseData & GithubRepo;
export type VSubsystemData = VertexBaseData & GithubRepo;

export type VBundleData = VertexBaseData;
export type VCommunityData = VertexBaseData;
export type VParadigmData = VertexBaseData;
export type VPlatformData = VertexBaseData;
export type VTagData = VertexBaseData;
export type VTypeSystemData = VertexBaseData;

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

/** Kind for a learning resource. A single resource can include more than one kind. */
export type LearningKind = "book" | "course" | "tutorial" | "video" | "other";

/** A release of a programming language. */
export interface Release {
  /** Arbitrary version string used by the artifact. */
  version: string;
  /** Name of the release, if there's any. */
  name?: string;
  /** Date of the release, if it is known, in the format: YYYY-MM-DD or YYYY-MMM or YYYY. */
  date?: StrDate;
}

/** A Link to an external resource. */
export interface Link {
  /** URL of the link. */
  url: string;
  /** Title of the link. */
  title?: string;
}

/**
 * An image, e.g., a logo.
 */
export interface Image {
  /** The kind of image. */
  kind: "logo" | "screenshot" | "other";
  /** A title for the image. */
  title: string;
  /** Full URL for the image, or path if it belongs to https://plangs.page. */
  url: string;
  /** Width in pixels. */
  width?: number;
  /** Height in pixels. */
  height?: number;
}

/** For anything that can be backed by a Github repository, we want at minimum the "path" and maybe star count. */
export type GithubRepo = {
  /** Github Path: this should be user/repo or org/repo, such that we can access it at `https://github.com/${path}` */
  extGithubPath?: string;
  /** Github Stars, if any. */
  githubStars?: number;
  /** Some important releases. For instance: the latest for each major version. */
  releases: Release[];
};

////////////////////////////////////////////////////////////////////////////////
// Types used to interact with OpenAI.
////////////////////////////////////////////////////////////////////////////////

/**
 * A Data type to interact with OpenAI's structured outputs.
 * https://platform.openai.com/docs/guides/structured-outputs#supported-schemas
 */
type AIVPlangData = Partial<VPlangBaseData & VertexBaseData & GithubRepo>;

/** Programming Language Data. */
export type AIVPlang = {
  /** Programming Language Data. */
  data: AIVPlangData;

  /**
   * List of programming languages that this language compiles to, if any.
   * Each element is a key with prefix "pl+", for instance: "pl+python",
   * where "python" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  compilesTo: string[];

  /**
   * List of programming languages that this language is a dialect of, if any.
   * Each element is a key with prefix "pl+", for instance: "pl+python",
   * where "python" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  dialectOf: string[];

  /**
   * List of programming languages that this language is implements, if any.
   * Each element is a key with prefix "pl+", for instance: "pl+python",
   * where "python" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  implements: string[];

  /**
   * List of programming languages that this language was influenced by, if any.
   * Each element is a key with prefix "pl+", for instance: "pl+python",
   * where "python" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  influencedBy: string[];

  /**
   * List of programming languages that this language influenced, if any.
   * Each element is a key with prefix "pl+", for instance: "pl+python",
   * where "python" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  influenced: string[];

  /**
   * List of licenses for this programming language, if any.
   * Each element is a key with prefix "license+", for instance: "lic+mit",
   * where "mit" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  licenses: string[];

  /**
   * List of paradigms for this programming language, if any.
   * Each element is a key with prefix "paradigm+", for instance: "paradigm+oop",
   * where "oop" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  paradigms: string[];

  /**
   * List of platforms for this programming language, if any.
   * Each element is a key with prefix "plat+", for instance: "plat+windows",
   * where "windows" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  platforms: string[];

  /**
   * List of tags for this programming language, if any.
   * Each element is a key with prefix "tag+", for instance: "tag+games",
   * where "games" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  tags: string[];

  /**
   * List of type systems for this programming language, if any.
   * Each element is a key with prefix "tsys+", for instance: "tsys+strong",
   * where "strong" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  typeSystems: string[];

  /**
   * List of programming languages uses to implement this programming language, if any.
   * Each element is a key with prefix "lib+", for instance: "pl+python",
   * where "python" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  writtenWith: string[];
};
