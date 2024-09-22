import { type CLKey, CL_KEYS, type IDKey, ID_KEYS, cssCl, cssId } from "@plangs/server/pages/dom";

import { $, $$ } from "../utils";

type $IDS = Record<IDKey, HTMLElement>;
type $CLS = Record<CLKey, NodeListOf<HTMLElement>>;

/** Query the DOM for all relevant elements. */
export function queryDOM(): { readonly ids: $IDS; readonly cls: $CLS } {
  const ids = ID_KEYS.reduce(
    (ids, key) => {
      ids[key] = $<HTMLElement>(`#${cssId(key)}`) as HTMLElement;
      return ids;
    },
    {} as Partial<$IDS>,
  ) as $IDS;

  const cls = CL_KEYS.reduce(
    (cls, key) => {
      cls[key] = $$<HTMLElement>(`.${cssCl(key)}`);
      return cls;
    },
    {} as Partial<$CLS>,
  ) as $CLS;

  return { ids, cls } as const;
}
