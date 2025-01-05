import * as prettier from "prettier";

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
    // Exchange code for access token.
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code }),
    });
    const data = (await response.json()) as { access_token: string };
    const pullRequest = await performGithubActions(data.access_token, files);
    return new Response(JSON.stringify({ pullRequest }), { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : `An error occurred: ${error}`;
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
  const userData = (await (await githubAPI(token, "/user")).json()) as { login: string };

  // Check if fork exists.
  const getRepo = async () => (await githubAPI(token, `/repos/${userData.login}/plangs2`)).ok;

  // Create fork if it doesn't exist.
  if (!(await getRepo())) {
    await githubAPI(token, "/repos/emmanueloga/plangs2/forks", { method: "POST" });
    poll(getRepo); // Wait until the fork is created.
  }

  // Get the SHA of the latest commit.
  const branch = "main";
  const refData = (await (await githubAPI(token, `/repos/${userData.login}/plangs2/git/refs/heads/${branch}`)).json()) as {
    object: { sha: string };
  };

  // Create new branch.
  const branchName = `update-${Date.now()}`;
  await githubAPI(token, `/repos/${userData.login}/plangs2/git/refs`, {
    method: "POST",
    body: JSON.stringify({ ref: `refs/heads/${branchName}`, sha: refData.object.sha }),
  });

  // Create or update files.
  for (const [vertexPath, content] of Object.entries(files)) {
    const path = `packages/definitions/src/definitions/${vertexPath}`;
    const base64content = btoa(await prettier.format(content, { parser: "typescript" }));

    // Try to get existing file.
    const req = await githubAPI(token, `/repos/${userData.login}/plangs2/contents/${path}?ref=${branchName}`);
    const notFound = !req.ok;
    const existingFile = notFound ? { sha: undefined } : ((await req.json()) as { sha: string });

    const updateData = {
      message: notFound ? `Create ${path}` : `Update ${path}`,
      content: base64content,
      branch: branchName,
      sha: notFound ? undefined : existingFile.sha,
    };

    // Create or update file.
    await githubAPI(token, `/repos/${userData.login}/plangs2/contents/${path}`, { method: "PUT", body: JSON.stringify(updateData) });
  }

  // Create pull request
  const prReq = await githubAPI(token, "/repos/emmanueloga/plangs2/pulls", {
    method: "POST",
    body: JSON.stringify({
      title: "Update definitions",
      head: `${userData.login}:${branchName}`,
      base: branch,
      body: `Export of ${userData.login}'s local definitions updates.`,
    }),
  });

  if (prReq.ok) {
    const prData = (await prReq.json()) as { html_url: string };
    return prData.html_url;
  }

  console.error("Error creating PR", prReq);
  return undefined;
}

/** Helper function for GitHub API calls. */
async function githubAPI(accessToken: string, path: `/${string}`, options: RequestInit = {}): Promise<Response> {
  const baseURL = "https://api.github.com";
  return await fetch(`${baseURL}${path}`, {
    ...options,
    headers: { Accept: "application/vnd.github.v3+json", Authorization: `Bearer ${accessToken}`, ...options.headers },
  });
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
