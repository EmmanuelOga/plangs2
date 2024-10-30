import type { Ref } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";

import { type AnyValue, ValNumber } from "@plangs/auxiliar/value";
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

  const init = main.initialValue(facetKey);
  // biome-ignore lint/correctness/useExhaustiveDependencies: We don't want dependencies here: we want a run-once hook.
  useEffect(() => {
    if (init === undefined || !input.current) return;
    // We used a function to map true/false to some reasonable Value.
    // If the user passed a reasonable value through the params, try that.
    if (typeof init === "number" && init > 1900 && init <= 2100) {
      input.current.checked = true;
      main.doSetValue(groupKey, facetKey, new ValNumber(init));
    } else {
      // This will just invoke the handler, which should check the checkbox and use the default.
      input.current.click();
    }
  }, []);

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
