import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";

export function Blog({ pg }: { pg: PlangsGraph }) {
  const postLinks = [...pg.post.values]
    .sort((a, b) => b.created.compareTo(a.created.value))
    .map(post => (
      <div key={`${post.path}`} class="mb-8">
        <div>
          <time datetime={post.created.value}>{post.created.value}</time>
        </div>
        {/* This looks like some sort of prose issue: setting margin to 0 thorugh m-0 or mt-0 doesn't work. */}
        <h2 style="margin: 0">
          <a href={post.href} title={post.title} class="prefetch">
            {post.title}
          </a>
        </h2>
      </div>
    ));

  return (
    <Layout
      page="blog"
      title="News"
      desc="Read the latest tips and resources on Plangs!, a site about Programming Languages and the Ecosystems around them."
      mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>News</h1>
        {postLinks.length === 0 ? <p>No posts yet.</p> : postLinks}
      </article>
    </Layout>
  );
}
