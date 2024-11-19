import type { LinguistLang } from "@plangs/languist/types";

////////////////////////////////////////////////////////////////////////////////
// Keys for all nodes and edges.
////////////////////////////////////////////////////////////////////////////////

/** Name of all nodes. */
export type N = "app" | "bundle" | "community" | "learning" | "lib" | "license" | "paradigm" | "pl" | "plat" | "post" | "tag" | "tool" | "tsys";

/** Name of all edges. */
// biome-ignore format: Keep it in one line.
export type E = "app" | "bundle" | "compilesTo" | "dialect" | "impl" | "influence" | "lib" | "license" | "paradigm" | "plBundle" | "plat" | "post" | "tag" | "tool" | "tsys" | "writtenIn";

////////////////////////////////////////////////////////////////////////////////
// Nodes can use CommonNodeData directly or extend it with more data.
////////////////////////////////////////////////////////////////////////////////

/** Node data shared across all Node types. */
export interface CommonNodeData {
  /* Name of the node. */
  name: string;
  /* Description of the node. */
  description: string;
  /** Keywords can be used to match against text content. */
  keywords: string[];
  /** Homepage URL of the node, if any. */
  extHomeURL?: string;
  /** Logos, screenshots or other images relevant to the language. */
  images: Image[];
}

/**
 * Programming language data. Composing various other types helps when converting
 * the types to JSONSchemas of only parts of the schemas.
 */
export type NPlangData = CommonNodeData & NPlangBaseData & NPlangRelData;

export type NPlangBaseData = {
  /** File Extensions, including the dot. Example: [".pas", ".tpu"]. */
  extensions: string[];
  /** File names are names that are associated with an specific language. Example: ['Makefile']. */
  filenames: string[];
  /** Year the language first appeared. */
  year: number;
  /** Can this particular implementation compile source-code to source-code? */
  isTranspiler: boolean;
  /** A list of note worthy releases, not all of them. For instance, noteworthy release could be the latest for each major version. */
  releases: Release[];
};

/** Data relations to other sources, like those coming from Languish and Github. */
export type NPlangRelData = {
  /** A list of stackoverflow tags used when asking questions about this plang. */
  stackovTags: string[];

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

  /** Github Path: this should be user/repo or org/repo, such that we can access it at `https://github.com/${path}` */
  extGithubPath?: string;

  /** Reddit Path: this should be reddit page path, such that we can access it at `https://reddit.com/r/${path}` */
  extRedditPath?: string;

  /** Wikipedia Path: this should be wikipedia page path, such that we can access it at `https://en.wikipedia.org/wiki/${path}` */
  extWikipediaPath?: string;

  /** Repository Path: this should be the repository URL. Use {@link `extGithubPath`} if the repository is hosted in Github. */
  extRepositoryURL?: string;
};

/** License data. */
export type NLicenseData = CommonNodeData & {
  /** spdx: The SPDX identifier from https://spdx.org/licenses/. */
  spdx?: string;
  /** Wether the license is recognized as Free/Libre by the Free Software Foundation (FSF). */
  isFSFLibre?: boolean;
  /** Wether the license is approved by the Open Source Initiative (OSI).*/
  isOSIApproved?: boolean;
};

/* Blog post data. */
export type NPostData = CommonNodeData & {
  /** Path of the blog post at https://plangs.page */
  path: string;
  /** Author of the blog post. */
  author: string;
  /** Website of the author of the blog post. */
  authorHref?: string;
  /** Published date of the blog post.  */
  date: StrDate;
};

////////////////////////////////////////////////////////////////////////////////
// Nodes can use CommonEdgeData directly or extend it with more data.
////////////////////////////////////////////////////////////////////////////////

export interface CommonEdgeData {
  /** Keywords can be used to match against text content. */
  keywords: string[];
}

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

/**
 * A release of a programming language.
 */
export interface Release {
  /** Arbitrary version string used by the artifact. */
  version: string;
  /** Name of the release, if there's any. */
  name?: string;
  /** Date of the release, if it is known. */
  date?: StrDate;
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

/**
 * A serializable date string.
 */
export type year = number;
export type month = string; // 0 padded
export type day = string; // 0 padded
/** A 0-padded YYYY-MM-DD date. Example: 2024-01-01. */
export type StrDate = `${year}-${month}-${day}` | `${year}-${month}` | `${year}`;

////////////////////////////////////////////////////////////////////////////////
// Types used to interact with OpenAI.
////////////////////////////////////////////////////////////////////////////////

/**
 * Data for an NPlang node generated by OpenAI.
 * We let go of the string literal types and make all ids strings to make it easier to work with OpenAI.
 *
 * Note that this Schema must support conversion to a format that OpenAI can understand.
 * https://platform.openai.com/docs/guides/structured-outputs#supported-schemas
 */
export type NPlangAI = {
  /** Basic data shared across all Node types. */
  commonData: CommonNodeData;

  /** Base programming language data. */
  basicPlangData: NPlangBaseData;

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
   * Each element is a key with prefix "license+", for instance: "license+mit",
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
  writtenIn: string[];
};
