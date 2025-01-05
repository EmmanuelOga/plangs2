import { tryFetch } from "@plangs/frontend/auxiliar/requests";
import { localEditsData } from "@plangs/frontend/editor";
import { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";

const GITHUB_SCOPE = "public_repo";
const GITHUB_CLIENT_ID = "Ov23li7sluQbapgJCEn8";

export const initiateGitHubAuth = (redirectUri: string) =>
  (window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${GITHUB_SCOPE}`);

export type PRResult = { kind: "success" | "error"; data: string } | { kind: "nodiff" | "loading" };

/** If the user is coming from a GitHub OAuth callback, remove the code param from the URL. */
export const getGithubCode = () => {
  const githubCode = new URLSearchParams(window.location.search).get("code");
  if (!githubCode) return undefined;

  const url = new URL(window.location.href);
  url.searchParams.delete("code");
  window.history.replaceState({}, document.title, url.toString());

  return githubCode;
};

export const callPrApi = (githubCode: string, files: Record<string, string>) =>
  tryFetch(
    () =>
      fetch("/api/ghpr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: githubCode, files }),
      }),
    (data: { pullRequest: string }) => ({ kind: "success", data: data.pullRequest }),
    (error: string) => ({ kind: "error", data: error }),
  ) satisfies Promise<{ kind: "error" | "success"; data: string }>;

/** Generate code for a pull request. Retuns a map of vertex definition path to vertex code, for only the changed vertices. */
export function generateCodeDiff(pg: PlangsGraph): Record<string, string> | undefined {
  try {
    const result: Record<string, string> = {};
    let hasChanges = false;

    // Iterate through all vertices of the edited graph.
    const editedPG = new PlangsGraph().loadJSON(localEditsData(pg));
    for (const [name, vertices] of Object.entries(editedPG.vertices)) {
      for (const vertex of vertices.values) {
        // Attempt to find the original vertex in the original graph, if it exists.
        const original = pg.vertices[name as TPlangsVertexName]?.get(vertex.key as any);
        const newCode = vertex.toCode();
        // If the vertex is new or has changed, add it to the result.
        if (!original || newCode !== original.toCode()) {
          hasChanges = true;
          result[vertex.tsName] = newCode;
        }
      }
    }

    return hasChanges ? result : undefined;
  } catch (e) {
    console.error("Error exporting code diff:", e);
  }
}
