/**
 * Validators for form fields.
 */

import { parseDate } from "@plangs/auxiliar/str_date";

export function isNonEmptyStr(val: string | undefined): string | undefined {
  if (!val) return "Cannot be empty.";
}

export function isEmptyOrStrDate(val: string | undefined): string | undefined {
  if (!val) return;
  return isStrDate(val);
}

export function isStrDate(val: string | undefined): string | undefined {
  if (!parseDate(val ?? "")) return "Invalid date format. Use YYYY-MM-DD.";
}

export function isCSV(val: string | undefined, each: RegExp): string | undefined {
  if (!val) return;
  const parts = val.split(",");
  if (!parts.every(v => each.test(v))) return `Invalid format. Should match RegExp: ${each.source}`;
}

export function isURL(val: string | undefined): string | undefined {
  let url: URL | undefined;
  try {
    url = new URL(`${val ?? ""}`);
  } catch {}
  if (!url || !url.hostname || !url.protocol) return "Invalid URL format.";
}

export function matchesRegex(val: string | undefined, rx: RegExp): string | undefined {
  if (!val) return;
  if (!rx.test(val ? val : "")) return `Invalid format. Should match RegExp: ${rx.source}`;
}

export function isNumber(val: string | undefined, valid: (n: number) => boolean): string | undefined {
  if (!val) return;
  const num = Number.parseInt(`${val ?? ""}`);
  if (Number.isNaN(num) || !valid(num)) return "Invalid number.";
}
