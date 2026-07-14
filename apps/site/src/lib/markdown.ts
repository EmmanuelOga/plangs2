import type { NodeDetail } from "./view";

const SITE = "https://plangs.page";

/** Clean markdown twin of a node page (PLAN §7.2): frontmatter + relations. */
export function nodeToMarkdown(detail: NodeDetail): string {
  const canonical = detail.kind === "plang" ? `${SITE}/${detail.slug}` : `${SITE}/${detail.kind}/${detail.slug}`;
  const d = detail.data;
  const lines: string[] = [];
  lines.push("---");
  lines.push(`key: ${detail.key}`);
  lines.push(`kind: ${detail.kind}`);
  lines.push(`name: ${JSON.stringify(detail.name)}`);
  lines.push(`url: ${canonical}`);
  lines.push("---", "");
  lines.push(`# ${detail.name}`, "");
  if (typeof d.shortDesc === "string") lines.push(`> ${d.shortDesc}`, "");
  if (typeof d.description === "string") lines.push(d.description, "");

  const facts: string[] = [];
  if (typeof d.created === "string") facts.push(`- Appeared: ${d.created}`);
  if (typeof d.extHomeURL === "string") facts.push(`- Homepage: ${d.extHomeURL}`);
  if (typeof d.extGithubPath === "string") facts.push(`- GitHub: https://github.com/${d.extGithubPath}`);
  if (typeof d.languishRanking === "number") facts.push(`- Languish ranking: #${d.languishRanking}`);
  if (facts.length) lines.push("## Facts", "", ...facts, "");

  if (detail.relations.length) {
    lines.push("## Relationships", "");
    for (const group of detail.relations) {
      lines.push(`### ${group.label}`, "");
      for (const item of group.items) lines.push(`- [${item.name}](${SITE}${item.href})`);
      lines.push("");
    }
  }
  return lines.join("\n");
}
