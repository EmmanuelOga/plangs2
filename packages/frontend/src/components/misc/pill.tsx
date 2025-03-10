import { tw } from "@plangs/frontend/auxiliar/styles";
import type { ComponentChildren } from "preact";

export function Pill({ children, title, class: klass }: { title?: string; children: ComponentChildren; class?: string }) {
  return (
    <div
      {...(title ? { title } : {})}
      class={tw(
        "max-w-full",
        "mr-4 mb-3 px-2",
        "outline-1 outline-primary/50",
        "rounded-tl-lg rounded-br-lg",
        "bg-secondary/75 text-foreground/85",
        "truncate",
        klass,
      )}>
      {children}
    </div>
  );
}
