import { BAR, BORDER } from "@plangs/frontend/auxiliar/styles";
import { tw } from "@plangs/frontend/auxiliar/utils";
import type { ComponentChildren } from "preact";

const DATASET_ATTR = "data-group-key";

export function FacetGroup<T extends string>({
  groupKey,
  title,
  visible,
  children,
}: { groupKey: T; title: string; visible?: boolean; children: ComponentChildren }) {
  return (
    <div class={tw("flex-1", "flex flex-col", "overflow-y-scroll", !visible && "hidden")} {...{ [DATASET_ATTR]: groupKey }}>
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
