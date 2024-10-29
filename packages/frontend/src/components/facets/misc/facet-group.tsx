import type { ComponentChildren } from "preact";

import { BAR, BORDER, tw } from "@plangs/frontend/auxiliar/styles";

export function FacetGroup({ label, active, children }: { label: string; active?: boolean; children: ComponentChildren }) {
  return (
    <div class={tw("flex-1", "flex flex-col", "overflow-y-scroll", !active && "hidden")}>
      <header class={tw("shrink-0", "p-2", "truncate", "text-primary", tw(BORDER, "border-b-1"), BAR)}>{label}</header>
      <div class={tw("flex-1", "flex flex-col", "gap-4")}>{children}</div>
    </div>
  );
}
