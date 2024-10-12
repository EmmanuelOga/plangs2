import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Apps({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="apps" title="Browse applications made with your favorite programming languages!">
      <div class={tw(PROSE)}>APPS TODO</div>
    </Layout>
  );
}
