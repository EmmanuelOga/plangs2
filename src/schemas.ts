////////////////////////////////////////////////////////////////////////////////
// Types starting with "V_" are used for Vertex data.
////////////////////////////////////////////////////////////////////////////////

import type { VID } from "./graph/vertex";

export type T_Id_V_Plang = VID<`pl`>;
export interface V_Plang {
    name: string;
    images: Image[];

    websites: Link[];
    releases: Release[];

    extensions: string[];
    scoping: ('lexical' | 'static' | 'dynamic' | 'other')[];

    // A map of references grouped by tag: #influences, #influenced_by, etc.
    references: { [tag: string]: Link[] };
}

export type T_Id_V_Platform = VID<`platf`>;
export interface V_Platform {
    name: string;
    websites: Link[];
}

export type T_Id_V_TypeSystem = VID<`tsys`>;
export interface V_TypeSystem {
    name: string;
    websites: Link[];
}

export type T_Id_V_Paradigm = VID<`para`>;
export interface V_Paradigm {
    name: string;
    websites: Link[];
}

export type T_Id_V_Person = VID<`person`>;
export interface V_Person {
    name: string;
    websites: Link[];
}

export type T_Id_V_License = VID<`license`>;
export interface V_License {
    name: string;
    websites: Link[];
}

////////////////////////////////////////////////////////////////////////////////
// Types starting with "E_" are used for Edge data.
////////////////////////////////////////////////////////////////////////////////

export interface E_People {
    role: 'designer' | 'contributor';
}

// biome-ignore lint/suspicious/noEmptyInterface: some edges don't need additional data.
export interface E_Empty {
}

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

export interface Release {
    version: string;
    date?: StrDate;
    kind: 'first' | 'preview' | 'stable' | 'other';
}

export interface Link {
    kind: 'homepage' | 'repository' | 'releases' | 'apidocs' | 'wikipedia' | 'other';
    href: string;
    title: string;
}

export interface Image {
    kind: 'logo' | 'other';
    url: string;
    width?: number;
    height?: number;
}

export type year = number;
export type month = number;
export type day = number;
export type StrDate = `${year}-${month}-${day}`;