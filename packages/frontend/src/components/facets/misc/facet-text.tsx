import { INPUT } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";

export function FacetText<T>({ facetKey, label }: { facetKey: T; label: string }) {
  return <input type="search" placeholder={label} class={tw("w-full", INPUT)} />;
}
