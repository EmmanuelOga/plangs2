import { BAR, BORDER } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { ComponentChildren } from "preact";

export function FacetGroup({ title, visible, children }: { title: string; visible?: boolean; children: ComponentChildren }) {
  return (
    <div class={tw("flex-1", "flex flex-col", "overflow-y-scroll", !visible && "hidden")}>
      <header class={tw("shrink-0", "p-2", "truncate", "text-primary", tw(BORDER, "border-b-1"), BAR)}>{title}</header>
      <div class={tw("flex-1", "flex flex-col", "gap-4")}>{children}</div>
    </div>
  );
}
