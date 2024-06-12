import { Table, Vertex, Edge } from './graph';

export interface ProgLang extends Vertex<'pl'> {
    name: string;
    urls: Url[];
}

export interface Person extends Vertex<'person'> {
    name: string;
}

export interface Designer extends Edge<`designer`, ProgLang['id'], Person['id']> {
}

export interface Url {
    type: 'homepage' | 'wikipedia' | 'github' | 'npm' | 'other';
    url: string;
    title: string;
}