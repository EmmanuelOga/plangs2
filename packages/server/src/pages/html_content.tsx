import type { Content } from "../content";

export function HtmlContent({ content }: { content: Content }) {
  return (
    <article
      class="readable dark:prose-invert p-4"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  );
}
