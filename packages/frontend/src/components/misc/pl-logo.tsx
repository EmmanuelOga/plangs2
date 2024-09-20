import type { NPlang } from "@plangs/plangs";
import type { JSX } from "preact/jsx-runtime";

export function PlLogo({ pl }: { pl: NPlang }) {
  const logo = pl.images.find(({ kind }) => kind === "logo") ?? pl.images.first;
  return (
    <div title={pl.name} class={"grid h-24 w-24 place-content-center overflow-hidden bg-white text-slate-800"}>
      {logo ? (
        <img class="h-auto max-h-[5rem] max-w-[5rem]" src={logo.url} alt={pl.name} />
      ) : (
        <div class="-skew-y-8 max-w-24 rotate-4 overflow-hidden text-ellipsis whitespace-nowrap bg-primary/50 p-2.5 font-bold shadow shadow-slate-800">
          {pl.name}
        </div>
      )}
    </div>
  );
}
