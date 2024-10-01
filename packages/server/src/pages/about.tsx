import { tw } from "@plangs/frontend/utils";
import type { Content } from "../content";
import { Layout } from "./layout";

export function About({ content }: { content: Content }) {
  return (
    <Layout title={content.title} tab="about" overflow="overflow-y-auto">
      <article
        class={tw("readable dark:prose-invert max-w-[80rem]", "w-full p-4")}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </Layout>
  );
}
