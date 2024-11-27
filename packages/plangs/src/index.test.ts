import { expect, test } from "bun:test";
import { PlangsGraph } from "./graph";
import type { Image } from "./graph/vertex_data_schemas";

test("base node apis", () => {
  const g = new PlangsGraph();
  const pl = g.plang.set("pl+pascal");

  expect(pl.name).toEqual("pascal");
  expect(pl.description).toEqual("pascal");
  expect(pl.keywords.size).toEqual(0);

  pl.data.name = "Pascal";
  expect(pl.name).toEqual("Pascal");
  expect(pl.description).toEqual("Pascal");

  pl.data.description = "The Pascal Programming Language.";
  expect(pl.name).toEqual("Pascal");
  expect(pl.description).toEqual("The Pascal Programming Language.");

  expect(pl.href).toEqual("/pascal");

  expect(pl.images.size).toBe(0);

  const img: Image = { url: "/image.png", title: "Cool Pic", kind: "other" };
  pl.addImages([img]);
  pl.addImages([img]);
  expect(pl.images.size).toBe(1); // Handles duplicates
  expect(pl.images.first).toEqual(img);

  expect(pl.thumbUrl).toEqual("/image.png");
  const logo: Image = { url: "/better.png", title: "Logo", kind: "logo" };
  pl.addImages([logo]);
  expect(pl.thumbUrl).toEqual("/better.png");

  expect(pl.extensions.size).toBe(0);
  pl.addExtensions([".pas"]);
  pl.addExtensions([".pas"]);
  expect(pl.extensions.size).toBe(1); // Handles duplicates
  expect(pl.extensions.first).toEqual(".pas");
  pl.addExtensions([".tpu"]);
  expect(pl.extensions.size).toBe(2);
  expect(pl.extensions.first).toEqual(".pas");
  expect(pl.extensions.last).toEqual(".tpu");

  expect(pl.relApp.size).toBe(0);
  pl.relApp.add(["app+something"]);
  expect(pl.relApp.size).toBe(1);
  // TODO
  // expect([...pl.relApp.keys][0]).toEqual("app+something");

  expect(pl.relLibrary.size).toBe(0);
  pl.relLibrary.add(["lib+something"]);
  expect(pl.relLibrary.size).toBe(1);
  // TODO
  // expect([...pl.relLibrary.keys][0]).toEqual("lib+something");

  expect(pl.relTool.size).toBe(0);
  pl.relTool.add(["tool+something"]);
  expect(pl.relTool.size).toBe(1);
  expect([...pl.relTool.keys][0]).toEqual("tool+something");

  expect(pl.relWrittenInPlang.size).toBe(0);
  pl.relWrittenInPlang.add(["pl+assembler"]);
  expect(pl.relWrittenInPlang.size).toBe(1);
  expect([...pl.relWrittenInPlang.keys][0]).toEqual("pl+assembler");

  expect(pl.relParadigm.size).toBe(0);
  pl.relParadigm.add(["para+procedural"]);
  expect(pl.relParadigm.size).toBe(1);
  expect([...pl.relParadigm.keys][0]).toEqual("para+procedural");

  // TODO
  // expect(pl.relPlBundle.size).toBe(0);
  // pl.relPlBundles.add(["bundle+my-bundle"]);
  // expect(pl.relPlBundles.size()).toBe(1);
  // expect(pl.relPlBundles.keys()[0]).toEqual("bundle+my-bundle");

  expect(pl.relPost.size).toBe(0);
  pl.relPost.add(["post+my-post"]);
  expect(pl.relPost.size).toBe(1);
  // TODO
  // expect([...pl.relPost.keys][0]).toEqual("post+my-post");

  expect(pl.relTag.size).toBe(0);
  pl.relTag.add(["tag+cool"]);
  expect(pl.relTag.size).toBe(1);
  expect([...pl.relTag.keys][0]).toEqual("tag+cool");
});

test("matching keywords", () => {
  const g = new PlangsGraph();

  g.typeSystem.set("tsys+weak", { keywords: ["weak"] });
  g.typeSystem.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.typeSystem.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.typeSystem.set("tsys+adt", { keywords: ["sum types"] });

  const matches = [];

  const text = " a .. strongly typed .. dynamic .. language with .. sum-types IF ";

  for (const [id, node] of g.typeSystem.entries) {
    if (node.keywordsRegexp?.test(text)) matches.push(id);
  }

  expect(matches.sort()).toEqual(["tsys+adt", "tsys+dynamic", "tsys+strong"]);

  matches.length = 0;
  const text2 = " sum if types ";

  for (const [id, node] of g.typeSystem.entries) {
    if (node.keywordsRegexp?.test(text2)) matches.push(id);
  }

  expect(matches.sort()).toEqual([]);
});

test("edge apis", () => {
  const g = new PlangsGraph();

  const pl = g.plang.set("pl+pascal", { name: "Pascal", description: "The Pascal Programming Language." });
  const st = g.typeSystem.set("tsys+strongly-typed", { name: "Strongly Typed" });
  const edges = g.edges.plangTypeSystem;

  expect(edges.has("pl+pascal", "tsys+strongly-typed")).toBeFalse();
  pl.relTypeSystem.add([st.key]);
  expect(edges.has("pl+pascal", "tsys+strongly-typed")).toBeTrue();
});

