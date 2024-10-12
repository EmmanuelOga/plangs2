import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "./layout";

export function Tags({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout tab="tags" title="Browse the Tags used across Plangs! for categorization.">
      <div class={tw(PROSE)}>TAGS TODO</div>
    </Layout>
  );
}
