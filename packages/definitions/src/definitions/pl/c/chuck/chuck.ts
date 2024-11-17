import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+chuck", {"name":"ChucK","description":"ChucK is a concurrent, strongly timed audio programming language for real-time synthesis, composition, and performance. It runs on Linux, Mac OS X, Microsoft Windows, and iOS. ChucK is designed to prioritize readability and flexibility, supporting deterministic concurrency and varying control rates. It enables real-time, live coding, allowing code modification while the program is running. ChucK is suitable for building complex audio synthesis programs and real-time interactive controls, offering a powerful tool for composers, researchers, and performers.","keywords":["audio programming","chuck","concurrent programming","real-time synthesis"],"extensions":[".ck"],"year":2003,"isMainstream":false,"releases":[{"version":"1.5.4.1","name":"Chai","date":"2024-04-01"},{"version":"1.5.2.4","name":"ChucK 1.5.2.4","date":"2024-01-01"}],"stackovTags":["chuck"],"githubName":"ChucK","githubLangId":"57","githubColor":"#3f8000","githubPopular":false,"githubType":"programming","extWikipediaPath":"ChucK","extHomeURL":"http://chuck.cs.princeton.edu/"})
    .addInfluencedBy(["pl+supercollider"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+concurrent","paradigm+interpreted","paradigm+multi","paradigm+real-time","paradigm+synchronous"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app","tag+audio-dev","tag+interpreter"])
    .addTypeSystems(["tsys+strong"])
    .addWrittenIn(["pl+c++"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  