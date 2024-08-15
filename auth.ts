import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import bcrypt from "bcryptjs";

type FirestoreUser = {
  email: string;
  password: string;
};

async function getUser(email: string): Promise<FirestoreUser | undefined> {
  try {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return doc.data() as FirestoreUser;
    }

    return undefined;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to authorize user");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("Received credentials:", credentials);
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (user) {
            const isPasswordValid = bcrypt.compareSync(
              password,
              user.password
            );
            if (isPasswordValid) {
              return user;
            }
          }
        }

        return null;
      },
    }),
  ],
});
