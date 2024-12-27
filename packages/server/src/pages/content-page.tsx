import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { Layout, type PlangsPage } from "@plangs/server/components/layout";

import type { Content } from "@plangs/server/content";

export function ContentPage({ content, page }: { content: Content; page: PlangsPage }) {
  return (
    <Layout page={page} title={content.title} mainClasses="overflow-y-auto">
      <article
        class={tw(PROSE, "p-4")}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </Layout>
  );
}
