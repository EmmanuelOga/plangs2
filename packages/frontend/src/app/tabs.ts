import { $ } from "@plangs/frontend/auxiliar/utils";
import type { TAB } from "@plangs/server/components/layout";
import { cl } from "@plangs/server/elements";

export function currentTab(): TAB | undefined {
  return $<HTMLAnchorElement>(`.${cl("navLink")}[data-current]`)?.dataset?.tab as TAB | undefined;
}
