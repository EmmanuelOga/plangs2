import { INPUT } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";

export function FacetBool<T extends string>({ facetKey, label }: { facetKey: T; label: string }) {
  return (
    <label for={facetKey} class={tw("block", "px-2")}>
      <input id={facetKey} name={facetKey} type="checkbox" placeholder={label} class={tw("-mt-1", INPUT)} />
      <span class="ml-2">{label}</span>
    </label>
  );
}
