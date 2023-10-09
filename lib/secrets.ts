


export const getNextAuthCredentials = () => {
  const githubClientId = process.env.GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  const nextAuthSecret = process.env.NEXTAUTH_SECRET;

  if (!githubClientId) {
    throw new Error("Missing GITHUB_CLIENT_ID");
  }
  if (!githubClientSecret) {
    throw new Error("Missing GITHUB_CLIENT_SECRET");
  }
  if (!nextAuthSecret) {
    throw new Error("Missing NEXTAUTH_SECRET");
  }

  return {
    githubClientId,
    githubClientSecret,
    nextAuthSecret,
  }
}