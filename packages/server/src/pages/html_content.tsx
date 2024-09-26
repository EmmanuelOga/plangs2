import { tw } from "@plangs/frontend/utils";

import type { Content } from "../content";

export function HtmlContent({ content }: { content: Content }) {
  return (
    <article
      class={tw("readable dark:prose-invert", "p-4 sm:min-w-[40rem]")}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  );
}
