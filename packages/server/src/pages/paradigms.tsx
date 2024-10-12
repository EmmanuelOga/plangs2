import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Paradigms({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="paradigms" title="Browse some of the paradigms used by your favorite programming languages!">
      <div class={tw(PROSE)}>PARADIGMS TODO</div>
    </Layout>
  );
}
