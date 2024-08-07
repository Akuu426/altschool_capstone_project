"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    // Placeholder for authentication logic
    // You can integrate this with your authentication API

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/userdashboard");
      //   alert("User signed in successfully!");
    } catch (error: any) {
      console.error("Error signing in:", error.message);

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
              placeholder="Email"
              className="p-2 rounded bg-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
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
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center space-x-2 w-full"
              //   onClick={handleLogin}
            >
              <span>Login</span>
              <ArrowRightIcon className="w-5 h-5 text-gray-50" />
            </button>
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
