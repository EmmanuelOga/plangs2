import type { Link } from "@plangs/plangs";
import type { JSX } from "preact/jsx-runtime";

export function Anchor({ link }: { link: Link }): JSX.Element {
  return (
    <a key={link.href} href={link.href} title={`${link.kind}:${link.title}`} class={`pl-link ${link.kind}`}>
      {link.title}
    </a>
  );
}
