import { expect, test } from "bun:test";
import { PlangsGraph } from ".";
import type { Image, Link } from "./schema";

test("base node apis", () => {
  const g = new PlangsGraph();
  const pl = g.nodes.pl.set("pl+pascal");

  expect(pl.name).toEqual("pascal");
  expect(pl.description).toEqual("pascal");

  pl.data.name = "Pascal";
  expect(pl.name).toEqual("Pascal");
  expect(pl.description).toEqual("Pascal");

  pl.data.description = "The Pascal Programming Language.";
  expect(pl.name).toEqual("Pascal");
  expect(pl.description).toEqual("The Pascal Programming Language.");

  expect(pl.websites.size).toBe(0);

  const link: Link = { href: "https://emmanueloga.com", title: "Emmanuel Oga's Homepage", kind: "homepage" };
  pl.addWebsites([link]);
  pl.addWebsites([link]);
  expect(pl.websites.size).toBe(1); // Handles duplicates
  expect(pl.websites.first).toEqual(link);

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
