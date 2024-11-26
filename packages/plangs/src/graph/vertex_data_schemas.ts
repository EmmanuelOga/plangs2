/** Node data shared across all Node types. */
export interface VertexBaseData {
  /* Name of the node. */
  name: string;
  /* Description of the node. */
  description: string;
  /** Date this first appeared. */
  created: StrDate;
  /** Keywords can be used to match against text content. */
  keywords: string[];
  /** Homepage URL of the node, if any. */
  extHomeURL?: string;
  /** Logos, screenshots or other images relevant to the language. */
  images: Image[];
  /** Links to external resources. */
  links: Link[];
}

/**
 * Programming language data. Extending various other types helps when converting
 * the types to JSONSchemas for OpenAI's structured output:
 * we can pick and choose groups of fields we want to include.
 */
export interface VPlangData extends VertexBaseData, VPlangBaseData, VPlangRelData, GithubRepo {}

export interface VPlangBaseData {
  /** File Extensions, including the dot. Example: [".pas", ".tpu"]. */
  extensions: string[];
  /** File names are names that are associated with an specific language. Example: ['Makefile']. */
  filenames: string[];
  /** Can this particular implementation compile source-code to source-code? */
  isTranspiler: boolean;
  /** Some important releases. For instance: the latest for each major version. */
  releases: Release[];
}

/** Data relations to other sources, like those coming from Languish and Github. */
export interface VPlangRelData {
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

  /** Reddit Path: this should be reddit page path, such that we can access it at `https://reddit.com/r/${path}` */
  extRedditPath?: string;

  /** Wikipedia Path: this should be wikipedia page path, such that we can access it at `https://en.wikipedia.org/wiki/${path}` */
  extWikipediaPath?: string;

  /** Repository Path: this should be the repository URL. Use {@link `extGithubPath`} if the repository is hosted in Github. */
  extRepositoryURL?: string;
}

export interface VLicenseData extends VertexBaseData {
  /** spdx: The SPDX identifier from https://spdx.org/licenses/. */
  spdx?: string;
  /** Wether the license is recognized as Free/Libre by the Free Software Foundation (FSF). */
  isFSFLibre?: boolean;
  /** Wether the license is approved by the Open Source Initiative (OSI).*/
  isOSIApproved?: boolean;
}

/* Blog post data. */
export interface VPostData extends VertexBaseData {
  /** Path of the blog post at https://plangs.page */
  path: string;
  /** Author of the blog post. */
  author: string;
  /** Website of the author of the blog post. */
  authorHref?: string;
  /** Published date of the blog post.  */
  date: StrDate;
}

/** Learning resource data. */
export interface VLearningData extends VertexBaseData {
  /** Kinds of the learning resource. */
  kinds: LearningKind[];
}

export interface VAppData extends VertexBaseData, GithubRepo {}
export interface VBundleData extends VertexBaseData {}
export interface VCommunityData extends VertexBaseData {}
export interface VLibraryData extends VertexBaseData, GithubRepo {}
export interface VParadigmData extends VertexBaseData {}
export interface VPlatformData extends VertexBaseData {}
export interface VTagData extends VertexBaseData {}
export interface VToolData extends VertexBaseData, GithubRepo {}
export interface VTypeSystemData extends VertexBaseData {}

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
  /** Date of the release, if it is known. */
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

export type year = number;
export type month = string; // 0 padded
export type day = string; // 0 padded

/** A 0-padded YYYY-MM-DD date. Example: 2024-12-31. */
export type StrDate = `${year}-${month}-${day}` | `${year}-${month}` | `${year}`;

/** For anything that can be backed by a Github repository, we want at minimum the "path" and maybe star count. */
export type GithubRepo = {
  /** Github Stars, if any. */
  githubStars?: number;
  /** Github Path: this should be user/repo or org/repo, such that we can access it at `https://github.com/${path}` */
  extGithubPath?: string;
  /** Date of creation. */
  ghRepoCreated?: StrDate;
  /** Some important releases. For instance: the latest for each major version. */
  releases: Release[];
};
