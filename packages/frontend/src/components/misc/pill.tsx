import { tw } from "@plangs/frontend/utils";
import { cl } from "@plangs/server/elements";

export function Pill({ name, nodeKey, kind, plInfoKind }: { name: string; nodeKey: string; kind: string; plInfoKind?: string }) {
  return (
    <div
      data-node-key={nodeKey ?? "NONE"}
      class={tw(
        cl("pill"),
        "inline-block text-center",
        // NOTE: this approximately solves a mistmatch between rendering as a web component and as a Preact component,
        // but it's not perfect. This bug makes no sense so far and I need to find the root cause.
        plInfoKind === "browse" ? "mr-4 mb-4" : "mr-[10.65px] mb-4",
        plInfoKind === "browse" ? "min-w-8 p-1.5" : "min-w-8 px-[6.025px] py-1.5",

        "font-bold text-sm",

        "rounded",
        kind === "pl" && "cursor-pointer",
        kind === "pl" ? "bg-primary text-background" : "bg-secondary text-foreground",
        "shadow-lg shadow-secondary",
        "outline-2 outline-secondary",

        kind === "pl" && "hover:bg-yellow-200 hover:text-slate-800",
      )}>
      {name}
    </div>
  );
}
