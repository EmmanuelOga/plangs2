import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { HOVER, tw } from "@plangs/frontend/auxiliar/styles";

import { type Column, type FacetTableConfig, type Order, icon, label } from "./entries";

export function Header({
  action,
  class: cssClass,
  col,
  config,
  order,
}: { action: () => void; class?: string; col: Column; config: FacetTableConfig; order: Order }) {
  return (
    <button
      type="button"
      class={tw(
        HOVER,
        "flex flex-row gap-1 px-2 py-1",
        "items-center justify-between",
        "italic",
        "underline decoration-1 decoration-dotted",
        "cursor-pointer",
        cssClass,
      )}
      {...onClickOnEnter(action)}>
      <span>{label(col, config)}</span>
      <span class={tw("scale-75")}>{icon(col, order)}</span>
      <span class="flex-1" />
    </button>
  );
}
