import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                password: { label: "password", type: "password" } 
            },
            async authorize(credentials) {
                if(!credentials.password) {
                    throw new Error("Please enter a password")
                }

                const correctPassword = process.env.PASSWORD
                if(correctPassword !== credentials.password) {
                    throw new Error("Incorrect Password")
                }
                return NextResponse.json({ message: "Success" })
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === "development"
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }