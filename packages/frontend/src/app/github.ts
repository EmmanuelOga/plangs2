const GITHUB_CLIENT_ID = "Ov23li7sluQbapgJCEn8";

export const initiateGitHubAuth = (redirectUri: string) =>
  (window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=repo`);

// Check if the user is coming from GitHub OAuth.
export const isGithubRedirect = () =>
  document.referrer && new URL(document.referrer).hostname === "github.com" && window.location.search.includes("code=");

// Invoke API to create a pull request.
export async function handleGitHubCallback(githubCode: string) {
  try {
    const files = { "README.md": "Testing, 1, 2, 3.", "file2.txt": "content2" };

    const response = await fetch("/api/githubapi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: githubCode, files }),
    });

    const data = await response.json();
    if (data.success) {
      console.log("Pull request created:", data.pullRequest);
      // Redirect to the pull request or show success message.
      window.location.href = data.pullRequest;
    } else {
      console.error("Error:", data.error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
