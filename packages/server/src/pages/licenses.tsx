import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Licenses({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="licenses" title="Browse Licenses commonly used by open source projects." mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Licenses</h1>
      </article>
    </Layout>
  );
}
