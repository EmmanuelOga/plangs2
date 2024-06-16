// import React from "react";
// import { createRoot } from "react-dom/client";

// const appEl = document.getElementById("app")!;

// // const root = createRoot(appEl);
// // root.render(<h1>Hello, world</h1>);

import Graph from "graphology";
import Sigma from "sigma";
import forceAtlas2 from "graphology-layout-forceatlas2";
import { random } from "graphology-layout";

async function render() {
  const graph = new Graph();
  const data = await fetch("http://localhost:3000/data.json").then((res) => res.json());
  graph.import(data);
  console.log(data);

  random.assign(graph);
  forceAtlas2.assign(graph, { iterations: 50 });

  graph.forEachNode((node, attr) => {
    attr.size = 20;
  });

  graph.forEachEdge((edge, attr) => {
    attr.size = 10;
  });

  const container = document.getElementById("app") as HTMLElement;

  const renderer = new Sigma(graph, container, {
    renderEdgeLabels: true
  });

  renderer.refresh();
}

render();