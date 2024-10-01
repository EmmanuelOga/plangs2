import { Anchor } from "@plangs/frontend/components/misc/anchor";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Blog({ pg }: { pg: PlangsGraph }) {
  const postLinks = pg.nodes.post.values.reverse.map(
    post =>
      post.link && (
        <p class="pb-1">
          <p class="m-0 text-lg">{post.date}</p>
          <h1 class="mt-0">
            <Anchor link={post.link} />
          </h1>
        </p>
      ),
  );

  return (
    <Layout title="Read our latest news" tab="blog" overflow="overflow-y-auto">
      <article class={tw("readable dark:prose-invert", "p-4", "overflow-y-auto", "w-full")}>
        <h1>News</h1>
        {postLinks.isEmpty ? <p>No posts yet.</p> : postLinks.existing}
      </article>
    </Layout>
  );
}
