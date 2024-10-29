import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { Anchor } from "@plangs/frontend/components/misc/anchor";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";

export function Blog({ pg }: { pg: PlangsGraph }) {
  const postLinks = pg.nodes.post.values.reverse.map(
    post =>
      post.link && (
        <div class="mb-8">
          <div>{post.date}</div>
          {/* This looks like some sort of prose issue: setting margin to 0 thorugh m-0 or mt-0 doesn't work. */}
          <h2 style="margin: 0">
            <Anchor link={post.link} />
          </h2>
        </div>
      ),
  );

  return (
    <Layout
      tab="blog"
      title="Read https://plangs.page latest news"
      description="Read the latest news from https://plangs.page, a website about programming languages and the ecosystems around them."
      mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>News</h1>
        {postLinks.isEmpty ? <p>No posts yet.</p> : postLinks.existing}
      </article>
    </Layout>
  );
}
