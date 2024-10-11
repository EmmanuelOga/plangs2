import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs/index";
import { Layout } from "./layout";

export function Libs({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="libs" title="Browse libraries made with your favorite programming languages!">
      <div class={tw("prose prose-green dark:prose-invert")}>LIBS TODO</div>
    </Layout>
  );
}
