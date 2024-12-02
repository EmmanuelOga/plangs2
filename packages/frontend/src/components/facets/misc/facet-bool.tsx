import type { Ref } from "preact";
import { useContext, useRef } from "preact/hooks";

import { type AnyValue, ValBool } from "@plangs/auxiliar/value";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { handler } from "@plangs/frontend/auxiliar/events";
import { tw } from "@plangs/frontend/auxiliar/styles";
import { type AnyFacetsMainState, FacetsMainContext } from "@plangs/frontend/components/facets/main/main";

export type FacetBoolMapper = (checked: boolean) => AnyValue;

export type FacetBoolProps<GroupKey, FacetKey> = {
  groupKey: GroupKey;
  facetKey: FacetKey;
  label: string;
  valueMapper?: FacetBoolMapper;
};

export function FacetBool<GroupKey extends string, FacetKey extends string>({
  groupKey,
  facetKey,
  label,
  valueMapper = (checked: boolean) => new ValBool(checked),
}: FacetBoolProps<GroupKey, FacetKey>) {
  const input = useRef<HTMLInputElement>();
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.

  const toggle = handler((checkbox: HTMLInputElement) => {
    main.doSetValue(groupKey, facetKey, valueMapper(checkbox.checked));
  });

  return (
    <label for={facetKey} class={tw("block", "px-2")}>
      <input
        id={facetKey}
        name={facetKey}
        type="checkbox"
        class={tw("-mt-1")}
        placeholder={label}
        {...onClickOnEnter(toggle)}
        checked={!!main.values.get(groupKey, facetKey)?.isPresent}
        ref={input as Ref<HTMLInputElement>}
      />
      <span class="ml-2">{label}</span>
    </label>
  );
}
