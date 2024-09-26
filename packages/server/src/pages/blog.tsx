import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Anchor } from "../../../frontend/src/components/misc/anchor";

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
    <article class={tw("readable dark:prose-invert", "p-4 sm:min-w-[40rem]")}>
      <h1>News</h1>
      {postLinks ?? <p>No posts yet.</p>}
    </article>
  );
}
