import { PROSE } from "@plangs/frontend/auxiliar/styles";
import { tw } from "@plangs/frontend/auxiliar/utils";
import { Layout } from "@plangs/server/components/layout";
import type { Content } from "@plangs/server/content";

export function About({ content }: { content: Content }) {
  return (
    <Layout
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
