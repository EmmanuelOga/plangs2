import { tw } from "@plangs/frontend/auxiliar/styles";
import type { ComponentChildren } from "preact";

export function Pill({ children, title }: { title?: string; children: ComponentChildren }) {
  return (
    // shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-blue-600 inset-ring inset-ring-white/15
    <div
      {...(title ? { title } : {})}
      class={tw(
        "inline-flex items-center",
        "mr-4 mb-3 h-8 px-2",
        "border-1 border-foreground/25",
        "rounded-tl-2xl rounded-br-2xl",
        "bg-secondary/75 text-foreground/85",
        "overflow-ellipsis whitespace-nowrap",
      )}>
      {children}
    </div>
  );
}
