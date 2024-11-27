import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";

export function Blog({ pg }: { pg: PlangsGraph }) {
  const postLinks = [...pg.nodes.post.values].reverse().map(post => (
    <div key={`${post.path}`} class="mb-8">
      <div>{post.date}</div>
      {/* This looks like some sort of prose issue: setting margin to 0 thorugh m-0 or mt-0 doesn't work. */}
      <h2 style="margin: 0">
        <a href={post.href} title={post.title}>
          {post.title}
        </a>
      </h2>
    </div>
  ));

  return (
    <Layout
      pg={pg}
      tab="blog"
      title="Read https://plangs.page latest news"
      description="Read the latest news from https://plangs.page, a website about programming languages and the ecosystems around them."
      mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>News</h1>
        {postLinks.length === 0 ? <p>No posts yet.</p> : postLinks}
      </article>
    </Layout>
  );
}
