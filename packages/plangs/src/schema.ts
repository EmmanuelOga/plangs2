export interface V_Base {
  name: string;
  description: string;
  websites: Link[];
}

/**
 * A programming language Vertex.
 */
export interface V_Plang extends V_Base {
  vid: `pl+${string}`;
  extensions: string[];
  images: Image[];
  releases: Release[];
  scoping: Scoping[];
  isTranspiler: boolean;
}

/**
 * A platform Vertex, e.g., Linux, Windows, etc.
 */
export interface V_Platform extends V_Base {
  vid: `platf+${string}`;
}

/**
 * A type system Vertex, e.g., OOP, Duck, Dynamic, etc.
 */
export interface V_TypeSystem extends V_Base {
  vid: `tsys+${string}`;
}

/**
 * A programming paradigm Vertex, e.g., Functional, Imperative, etc.
 */
export interface V_Paradigm extends V_Base {
  vid: `para+${string}`;
}

/**
 * A person Vertex, for people involved in the development of a programming language.
 */
export interface V_Person extends V_Base {
  vid: `person+${string}`;
}

/**
 * A license Vertex, e.g., MIT, GPL, etc.
 */
export interface V_License extends V_Base {
  vid: `lic+${string}`;
}

/**
 * A tool Vertex, e.g., Version Manager, Linter, Formatter,  etc.
 */
export interface V_Tool extends V_Base {
  vid: `tool+${string}`;
}

/**
 * A library Vertex.
 */
export interface V_Library extends V_Base {
  vid: `lib+${string}`;
}

////////////////////////////////////////////////////////////////////////////////
// Edge Types
////////////////////////////////////////////////////////////////////////////////

/** Allow all edge relationships to cite references. */
export interface E_Base {
  refs: Link[];
}

export interface E_PersonPlang extends E_Base {
  role: "designer" | "developer";
}

export interface E_DialectOf extends E_Base {}

export interface E_HasLicense extends E_Base {}

export interface E_Implements extends E_Base {}

export interface E_LInfluencedL extends E_Base {}

export interface E_PersonPlang extends E_Base {}

export interface E_PlangPara extends E_Base {}

export interface E_PlangTsys extends E_Base {}

export interface E_SupportsPlatf extends E_Base {}

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

/**
 * The scoping of a programming language.
 */
export type Scoping = "lexical" | "static" | "dynamic" | "other";

/**
 * A release of a programming language.
 */
export interface Release {
  version: string;
  kind: "first" | "preview" | "stable" | "other";
  name?: string;
  date?: StrDate;
}

/**
 * A reference to a web page.
 */
export interface Link {
  kind?: "homepage" | "repository" | "releases" | "apidocs" | "wikipedia" | "other";
  href: string;
  title: string;
}

/**
 * An image, e.g., a logo.
 */
export interface Image {
  kind: "logo" | "screenshot" | "other";
  url: string;
  width?: number;
  height?: number;
}

/**
 * A serializable date string.
 */
export type year = number;
export type month = number;
export type day = number;
export type StrDate = `${year}-${month}-${day}`;
