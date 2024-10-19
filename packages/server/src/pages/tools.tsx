import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";

export function Tools({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="tools" title="Browse tools that make your favorite programming languages even better!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Tools</h1>
      </article>
    </Layout>
  );
}
