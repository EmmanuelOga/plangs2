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
      class={tw("px-1", "italic", "underline decoration-1 decoration-dotted", "cursor-pointer", cssClass)}
      {...onClickOnEnter(action)}>
      <div class={tw(HOVER, "inline-flex w-full", "px-1", "items-center justify-between", "gap-1")}>
        <span>{label(col, config)}</span>
        <span class={tw("scale-75", "mt-1")}>{icon(col, order)}</span>
        <span class="flex-1" />
      </div>
    </button>
  );
}
