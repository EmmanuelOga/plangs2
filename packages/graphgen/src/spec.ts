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
   * Preferred end of the relationship, for instance, when generating code.
   * See Languist codegen.ts for an example of how this is used.
   */
  pref: "src" | "dst" | "none";
}
