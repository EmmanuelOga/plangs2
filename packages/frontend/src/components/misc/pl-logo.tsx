import type { NPlang } from "@plangs/plangs";

export function PlLogo({ pl }: { pl: NPlang }) {
  const logo = pl.images.find(({ kind }) => kind === "logo") ?? pl.images.first;
  return (
    <div title={pl.name} class={"grid size-20 place-content-center overflow-hidden"}>
      {logo ? (
        <img class="max-h-[4.75rem] max-w-[4.75rem]" src={logo.url} alt={pl.name} />
      ) : (
        <div class="-skew-y-8 max-w-24 rotate-4 overflow-hidden text-ellipsis whitespace-nowrap bg-primary/50 p-2.5 font-bold text-slate-800 text-xs shadow shadow-slate-800 ">
          {pl.name}!
        </div>
      )}
    </div>
  );
}
