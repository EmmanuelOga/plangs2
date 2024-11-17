import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+gremlin", {"name":"Gremlin","description":"Gremlin is a graph traversal language and virtual machine developed by Apache TinkerPop of the Apache Software Foundation. It works for both OLTP-based graph databases and OLAP-based graph processors. Gremlin's automata and functional language foundation enable it to support both imperative and declarative querying. It is designed to be host language agnostic and allows for user-defined domain specific languages.","keywords":["apache","graph traversal","gremlin","tinkerpop"],"year":2009,"isMainstream":true,"releases":[{"version":"3.7.0","name":"Gremlin 3.7.0","date":"2023-07-31"}],"extWikipediaPath":"Gremlin_(programming_language)","extHomeURL":"https://tinkerpop.apache.org/"})
    .addInfluencedBy(["pl+sql","pl+xpath"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+declarative","paradigm+dsl","paradigm+imperative","paradigm+query"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler","tag+dbms","tag+graph"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  