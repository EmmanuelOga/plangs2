import { Edge, Vertex } from './graph';

////////////////////////////////////////////////////////////////////////////////
// Vertex Types
////////////////////////////////////////////////////////////////////////////////

export interface Plang extends Vertex<'pl'> {
    name: string;
    urls: Url[];
    firstAppeared: StrDate
    releases: Release[];
}

export interface TypeSystem extends Vertex<'ts'> {
    name: string;
}

export interface Person extends Vertex<'person'> {
    name: string;
}

////////////////////////////////////////////////////////////////////////////////
// Edge Types
////////////////////////////////////////////////////////////////////////////////

export interface People extends Edge<`people`, Person['id'], Plang['id']> {
    role: 'designer' | 'contributor' | 'maintainer';
 }

export interface PlangType extends Edge<'pl-ts', Plang['id'], TypeSystem['id']> { }

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

export interface Release {
    version: string;
    date: StrDate;
    tags: string[];
}

export type year = number;
export type month = number;
export type day = number;

export type StrDate = `${year}-${month}-${day}`;

export interface Url {
    kind: 'homepage' | 'repository' | 'releases' | 'apidocs' | 'other';
    url: string;
}