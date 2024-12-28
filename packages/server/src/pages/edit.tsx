import { Layout } from "@plangs/server/components/layout";
import { cssID } from "@plangs/server/elements";

export function Edit() {
  return (
    <Layout page="edit" title="Edit Plangs! Data" mainClasses="overflow-hidden flex flex-col">
      <div id={cssID("plangsEditor")} class="flex flex-1 overflow-hidden" />
    </Layout>
  );
}
