import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Libs({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="libs" title="Browse libraries made with your favorite programming languages!">
      <div class={tw(PROSE)}>LIBS TODO</div>
    </Layout>
  );
}
