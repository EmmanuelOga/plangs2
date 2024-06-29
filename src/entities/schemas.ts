/**
 * To define the Vertex ID for each Vertex type (using a template literal type).
 */
import type { VID } from "../graph/vertex";

////////////////////////////////////////////////////////////////////////////////
// Types starting with "V_" are used for Vertex data.
////////////////////////////////////////////////////////////////////////////////

/**
 * A programming language Vertex.
 */
export interface V_Plang {
  name: string;

  extensions: string[];
  images: Image[];
  releases: Release[];
  scoping: ("lexical" | "static" | "dynamic" | "other")[];
  websites: Link[];

  /**
   * A map of references grouped by tag: #influences, #influenced_by, etc.
   */
  references: Record<string, Link[]>;
}

export type VID_Plang = VID<`pl`>;

/**
 * A platform Vertex, e.g., Linux, Windows, etc.
 */
export interface V_Platform {
  name: string;
  websites: Link[];
}

export type VID_Platform = VID<`platf`>;

/**
 * A type system Vertex, e.g., OOP, Duck, Dynamic, etc.
 */
export interface V_TypeSystem {
  name: string;
  websites: Link[];
}

export type VID_TypeSystem = VID<`tsys`>;

/**
 * A programming paradigm Vertex, e.g., Functional, Imperative, etc.
 */
export interface V_Paradigm {
  name: string;
  websites: Link[];
}

export type VID_Paradigm = VID<`para`>;

/**
 * A person Vertex, for people involved in the development of a programming language.
 */
export interface V_Person {
  name: string;
  websites: Link[];
}

export type VID_Person = VID<`person`>;

/**
 * A license Vertex, e.g., MIT, GPL, etc.
 */
export interface V_License {
  name: string;
  websites: Link[];
}

export type VID_License = VID<`lic`>;

////////////////////////////////////////////////////////////////////////////////
// Types starting with "E_" are used for Edge data.
////////////////////////////////////////////////////////////////////////////////

/** Allow all edge relationships to cite references. */
export interface E_Base {
  references: Link[];
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
 * A release of a programming language.
 */
export interface Release {
  version: string;
  date?: StrDate;
  kind: "first" | "preview" | "stable" | "other";
}

/**
 * A reference to a web page.
 */
export interface Link {
  kind: "homepage" | "repository" | "releases" | "apidocs" | "wikipedia" | "other";
  href: string;
  title: string;
}

/**
 * An image, e.g., a logo.
 */
export interface Image {
  kind: "logo" | "other";
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
