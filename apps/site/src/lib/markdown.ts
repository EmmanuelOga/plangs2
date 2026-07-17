import { urlKind } from "./url";
import type { NodeDetail } from "./view";

const SITE = "https://plangs.page";

/** Clean markdown twin of a node page (PLAN §7.2): frontmatter + relations. */
export function nodeToMarkdown(detail: NodeDetail): string {
  const canonical = detail.kind === "plang" ? `${SITE}/${detail.slug}` : `${SITE}/${urlKind(detail.kind)}/${detail.slug}`;
  const d = detail.data;
  const lines: string[] = [];
  lines.push("---");
  lines.push(`key: ${detail.key}`);
  lines.push(`kind: ${detail.kind}`);
  lines.push(`name: ${JSON.stringify(detail.name)}`);
  lines.push(`url: ${canonical}`);
  lines.push("---", "");
  lines.push(`# ${detail.name}`, "");
  if (d.shortDesc) lines.push(`> ${d.shortDesc}`, "");
  if (d.description) lines.push(d.description, "");

  const facts: string[] = [];
  if (d.created) facts.push(`- Appeared: ${d.created}`);
  if (d.extHomeURL) facts.push(`- Homepage: ${d.extHomeURL}`);
  // `extGithubPath` is only on the GitHub-backed kinds and `languishRanking`
  // only on plang, so these narrow the union with `in` instead of `typeof`.
  if ("extGithubPath" in d && d.extGithubPath) facts.push(`- GitHub: https://github.com/${d.extGithubPath}`);
  if ("languishRanking" in d && d.languishRanking !== undefined) facts.push(`- Languish ranking: #${d.languishRanking}`);
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
