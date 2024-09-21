import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";

import { PlLogo } from "./pl-logo";

export function PlThumb({ pl }: { pl: NPlang }): JSX.Element {
  return (
    <div class="m-2 grid size-[7.25rem] place-content-center justify-items-center bg-white shadow-md shadow-primary hover:outline-2 hover:outline-slate-800 hover:ring-8 hover:ring-primary">
      <span class="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap pt-0.5 font-bold text-slate-800 text-sm">{pl.name}</span>
      <PlLogo pl={pl} />
    </div>
  );
}
