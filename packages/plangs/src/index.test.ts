import { expect, test } from "bun:test";
import { type AnyEdge, PlangsGraph } from ".";
import type { Image, Link } from "./schema";

test("base node apis", () => {
  const g = new PlangsGraph();
  const pl = g.nodes.pl.set("pl+pascal");

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
  pl.addApps(["app+something"]);
  expect(pl.relApps.size).toBe(1);
  expect(pl.relApps.values.first?.to).toEqual("app+something");

  expect(pl.relLibs.size).toBe(0);
  pl.addLibs(["lib+something"]);
  expect(pl.relLibs.size).toBe(1);
  expect(pl.relLibs.values.first?.to).toEqual("lib+something");

  expect(pl.relTools.size).toBe(0);
  pl.addTools(["tool+something"]);
  expect(pl.relTools.size).toBe(1);
  expect(pl.relTools.values.first?.to).toEqual("tool+something");

  expect(pl.relWrittenIn.size).toBe(0);
  pl.addWrittenIn(["pl+assembler"]);
  expect(pl.relWrittenIn.size).toBe(1);
  expect(pl.relWrittenIn.values.first?.to).toEqual("pl+assembler");

  expect(pl.relParadigms.size).toBe(0);
  pl.addParadigms(["paradigm+procedural"]);
  expect(pl.relParadigms.size).toBe(1);
  expect(pl.relParadigms.values.first?.to).toEqual("paradigm+procedural");

  expect(pl.relPlBundles.size).toBe(0);
  pl.addBundles(["bundle+my-bundle"]);
  expect(pl.relPlBundles.size).toBe(1);
  expect(pl.relPlBundles.values.first?.to).toEqual("bundle+my-bundle");

  expect(pl.relPosts.size).toBe(0);
  pl.addPosts(["post+my-post"]);
  expect(pl.relPosts.size).toBe(1);
  expect(pl.relPosts.values.first?.to).toEqual("post+my-post");

  expect(pl.relTags.size).toBe(0);
  pl.addTags(["tag+cool"]);
  expect(pl.relTags.size).toBe(1);
  expect(pl.relTags.values.first?.to).toEqual("tag+cool");
});

test("matching keywords", () => {
  const g = new PlangsGraph();

  g.nodes.tsys.set("tsys+weak", { keywords: ["weak"] });
  g.nodes.tsys.set("tsys+dynamic", { keywords: ["dynamic"] });
  g.nodes.tsys.set("tsys+strong", { keywords: ["strongly-typed"] });
  g.nodes.tsys.set("tsys+adt", { keywords: ["sum types"] });

  const matches = [];

  const text = " a .. strongly typed .. dynamic .. language with .. sum-types IF ";

  for (const [id, node] of g.nodes.tsys) {
    if (node.keywordsRegexp?.test(text)) matches.push(id);
  }

  expect(matches.sort()).toEqual(["tsys+adt", "tsys+dynamic", "tsys+strong"]);

  matches.length = 0;
  const text2 = " sum if types ";

  for (const [id, node] of g.nodes.tsys) {
    if (node.keywordsRegexp?.test(text2)) matches.push(id);
  }

  expect(matches.sort()).toEqual([]);
});

test("edge apis", () => {
  const g = new PlangsGraph();

  const pl = g.nodes.pl.set("pl+pascal", { name: "Pascal", description: "The Pascal Programming Language." });
  const st = g.nodes.tsys.set("tsys+strongly-typed", { name: "Strongly Typed" });
  const edges = g.edges.tsys;

  let edge = edges.get("pl+pascal", "tsys+strongly-typed");
  expect(edge).toBeUndefined();
  pl.addTypeSystems([st.key]);
  edge = edges.get("pl+pascal", "tsys+strongly-typed");
  expect(edge).not.toBeUndefined();

  const link = { href: "https://emmanueloga.com", title: "Emmanuel Oga's Homepage" };
});

