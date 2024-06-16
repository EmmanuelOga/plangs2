// import React from "react";
// import { createRoot } from "react-dom/client";

// const appEl = document.getElementById("app")!;

// // const root = createRoot(appEl);
// // root.render(<h1>Hello, world</h1>);

import Graph from "graphology";
import EdgeCurveProgram from "@sigma/edge-curve";
import { random } from "graphology-layout";
import forceAtlas2 from "graphology-layout-forceatlas2";
import circlepack from "graphology-layout/circlepack";
import Sigma from "sigma";
import type { EdgeDisplayData, NodeDisplayData } from "sigma/types";

async function render() {
	const data = await fetch("http://localhost:3000/data.json").then((res) =>
		res.json(),
	);

	const graph = new Graph({ multi: true, type: "mixed" });
	graph.import(data);
	// components.cropToLargestConnectedComponent(graph);

	// Assign node size by degree.
	const degrees = graph.nodes().map((node) => graph.degree(node));
	const minDegree = Math.min(...degrees);
	const maxDegree = Math.max(...degrees);

	graph.forEachNode((node) => {
		const degree = graph.degree(node);
		const level = (degree - minDegree) / (maxDegree - minDegree);
		const size = 3 + 25 * 2 ** (3 * level - 3);
		graph.setNodeAttribute(node, "size", size);
	});

	graph.forEachEdge((edge) => {
		graph.setEdgeAttribute(edge, "size", 3);
	});

	// random.assign(graph);
	circlepack.assign(graph, { hierarchyAttributes: ["degree", "community"] });
	const settings = forceAtlas2.inferSettings(graph);
	forceAtlas2.assign(graph, { settings, iterations: 500 });

	const container = document.getElementById("app") as HTMLElement;
	const renderer = new Sigma(graph, container, {
		defaultEdgeType: "curve",
		edgeProgramClasses: {
			curve: EdgeCurveProgram,
		},
		renderEdgeLabels: true,
	});

	renderer.refresh();

	setupHover(graph, renderer);
}

render();

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
		const nodes = graph.filterNodes(
			(n) => n !== state.hoveredNode && !state.hoveredNeighbors?.has(n),
		);
		const nodesIndex = new Set(nodes);
		const edges = graph.filterEdges((e) =>
			graph.extremities(e).some((n) => nodesIndex.has(n)),
		);

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

		if (
			state.hoveredNeighbors &&
			!state.hoveredNeighbors.has(node) &&
			state.hoveredNode !== node
		) {
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
