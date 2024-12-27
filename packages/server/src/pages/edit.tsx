import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { cssID } from "@plangs/server/elements";

export function Edit({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout page="edit" title="Edit Plangs! Data" mainClasses="overflow-y-auto p-4">
      <div id={cssID("plangsEditor")} />
    </Layout>
  );
}
