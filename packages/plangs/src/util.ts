/**
 * Type assertion for {@link RegExp}
 */
export function isRegExp(val: unknown): val is RegExp {
  return Object.prototype.toString.call(val) === "[object RegExp]";
}

/**
 * Return a caller `line:no` for debugging.
 * @param match find the first line in the backtrace that contains this string.
 * @param dontMatch if given, the line in the backtrace must not contain this string.
 */
export function caller(match: string, dontMatch = ""): string {
  // https://stackoverflow.com/a/3806596/855105
  function getErrorObject() : Error {
    try {
      throw Error("");
    } catch (err) {
      return err as Error;
    }
  }
  const err = getErrorObject();

  const caller_line = (err.stack ?? '')
    .split("\n")
    .find((line: string) => line.includes(match) && (!dontMatch || !line.includes(dontMatch)));

  if (!caller_line) return "unknown";
  const index = caller_line.indexOf("at ");
  const clean = caller_line.slice(index + 2, caller_line.length);
  return clean.trim();
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

export function toggle<T>(target: Set<T>, item: T): Set<T> {
  target.has(item) ? target.delete(item) : target.add(item);
  return target;
}

export function addAll<T>(target: { add(elem: T): void }, values: Iterable<T>): typeof target {
  for (const elem of values) target.add(elem);
  return target;
}

export function hasAll<T>(container: { has(elem: T): boolean }, values: Iterable<T>): boolean {
  for (const v of values) if (!container.has(v)) return false;
  return true;
}

export function hasAny<T>(container: { has(elem: T): boolean }, values: Iterable<T>): boolean {
  for (const v of values) if (container.has(v)) return true;
  return false;
}
