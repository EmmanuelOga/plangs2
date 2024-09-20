import Graph from "graphology";
import forceAtlas2 from "graphology-layout-forceatlas2";
import circlepack from "graphology-layout/circlepack";
import Sigma from "sigma";
import type { EdgeDisplayData, NodeDisplayData } from "sigma/types";

import type { PlangsGraph } from "@plangs/plangs";

export function layout(graph: Graph) {
  const degrees = graph.nodes().map(node => graph.degree(node));
  const minDegree = Math.min(...degrees);
  const maxDegree = Math.max(...degrees);

  const minSize = 5;
  const maxSize = 25;

  graph.forEachNode(node => {
    const degree = graph.degree(node);
    graph.setNodeAttribute(node, "size", minSize + ((degree - minDegree) / (maxDegree - minDegree)) * (maxSize - minSize));
  });

  circlepack.assign(graph, { hierarchyAttributes: ["degree", "community"] });
  const settings = forceAtlas2.inferSettings(graph);
  forceAtlas2.assign(graph, { settings, iterations: 25 });
}

export function startMap(container: HTMLElement, pg: PlangsGraph): Sigma {
  const graph = new Graph({ multi: true, type: "mixed" });
  const renderer = new Sigma(graph, container, {
    renderLabels: true,
    labelSize: 24,
    labelColor: { color: "gray" },
    defaultEdgeType: "arrow",
    renderEdgeLabels: true,
  });
  setupHover(graph, renderer);
  return renderer;
}

/** Setup handlers for highlighting the nodes on hover. */
function setupHover(graph: Graph, renderer: Sigma) {
  // Type and declare internal state:
  interface State {
    hoveredNode?: string;
    selectedNode?: string;
    hoveredNeighbors?: Set<string>;
  }

  const state: State = {};

  function setHoveredNode(node?: string) {
    if (node) {
      state.hoveredNode = node;
      state.hoveredNeighbors = new Set(graph.neighbors(node));
    }

    // Compute the partial that we need to re-render to optimize the refresh
    const nodes = graph.filterNodes(n => n !== state.hoveredNode && !state.hoveredNeighbors?.has(n));
    const nodesIndex = new Set(nodes);
    const edges = graph.filterEdges(e => graph.extremities(e).some(n => nodesIndex.has(n)));

    if (!node) {
      state.hoveredNode = undefined;
      state.hoveredNeighbors = undefined;
    }

    // Refresh rendering
    renderer.refresh({
      partialGraph: { nodes, edges },
      // We don't touch the graph data so we can skip its reindexation
      skipIndexation: true,
    });
  }

  // Bind graph interactions:
  renderer.on("enterNode", ({ node }) => {
    setHoveredNode(node);
  });
  renderer.on("leaveNode", () => {
    setHoveredNode(undefined);
  });

  // Render nodes accordingly to the internal state:
  // - If a node is selected, it is highlighted
  // - If there is a hovered node, all non-neighbor nodes are greyed
  renderer.setSetting("nodeReducer", (node, data) => {
    const res: Partial<NodeDisplayData> = { ...data };

    if (state.hoveredNeighbors && !state.hoveredNeighbors.has(node) && state.hoveredNode !== node) {
      res.label = "";
      res.color = "#f6f6f6";
    }

    if (state.selectedNode === node) {
      res.highlighted = true;
    }

    return res;
  });

  // Render edges accordingly to the internal state:
  // - If a node is hovered, the edge is hidden if it is not connected to the node
  renderer.setSetting("edgeReducer", (edge, data) => {
    const res: Partial<EdgeDisplayData> = { ...data };

    if (state.hoveredNode && !graph.hasExtremity(edge, state.hoveredNode)) {
      res.hidden = true;
    }

    return res;
  });
}
