import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";

import { PlLogo } from "./pl-logo";

export function PlThumb({ pl }: { pl: NPlang }): JSX.Element {
  return (
    <div class="m-4 grid size-32 place-content-center justify-items-center bg-white text-slate-800 shadow-md shadow-primary hover:outline-2 hover:outline-slate-800 hover:ring-8 hover:ring-primary">
      <span class="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap font-bold text-lg">{pl.name}</span>
      <PlLogo pl={pl} />
    </div>
  );
}
