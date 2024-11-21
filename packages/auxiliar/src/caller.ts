type RegExpReplacer = { regExp: RegExp; replacer: typeof String.prototype.replaceAll };

/** A RegExp replacement to simplify the paths on backtraces. */
export const SIMPLIFY_PATH = {
  regExp: / \(([^\)]+)\)/g,
  replacer: (match: string) => ` (${match.split("/").slice(-2).join("/")})`,
} as const;

/**
 * Return a caller `line:no` for debugging.
 * @param match find the first line in the backtrace that contains this string.
 * @param dontMatch if given, the line in the backtrace must not contain this string.
 */
export function caller({ clean, match, dontMatch }: { clean?: RegExpReplacer; match?: RegExp; dontMatch?: RegExp } = {}): string[] {
  // https://stackoverflow.com/a/3806596/855105
  function getErrorObject(): Error {
    try {
      throw Error("");
    } catch (err) {
      return err as Error;
    }
  }
  let callers = (getErrorObject().stack ?? "").split("\n").slice(2);

  if (clean) callers = callers.map(line => line.replaceAll(clean.regExp, clean.replacer).trim());
  if (match) callers = callers.filter((line: string) => match.test(line));
  if (dontMatch) callers = callers.filter((line: string) => !dontMatch.test(line));

  return callers;
}
