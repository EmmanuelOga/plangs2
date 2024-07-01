/**
 * Type assertion for {@link RegExp}
 */
export function isRegExp(val: unknown): val is RegExp {
  return Object.prototype.toString.call(val) === "[object RegExp]";
}

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

/**
 * Return a caller `line:no` for debugging.
 * @param match find the first line in the backtrace that contains this string.
 * @param dontMatch if given, the line in the backtrace must not contain this string.
 */
export function caller(match: string, dontMatch = ""): string {
  // https://stackoverflow.com/a/3806596/855105
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
    .find((line: string) => line.includes(match) && (!dontMatch || !line.includes(dontMatch)));

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

/**
 * We use arrays as we want plain old JS data in vertices,
 * but sometimes we want the arrays to act like sets.
 */
export function arrayMerge<T>(
  target: T[],
  newData: T[],
  similar: (l1: T, l2: T) => boolean,
  onDuplicate: (prevElem: T, newElem: T) => void,
) {
  for (const newElem of newData) {
    const prevElem = target.find((elem: T) => similar(elem, newElem));
    if (prevElem) {
      onDuplicate(prevElem, newElem);
    } else {
      target.push(newElem);
    }
  }
}
