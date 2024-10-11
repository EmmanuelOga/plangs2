import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs/index";
import { Layout } from "./layout";

export function Tags({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="tags" title="Browse the Tags used across Plangs! for categorization.">
      <div class={tw("prose prose-green dark:prose-invert")}>TAGS TODO</div>
    </Layout>
  );
}
