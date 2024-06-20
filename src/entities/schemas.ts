/**
 * To define the Vertex ID for each Vertex type (using a template literal type).
 */
import type { T_VId } from "../graph/vertex";

////////////////////////////////////////////////////////////////////////////////
// Types starting with "V_" are used for Vertex data.
////////////////////////////////////////////////////////////////////////////////

/**
 * A programming language Vertex.
 */
export interface V_Plang {
  name: string;
  images: Image[];

  websites: Link[];
  releases: Release[];

  extensions: string[];
  scoping: ("lexical" | "static" | "dynamic" | "other")[];

  /**
   * A map of references grouped by tag: #influences, #influenced_by, etc.
   */
  references: Record<string, Link[]>;
}

export type T_Id_V_Plang = T_VId<`pl`>;

/**
 * A platform Vertex, e.g., Linux, Windows, etc.
 */
export interface V_Platform {
  name: string;
  websites: Link[];
}

export type T_Id_V_Platform = T_VId<`platf`>;

/**
 * A type system Vertex, e.g., OOP, Duck, Dynamic, etc.
 */
export interface V_TypeSystem {
  name: string;
  websites: Link[];
}

export type T_Id_V_TypeSystem = T_VId<`tsys`>;

/**
 * A programming paradigm Vertex, e.g., Functional, Imperative, etc.
 */
export interface V_Paradigm {
  name: string;
  websites: Link[];
}

export type T_Id_V_Paradigm = T_VId<`para`>;

/**
 * A person Vertex, for people involved in the development of a programming language.
 */
export interface V_Person {
  name: string;
  websites: Link[];
}

export type T_Id_V_Person = T_VId<`person`>;

/**
 * A license Vertex, e.g., MIT, GPL, etc.
 */
export interface V_License {
  name: string;
  websites: Link[];
}

export type T_Id_V_License = T_VId<`license`>;

////////////////////////////////////////////////////////////////////////////////
// Types starting with "E_" are used for Edge data.
////////////////////////////////////////////////////////////////////////////////

/**
 * Additional information about people involved in the development of a programming language.
 */
export interface E_People {
  role: "designer" | "contributor";
}

/**
 * Most edges don't require additional data.
 */
// biome-ignore lint/suspicious/noEmptyInterface: a tagging type since most edges don't need additional data.
export interface E_Empty {}

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
