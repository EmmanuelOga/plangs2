import { Wade } from "../../vendor/Wade/Wade.js";

export type SerializableIndex = {
  // Wade will index only the array of names. This array will have the matching ids.
  ids: string[];
  // Wade serializes to a string, kind of like a JSON string but needs to be parsed by Wade.
  index: string;
};

/** Return an object that can be JSON.stringified to save the result of indexing. */
export function createIndex(ids: string[], names: string[]): SerializableIndex {
  return { ids, index: Wade.save(Wade(names)) };
}

/** Load the serialized index and create a {@link SearchIndex} instance. */
export async function loadIndex(idxReq: Promise<Response>): Promise<SearchIndex> {
  const { ids, index }: SerializableIndex = await (await idxReq).json();
  const searchFun = Wade(index);
  return new SearchIndex(ids, searchFun);
}

/** Simple wrapper for Wade search. */
export class SearchIndex {
  constructor(
    public ids: string[],
    public impl: (query: string) => { index: number }[],
  ) {}

  search(query: string): Set<string> {
    const result = new Set<string>();
    for (const { index } of this.impl(query)) {
      result.add(this.ids[index]);
    }
    return result;
  }
}
