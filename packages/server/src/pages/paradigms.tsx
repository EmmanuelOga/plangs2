import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Paradigms({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="paradigms" title="Browse some of the paradigms used by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Paradigms</h1>
      </article>
    </Layout>
  );
}
