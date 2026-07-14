/**
 * Remark plugin porting the legacy `(kind+key)` inline syntax from
 * packages/server/src/content.tsx: `(pl+typescript)` becomes a link to the
 * language's page. Matching the legacy behavior, only the FIRST occurrence of
 * each vertex is linked; later mentions render as the plain name. Unknown keys
 * are left untouched and reported.
 */
const REFS = /\(([a-z]+)\+([a-zA-Z0-9_+-]+)\)/g;

/** @param {{ lookup: (legacyKey: string) => { name: string, href: string } | undefined }} opts */
export function remarkVertexRefs(opts) {
  const { lookup } = opts;
  return tree => {
    const linked = new Set();

    const walk = node => {
      if (!node || !Array.isArray(node.children)) return;
      // Never rewrite inside existing links or code.
      if (node.type === "link" || node.type === "inlineCode" || node.type === "code") return;

      const out = [];
      for (const child of node.children) {
        if (child.type !== "text") {
          walk(child);
          out.push(child);
          continue;
        }
        const parts = [];
        let last = 0;
        REFS.lastIndex = 0;
        for (let m = REFS.exec(child.value); m !== null; m = REFS.exec(child.value)) {
          const legacyKey = `${m[1]}+${m[2]}`;
          const vertex = lookup(legacyKey);
          if (!vertex) continue; // unknown key: leave the raw text as-is
          if (m.index > last) parts.push({ type: "text", value: child.value.slice(last, m.index) });
          if (linked.has(legacyKey)) {
            parts.push({ type: "text", value: vertex.name });
          } else {
            linked.add(legacyKey);
            parts.push({ type: "link", url: vertex.href, children: [{ type: "text", value: vertex.name }] });
          }
          last = m.index + m[0].length;
        }
        if (!parts.length) {
          out.push(child);
          continue;
        }
        if (last < child.value.length) parts.push({ type: "text", value: child.value.slice(last) });
        out.push(...parts);
      }
      node.children = out;
    };

    walk(tree);
  };
}
