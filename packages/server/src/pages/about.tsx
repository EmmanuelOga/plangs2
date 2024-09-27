import type { Content } from "../content";
import { HtmlContent } from "./html_content";
import { Layout } from "./layout";

export function About({ content }: { content: Content }) {
  return (
    <Layout title={content.title} tab="about" overflow="overflow-y-auto">
      <HtmlContent content={content} />
    </Layout>
  );
}
