'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    // Placeholder for authentication logic
    // You can integrate this with your authentication API
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful!');
    } else {
      setError('Invalid email or password');
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
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            Don&apos;t have an account? <Link href="/register">Register Now</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
