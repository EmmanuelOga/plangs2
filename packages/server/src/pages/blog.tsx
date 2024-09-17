import { useContext } from "preact/hooks";

import type { NPost } from "@plangs/plangs/index";
import { PlangsContext } from "../context";
import { toAnchor } from "../util";

export function Blog() {
  const pg = useContext(PlangsContext);
  if (!pg) throw new Error("PlangsGraph should be in the context already.");

  const postLinks = pg.nodes.post.values.tap((posts) => {
    return posts.map((post) => {
      console.log(post.data, post.link);
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

async function BlogPost({ post }: { post: NPost }) {
  if (!post.link) throw new Error(`Post ${post.key} is missing a link.`);

  return (
    <article class="blog-post" key={post.key}>
      <h2 id={post.plainKey} class="post-title">
        <a href={post.link.href}>{post.link.title}</a>
      </h2>
      <div class="post-date">Posted on {post.date}</div>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: markdown render result. */}
      <div class="post-content" dangerouslySetInnerHTML={{ __html: await readPost(post) }} />
    </article>
  );
}

async function readPost(post: NPost): Promise<string> {
  return "TODO";
}
