import * as prettier from "prettier";
import * as estreePlugin from "prettier/plugins/estree";
import * as tsPlugin from "prettier/plugins/typescript";

interface Env {
  ASSETS: Fetcher;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
}

const CORS_PREFLIGHT = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" };

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/ghpr") {
      if (request.method === "OPTIONS") return new Response(null, { headers: CORS_PREFLIGHT });
      if (request.method !== "POST") return new Response("Method not allowed.", { status: 405 });

      const { code, files } = (await request.json()) as { code: string; files: Record<string, string> };

      if (!code) return new Response("GitHub code is required.", { status: 400 });
      if (!files) return new Response("Files are required.", { status: 400 });

      return githubAPIHandler(env, code, files);
    }

    // If not an API request, serve the static assets.
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

////////////////////////////////////////////////////////////////////////////////
// Github API handler.
////////////////////////////////////////////////////////////////////////////////

async function githubAPIHandler(env: Env, code: string, files: Record<string, string>): Promise<Response> {
  try {
    const getAccessToken = async () => {
      const options = {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code }),
      };
      const res = await fetch("https://github.com/login/oauth/access_token", options);
      if (res.ok) {
        const data = (await res.json()) as { access_token: string };
        return data.access_token;
      }
      console.error("Failed to get access token", res.status, res.statusText, await res.text());
    };

    // Exchange code for access token.
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return new Response(JSON.stringify({ error: "Failed to get access token." }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    const pullRequest = await performGithubActions(accessToken, files);
    return new Response(JSON.stringify({ pullRequest }), { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : `An error occurred: ${error}`;
    console.error("githubAPIHandler:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
}

////////////////////////////////////////////////////////////////////////////////
// Github API helper functions
////////////////////////////////////////////////////////////////////////////////

/**
 * Requires OAUTH access token with `public_repo` scope.
 * 1) Forks the `plangs2` repository if it doesn't exist.
 * 2) Creates a new branch.
 * 3) Creates or updates files in the branch.
 * 4) Creates a pull request and returns the URL.
 */
async function performGithubActions(token: string, files: Record<string, string>): Promise<string | undefined> {
  // Get user login name.
  const getUserData = async () => {
    const res = await githubAPI(token, "/user");
    if (res?.ok) return (await res.json()) as { login: string };
  };
  const userData = await getUserData();
  const login = userData?.login;
  if (!login) return undefined;

  // Create a fork if the repository doesn't exist.
  const getRepo = async () => (await githubAPI(token, `/repos/${login}/plangs2`))?.ok ?? false;
  if (!(await getRepo())) {
    await githubAPI(token, "/repos/emmanueloga/plangs2/forks", { method: "POST" }); // Create fork if it doesn't exist.
    poll(getRepo); // Wait until the fork is created.
  }

  // Get the SHA of the latest commit.
  const branch = "main";
  const getRefData = async () => {
    const res = await githubAPI(token, `/repos/${login}/plangs2/git/refs/heads/${branch}`);
    if (res?.ok) return (await res.json()) as { object: { sha: string } };
  };
  const refData = await getRefData();
  if (!refData) return undefined;

  // Create new branch.
  const branchName = `update-${Date.now()}`;
  const res = await githubAPI(token, `/repos/${login}/plangs2/git/refs`, {
    method: "POST",
    body: JSON.stringify({ ref: `refs/heads/${branchName}`, sha: refData.object.sha }),
  });
  if (!res?.ok) return undefined;

  // Create or update files.
  for (const [vertexPath, content] of Object.entries(files)) {
    const path = `packages/definitions/src/definitions/${vertexPath}`;
    let formatted = content;
    try {
      formatted = await prettier.format(content, { parser: "typescript", plugins: [tsPlugin, estreePlugin as any] });
    } catch (error) {
      console.error(`Error formatting ${path}:`, error);
    }
    const base64content = btoa(formatted);

    // Try to get existing file.
    const res = await githubAPI(token, `/repos/${login}/plangs2/contents/${path}?ref=${branchName}`);
    const notFound = !res?.ok;
    const existingFile = notFound ? { sha: undefined } : ((await res.json()) as { sha: string });

    const updateData = {
      message: notFound ? `Create ${path}` : `Update ${path}`,
      content: base64content,
      branch: branchName,
      sha: notFound ? undefined : existingFile.sha,
    };

    // Create or update file.
    const res2 = await githubAPI(token, `/repos/${login}/plangs2/contents/${path}`, { method: "PUT", body: JSON.stringify(updateData) });
    if (!res2?.ok) console.error(`Error ${notFound ? "creating" : "updating"} ${path}`);
  }

  // Create pull request
  const prRes = await githubAPI(token, "/repos/emmanueloga/plangs2/pulls", {
    method: "POST",
    body: JSON.stringify({
      title: "Update definitions",
      head: `${login}:${branchName}`,
      base: branch,
      body: `Export of ${login}'s local definitions updates.`,
    }),
  });

  if (prRes?.ok) {
    const prData = (await prRes.json()) as { html_url: string };
    return prData.html_url;
  }

  console.error("Error creating PR", prRes);
}

/** Helper function for GitHub API calls. */
async function githubAPI(accessToken: string, path: `/${string}`, options: RequestInit = {}): Promise<Response | undefined> {
  try {
    const baseURL = "https://api.github.com";
    const fullURL = `${baseURL}${path}`;
    const fullOptions = {
      ...options,
      headers: {
        ...options.headers,
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "Plangs (Cloudflare Worker; +https://plangs.page)",
      },
    };
    const res = await fetch(fullURL, fullOptions);
    if (res.ok) return res;
    console.info(res.status, res.statusText, await res.text());
  } catch (error) {
    console.log("Error in githubAPI", error);
  }
}

/** Simple poller function, repeatedly calls the checkFn until it returns true (or throws an Error). */
async function poll<T>(
  checkFn: () => Promise<T | false | null | undefined>,
  { timeout = 15000, backoff = { initial: 1000, max: 5000, factor: 1.5 } } = {},
): Promise<T> {
  const start = Date.now();
  let interval = backoff.initial;
  while (Date.now() - start < timeout) {
    try {
      const result = await checkFn();
      if (result) return result;
    } catch (error) {
      if (Date.now() - start + interval >= timeout) throw error;
    }
    await new Promise(resolve => setTimeout(resolve, interval));
    interval = Math.min(interval * backoff.factor, backoff.max);
  }
  throw new Error("Polling timed out");
}
