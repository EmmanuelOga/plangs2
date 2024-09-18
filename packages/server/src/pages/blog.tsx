import { useContext } from "preact/hooks";

import type { NPost } from "@plangs/plangs/index";

import { PlangsContext } from "../context";
import { toAnchor } from "../util";

export function Blog() {
  const pg = useContext(PlangsContext);
  if (!pg) throw new Error("PlangsGraph should be in the context already.");

  const postLinks = pg.nodes.post.values.tap(posts => {
    return posts.map(post => {
      return (
        post.link && (
          <h2 key={post.key}>
            <span class="text-lg">{post.date}</span> {toAnchor(post.link)}
          </h2>
        )
      );
    });
  });

  return (
    <>
      <div />
      <article class="common-content readable">{postLinks ?? "No posts yet."}</article>
      <div />
    </>
  );
}

export function BlogPost({ post, content }: { post: NPost; content: string }) {
  if (!post.link || !post.path) throw new Error(`Post ${post.key} is missing data: ${JSON.stringify(post.data)}`);

  return (
    <>
      <div />
      <article
        class="common-content readable"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div />
    </>
  );
}
