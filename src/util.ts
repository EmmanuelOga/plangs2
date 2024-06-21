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
  const result = s
    .trim()
    .normalize("NFD")
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: removes accents/diacritics.
    .replaceAll(/[\u0300-\u036f]/g, "")
    .replaceAll(/\s+/g, " ")
    .replaceAll(" ", "-")
    .toLowerCase()
    .split(/[\*]/g)
    .join("-star")
    .split(/\#/g)
    .join("-sharp")
    .split(/\+/g)
    .join("-plus")
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
export function caller(pathPattern: string): string {
  function getErrorObject() {
    try {
      throw Error("");
    } catch (err) {
      return err;
    }
  }
  const err = getErrorObject();
  const caller_line = err.stack.split("\n").find((line: string) => line.includes(pathPattern));
  if (!caller_line) return "unknown";
  const index = caller_line.indexOf("at ");
  const clean = caller_line.slice(index + 2, caller_line.length);
  return clean.trim();
}
