"use client";

import React, { useState, Fragment } from "react";
import Link from "next/link";
import { ChevronDownIcon, BellIcon } from "@heroicons/react/24/outline";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

const UserDashboardHeader: React.FC<{ userName: string }> = ({ userName }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // Redirect to login page after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-gray-800 py-6 fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <h1 className="text-xl font-bold">
          <Link href="/">Linkly</Link>
        </h1>
        <div className="flex items-center space-x-6">
          {/* Dropdown Menu for User Profile and Logout */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-300 hover:text-white focus:outline-none"
            >
              <span>{userName}</span>
              <ChevronDownIcon className="ml-1 w-5 h-5 text-gray-300 hover:text-white" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Notification Icon */}
          <button className="relative">
            <BellIcon className="w-6 h-6 text-gray-300 hover:text-white" />
            {/* <span className="absolute right-0 top-0 w-3 h-3 bg-red-600 rounded-full" /> */}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default UserDashboardHeader;
