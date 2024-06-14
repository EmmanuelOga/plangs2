////////////////////////////////////////////////////////////////////////////////
// Types starting with "V_" are used for Vertex data.
////////////////////////////////////////////////////////////////////////////////

export interface V_Plang {
    name: string;
    urls: Url[];
    firstAppeared: StrDate
    releases: Release[];
}

export interface V_Implementation {
    name: string;
}

export interface V_Platform {
    name: string;
}

export interface V_TypeSystem {
    name: string;
}

export interface V_Person {
    name: string;
}

////////////////////////////////////////////////////////////////////////////////
// Types starting with "E_" are used for Edge data.
////////////////////////////////////////////////////////////////////////////////

/**
 * Some edges won't need additional data.
 */
export type E_Empty = {};

export interface E_People {
    role: 'designer' | 'contributor' | 'maintainer';
}

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

export interface Url {
    kind: 'homepage' | 'repository' | 'releases' | 'apidocs' | 'other';
    url: string;
}

export interface Release {
    version: string;
    date: StrDate;
    tags: string[];
}
export type year = number;
export type month = number;
export type day = number;
export type StrDate = `${year}-${month}-${day}`;