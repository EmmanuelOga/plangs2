import { tw } from "@plangs/frontend/utils";

import type { Content } from "../content";
import { READABLE_CLASSES } from "../elements";

export function HtmlContent({ content, class: cssClass }: { class?: string; content: Content }) {
  return (
    <article
      class={tw(READABLE_CLASSES, "w-full p-4", cssClass)}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  );
}
