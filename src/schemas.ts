import { Edge, Vertex } from './graph';

////////////////////////////////////////////////////////////////////////////////
// Types starting with "V" are used for Vertex data.
////////////////////////////////////////////////////////////////////////////////

export interface VPlang {
    name: string;
    urls: Url[];
    firstAppeared: StrDate
    releases: Release[];
}

export interface VTypeSystem {
    name: string;
}

export interface VPerson {
    name: string;
}

////////////////////////////////////////////////////////////////////////////////
// Types starting with "E" are used for Edge data.
////////////////////////////////////////////////////////////////////////////////

export interface EPeople {
    role: 'designer' | 'contributor' | 'maintainer';
}

export interface EPlangTypeSystem {
    // No additional data.
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