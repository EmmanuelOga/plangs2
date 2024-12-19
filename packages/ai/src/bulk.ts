// This is an example of "bulk data" loading.
// We could streamload this process even more, bvt for now the process involves creating
// an array like the following, then running the AI enriching process on each entry.

import type { PlangsGraph } from "@plangs/plangs/graph";
import { aiRegenPlang, loadPG } from ".";

// List adapted from https://github.com/llaisdy/PrologInfo
const ENTRIES: { key: `pl+${string}`; url: string; name: string; desc: string; link?: string }[] = [
  {
    key: "pl+picat",
    url: "http://picat-lang.org/",
    name: "Picat",
    desc: "A simple, and yet powerful, logic-based multi-paradigm programming language aimed for general-purpose applications.",
  },
  {
    key: "pl+tau",
    url: "http://tau-prolog.org/",
    name: "Tau Prolog",
    desc: "An open source Prolog interpreter in JavaScript",
    link: "https://x.com/tau_prolog",
  },
  { key: "pl+strand", url: "http://www.call-with-current-continuation.org/strand/strand.html", name: "Strand", desc: "A parallel Prolog dialect" },
  { key: "pl+gprolog", url: "http://www.gprolog.org/", name: "GNU Prolog", desc: "GNU Prolog" },
  {
    key: "pl+jiprolog",
    url: "http://www.jiprolog.com/",
    name: "JIProlog",
    desc: "A Prolog interpreter, pure Java 100%, cross-platform and Open Source",
    link: "https://x.com/jiprolog",
  },
  {
    key: "pl+elpi",
    url: "https://github.com/LPCIC/elpi",
    name: "ELPI",
    desc: "Embeddable Lambda Prolog Interpreter. Implements a variant of λProlog enriched with Constraint Handling Rules.",
  },
  {
    key: "pl+pyneura",
    url: "https://github.com/LukasZahradnik/PyNeuraLogic",
    name: "PyNeuraLogic",
    desc: "PyNeuraLogic lets you use Python to create Differentiable Logic Programs.",
  },
  {
    key: "pl+cozo",
    url: "https://github.com/cozodb/cozo",
    name: "Cozo",
    desc: "A transactional, relational-graph-vector database that uses Datalog for query.",
  },
  {
    key: "pl+eqlog",
    url: "https://github.com/eqlog/eqlog",
    name: "Eqlog",
    desc: "Datalog with equality for rust.",
  },
  {
    key: "pl+slog",
    url: "https://github.com/harp-lab/slog-lang1",
    name: "Slog",
    desc: "A parallel logic programming engine with first-class facts/data.",
  },
  {
    key: "pl+ichiban",
    url: "https://github.com/ichiban/prolog",
    name: "Ichiban Prolog",
    desc: "An embeddable ISO Prolog interpreter in Go.",
  },
  {
    key: "pl+datalevin",
    url: "https://github.com/juji-io/datalevin",
    name: "Datalevin",
    desc: "A simple, fast and versatile Datalog database.",
  },
  {
    key: "pl+popper",
    url: "https://github.com/logic-and-learning-lab/Popper",
    name: "Popper",
    desc: "An inductive logic programming system",
  },
  {
    key: "pl+natlog",
    url: "https://github.com/ptarau/natlog",
    name: "Natlog",
    desc: "A lightweight Prolog-like system (implemented in Python) designed to smoothly interoperate with deep learning tools like PyTorch, JAX, GPT.",
  },
  {
    key: "pl+datahike",
    url: "https://github.com/replikativ/datahike",
    name: "Datahike",
    desc: "A fast, immutable, distributed & compositional Datalog engine for everyone.",
  },
  {
    key: "pl+erlog",
    url: "https://github.com/rvirding/erlog",
    name: "erlog",
    desc: "a Prolog interpreter implemented in Erlang.",
  },
  {
    key: "pl+datascript",
    url: "https://github.com/tonsky/datascript",
    name: "DataScript",
    desc: "Immutable database and Datalog query engine for Clojure, ClojureScript and JS.",
  },
  {
    key: "pl+ddlog",
    url: "https://github.com/vmware/differential-datalog",
    name: "Differential Datalog",
    desc: "a programming language for incremental computation. It is well suited for writing programs that continuously update their output in response to input changes.",
  },
  {
    key: "pl+fleng",
    url: "https://gitlab.com/b2495/fleng",
    name: "Fleng",
    desc: "A compiler for the concurrent logic programming languages FGHC, Strand, KL1 and PCN.",
  },
  {
    key: "pl+abclog",
    url: "https://harvardpl.github.io/AbcDatalog/",
    name: "AbcDatalog",
    desc: "Easy Datalog for research & pedagogy.",
  },
  {
    key: "pl+formulog",
    url: "https://harvardpl.github.io/formulog/",
    name: "Formulog",
    desc: "Datalog with support for SMT queries and first-order functional programming",
  },
  {
    key: "pl+logica",
    url: "https://logica.dev/",
    name: "Logica",
    desc: "declarative logic programming language for data manipulation.",
  },
  {
    key: "pl+mercury",
    url: "https://mercurylang.org/",
    name: "Mercury",
    desc: "A logic/functional programming language.",
    link: "https://x.com/MercuryLang",
  },
  {
    key: "pl+potassco",
    url: "https://potassco.org/",
    name: "Potassco",
    desc: "the Potsdam Answer Set Solving Collection",
    link: "https://x.com/potassco",
  },
  {
    key: "pl+ascent",
    url: "https://s-arash.github.io/ascent/",
    name: "Ascent",
    desc: "Logic programming language (similar to Datalog) embedded in Rust via macros",
  },
  {
    key: "pl+teyjus",
    url: "https://teyjus.cs.umn.edu/",
    name: "Teyjus",
    desc: "Lambda Prolog implementation",
  },
  {
    key: "pl+trealla",
    url: "https://trealla-prolog.github.io/trealla/",
    name: "Trealla Prolog",
    desc: "a compact, efficient Prolog interpreter written in plain-old C",
  },
  {
    key: "pl+gupu",
    url: "https://www.complang.tuwien.ac.at/ulrich/gupu/",
    name: "GUPU",
    desc: "An environment specialized for Prolog and constraint programming.",
  },
  {
    key: "pl+scryer",
    url: "https://www.scryer.pl/",
    name: "Scryer Prolog",
    desc: "an ISO Prolog implemented in Rust.",
  },
];

export async function bulkImport(pg: PlangsGraph) {
  for (const entry of ENTRIES) {
    console.log("Enriching data for", entry.url);

    const { key, url, name, desc, link } = entry;

    const pl = pg.plang.set(key, { name, shortDesc: desc, extHomeURL: url });
    if (link) {
      const uri = new URL(link);
      if (uri.hostname) pl.addLinks([{ url: link, title: "More Info" }]);
    }
    try {
      const result = await aiRegenPlang(pg, pl);
      if (result.result === "error") console.error(result.message);
    } catch (err) {
      console.log(err, entry);
    }
  }
}

// {url: "https://www.semanticscholar.org/paper/Logic-and-objects-%3A-language%2C-application-and-McCabe/13fbc4334f55ae3ce229f009f6ba255645b89906", name: "Logic & Objects" -desc: - the class template language (F. McCabe PhD thesis, 1989)."},
// {url: "https://www.metalevel.at/prolog", name: "The Power of Prolog", desc: "Online book introducing modern Prolog."},
