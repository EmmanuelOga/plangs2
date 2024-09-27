import type { Content } from "../content";
import { HtmlContent } from "./html_content";
import { Layout } from "./layout";

export function BlogPost({ post }: { post: Content }) {
  return (
    <Layout title={post.title} tab="blog" overflow="overflow-y-auto">
      <HtmlContent content={post} />
    </Layout>
  );
}
