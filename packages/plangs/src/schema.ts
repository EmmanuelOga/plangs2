////////////////////////////////////////////////////////////////////////////////
// Keys for all nodes and edges.
////////////////////////////////////////////////////////////////////////////////

/** Name of all nodes. */
export type N = "app" | "bundle" | "lib" | "license" | "paradigm" | "pl" | "plat" | "post" | "tag" | "tool" | "tsys";

/** Name of all edges. */
export type E =
  | "bundle"
  | "compilesTo"
  | "dialect"
  | "impl"
  | "influence"
  | "lib"
  | "license"
  | "paradigm"
  | "plBundle"
  | "plat"
  | "post"
  | "tag"
  | "tool"
  | "tsys"
  | "writtenIn";

////////////////////////////////////////////////////////////////////////////////
// Nodes can use CommonNodeData directly or extend it with more data.
////////////////////////////////////////////////////////////////////////////////

/** Node data shared across all Node types. */
export interface CommonNodeData {
  /* Name of the node. */
  name: string;
  /* Description of the node. */
  description: string;
  /* Websites related to the node. */
  websites: Link[];
  /** Keywords can be used to match against text content. */
  keywords: string[];
}

/** Programming language data. */
export type NPlangData = CommonNodeData & {
  /** File extensions supported by the language. */
  extensions: string[];
  /** Date the language first appeared. */
  firstAppeared: StrDate;
  /** Logos, screenshots or other images relevant to the language. */
  images: Image[];
  /** Can this particular implementation compile source-code to source-code? */
  isTranspiler: boolean;
  /** Languages like C, C++, Java, Python, JavaScript, etc. are mainstream and production ready. */
  isMainstream: boolean;
  /** A list of note worthy releases, not all of them. For instance, noteworthy release could be the latest for each major version. */
  releases: Release[];
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
  /** Title of the blog post. */
  title: string;
  /** Author of the blog post. */
  author: string;
  /** Website of the author of the blog post. */
  authorLink?: Link;
  /** Published date of the blog post.  */
  date: StrDate;
};

////////////////////////////////////////////////////////////////////////////////
// Nodes can use CommonEdgeData directly or extend it with more data.
////////////////////////////////////////////////////////////////////////////////

export interface CommonEdgeData {
  /** Keywords can be used to match against text content. */
  keywords: string[];
  /** Reference links, can be used to give a citation to back a relationship. */
  refs: Link[];
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
 * A reference to a web page.
 */
export interface Link {
  /** Title of the link, generally used for anchors (<a>). */
  title: string;
  /** Can be a complete URL including protocol (http/https) or a relative link if it links to https://plangs.page. */
  href: string;
  /** A link kind helps us quickly find the kind of link we are looking for. */
  kind?: "homepage" | "repository" | "releases" | "apidocs" | "wikipedia" | "plangs" | "other";
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
export type StrDate = `${year}-${month}-${day}`;

////////////////////////////////////////////////////////////////////////////////
// Types used to interact with OpenAI.
////////////////////////////////////////////////////////////////////////////////

/** Programming language information. */
export type PlAiResult = {
  data: NPlangData;

  /**
   * A list of applications written in this programming language, if any.
   * Each element is a key with prefix "app+", for instance: "app+word",
   * where "word" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  apps: string[];

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
   * List of libraries for this programming language, if any.
   * Each element is a key with prefix "lib+", for instance: "lib+ncurses",
   * where "ncurses" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  libraries: string[];

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
   * List of tools for this programming language, if any.
   * Each element is a key with prefix "tool+", for instance: "tool+make",
   * where "make" is a unique identifier using only lowercase letters, numbers and dashes.
   */
  tools: string[];

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
