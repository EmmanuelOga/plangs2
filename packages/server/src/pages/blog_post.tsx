import { tw } from "@plangs/frontend/utils";
import type { Content } from "../content";
import { Layout } from "./layout";

export function BlogPost({ post }: { post: Content }) {
  return (
    <Layout tab="blog" title={post.title} description={`Read about "${post.title}" on https://plangs.page!`} overflow="overflow-y-auto">
      <article
        class={tw("prose dark:prose-invert max-w-[80rem]", "w-full p-4")}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
}
