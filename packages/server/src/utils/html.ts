import { h } from "preact";

import { type DataKey, dataKey } from "@plangs/server/elements";

export const script = (src: string) => rawTag("script", src);
export const style = (src: string) => rawTag("style", src);
export const rawTag = (tag: "script" | "style", __html: string) => h(tag, { dangerouslySetInnerHTML: { __html } });

/** Generate a record of data attributes to embed in an react component. Skeip falsey values. */
export function dataset(data: Record<DataKey, string | number | boolean | undefined>): Record<string, string> {
  const entries = Object.entries(data)
    .filter(([, value]) => {
      if (typeof value === "boolean") return value;
      if (typeof value === "string") return !!value;
      if (typeof value === "number") return value;
      return false;
    })
    .map(([key, value]) => [dataKey(key as DataKey), `${value}`]);
  console.log(Object.fromEntries(entries));
  return Object.fromEntries(entries);
}
