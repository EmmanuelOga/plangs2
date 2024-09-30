import { tw } from "@plangs/frontend/utils";

export function Pill({ name, key, kind }: { name: string; key: string; kind: string }) {
  return (
    <div
      data-key={key}
      class={tw(
        kind === "pl" && "cursor-pointer",

        "inline-block",
        "mr-1 mb-3 p-1.5",
        "font-black text-sm",

        "rounded",
        "bg-primary text-background",
        "shadow-lg shadow-secondary",
        "outline-2 outline-secondary",

        kind === "pl" && "hover:bg-yellow-200",
      )}>
      {name}
    </div>
  );
}
