import { tw } from "@plangs/frontend/auxiliar/utils";
import type { Link } from "@plangs/plangs/schema";

export function Anchor({ link, class: cssClass }: { link: Link; class?: string }) {
  return (
    <a href={link.href} title={`${link.title} (${link.kind})`} class={tw(cssClass)}>
      {link.title}
    </a>
  );
}
