const GITHUB_SCOPE = "public_repo";
const GITHUB_CLIENT_ID = "Ov23li7sluQbapgJCEn8";

export const initiateGitHubAuth = (redirectUri: string) =>
  (window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${GITHUB_SCOPE}`);

// Invoke API to create a pull request.
export async function handleGitHubCallback(githubCode: string) {
  try {
    const response = await fetch("/githubapi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: githubCode }),
    });

    const responseData = await response.json();
    console.log("RESULT", responseData);

    const { access_token } = responseData;
    if (access_token) {
      const githubApi = await fetch("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${access_token}`, Accept: "application/vnd.github.v3+json" },
      });
      const userData = await githubApi.json();
      console.log("Authenticated as:", userData.login);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
