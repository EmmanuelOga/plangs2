import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";

import { VertexLink } from "./vertex-link";

export function VertexHeader({ vertex }: { vertex: TPlangsVertexClass }) {
  return (
    <div key={vertex.key} class={tw("mb-8", tw(BORDER, "border-b-1"))}>
      <header>
        <VertexLink vertex={vertex} includeLocal={true} />
      </header>
      <p>{vertex.description}</p>
    </div>
  );
}
