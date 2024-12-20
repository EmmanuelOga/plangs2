import { useContext } from "preact/hooks";

import { debounce } from "@plangs/auxiliar/debounce";
import { ValString } from "@plangs/auxiliar/value";
import { handler } from "@plangs/frontend/auxiliar/events";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { type AnyFacetsMainState, FacetsMainContext } from "@plangs/frontend/facets/main/use_state";

export function FacetText<GroupKey extends string, FacetKey extends string>({
  groupKey,
  facetKey,
  label,
}: { groupKey: GroupKey; facetKey: FacetKey; label: string }) {
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.
  const onInput = debounce(
    handler((input: HTMLInputElement) => {
      main.doSetValue(groupKey, facetKey, new ValString(input.value.toLowerCase()));
    }),
    50,
  );
  const current = main.values.get(groupKey, facetKey)?.value ?? "";
  return <input type="search" onInput={onInput} placeholder={label} class={tw(INPUT, "mt-8")} value={current} />;
}
