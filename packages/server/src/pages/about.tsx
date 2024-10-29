import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import type { Content } from "@plangs/server/content";

export function About({ content, pg }: { content: Content; pg: PlangsGraph }) {
  return (
    <Layout
      pg={pg}
      tab="about"
      title={content.title}
      description="Discover https://plangs.page, a website about programing languages and the ecosystems aroudn them."
      mainClasses="overflow-y-auto">
      <article
        class={tw(PROSE, "p-4")}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </Layout>
  );
}
