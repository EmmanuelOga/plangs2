/**
 * Type assertion for {@link RegExp}
 */
export function isRegExp(val: unknown): val is RegExp {
  return Object.prototype.toString.call(val) === "[object RegExp]";
}

/**
 * Avoids nested `Partial<Partial<Partial<...>>>` which are redundant.
 */
export type NN_Partial<T> = T extends Partial<infer U> ? T : Partial<T>;

/**
 * Convert the string to something usable as vertex id.
 */
export function toAlphaNum(s: string) {
  // biome-ignore format: it's artisanally formatted :-p.
  let result = s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: removes accents/diacritics.
    .replaceAll(/[\u0300-\u036f]/g, "");

  if (result.startsWith("*")) result = `star-${result.slice(1)}`;
  if (result.startsWith("+")) result = `p${result.slice(1)}`;

  result = result
    .replaceAll(" ", "-")
    .replaceAll(/\s+/g, " ")
    .replaceAll(/_/g, "-")
    .replaceAll(/\-\-+/g, "-")

    .split(/[\*]/g)
    .join("-star")
    .split(/\#/g)
    .join("-sharp")
    .split(/\+/g)
    .join("p")
    .split(/\//g)
    .join("-slash")
    .split(/\\/g)
    .join("-backslash")

    .replaceAll(/[\/\:]/g, "-")
    .replaceAll(/[^a-zA-Z0-9\.\(\)\[\]_\-]/g, "-");

  return result;
}

// Print caller line:no for debugging.
// https://stackoverflow.com/a/3806596/855105
export function caller(pathPattern: string, dontMatch = ""): string {
  function getErrorObject() {
    try {
      throw Error("");
    } catch (err) {
      return err;
    }
  }
  const err = getErrorObject();

  const caller_line = err.stack
    .split("\n")
    .find((line: string) => line.includes(pathPattern) && (!dontMatch || !line.includes(dontMatch)));

  if (!caller_line) return "unknown";
  const index = caller_line.indexOf("at ");
  const clean = caller_line.slice(index + 2, caller_line.length);
  return clean.trim();
}

/**
 * True if obj:
 * - is number
 * - is non blank string
 * - is non empty array
 * - obj has any key where obj[key] is truthy.
 */
// biome-ignore lint/suspicious/noExplicitAny: Can test any object.
export function blank(obj: any): boolean {
  if (typeof obj === "number") return false;
  if (typeof obj === "string") return !obj.trim();
  if (Array.isArray(obj)) return obj.length === 0;

  for (const key of Object.getOwnPropertyNames(obj)) {
    if (!blank(obj[key])) return false;
  }

  return true;
}

/** (Shallow) Remove keys from object which are blank or empty arrays, sorts arrays. */
// biome-ignore lint/suspicious/noExplicitAny: Can tidy any object.
export function tidy(data: any): any {
  for (const [key, val] of Object.entries(data)) {
    if (Array.isArray(val)) {
      if (val.length === 0) delete data[key];
      else val.sort();
    } else if (blank(val)) delete data[key];
  }
  return data;
}
