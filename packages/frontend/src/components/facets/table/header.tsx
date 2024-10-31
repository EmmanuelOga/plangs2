import { HOVER, tw } from "@plangs/frontend/auxiliar/styles";

import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
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
      class={tw("px-2 py-1", "italic", "underline decoration-1 decoration-dotted", "cursor-pointer", HOVER, cssClass)}
      {...onClickOnEnter(action)}>
      <span class={tw("inline-flex", "items-center justify-between", "gap-1")}>
        <span>{label(col, config)}</span>
        <span class={tw("scale-75", "mt-1")}>{icon(col, order)}</span>
      </span>
    </button>
  );
}
