import type { NPlang } from "@plangs/plangs";
import type { JSX } from "preact/jsx-runtime";

export function PlLogo({ pl }: { pl: NPlang }) {
  const logo = pl.images.find(({ kind }) => kind === "logo") ?? pl.images.first;

  let img: JSX.Element | undefined;

  if (logo) img = <img class="h-auto max-h-16 max-w-16" src={logo.url} alt={pl.name} title={pl.name} />;

  return <div class={`grid h-20 w-20 place-content-center overflow-hidden rounded ${logo ? "" : "bg-blue-100"}`}>{img ?? pl.name}</div>;
}
