import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        try {
          // Make a request to your backend login endpoint
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          console.log("Backend response:", data); // DEBUG
          if (data.success && data.data.token) {
            // The user object we return here will be encoded in the JWT
            const user = {
              id: data.data.id,
              email: data.data.email,
              jwt: data.data.token,
            };
            console.log("Authorize successful, returning user:", user); // DEBUG
            return user;
          }
          return null;
        } catch (e: any) {
          // Log the error and return null
          console.error("Login Error:", e.response?.data || e.message);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // This callback is called whenever a JWT is created or updated.
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.jwt = (user as any).jwt;
      }
      return token;
    },
    // This callback is called whenever a session is checked.
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        (session as any).jwt = token.jwt;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };