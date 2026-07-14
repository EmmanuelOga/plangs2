/** `2025_01_06_the_plangs_stack` → `2025-01-06` (legacy dated filenames). */
export function dateFromId(id: string): string | undefined {
  const m = id.match(/^(\d{4})_(\d{2})_(\d{2})_/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : undefined;
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
