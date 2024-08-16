"use client";

import React, { useId, useState } from "react";
import Head from "next/head";
import { auth, db } from "@/app/firebase";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {doc, setDoc } from "firebase/firestore";
import {useRouter} from "next/navigation";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const auth = getAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validate input
    if (!name || !lastName || !username || !email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    // Check if username is already taken
    // const existingUser = await auth.fetchUserByEmail(email);
    // if (existingUser) {
    //   alert("Email already in use. Please choose a different one.");
    //   return;
    // }

    // Create a new user with email and password
    // and handle any errors that occur during the process
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        name: name,
        lastName: lastName,
        username: username,
        email: email,
        uid: user.uid,
      });
      await sendEmailVerification(user);
      router.push("/userdashboard");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <Head>
        <title>Register - Linkly</title>
        <meta name="description" content="Register for a Linkly account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-10 mt-10">
        <h1 className="text-4xl text-gray-300 font-bold mb-6">Register</h1>
        <form
          onSubmit={handleRegister}
          className="bg-gray-900 p-6 rounded shadow-md w-full max-w-md"
        >
          <div className="mb-4">
            <label
              className="block text-left mb-2 text-gray-400"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-700 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left mb-2 text-gray-400"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full px-4 py-2 rounded bg-gray-700"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left mb-2 text-gray-400"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 rounded bg-gray-700"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left mb-2 text-gray-400"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left mb-2 text-gray-400"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            By registering, you agree to our Terms of Service and Privacy
            Policy. <a href="#">Learn more</a>
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-4"
            disabled={!name || !lastName || !username || !email || !password}
          >
            Register
          </button>
          <p className="mt-4">
            Already have an account? <a href="/login">Login</a>
          </p>
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Copyright © {new Date().getFullYear()} Linkly. All rights
              reserved.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegisterForm;
