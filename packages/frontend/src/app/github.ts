const GITHUB_SCOPE = "public_repo";
const GITHUB_CLIENT_ID = "Ov23li7sluQbapgJCEn8";

export const initiateGitHubAuth = (redirectUri: string) =>
  (window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${GITHUB_SCOPE}`);

export async function invokePullRequestAPI(githubCode: string, files: Record<string, string>): Promise<void> {
  try {
    const response = await fetch("/api/ghpr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: githubCode, files }),
    });
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
}
