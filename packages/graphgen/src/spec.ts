export interface GenGraphSpec<VertexNames extends string> {
  /** Base Name of the graph, used to generate most other classes. */
  name: string;
  classes: {
    generated: {
      /** Name of the base class for the graph. */
      graphBase: string;
      /**
       * Users should extend this base to add API methods for all vertices.
       * The name of the class that extends should go into the userProvided.vertexBase field.
       */
      vertexBase: string;
      /** If present, will be used to generate the base class for a specific vertex. */
      vertexPrefix?: string;
      /** If present, will be used to generate the base class for a specific vertex. */
      vertexSuffix?: string;
    };
    userProvided: {
      /** Generated Vertex classes will inherit from this class. */
      vertexBase: string;
    };
  };

  /** The keys are the name of the fields on the graph that point to a collection of Vertices. */
  vertices: Record<VertexNames, GenVertexSpec>;

  edges: GenEdgeSpec<VertexNames>[];
}

export interface GenVertexSpec {
  key: string;
  desc: string;
}

export interface GenEdgeSpec<VertexName extends string> {
  src: [vertexName: VertexName, relName: string, desc: string];
  dst: [vertexName: VertexName, relName: string, desc: string];
  /**
   * Preferred end of the relationship when generating code, mainly used by `packages/languist`'s codegen.ts.
   *
   * Affects the "gen" boolean field of the relationship configuration (in each Vertex class):
   * When generating code, a relationship could be saved in the forward or backward direction, or not saved at all.
   */
  pref: "src" | "dst" | "none";
}
