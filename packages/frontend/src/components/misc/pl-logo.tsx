import type { NPlang } from "@plangs/plangs/index";

export function PlLogo({ pl }: { pl: NPlang }) {
  const logo = pl.images.find(({ kind }) => kind === "logo") ?? pl.images.first;
  return logo ? <img src={logo.url} alt="Logo" title={pl.name} /> : <div>{pl.name ?? "No Logo"}</div>;
}
