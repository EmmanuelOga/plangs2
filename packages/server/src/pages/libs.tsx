import { PROSE } from "@plangs/frontend/auxiliar/styles";
import { tw } from "@plangs/frontend/auxiliar/utils";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";

export function Libs({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="libs" title="Browse libraries made with your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Libraries</h1>
      </article>
    </Layout>
  );
}
