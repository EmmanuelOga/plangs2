import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function TSys({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="tsys" title="Browse some of the type systems implemented by your favorite programming languages!">
      <div class={tw(PROSE)}>TSYS TODO</div>
    </Layout>
  );
}
