import { Anchor } from "@plangs/frontend/components/misc/anchor";
import type { PlangsGraph } from "@plangs/plangs/index";

export function Blog({ pg }: { pg: PlangsGraph }) {
  const postLinks = pg.nodes.post.values.tap(posts => {
    return posts.map(post => {
      return (
        post.link && (
          <h2 key={post.key}>
            <span>{post.date}</span>
            <Anchor link={post.link} />
          </h2>
        )
      );
    });
  });

  return <article class="readable">{postLinks ?? <h2>No posts yet</h2>}</article>;
}
