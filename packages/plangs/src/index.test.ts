import { expect, test } from "bun:test";
import { PlangsGraph } from "./graph";
import type { Image } from "./graph/vertex_data_schemas";

test("base vertex apis", () => {
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

  expect(pl.relApps.size).toBe(0);
  pl.relApps.add("app+something");
  expect(pl.relApps.size).toBe(1);
  expect([...pl.relApps.keys][0]).toEqual("app+something");

  expect(pl.relLibraries.size).toBe(0);
  pl.relLibraries.add("lib+something");
  expect(pl.relLibraries.size).toBe(1);
  expect([...pl.relLibraries.keys][0]).toEqual("lib+something");

  expect(pl.relTools.size).toBe(0);
  pl.relTools.add("tool+something");
  expect(pl.relTools.size).toBe(1);
  expect([...pl.relTools.keys][0]).toEqual("tool+something");

  expect(pl.relWrittenWith.size).toBe(0);
  pl.relWrittenWith.add("pl+assembler");
  expect(pl.relWrittenWith.size).toBe(1);
  expect([...pl.relWrittenWith.keys][0]).toEqual("pl+assembler");

  expect(pl.relParadigms.size).toBe(0);
  pl.relParadigms.add("para+procedural");
  expect(pl.relParadigms.size).toBe(1);
  expect([...pl.relParadigms.keys][0]).toEqual("para+procedural");

  expect(pl.relBundles.size).toBe(0);
  pl.relBundles.add("bun+my-bundle");
  expect(pl.relBundles.size).toBe(1);
  expect([...pl.relBundles.keys][0]).toEqual("bun+my-bundle");

  expect(pl.relPosts.size).toBe(0);
  pl.relPosts.add("post+my-post");
  expect(pl.relPosts.size).toBe(1);
  expect([...pl.relPosts.keys][0]).toEqual("post+my-post");

  expect(pl.relTags.size).toBe(0);
  pl.relTags.add("tag+cool");
  expect(pl.relTags.size).toBe(1);
  expect([...pl.relTags.keys][0]).toEqual("tag+cool");
});

test("matching keywords", () => {
  const g = new PlangsGraph();

  g.typeSystem.set("tsys+weak", { keywords: ["weak"] });
  g.typeSystem.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.typeSystem.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.typeSystem.set("tsys+adt", { keywords: ["sum types"] });

  const matches = [];

  const text = " a .. strongly typed .. dynamic .. language with .. sum-types IF ";

  for (const [id, vertex] of g.typeSystem.entries) {
    if (vertex.keywordsRegexp?.test(text)) matches.push(id);
  }

  expect(matches.sort()).toEqual(["tsys+adt", "tsys+dynamic", "tsys+strong"]);

  matches.length = 0;
  const text2 = " sum if types ";

  for (const [id, vertex] of g.typeSystem.entries) {
    if (vertex.keywordsRegexp?.test(text2)) matches.push(id);
  }

  expect(matches.sort()).toEqual([]);
});

test("edge apis", () => {
  const g = new PlangsGraph();

  const pl = g.plang.set("pl+pascal", { name: "Pascal", description: "The Pascal Programming Language." });
  const st = g.typeSystem.set("tsys+strongly-typed", { name: "Strongly Typed" });
  const edges = g.edges.plangRelTypeSystems;

  expect(edges.has("pl+pascal", "tsys+strongly-typed")).toBeFalse();
  pl.relTypeSystems.add(st.key);
  expect(edges.has("pl+pascal", "tsys+strongly-typed")).toBeTrue();
});

