import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import type { Content } from "@plangs/server/content";

export function BlogPost({ post }: { post: Content; pg: PlangsGraph }) {
  return (
    <Layout page="blog" title={post.title} desc={`Read about "${post.title}" on Plangs!`} mainClasses="overflow-y-auto">
      <article
        class={tw(PROSE, "p-4")}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
}
