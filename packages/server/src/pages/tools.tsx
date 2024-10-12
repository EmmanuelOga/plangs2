import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Tools({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="tools" title="Browse tools that make your favorite programming languages even better!">
      <div class={tw(PROSE)}>TOOLS TODO</div>
    </Layout>
  );
}
