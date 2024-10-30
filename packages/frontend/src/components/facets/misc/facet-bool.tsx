import type { Ref } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";

import type { AnyValue } from "@plangs/auxiliar/value";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { handler } from "@plangs/frontend/auxiliar/events";
import { tw } from "@plangs/frontend/auxiliar/styles";
import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";
import type { AnyFacetsMainState } from "@plangs/frontend/components/facets/main/state";

export function FacetBool<GroupKey extends string, FacetKey extends string>({
  groupKey,
  facetKey,
  label,
  value,
}: { facetKey: FacetKey; groupKey: GroupKey; label: string; value: (checked: boolean) => AnyValue }) {
  const input = useRef<HTMLInputElement>();
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.

  const toggle = handler((checkbox: HTMLInputElement) => {
    main.doSetValue(groupKey, facetKey, value(checkbox.checked));
  });

  // Initialize the checkbox by clicking it. This will only happen on first render.
  const init = main.initialValue(facetKey);
  if (init) useEffect(() => input.current?.click(), []);

  return (
    <label for={facetKey} class={tw("block", "px-2")}>
      <input
        id={facetKey}
        name={facetKey}
        type="checkbox"
        class={tw("-mt-1")}
        placeholder={label}
        {...onClickOnEnter(toggle)}
        ref={input as Ref<HTMLInputElement>}
      />
      <span class="ml-2">{label}</span>
    </label>
  );
}
