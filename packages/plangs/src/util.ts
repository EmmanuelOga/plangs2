import type { StrDate } from "./schema";

type RegExpReplacer = { regExp: RegExp; replacer: typeof String.prototype.replaceAll };

/** A RegExp replacement to simplity the paths on backtraces. */
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

export function parseDate(path: string): StrDate | undefined {
  const match = path.match(/(\d{4})\D(\d{1,2})\D(\d{1,2})/);
  if (!match) return;
  const [, year, month, day] = match;
  const [y, m, d] = [Number.parseInt(year), Number.parseInt(month), Number.parseInt(day)];
  if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return;
  const strDate: StrDate = `${y}-${`${m}`.padStart(2, "0")}-${`${d}`.padStart(2, "0")}`;
  return strDate;
}

/** Extract the year from a StrDate. */
export function getStrDateYear(strDate?: StrDate): number | undefined {
  if (!strDate) return undefined;
  try {
    const year = Number.parseInt(strDate?.slice(0, 4));
    if (year >= 1900 && year <= 2100) return year;
  } catch (e) {
    return undefined;
  }
}
