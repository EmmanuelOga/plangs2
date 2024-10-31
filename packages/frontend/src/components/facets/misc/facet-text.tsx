import { useContext } from "preact/hooks";

import { ValRegExp } from "@plangs/auxiliar/value";
import { handler } from "@plangs/frontend/auxiliar/events";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";
import type { AnyFacetsMainState } from "@plangs/frontend/components/facets/main/state";

export function FacetText<GroupKey extends string, FacetKey extends string>({
  groupKey,
  facetKey,
  label,
}: { groupKey: GroupKey; facetKey: FacetKey; label: string }) {
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.
  const onInput = handler((input: HTMLInputElement) => {
    // TODO maybe escape the input value to avoid malicious regexes.
    main.doSetValue(groupKey, facetKey, new ValRegExp(new RegExp(`${input.value}`, "i")));
  });
  return (
    <input
      type="search"
      onInput={onInput}
      placeholder={label}
      class={tw("w-full", INPUT)}
      value={main.values.get(groupKey, facetKey)?.value?.source ?? ""}
    />
  );
}
