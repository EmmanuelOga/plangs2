// import React from "react";
// import { createRoot } from "react-dom/client";

// const appEl = document.getElementById("app")!;

// // const root = createRoot(appEl);
// // root.render(<h1>Hello, world</h1>);

import Graph from "graphology";
import Sigma from "sigma";
import forceAtlas2 from "graphology-layout-forceatlas2";
import { random } from "graphology-layout";

function render() {
  const graph = new Graph();

  graph.addNode("a", { size: 20, label: "a" });
  graph.addNode("b", { size: 20, label: "b" });
  graph.addNode("c", { size: 20, label: "c" });
  graph.addNode("d", { size: 20, label: "d" });
  graph.addNode("e", { size: 20, label: "e" });
  graph.addNode("f", { size: 20, label: "f" });
  graph.addEdge("a", "b", { size: 10 });
  graph.addEdge("b", "c", { size: 10 });
  graph.addEdge("b", "d", { size: 10 });
  graph.addEdge("c", "b", { size: 10 });
  graph.addEdge("c", "e", { size: 10 });
  graph.addEdge("d", "c", { size: 10 });
  graph.addEdge("d", "e", { size: 10 });
  graph.addEdge("e", "d", { size: 10 });
  graph.addEdge("f", "e", { size: 10 });

  random.assign(graph);
  forceAtlas2.assign(graph, { iterations: 50 });

  const container = document.getElementById("app") as HTMLElement;

  const renderer = new Sigma(graph, container, {});

  renderer.refresh();
}

render();
