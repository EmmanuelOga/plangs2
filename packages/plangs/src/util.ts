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

  const caller_line = (err.stack ?? "")
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
