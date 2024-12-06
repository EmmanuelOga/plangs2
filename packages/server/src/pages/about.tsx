import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import type { Content } from "@plangs/server/content";

export function About({ content }: { content: Content; pg: PlangsGraph }) {
  return (
    <Layout page="about" title={content.title} desc="Plangs! Programing Languages and the ecosystems around them." mainClasses="overflow-y-auto">
      <article
        class={tw(PROSE, "p-4")}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </Layout>
  );
}
