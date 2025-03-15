import { authHandler } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authHandler)

export { handler as GET, handler as POST}