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
  githubLangId?: string;

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
  githubPopular?: boolean;
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

export type LanguishLang = {
  /** Example: "ATS". This matches the github-linguist `name` field. */
  githubName: string;
  /** Wikipedia ID for the language. Example: "ATS_(programming_language)". */
  wikipedia?: string;
  /** Reddit ID for discussions page. Example: "ATS". */
  reddit?: string;
  /** StackOverflow tags for questions. Example: [ "ats" ] */
  stackoverflow?: string[];
};

/** Allows for getting the names of fields that of type `string` or `string | undefined`. */
export type StringKeys<T> = keyof {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};
