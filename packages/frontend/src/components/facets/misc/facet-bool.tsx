import { useContext } from "preact/hooks";

import { ValBool } from "@plangs/auxiliar/value";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { handler } from "@plangs/frontend/auxiliar/events";
import { tw } from "@plangs/frontend/auxiliar/styles";
import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";

import { getGroupKey } from "./facet-group";

export function FacetBool<T extends string>({ facetKey, label }: { facetKey: T; label: string }) {
  const main = useContext(FacetsMainContext);
  const toggle = handler((checkbox: HTMLInputElement) => {
    const groupKey = getGroupKey(checkbox);
    // biome-ignore lint/suspicious/noExplicitAny: this facetKey could be any: a plang key, a tool key, etc.
    if (main && groupKey) main.doSetValue(groupKey, facetKey as any, new ValBool(checkbox.checked));
  });
  return (
    <label for={facetKey} class={tw("block", "px-2")}>
      <input id={facetKey} name={facetKey} type="checkbox" {...onClickOnEnter(toggle)} placeholder={label} class={tw("-mt-1")} />
      <span class="ml-2">{label}</span>
    </label>
  );
}