test("edge types", () => {
  const g = new PlangsGraph();

  const plPascal = g.nodes.pl.set("pl+pascal", { name: "Pascal", description: "The Pascal Programming Language." });
  const plPerl = g.nodes.pl.set("pl+perl", { name: "Perl" });

  const nodeApp = g.nodes.app.set("app+some-app", { name: "My App" });
  const nodeBundle = g.nodes.bundle.set("bundle+my-bundle", { name: "My Bundle" });
  const nodeLib = g.nodes.lib.set("lib+my-lib", { name: "My libC" });
  const nodeLic = g.nodes.license.set("license+gnu", { name: "GNU" });
  const nodePara = g.nodes.paradigm.set("paradigm+structured", { name: "Structured" });
  const nodePlat = g.nodes.plat.set("plat+os2", { name: "OS/2" });
  const nodePost = g.nodes.post.set("post+my-post", { name: "Hello World!" });
  const nodeTag = g.nodes.tag.set("tag+my-tag", { name: "MYTAG" });
  const nodeTool = g.nodes.tool.set("tool+my-tool", { name: "My Tool" });
  const nodeTsys = g.nodes.tsys.set("tsys+strongly-typed", { name: "Strongly Typed" });

  {
    const edge = g.edges.app.connect("pl+pascal", "app+some-app");
    expect(edge.kind).toBe("app");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("app+some-app");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodeApp);
  }

  {
    const edge = g.edges.bundle.connect("bundle+my-bundle", "tool+my-tool");
    expect(edge.kind).toBe("bundle");
    expect(edge.from).toBe("bundle+my-bundle");
    expect(edge.to).toBe("tool+my-tool");
    expect(edge.nodeFrom).toBe(nodeBundle);
    expect(edge.nodeTo).toBe(nodeTool);
  }

  {
    const edge = g.edges.compilesTo.connect("pl+pascal", "pl+perl");
    expect(edge.kind).toBe("compilesTo");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("pl+perl");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(plPerl);
  }

  {
    const edge = g.edges.dialect.connect("pl+pascal", "pl+perl");
    expect(edge.kind).toBe("dialect");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("pl+perl");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(plPerl);
  }

  {
    const edge = g.edges.license.connect("pl+pascal", "license+gnu");
    expect(edge.kind).toBe("license");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("license+gnu");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodeLic);
  }

  {
    const edge = g.edges.impl.connect("pl+pascal", "pl+perl");
    expect(edge.kind).toBe("impl");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("pl+perl");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(plPerl);
  }

  {
    const edge = g.edges.influence.connect("pl+pascal", "pl+perl");
    expect(edge.kind).toBe("influence");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("pl+perl");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(plPerl);
  }

  {
    const edge = g.edges.paradigm.connect("pl+pascal", "paradigm+structured");
    expect(edge.kind).toBe("paradigm");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("paradigm+structured");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodePara);
  }

  {
    const edge = g.edges.tsys.connect("pl+pascal", "tsys+strongly-typed");
    expect(edge.kind).toBe("tsys");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("tsys+strongly-typed");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodeTsys);
  }

  {
    const edge = g.edges.plBundle.connect("pl+pascal", "bundle+my-bundle");
    expect(edge.kind).toBe("plBundle");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("bundle+my-bundle");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodeBundle);
  }

  {
    const edge = g.edges.plat.connect("pl+pascal", "plat+os2");
    expect(edge.kind).toBe("plat");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("plat+os2");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodePlat);
  }

  {
    const edge = g.edges.post.connect("pl+pascal", "post+my-post");
    expect(edge.kind).toBe("post");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("post+my-post");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodePost);
  }

  {
    const edge = g.edges.lib.connect("pl+pascal", "lib+my-lib");
    expect(edge.kind).toBe("lib");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("lib+my-lib");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodeLib);
  }

  {
    const edge = g.edges.tag.connect("pl+pascal", "tag+my-tag");
    expect(edge.kind).toBe("tag");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("tag+my-tag");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodeTag);
  }

  {
    const edge = g.edges.tool.connect("pl+pascal", "tool+my-tool");
    expect(edge.kind).toBe("tool");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("tool+my-tool");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(nodeTool);
  }

  {
    const edge = g.edges.writtenIn.connect("pl+pascal", "pl+perl");
    expect(edge.kind).toBe("writtenIn");
    expect(edge.from).toBe("pl+pascal");
    expect(edge.to).toBe("pl+perl");
    expect(edge.nodeFrom).toBe(plPascal);
    expect(edge.nodeTo).toBe(plPerl);
  }
});

test("app nodes", () => {
  const g = new PlangsGraph();
  const app = g.nodes.app.set("app+my-app", { name: "My App" });
  const apps = g.edges.app;

  expect(apps.size).toBe(0);
  app.addPls(["pl+pascal"]);
  expect(apps.size).toBe(1);
});

test("bundle nodes", () => {
  const g = new PlangsGraph();
  const bundle = g.nodes.bundle.set("bundle+my-bundle", { name: "Humble Bundle" });
  const bundles = g.edges.bundle;
  const tools = g.edges.tool;

  expect(bundle.relTools.size).toBe(0);
  expect(bundles.size).toBe(0);
  bundle.addTools(["tool+my-tool"]);
  expect(bundles.size).toBe(1);
  expect(bundle.relTools.size).toBe(1);
  expect(bundle.relTools.values.first?.to).toEqual("tool+my-tool");

  expect(bundle.relPls.size).toBe(0);
  bundle.addPls(["pl+pascal"]);
  expect(bundle.relPls.size).toBe(1);
  expect(bundle.relPls.values.first?.from).toEqual("pl+pascal");
});

test("library nodes", () => {
  const g = new PlangsGraph();
  const lib = g.nodes.lib.set("lib+my-lib", { name: "My Pascal Unit" });
  const libs = g.edges.lib;

  expect(libs.size).toBe(0);
  lib.addPls(["pl+pascal"]);
  expect(libs.size).toBe(1);
});

test("license nodes", () => {
  const g = new PlangsGraph();
  const mit = g.nodes.license.set("license+mit", { name: "MIT", spdx: "MIT", isFSFLibre: true, isOSIApproved: true });
  const yolo = g.nodes.license.set("license+yolo", { name: "YOLO" });

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

  expect(post.link).toBeUndefined();
  const link = { href: "https://emmanueloga.com", title: "Emmanuel Oga's Homepage" };
  post.link = link;
  expect(post.link).toEqual(link);

  expect(post.relPls.size).toBe(0);
  post.addPls(["pl+pascal"]);
  expect(post.relPls.size).toBe(1);
  expect(post.relPls.values.first?.from).toEqual("pl+pascal");
});

test("tool nodes", () => {
  const g = new PlangsGraph();
  const tool = g.nodes.tool.set("tool+my-tool", { name: "My Tool" });
  const tools = g.edges.tool;

  expect(tools.size).toBe(0);
  tool.addPls(["pl+pascal"]);
  expect(tools.size).toBe(1);
});

test("plBundle nodes", () => {
  const g = new PlangsGraph();
  const bundle = g.nodes.bundle.set("bundle+my-bundle", { name: "My Bundle" });
  const plBundles = g.edges.plBundle;

  expect(plBundles.size).toBe(0);
  bundle.addPls(["pl+pascal"]);
  expect(plBundles.size).toBe(1);
});
