import type { Ref } from "preact";
import { useContext, useRef } from "preact/hooks";

import { type AnyValue, ValBool } from "@plangs/auxiliar/value";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { handler } from "@plangs/frontend/auxiliar/events";
import { tw } from "@plangs/frontend/auxiliar/styles";
import { type AnyFacetsMainState, FacetsMainContext } from "@plangs/frontend/facets/main/use_state";

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
    <label for={facetKey} class={tw("inline-flex items-center gap-2", "mx-2")}>
      <input
        id={facetKey}
        name={facetKey}
        type="checkbox"
        placeholder={label}
        {...onClickOnEnter(toggle)}
        checked={!!main.values.get(groupKey, facetKey)?.isPresent}
        ref={input as Ref<HTMLInputElement>}
      />
      {label}
    </label>
  );
}
