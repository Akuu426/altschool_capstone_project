"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, db } from "@/app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useActionState } from "@/app/lib/customHooks";
import { authenticate } from "@/app/lib/actions";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  // const [errorMessage, formAction, isPending] = useActionState(
  //   authenticate,
  //   undefined,
  // );

  const router = useRouter();

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   // Debugging: Log the form data to see if it's being captured correctly
  // console.log('Form Data:', Object.fromEntries(formData.entries()));

  //   try {
  //     const errorMessage = await authenticate(undefined, formData);

  //     if (!errorMessage) {
  //       // If authentication is successful
  //       router.push("/userdashboard");
  //     } else {
  //       // If authentication fails, show an error message
  //       setError(errorMessage);
  //     }
  //   } catch (error) {
  //     // Handle unexpected errors
  //     setError('Failed to authenticate');
  //   }
  // };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    console.log("form submitted");

    // Authentication logic

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const { username } = userDoc.data();
        console.log(`Welcome, ${username}!`);
        // router.push("/userdashboard");
      }
      router.push("/userdashboard");
      console.log("User signed in successfully!");
    } catch (error: any) {
      setError(error.message);

      if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("Email not found. Please check and try again.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email format. Please check and try again.");
      } else {
        setError("Error signing in. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <Head>
        <title>Login - Linkly</title>
        <meta name="description" content="Login to Linkly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6">Login</h1>
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 rounded bg-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 rounded bg-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-center justify-between">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label className="ml-2 text-gray-400" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center space-x-2 w-full"
              // aria-disabled={isPending}
            >
              <span>Login</span>
              <ArrowRightIcon className="w-5 h-5 text-gray-50" />
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {/* {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )} */}
          </form>
          <p className="mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register">Register Now</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;
