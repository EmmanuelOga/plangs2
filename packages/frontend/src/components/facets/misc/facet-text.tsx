import { useContext } from "preact/hooks";

import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";
import { INPUT } from "@plangs/frontend/styles";
import { handler, tw } from "@plangs/frontend/utils";
import { Val } from "@plangs/graph/value";

import { getGroupKey } from "./facet-group";

export function FacetText<T extends string>({ facetKey, label }: { facetKey: T; label: string }) {
  const main = useContext(FacetsMainContext);
  const onInput = handler((input: HTMLInputElement) => {
    const groupKey = getGroupKey(input);
    if (main && groupKey) main.doSetValue(groupKey, facetKey, Val.wrap(input.value));
  });
  return <input type="search" onInput={onInput} placeholder={label} class={tw("w-full", INPUT)} />;
}
