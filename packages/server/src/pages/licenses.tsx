import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Licenses({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="licenses" title="Browse Licenses commonly used by open source projects.">
      <div class={tw(PROSE)}>LICENSES TODO</div>
    </Layout>
  );
}
