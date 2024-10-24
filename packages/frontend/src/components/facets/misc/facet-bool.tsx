import { INPUT } from "@plangs/frontend/styles";
import { handler, onClickOnEnter, tw } from "@plangs/frontend/utils";
import { Val } from "@plangs/graph/value";
import { useContext } from "preact/hooks";
import { FacetsMainContext } from "../main/facets-main";
import { getGroupKey } from "./facet-group";

export function FacetBool<T extends string>({ facetKey, label }: { facetKey: T; label: string }) {
  const main = useContext(FacetsMainContext);
  const toggle = handler((checkbox: HTMLInputElement) => {
    const groupKey = getGroupKey(checkbox);
    if (main && groupKey) main.doSetValue(groupKey, facetKey, Val.wrap(checkbox.checked));
  });
  return (
    <label for={facetKey} class={tw("block", "px-2")}>
      <input id={facetKey} name={facetKey} type="checkbox" {...onClickOnEnter(toggle)} placeholder={label} class={tw("-mt-1", INPUT)} />
      <span class="ml-2">{label}</span>
    </label>
  );
}
