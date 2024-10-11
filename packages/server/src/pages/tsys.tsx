import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs/index";
import { Layout } from "./layout";

export function TSys({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="tsys" title="Browse some of the type systems implemented by your favorite programming languages!">
      <div class={tw("prose prose-green dark:prose-invert")}>TSYS TODO</div>
    </Layout>
  );
}
