import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

import { VertexLink } from "./vertex-link";

export function VertexEntry({ vertex }: { vertex: TPlangsVertex }) {
  return (
    <div key={vertex.key} class={tw("mb-8", tw(BORDER, "border-b-1"), tw("hover:bg-hiliteb/10"))}>
      <header>
        <VertexLink vertex={vertex} external={true} />
      </header>
      <p>{vertex.description}</p>
    </div>
  );
}
