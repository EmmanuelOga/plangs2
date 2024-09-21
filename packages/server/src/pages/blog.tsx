import type { PlangsGraph } from "@plangs/plangs";

import { Anchor } from "../../../frontend/src/components/misc/anchor";

export function Blog({ pg }: { pg: PlangsGraph }) {
  const postLinks = pg.nodes.post.values.tap(posts => {
    return posts.reverse().map(post => {
      return (
        post.link && (
          <p>
            <div class="text-foreground text-xs">{post.date}</div>
            <Anchor link={post.link} />
          </p>
        )
      );
    });
  });

  return <article class="readable">{postLinks ?? <h2>No posts yet</h2>}</article>;
}
