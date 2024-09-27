import type { Link } from "@plangs/plangs";

export function Anchor({ link }: { link: Link }) {
  return (
    <a href={link.href} title={`${link.title} (${link.kind})`}>
      {link.title}
    </a>
  );
}
