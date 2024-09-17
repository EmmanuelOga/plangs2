import { useContext } from "preact/hooks";

import type { NPost } from "@plangs/plangs/index";

import { loadBlogPost } from "../blog";
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
            {post.date} {toAnchor(post.link)}
          </h2>
        )
      );
    });
  });

  return (
    <>
      <div />
      <article id="blog-page" class="common-content">
        {postLinks ?? "No posts yet."}
      </article>
      <div />
    </>
  );
}

export function BlogPost({ post, content }: { post: NPost; content: string }) {
  if (!post.link || !post.path) throw new Error(`Post ${post.key} is missing data: ${JSON.stringify(post.data)}`);

  return (
    <>
      <div />
      <article id="blog-page" class="common-content blog-post" key={post.key}>
        <h2 id={post.plainKey} class="post-title">
          <a href={post.link.href}>{post.link.title}</a>
        </h2>
        <div class="post-date">Posted on {post.date}</div>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: markdown render result. */}
        <div class="post-content" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      <div />
    </>
  );
}
