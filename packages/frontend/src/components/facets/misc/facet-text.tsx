import { useContext } from "preact/hooks";

import { ValRegExp } from "@plangs/auxiliar/value";
import { handler } from "@plangs/frontend/auxiliar/events";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";

import { getGroupKey } from "./facet-group";

export function FacetText<T extends string>({ facetKey, label }: { facetKey: T; label: string }) {
  const main = useContext(FacetsMainContext);
  const onInput = handler((input: HTMLInputElement) => {
    const groupKey = getGroupKey(input);
    // TODO maybe escape the input value to avoid malicious regexes.
    // biome-ignore lint/suspicious/noExplicitAny: this facetKey could be any: a plang key, a tool key, etc.
    if (main && groupKey) main.doSetValue(groupKey, facetKey as any, new ValRegExp(new RegExp(`${input.value}`, "i")));
  });
  return <input type="search" onInput={onInput} placeholder={label} class={tw("w-full", INPUT)} />;
}
