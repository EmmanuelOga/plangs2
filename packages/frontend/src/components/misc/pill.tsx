import { tw } from "@plangs/frontend/utils";

export function Pill({ name, key, kind }: { name: string; key: string; kind: string }) {
  return (
    <div
      data-key={key}
      class={tw(
        kind === "pl" && "cursor-pointer",

        "inline-block text-center",
        "mr-1 mb-3 min-w-8 p-1.5",
        "font-black text-sm",

        "rounded",
        kind === "pl" ? "bg-primary text-background" : "bg-secondary text-foreground",
        "shadow-lg shadow-secondary",
        "outline-2 outline-secondary",

        kind === "pl" && "hover:bg-yellow-200 hover:text-slate-800",
      )}>
      {name}
    </div>
  );
}
