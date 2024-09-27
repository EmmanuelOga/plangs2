import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Anchor } from "../../../frontend/src/components/misc/anchor";
import { Layout } from "./layout";

export function Blog({ pg }: { pg: PlangsGraph }) {
  const postLinks = pg.nodes.post.values.reverse.map(
    post =>
      post.link && (
        <p>
          <div class="text-foreground text-xs">{post.date}</div>
          <Anchor link={post.link} />
        </p>
      ),
  );

  return (
    <Layout title="Read our latest news" tab="blog" overflow="overflow-y-auto">
      <article class={tw("readable dark:prose-invert", "p-4 sm:min-w-[40rem]", "overflow-y-auto")}>
        <h1>News</h1>
        {postLinks.isEmpty ? <p>No posts yet.</p> : postLinks.existing}
      </article>
    </Layout>
  );
}
