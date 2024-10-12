import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Platforms({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="platforms" title="Browse the platforms your favorite programming languages and apps supports!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Platforms</h1>
      </article>
    </Layout>
  );
}
