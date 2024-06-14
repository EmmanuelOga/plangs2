////////////////////////////////////////////////////////////////////////////////
// Types starting with "V_" are used for Vertex data.
////////////////////////////////////////////////////////////////////////////////

import { V } from "./graph/vertex";

export interface V_Plang extends V {
    urls: Url[];
    firstAppeared: StrDate
    releases: Release[];
}

export interface V_Implementation extends V {
}

export interface V_Platform extends V {
}

export interface V_TypeSystem extends V {
}

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