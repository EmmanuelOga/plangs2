import type { ComponentChildren } from "preact";

import { BAR, BORDER, tw } from "@plangs/frontend/auxiliar/styles";

const DATASET_ATTR = "data-group-key";

export function FacetGroup<T extends string>({
  groupKey,
  title,
  active,
  children,
}: { groupKey: T; title: string; active?: boolean; children: ComponentChildren }) {
  return (
    <div class={tw("flex-1", "flex flex-col", "overflow-y-scroll", !active && "hidden")} {...{ [DATASET_ATTR]: groupKey }}>
      <header class={tw("shrink-0", "p-2", "truncate", "text-primary", tw(BORDER, "border-b-1"), BAR)}>{title}</header>
      <div class={tw("flex-1", "flex flex-col", "gap-4")}>{children}</div>
    </div>
  );
}

/** Look for the group key from a child. Cleaner, quicker and easier than threading this through or using a context. */
// biome-ignore lint/suspicious/noExplicitAny: TODO: We would have to know all possible group keys to type this.
export function getGroupKey(child?: HTMLElement): any {
  return child?.closest<HTMLElement>(`[${DATASET_ATTR}]`)?.dataset.groupKey;
}
