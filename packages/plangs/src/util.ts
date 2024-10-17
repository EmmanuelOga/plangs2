import type { Link, StrDate } from "./schema";

/**
 * Return a caller `line:no` for debugging.
 * @param match find the first line in the backtrace that contains this string.
 * @param dontMatch if given, the line in the backtrace must not contain this string.
 */
export function caller({ clean, match, dontMatch }: { match?: RegExp; dontMatch?: RegExp; clean?: RegExp } = {}): string[] {
  // https://stackoverflow.com/a/3806596/855105
  function getErrorObject(): Error {
    try {
      throw Error("");
    } catch (err) {
      return err as Error;
    }
  }
  const err = getErrorObject();

  let callers = (err.stack ?? "").split("\n").slice(1);
  if (match) callers = callers.filter((line: string) => match.test(line));
  if (dontMatch) callers = callers.filter((line: string) => !dontMatch.test(line));

  if (callers.length === 0) return ["empty backtrace after filtering"];

  if (clean) return callers.map(line => line.replaceAll(clean, "").trim());
  return callers;
}

export function wikipedia(href: `https://en.wikipedia.org/wiki/${string}`, title: string): Link {
  return { kind: "wikipedia", href, title };
}

export function parseDate(path: string): StrDate | undefined {
  const match = path.match(/(\d{4})_(\d{2})_(\d{2})/);
  if (!match) return;
  const [, year, month, day] = match;
  const [y, m, d] = [Number.parseInt(year), Number.parseInt(month), Number.parseInt(day)];
  if (y < 2000 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return;
  const strDate: StrDate = `${y}-${`${m}`.padStart(2, "0")}-${`${d}`.padStart(2, "0")}`;
  return strDate;
}
