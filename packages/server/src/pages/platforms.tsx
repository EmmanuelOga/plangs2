import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs/index";
import { Layout } from "./layout";

export function Platforms({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="platforms" title="Browse the platforms your favorite programming languages and apps supports!">
      <div class={tw("prose prose-green dark:prose-invert")}>PLATF TODO</div>
    </Layout>
  );
}
