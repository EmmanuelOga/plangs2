import type { Link } from "@plangs/plangs";
import type { JSX } from "preact/jsx-runtime";

export function Anchor({ link }: { link: Link }): JSX.Element {
  return (
    <a href={link.href} title={`${link.title} (${link.kind})`}>
      {link.title}
    </a>
  );
}
