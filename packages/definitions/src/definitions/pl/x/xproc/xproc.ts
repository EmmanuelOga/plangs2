import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+xproc", {"name":"XProc","description":"XProc is an XML transformation language for processing documents in pipelines: chaining conversions and other steps together to achieve the desired results. It can handle documents in XML, HTML, JSON, text and binary data seamlessly.","keywords":["pipeline","transformation","xml","xproc","xproc 3.0"],"extensions":[".xpl"],"year":2010,"isMainstream":false,"releases":[{"version":"1.0","name":"XProc 1.0","date":"2010-05-11"},{"version":"3.0","name":"XProc 3.0","date":"2020-08-18"}],"stackovTags":["xproc"],"githubName":"XProc","languishRanking":371,"githubLangId":"401","githubPopular":false,"githubType":"programming","extWikipediaPath":"XProc","extHomeURL":"https://xproc.org/"})
    .addInfluencedBy(["pl+xml"])
    .addParadigms(["paradigm+declarative","paradigm+dsl","paradigm+pipeline"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dataflow","tag+workflow"])
    .addTypeSystems(["tsys+dynamic"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  