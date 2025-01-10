import type { StrDate } from "@plangs/auxiliar/str_date";
import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { VLicense, VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

import { updateLocalEdits } from ".";
import { isCSV, isEmptyOrStrDate, isNonEmptyStr, isNumber, isURL, matchesRegex } from "./validators";

export type FormField = {
  kind: "bool" | "string" | "text";
  label: string;
  desc?: string;
  validator: (val: any) => string | undefined;
  saver: (val: any) => void;
};

const REGEXP_ANUMPLUS = /[a-zA-Z0-9\-\_]+/;
const REGEXP_EXTENSION = /^\.[a-zA-Z0-9\-\_]+/;
const REGEXP_GITHUB_PATH = /[a-zA-Z0-9\-\_]+\/[a-zA-Z0-9\-\_]+/;
const REGEXP_WIKIPEDIA_PATH = /[a-zA-Z0-9\_\(\)\-]+$/;

export class VertexFormState extends Dispatchable<{
  vertex: TPlangsVertex;
  fields: Record<string, FormField>;
  values: Record<string, number | string | boolean | undefined>;
  status?: string;
}> {
  static create(vertex: TPlangsVertex) {
    return new VertexFormState({ vertex, fields: VertexFormState.fields(vertex), values: VertexFormState.values(vertex) });
  }

  static fields(vertex: TPlangsVertex): Record<string, FormField> {
    const fields: Record<string, FormField> = {
      name: { kind: "string", label: "Name", validator: isNonEmptyStr, saver: val => (vertex.data.name = val) },
      description: { kind: "text", label: "Description", validator: isNonEmptyStr, saver: val => (vertex.data.description = val) },
      shortDesc: { kind: "text", label: "Short Description", validator: () => undefined, saver: val => (vertex.data.shortDesc = val) },
      created: { kind: "string", label: "Created", validator: isEmptyOrStrDate, saver: val => (vertex.data.created = val as StrDate) },
      urlHome: {
        kind: "string",
        label: "Home URL",
        desc: "URL including protocol (http, https).",
        validator: isURL,
        saver: val => (vertex.data.extHomeURL = val),
      },
    };

    if ("github" in vertex) {
      fields.extGithubPath = {
        kind: "string",
        label: "Github Path",
        desc: "Example: EmmanuelOga/plangs2 for github.com/emmanueloga/plangs2",
        validator: v => matchesRegex(v, REGEXP_GITHUB_PATH),
        saver: val => (vertex.data.extGithubPath = val),
      };
      fields.githubStars = {
        kind: "string",
        label: "Github Stars",
        validator: v => isNumber(v, num => num > 0),
        saver: val => (vertex.github.stars = Number.parseInt(val)),
      };
    }

    if (vertex instanceof VPlang) {
      fields.isTranspiler = {
        kind: "bool",
        label: "Is Transpiler",
        desc: "Compiles to some other language.",
        validator: () => undefined,
        saver: val => (vertex.data.isTranspiler = val),
      };
      fields.extensions = {
        kind: "string",
        label: "Extensions",
        desc: "Comma-separated list of extensions. Example: .py,.pyc",
        validator: v => isCSV(v, REGEXP_EXTENSION),
        saver: val => val && vertex.addExtensions(val.split(",")),
      };
      fields.filenames = {
        kind: "string",
        label: "Filenames",
        desc: "Comma-separated list of files associated. Example: Makefile",
        validator: v => isCSV(v, REGEXP_ANUMPLUS),
        saver: val => val && vertex.addFilenames(val.split(",")),
      };
    }

    if (vertex instanceof VLicense) {
      fields.spdx = { kind: "string", label: "SPDX", validator: isNonEmptyStr, saver: val => (vertex.data.spdx = val) };
      fields.isFSFLibre = { kind: "bool", label: "FSF Libre?", validator: () => undefined, saver: val => (vertex.data.isFSFLibre = val) };
      fields.isOSIApproved = { kind: "bool", label: "OSI Approved?", validator: () => undefined, saver: val => (vertex.data.isOSIApproved = val) };
    }

    fields.extWikipediaPath = {
      kind: "string",
      label: "Wikipedia Path",
      desc: "Path to wikipedia. Example: Python_(programming_language) for https://en.wikipedia.org/wiki/Python_(programming_language)",
      validator: v => matchesRegex(v, REGEXP_WIKIPEDIA_PATH),
      saver: val => (vertex.data.extWikipediaPath = val),
    };
    fields.extRedditPath = {
      kind: "string",
      label: "Reddit Path",
      desc: "Path to subreddit. Example: Python for https://www.reddit.com/r/Python/",
      validator: v => matchesRegex(v, REGEXP_ANUMPLUS),
      saver: val => (vertex.data.extRedditPath = val),
    };
    fields.stackovTags = {
      kind: "string",
      label: "Stack Overflow Tags",
      desc: "Comma-separated list of tags.",
      validator: v => isCSV(v, REGEXP_ANUMPLUS),
      saver: val => val && vertex.addStackovTags(val.split(",")),
    };
    fields.keywords = {
      kind: "string",
      label: "Keywords",
      desc: "Comma-separated list of keywords.",
      validator: v => isCSV(v, REGEXP_ANUMPLUS),
      saver: val => val && vertex.addKeywords(val.split(",")),
    };

    return fields;
  }

  static values(vertex: TPlangsVertex) {
    const values: Record<string, string | number | boolean | undefined> = {
      description: vertex.description,
      name: vertex.name,
      shortDesc: vertex.data.shortDesc,
      created: vertex.created.value,
      keywords: vertex.keywords.join(","),
      urlHome: vertex.urlHome,
      extRedditPath: vertex.data.extRedditPath,
      extWikipediaPath: vertex.data.extWikipediaPath,
      stackovTags: vertex.data.stackovTags?.join(","),
    };

    if (vertex instanceof VPlang) {
      values.extensions = vertex.extensions.join(",");
      values.filenames = vertex.filenames.join(",");
      values.isTranspiler = vertex.isTranspiler;
    }

    if (vertex instanceof VLicense) {
      values.spdx = vertex.spdx;
      values.isFSFLibre = vertex.isFSFLibre;
      values.isOSIApproved = vertex.isOSIApproved;
    }

    if ("github" in vertex) {
      values.extGithubPath = vertex.data.extGithubPath;
      values.githubStars = vertex.data.githubStars;
    }

    return values;
  }

  get vertex() {
    return this.data.vertex;
  }

  get values() {
    return this.data.values;
  }

  get fields() {
    return this.data.fields;
  }

  get status() {
    return this.data.status;
  }

  doUpdate(attr: string, value: any) {
    this.values[attr] = value;
    this.dispatch();
  }

  doReload() {
    this.data.values = VertexFormState.values(this.data.vertex);
    this.dispatch();
  }

  doSave() {
    const errors = [];
    let saved = 0;

    for (const [attr, value] of Object.entries(this.values)) {
      const { validator, saver } = this.fields[attr];
      if (validator?.(value)) {
        errors.push(attr);
      } else {
        saver?.(value);
        saved++;
      }
    }

    if (saved > 0) updateLocalEdits(this.vertex.graph.toJSON());

    const msg = [`${new Date().toLocaleTimeString()} update: saved ${saved} fields.`];
    if (errors.length) {
      msg.push(`Fields with errors: ${errors.join(", ")}.`);
    }

    this.data.status = msg.join(" ");
    this.dispatch();
  }

  validate(attr: string): string | undefined {
    const field = this.fields[attr];
    return field?.validator?.(this.values[attr]);
  }
}
