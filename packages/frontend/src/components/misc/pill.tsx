import { HOVER } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { TAB } from "@plangs/server/components/layout";
import { cl } from "@plangs/server/elements";

/* TODO: `kind: string;` is too permissive. Should be either a Node kind N or a set of other known options. */
export function Pill({ name, nodeKey, kind, tab }: { name: string; nodeKey: string; kind: string; tab?: TAB }) {
  return (
    <div
      data-node-key={nodeKey ?? "NONE"}
      class={tw(
        cl("pill"),
        "inline-block text-center",

        // NOTE: this approximately solves a mistmatch between rendering as a web component and as a Preact component,
        // but it's not perfect. This bug makes no sense so far and I need to find the root cause.
        tab === "plangs" ? "mr-4 mb-4" : "mr-[10.65px] mb-4",
        tab === "plangs" ? "min-w-8 p-1.5" : "min-w-8 px-[6.025px] py-1.5",

        "font-bold text-sm",

        "rounded",
        kind === "pl" ? "bg-primary text-background" : "bg-secondary text-foreground",
        "shadow-lg shadow-secondary",
        "outline-2 outline-secondary",

        kind === "pl" && HOVER,
      )}>
      {name}
    </div>
  );
}
