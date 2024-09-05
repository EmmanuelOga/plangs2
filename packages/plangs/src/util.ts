/**
 * Return a caller `line:no` for debugging.
 * @param match find the first line in the backtrace that contains this string.
 * @param dontMatch if given, the line in the backtrace must not contain this string.
 */
export function caller(match: string, dontMatch = ""): string {
  // https://stackoverflow.com/a/3806596/855105
  function getErrorObject(): Error {
    try {
      throw Error("");
    } catch (err) {
      return err as Error;
    }
  }
  const err = getErrorObject();

  const caller_line = (err.stack ?? "").split("\n").find((line: string) => line.includes(match) && (!dontMatch || !line.includes(dontMatch)));

  if (!caller_line) return "unknown";
  const index = caller_line.indexOf("at ");
  const clean = caller_line.slice(index + 2, caller_line.length);
  return clean.trim();
}

/**
 * Insert elements in the array if they are not already present.
 */
export function arrayMerge<T>(
  target: T[],
  newData: T[],
  similar: (l1: T, l2: T) => boolean = (l1, l2) => l1 === l2,
  onDuplicate?: (prevElem: T, newElem: T) => void,
) {
  for (const newElem of newData) {
    const prevElem = target.find((elem: T) => similar(elem, newElem));
    if (prevElem && onDuplicate) {
      onDuplicate(prevElem, newElem);
    } else {
      target.push(newElem);
    }
  }
}

/** Verify a predicate for all or any of the elements. */
export function verify<T>(elements: Iterable<T>, mode: "all" | "any", predicate: (v: T) => boolean): boolean {
  if (mode === "all") {
    for (const v of elements) if (!predicate(v)) return false;
    return true;
  }

  for (const v of elements) if (predicate(v)) return true;
  return false;
}

export function wikipedia(href: `https://en.wikipedia.org/wiki/${string}`, title: string): Link {
  return { kind: "wikipedia", href, title };
}
