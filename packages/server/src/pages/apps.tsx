import { PROSE } from "@plangs/frontend/auxiliar/styles";
import { tw } from "@plangs/frontend/auxiliar/utils";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";

export function Apps({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="apps" title="Browse applications made with your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Apps</h1>
      </article>
    </Layout>
  );
}
