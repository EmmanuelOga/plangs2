import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";

import type { Content } from "../content";
import { Layout } from "./layout";

export function About({ content }: { content: Content }) {
  return (
    <Layout
      tab="about"
      title={content.title}
      description="Discover https://plangs.page, a website about programing languages and the ecosystems aroudn them."
      mainClasses="overflow-y-auto">
      <article
        class={tw(PROSE, "w-full p-4")}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </Layout>
  );
}