test("edge types", () => {
  const g = new PlangsGraph();

  const plPascal = g.plang.set("pl+pascal", { name: "Pascal", description: "The Pascal Programming Language." });
  const plPerl = g.plang.set("pl+perl", { name: "Perl" });

  const nodeApp = g.app.set("app+some-app", { name: "My App" });
  const nodeBundle = g.bundle.set("bun+my-bundle", { name: "My Bundle" });
  const nodeLib = g.library.set("lib+my-lib", { name: "My libC" });
  const nodeLic = g.license.set("lic+gnu", { name: "GNU" });
  const nodePara = g.paradigm.set("para+structured", { name: "Structured" });
  const nodePlat = g.platform.set("plat+os2", { name: "OS/2" });
  const nodePost = g.post.set("post+my-post", { name: "Hello World!" });
  const nodeTag = g.tag.set("tag+my-tag", { name: "MYTAG" });
  const nodeTool = g.tool.set("tool+my-tool", { name: "My Tool" });
  const nodeTsys = g.typeSystem.set("tsys+strongly-typed", { name: "Strongly Typed" });

  {
    const edge = g.edges.appPlang.addOne("app+some-app", "pl+pascal");
    expect(edge[0]).toBe(nodeApp);
    expect(edge[1]).toBe(plPascal);
  }

  {
    const edge = g.edges.bundleTool.addOne("bun+my-bundle", "tool+my-tool");
    expect(edge[0]).toBe(nodeBundle);
    expect(edge[1]).toBe(nodeTool);
  }

  {
    const edge = g.edges.plangCompilesToPlang.addOne("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }

  {
    const edge = g.edges.plangDialectOfPlang.addOne("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }

  {
    const edge = g.edges.licensePlang.addOne("lic+gnu", "pl+pascal");
    expect(edge[0]).toBe(nodeLic);
    expect(edge[1]).toBe(plPascal);
  }

  {
    const edge = g.edges.plangImplementsPlang.addOne("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }

  {
    const edge = g.edges.plangInfluencedByPlang.addOne("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }

  {
    const edge = g.edges.plangParadigm.addOne("pl+pascal", "para+structured");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(nodePara);
  }

  {
    const edge = g.edges.plangTypeSystem.addOne("pl+pascal", "tsys+strongly-typed");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(nodeTsys);
  }

  {
    const edge = g.edges.plangPlatform.addOne("pl+pascal", "plat+os2");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(nodePlat);
  }

  {
    const edge = g.edges.postPlang.addOne("post+my-post", "pl+pascal");
    expect(edge[0]).toBe(nodePost);
    expect(edge[1]).toBe(plPascal);
  }

  {
    const edge = g.edges.libraryPlang.addOne("lib+my-lib", "pl+pascal");
    expect(edge[1]).toBe(plPascal);
    expect(edge[0]).toBe(nodeLib);
  }

  {
    const edge = g.edges.plangTag.addOne("pl+pascal", "tag+my-tag");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(nodeTag);
  }

  {
    const edge = g.edges.plangTool.addOne("pl+pascal", "tool+my-tool");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(nodeTool);
  }

  {
    const edge = g.edges.plangWrittenInPlangPlang.addOne("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }
});

test("app nodes", () => {
  const g = new PlangsGraph();
  const app = g.nodes.app.set("app+my-app", { name: "My App" });

  expect(g.edges.appPlang.size).toBe(0);
  app.relPlang.add(["pl+pascal"]);
  expect(g.edges.appPlang.size).toBe(1);
});

test("bundle nodes", () => {
  const g = new PlangsGraph();
  const bundle = g.nodes.bundle.set("bun+my-bundle", { name: "Humble Bundle" });

  expect(bundle.relTool.size).toBe(0);
  bundle.relTool.add(["tool+my-tool"]);
  expect(bundle.relTool.size).toBe(1);
  expect([...bundle.relTool.keys][0]).toEqual("tool+my-tool");

  // TODO
  // expect(bundle.rel.size).toBe(0);
  // bundle.relPlangs.add(["pl+pascal"]);
  // expect(bundle.relPlangs.size()).toBe(1);
  // expect(bundle.relPlangs.keys()[0]).toEqual("pl+pascal");
});

test("library nodes", () => {
  const g = new PlangsGraph();
  const lib = g.nodes.library.set("lib+my-lib", { name: "My Pascal Unit" });

  expect(g.edges.libraryPlang.size).toBe(0);
  lib.relPlang.add(["pl+pascal"]);
  expect(g.edges.libraryPlang.size).toBe(1);
});

test("license nodes", () => {
  const g = new PlangsGraph();
  const mit = g.nodes.license.set("lic+mit", { name: "MIT", spdx: "MIT", isFSFLibre: true, isOSIApproved: true });
  const yolo = g.nodes.license.set("lic+yolo", { name: "YOLO" });

  expect(mit.spdx).toEqual("MIT");
  expect(mit.isFSFLibre).toBeTrue();
  expect(mit.isOSIApproved).toBeTrue();

  expect(yolo.spdx).toBeUndefined();
  expect(yolo.isFSFLibre).toBeFalse();
  expect(yolo.isOSIApproved).toBeFalse();
});

test("post nodes", () => {
  const g = new PlangsGraph();
  const post = g.nodes.post.set("post+hello", { name: "Hello World!", author: "Tony Mottola", path: "/some/path.md", date: "2021-01-01" });

  expect(post.author).toEqual("Tony Mottola");
  expect(post.date).toEqual("2021-01-01");
  expect(post.path).toEqual("/some/path.md");
  expect(post.title).toEqual("Hello World!");
  expect(post.name).toEqual("Hello World!");

  expect(post.relPlang.size).toBe(0);
  post.relPlang.add(["pl+pascal"]);
  expect(post.relPlang.size).toBe(1);
  expect([...post.relPlang.keys][0]).toEqual("pl+pascal");
});

test("tool nodes", () => {
  const g = new PlangsGraph();
  const tool = g.nodes.tool.set("tool+my-tool", { name: "My Tool" });

  expect(g.edges.plangTool.size).toBe(0);
  tool.relPlang.add(["pl+pascal"]);
  expect(g.edges.plangTool.size).toBe(1);
});
