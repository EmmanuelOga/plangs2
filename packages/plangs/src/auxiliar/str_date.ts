import type { StrDate } from "../schema";

// Arbitrary "valid" year range.
export const validYear = (year: number): boolean => year >= 1940 && year <= 2100;
export const validMonth = (month: number): boolean => month >= 1 && month <= 12;
export const validDay = (day: number): boolean => day >= 1 && day <= 31;

/** If the string complies with StrDate, returns it formatted and type checked. */
export function parseDate(val: string): StrDate | undefined {
  if (!val || val.length < 4 || val.length > 10) return;
  const [year, month, day] = val.split(/\D/, 3);
  const [y, m, d] = [Number.parseInt(year), Number.parseInt(month), Number.parseInt(day)];

  if (validYear(y)) {
    if (validMonth(m)) {
      if (validDay(d)) return `${y}-${`${m}`.padStart(2, "0")}-${`${d}`.padStart(2, "0")}`;
      return `${y}-${`${m}`.padStart(2, "0")}`;
    }
    return `${y}`;
  }
}

/** Extract the year from a StrDate. */
export function parseYear(val?: StrDate): number | undefined {
  if (!val || val.length < 4 || val.length > 10) return;
  const year = Number.parseInt(val.split(/\D/, 3)[0], 10);
  if (validYear(year)) return year;
}

export function parseMonth(val?: StrDate): number | undefined {
  if (!val || val.length < 4 || val.length > 10) return;
  const month = Number.parseInt(val.split(/\D/, 3)[1], 10);
  if (validMonth(month)) return month;
}

export function strDateCompare(a: StrDate | undefined, b: StrDate | undefined): number {
  if (a === b) return 0;
  if (!a) return -1;
  if (!b) return 1;
  return a.localeCompare(b);
}

export function isRecent(date: StrDate | undefined, referenceDate: StrDate): boolean {
  if (!date) return false;
  return date >= referenceDate; // StrDate is a string, so this comparison works.
}
