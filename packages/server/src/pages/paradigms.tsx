import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs/index";
import { Layout } from "./layout";

export function Paradigms({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="paradigms" title="Browse some of the paradigms used by your favorite programming languages!">
      <div class={tw("prose prose-green dark:prose-invert")}>PARADIGMS TODO</div>
    </Layout>
  );
}
