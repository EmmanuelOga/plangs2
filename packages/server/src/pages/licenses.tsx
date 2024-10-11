import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs/index";
import { Layout } from "./layout";

export function Licenses({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="licenses" title="Browse Licenses commonly used by open source projects.">
      <div class={tw("prose prose-green dark:prose-invert")}>LICENSES TODO</div>
    </Layout>
  );
}
