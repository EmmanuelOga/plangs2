import type { Link, StrDate } from ".";

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
