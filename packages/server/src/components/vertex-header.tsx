import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

import { VertexLink } from "./vertex-link";

export function VertexHeader({ vertex }: { vertex: TPlangsVertex }) {
  return (
    <div key={vertex.key} class={tw("mb-8", tw(BORDER, "border-b-1"))}>
      <header>
        <VertexLink vertex={vertex} external={true} />
      </header>
      <p>{vertex.description}</p>
    </div>
  );
}
