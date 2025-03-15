import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authHandler : NextAuthOptions = {
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID as string,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET as string,
            allowDangerousEmailAccountLinking: true,
            authorization : {
                params : {
                    prompt : "consent",
                    access_type : "offline",
                    response_type : "code"
                }
            }
        })
    ],
    callbacks :{
        async jwt({token, user, account} ) {
            if(account && account.provider === "google"){
                token.accessToken = account.access_token
                token.email = user.email
            }
            return token
        },
        
        async session({session, token}){
            session.user!.email = token.email
            return session
        }

    },
    pages : {
        signIn : "/signin"
    },
    secret : process.env.AUTH_SECRET
}