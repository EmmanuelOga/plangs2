import { useContext } from "preact/hooks";

import { ValBool } from "@plangs/auxiliar/value";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { handler } from "@plangs/frontend/auxiliar/events";
import { tw } from "@plangs/frontend/auxiliar/styles";
import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";
import type { AnyFacetsMainState } from "@plangs/frontend/components/facets/main/state";

export function FacetBool<GroupKey extends string, FacetKey extends string>({
  groupKey,
  facetKey,
  label,
}: { facetKey: FacetKey; groupKey: GroupKey; label: string }) {
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.
  const toggle = handler((checkbox: HTMLInputElement) => {
    main.doSetValue(groupKey, facetKey, new ValBool(checkbox.checked));
  });
  return (
    <label for={facetKey} class={tw("block", "px-2")}>
      <input id={facetKey} name={facetKey} type="checkbox" {...onClickOnEnter(toggle)} placeholder={label} class={tw("-mt-1")} />
      <span class="ml-2">{label}</span>
    </label>
  );
}
