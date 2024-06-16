////////////////////////////////////////////////////////////////////////////////
// Types starting with "V_" are used for Vertex data.
////////////////////////////////////////////////////////////////////////////////

import type { V, VID } from "./graph/vertex";

export type ID_V_Plang = VID<`pl`>;
export interface V_Plang extends V {
    images: Image[];
    websites: Link[];
    firstAppeared: StrDate
    releases: Release[];
    selfHosted: boolean;
    extensions: string[];

    // A map of references grouped by tag: #influences, #influenced_by, etc.
    references: { [tag: string]: Link[] };
}

export type ID_V_Implementation = VID<`impl`>;
export interface V_Implementation extends V {
    websites: Link[];
    releases: Release[];
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