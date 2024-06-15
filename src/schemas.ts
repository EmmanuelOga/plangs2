////////////////////////////////////////////////////////////////////////////////
// Types starting with "V_" are used for Vertex data.
////////////////////////////////////////////////////////////////////////////////

import { V, VID } from "./graph/vertex";

export type ID_V_Plang = VID<`pl`>;
export interface V_Plang extends V {
    firstAppeared: StrDate
    releases: Release[];
    websites: Link[];
    logos: Image[];
}

export type ID_V_Implementation = VID<`impl`>;
export interface V_Implementation extends V {
}

export type ID_V_Platform = VID<`platf`>;
export interface V_Platform extends V {
}

export type ID_V_TypeSystem = VID<`tsys`>;
export interface V_TypeSystem extends V {
}

export type ID_V_Person = VID<`person`>;
export interface V_Person extends V {
}

////////////////////////////////////////////////////////////////////////////////
// Types starting with "E_" are used for Edge data.
////////////////////////////////////////////////////////////////////////////////

/**
 * For references documenting something about the edge.
 */
export interface E_Reference {
    references: Link[];
}

export interface E_People {
    role: 'designer' | 'contributor' | 'maintainer';
}

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

export interface Release {
    version: string;
    date: StrDate;
    tags: string[];
}

export interface Link {
    kind: 'homepage' | 'repository' | 'releases' | 'apidocs' | 'other';
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