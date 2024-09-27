import { tw } from "@plangs/frontend/utils";

export function Pill({ name }: { name: string }) {
  return (
    <div
      class={tw(
        "inline-block",
        "mr-1 mb-3 p-1.5",
        "font-black text-sm",

        "rounded",
        "bg-primary text-background",
        "shadow-lg shadow-secondary",
        "outline-2 outline-secondary",
      )}>
      {name}
    </div>
  );
}
