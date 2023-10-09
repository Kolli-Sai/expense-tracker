import { AuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { getNextAuthCredentials } from "./secrets";
export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: getNextAuthCredentials().githubClientId,
      clientSecret: getNextAuthCredentials().githubClientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user, session }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  secret: getNextAuthCredentials().nextAuthSecret,
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
};

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return {
    session,
  };
};
