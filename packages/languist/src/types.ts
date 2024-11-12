/**
 * Type of the objects generated from github-linguist ruby gem.
 */
export type LinguistLang = {
  /** Language Name. */
  name: string;

  /**
   * Language Name in the file system.
   * For instance, "F*" needs a file system name since "*" is not a valid filename char.
   */
  nameFS?: string;

  /**
   * A group name is more general than a language name.
   *
   * Examples:
   * - name: "Apollo Guidance Computer" group: "Assembly"
   * - name: "Glimmer JS" group: "JavaScript"
   * - name: "Glimmer TS" group: "TypeScript"
   * - name: "Gradle Kotlin DSL" group: "Gradle"
   * - name: "HTML+PHP" group: "HTML"
   * - name: "JSON with Comments" group: "JSON"
   * - name: "Java Server Pages" group: "Java"
   * - name: "Literate Haskell" group: "Haskell"
   *
   * In general Plangs does not want to be super granular,
   * so we want to work with the group name when there's one.
   */
  groupName?: string;

  /**
   * Name Aliases, if any.
   *
   * Examples:
   * - name: "Protocol Buffer": aliases: ["protocol-buffer","proto","protobuf","Protocol Buffers"]
   * - name: "Python" aliases: ["python","python3","rusthon"]
   * - name: "Ragel" aliases: ["ragel","ragel-rb","ragel-ruby"]
   * - name: "Raku" aliases: ["raku","perl6","perl-6"]
   */
  aliases: string[];

  defaultAlias?: string;

  /**
   * Internal ID of the language in Github.
   * Looks like a numeric id ("1", "2", "3") wrap in a string.
   */
  langId?: string;

  //--------------------------------------------------------------------------------

  /** An HTML color name that Github assigns to some languages. Example: "#2A6277". */
  color?: string;
  /** File Extensions, including the dot. Example: [".pas", ".tpu"]. */
  extensions: string[];
  /** File names are names that are associated with an specific language. Example: ['Makefile']. */
  filenames: string[];
  /** Name of binary executable file that can take a program of this type as input. Example: ['bash', 'dash', 'sh']. */
  interpreters: string[];
  /** Languages that Github considers "popular", for whatever reason. */
  popular?: boolean;
  /** Language Type */
  type: "data" | "markup" | "programming" | "prose";
  /** Should lines be wrapped? According to Github, most language lines should not be wrapped. */
  wrap?: boolean;

  //--------------------------------------------------------------------------------

  /** Mode for the [ACE editor](https://ace.c9.io). */
  aceMode: string;
  /** MIME type used by [CodeMirror](https://codemirror.net/). */
  codemirrorMIME: string;
  /** Mode used by [CodeMirror](https://codemirror.net/). */
  codemirrorMode: string;
  /** Scope used by [TextMate](https://macromates.com/). */
  textmateScope: string;
};

export type LanguishData = {
  /**
   * This object contains rows for each different programming langauge.
   * The "name" column has githubNames from the github-linguist data model.
   */
  items: {
    keys: ["name", "date", "issues", "pulls", "soQuestions", "stars"];
    rows: LanguishItem[];
  };

  /**
   * This object holds the sum of all issues, pulls, stars, and stackoverflow questions per quarter, for all languages.
   */
  sums: {
    keys: ["date", "issues", "pulls", "stars", "soQuestions"];
    rows: LanguishSum[];
  };

  /**
   * This object contains rows for each different programming langauge, matching the github-linguist language name
   * to corresponding IDs for wikipedia, reddit, and stackoverflow tags.
   */
  translations: {
    keys: ["key", "wikipedia", "reddit", "stackOverflow"];
    rows: LanguishKeys[];
  };
};

/** A period, like "2024Q3" */
export type YearQuarter = `${number}Q${1 | 2 | 3 | 4}`;

/** There will be one of these entries per language/quarter. */
export type LanguishItem = [
  /** github-linguist should have a language with this name. */
  name: string,
  /** The data is aggregated for this Year/Quarter. */
  date: YearQuarter,
  /** Number of Github issues. */
  issues: number,
  /** Number of Github pull requests. */
  pulls: number,
  /** Number of StackOverflow questions. */
  soQuestions: number,
  /** Number of Github stars. */
  stars: number,
];

/** Represents a sum of every metric for all languages for the given date. */
export type LanguishSum = [date: YearQuarter, issues: number, pulls: number, stars: number, soQuestions: number];

/** This is a row od data that matches plang keys across services. */
export type LanguishKeys = [
  /** Should match a github-linguist programming language name. */
  key: string,
  /** ID of a wikipedia page (accessible on https://en.wikipedia.org/wiki/ID), if there's one. */
  wikipedia: string,
  /** The ID of a reddit channel (accessible on https://reddit.com/r/ID), if there's one. */
  reddit: string,
  /** StackOverflow tags, a string like "tag1|tag2|...", or just "tag" if there's only one (or "" for unknown/none). */
  stackOverflow: string,
];

/** These weights are used to calculate the programming language rankings. */
export type LanguishWeights = {
  ghIssues: number;
  ghPRs: number;
  ghStars: number;
  soQuestions: number;
};
