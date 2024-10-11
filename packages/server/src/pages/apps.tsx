import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs/index";
import { Layout } from "./layout";

export function Apps({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="apps" title="Browse applications made with your favorite programming languages!">
      <div class={tw("prose prose-green dark:prose-invert")}>APPS TODO</div>
    </Layout>
  );
}
