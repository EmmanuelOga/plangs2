import { createOAuthAppAuth } from "@octokit/auth-oauth-app";
import { Octokit } from "octokit";

interface Env {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
}

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;

  // Handle CORS preflight request.
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

  try {
    return await handleRequest(request, env);
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ success: false, error: `${error}` }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
}

async function handleRequest(request: Request, env: Env): Promise<Response> {
  const { code, files } = (await request.json()) as {
    code: string;
    files: Record<string, string>;
  };

  if (!code) return new Response("GitHub code is required", { status: 400 });

  // Initialize Octokit with OAuth App credentials.
  const octokit = new Octokit({ authStrategy: createOAuthAppAuth, auth: { clientId: env.GITHUB_CLIENT_ID, clientSecret: env.GITHUB_CLIENT_SECRET } });

  // Exchange the code for an access token.
  const { authentication } = (await octokit.auth({ type: "oauth-user", code })) as { authentication: { token: string } };

  // Create a new Octokit instance with the user token.
  const userOctokit = new Octokit({ auth: authentication.token });

  // Get authenticated user.
  const { data: userData } = await userOctokit.rest.users.getAuthenticated();

  // Check if fork exists and create if it doesn't.
  try {
    await userOctokit.rest.repos.get({ owner: userData.login, repo: "plangs2" });
  } catch (error) {
    if (error instanceof Error && "status" in error && error.status === 404) {
      // Create fork if it doesn't exist.
      await userOctokit.rest.repos.createFork({ owner: "emmanueloga", repo: "plangs2" });
      // Wait for fork to be ready.
      await new Promise(resolve => setTimeout(resolve, 5000));
    } else {
      throw error;
    }
  }

  // Get default branch.
  const { data: repoData } = await userOctokit.rest.repos.get({ owner: userData.login, repo: "plangs2" });

  const defaultBranch = repoData.default_branch;

  // Get the SHA of the latest commit on the default branch
  const { data: refData } = await userOctokit.rest.git.getRef({ owner: userData.login, repo: "plangs2", ref: `heads/${defaultBranch}` });

  // Create new branch
  const branchName = `update-${Date.now()}`;
  await userOctokit.rest.git.createRef({ owner: userData.login, repo: "plangs2", ref: `refs/heads/${branchName}`, sha: refData.object.sha });
  const contentOptions = {
    branch: branchName,
    owner: userData.login,
    repo: "plangs2",
  };

  // Create or update files in the new branch
  for (const [path, content] of Object.entries(files)) {
    const base64content = btoa(content);
    try {
      // Try to get existing file to get its SHA
      const { data: existingFile } = await userOctokit.rest.repos.getContent({ owner: userData.login, repo: "plangs2", path, ref: branchName });
      if (!Array.isArray(existingFile) && existingFile.type === "file") {
        // Update existing file
        await userOctokit.rest.repos.createOrUpdateFileContents({
          ...contentOptions,
          content: base64content,
          message: `Update ${path}`,
          path,
          sha: existingFile.sha,
        });
      }
    } catch (error) {
      if (error instanceof Error && "status" in error && error.status === 404) {
        // Create new file.
        await userOctokit.rest.repos.createOrUpdateFileContents({ ...contentOptions, content: base64content, message: `Create ${path}`, path });
      } else {
        throw error;
      }
    }
  }

  // Create pull request.
  const { data: prData } = await userOctokit.rest.pulls.create({
    owner: "emmanueloga",
    repo: "plangs2",
    title: "Update files",
    head: `${userData.login}:${branchName}`,
    base: defaultBranch,
    body: "Automated update of files",
  });

  return new Response(JSON.stringify({ success: true, pullRequest: prData.html_url }), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}