test("edge types", () => {
  const g = new PlangsGraph();

  const plPascal = g.plang.set("pl+pascal", { name: "Pascal", description: "The Pascal Programming Language." });
  const plPerl = g.plang.set("pl+perl", { name: "Perl" });

  const vertexApp = g.app.set("app+some-app", { name: "My App" });
  const vertexBundle = g.bundle.set("bun+my-bundle", { name: "My Bundle" });
  const vertexLib = g.library.set("lib+my-lib", { name: "My libC" });
  const vertexLic = g.license.set("lic+gnu", { name: "GNU" });
  const vertexPara = g.paradigm.set("para+structured", { name: "Structured" });
  const vertexPlat = g.platform.set("plat+os2", { name: "OS/2" });
  const vertexPost = g.post.set("post+my-post", { name: "Hello World!" });
  const vertexTag = g.tag.set("tag+my-tag", { name: "MYTAG" });
  const vertexTool = g.tool.set("tool+my-tool", { name: "My Tool" });
  const vertexTsys = g.typeSystem.set("tsys+strongly-typed", { name: "Strongly Typed" });

  {
    const edge = g.edges.appRelWrittenWith.addGet("app+some-app", "pl+pascal");
    expect(edge[0]).toBe(vertexApp);
    expect(edge[1]).toBe(plPascal);
  }

  {
    const edge = g.edges.bundleRelTools.addGet("bun+my-bundle", "tool+my-tool");
    expect(edge[0]).toBe(vertexBundle);
    expect(edge[1]).toBe(vertexTool);
  }

  {
    const edge = g.edges.plangRelWrittenWith.addGet("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }

  {
    const edge = g.edges.plangRelDialectOf.addGet("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }

  {
    const edge = g.edges.licenseRelPlangs.addGet("lic+gnu", "pl+pascal");
    expect(edge[0]).toBe(vertexLic);
    expect(edge[1]).toBe(plPascal);
  }

  {
    const edge = g.edges.plangRelImplements.addGet("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }

  {
    const edge = g.edges.plangRelInfluencedBy.addGet("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }

  {
    const edge = g.edges.plangRelParadigms.addGet("pl+pascal", "para+structured");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(vertexPara);
  }

  {
    const edge = g.edges.plangRelTypeSystems.addGet("pl+pascal", "tsys+strongly-typed");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(vertexTsys);
  }

  {
    const edge = g.edges.plangRelPlatforms.addGet("pl+pascal", "plat+os2");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(vertexPlat);
  }

  {
    const edge = g.edges.postRelPlangs.addGet("post+my-post", "pl+pascal");
    expect(edge[0]).toBe(vertexPost);
    expect(edge[1]).toBe(plPascal);
  }

  {
    const edge = g.edges.libraryRelPlangs.addGet("lib+my-lib", "pl+pascal");
    expect(edge[1]).toBe(plPascal);
    expect(edge[0]).toBe(vertexLib);
  }

  {
    const edge = g.edges.tagRelPlangs.addGet("tag+my-tag", "pl+pascal");
    expect(edge[0]).toBe(vertexTag);
    expect(edge[1]).toBe(plPascal);
  }

  {
    const edge = g.edges.plangRelTools.addGet("pl+pascal", "tool+my-tool");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(vertexTool);
  }

  {
    const edge = g.edges.plangRelWrittenWith.addGet("pl+pascal", "pl+perl");
    expect(edge[0]).toBe(plPascal);
    expect(edge[1]).toBe(plPerl);
  }
});

test("app vertices", () => {
  const g = new PlangsGraph();
  const app = g.app.set("app+my-app", { name: "My App" });

  expect(g.edges.appRelWrittenWith.size).toBe(0);
  app.relWrittenWith.add("pl+pascal");
  expect(g.edges.appRelWrittenWith.size).toBe(1);
});

test("bundle vertices", () => {
  const g = new PlangsGraph();
  const bundle = g.bundle.set("bun+my-bundle", { name: "Humble Bundle" });

  expect(bundle.relTools.size).toBe(0);
  bundle.relTools.add("tool+my-tool");
  expect(bundle.relTools.size).toBe(1);
  expect([...bundle.relTools.keys][0]).toEqual("tool+my-tool");

  expect(bundle.relPlangs.size).toBe(0);
  bundle.relPlangs.add("pl+pascal");
  expect(bundle.relPlangs.size).toBe(1);
  expect([...bundle.relPlangs.keys][0]).toEqual("pl+pascal");
});

test("library vertices", () => {
  const g = new PlangsGraph();
  const lib = g.library.set("lib+my-lib", { name: "My Pascal Unit" });

  expect(g.edges.libraryRelPlangs.size).toBe(0);
  lib.relPlangs.add("pl+pascal");
  expect(g.edges.libraryRelPlangs.size).toBe(1);
});

test("license vertices", () => {
  const g = new PlangsGraph();
  const mit = g.license.set("lic+mit", { name: "MIT", spdx: "MIT", isFSFLibre: true, isOSIApproved: true });
  const yolo = g.license.set("lic+yolo", { name: "YOLO" });

  expect(mit.spdx).toEqual("MIT");
  expect(mit.isFSFLibre).toBeTrue();
  expect(mit.isOSIApproved).toBeTrue();

  expect(yolo.spdx).toBeUndefined();
  expect(yolo.isFSFLibre).toBeFalse();
  expect(yolo.isOSIApproved).toBeFalse();
});

test("post vertices", () => {
  const g = new PlangsGraph();
  const post = g.post.set("post+hello", { name: "Hello World!", author: "Tony Mottola", path: "/some/path.md", created: "2021-01-01" });

  expect(post.author).toEqual("Tony Mottola");
  expect(post.created.value).toEqual("2021-01-01");
  expect(post.path).toEqual("/some/path.md");
  expect(post.title).toEqual("Hello World!");
  expect(post.name).toEqual("Hello World!");

  expect(post.relPlangs.size).toBe(0);
  post.relPlangs.add("pl+pascal");
  expect(post.relPlangs.size).toBe(1);
  expect([...post.relPlangs.keys][0]).toEqual("pl+pascal");
});

test("tool vertices", () => {
  const g = new PlangsGraph();
  const tool = g.tool.set("tool+my-tool", { name: "My Tool" });

  expect(g.edges.plangRelTools.size).toBe(0);
  tool.relPlangs.add("pl+pascal");
  expect(g.edges.plangRelTools.size).toBe(1);
});
