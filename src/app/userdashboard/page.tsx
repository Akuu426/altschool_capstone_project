"use client";

import React, { useState } from "react";
import Link from "next/link";
import Shorten from "../components/shorten/shorten";
import QRCode from "qrcode.react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Footer from "../components/footer/page";

interface ShortenedLink {
  shortLink: string;
  originalLink: string;
  qrCode: string;
  clicks: number;
  status: string;
  date: string;
}

const UserDashboard = () => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);

  // Handler to add a new shortened link to the list
  const addShortenedLink = (newLink: ShortenedLink) => {
    setShortenedLinks((prevLinks) => [...prevLinks, newLink]);
  };

  // Handler to simulate clicking a link
  const handleLinkClick = (index: number) => {
    setShortenedLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, clicks: link.clicks + 1 } : link
      )
    );
  };

  // Handler to delete a link
  const handleDelete = (index: number) => {
    setShortenedLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <h1 className="text-xl font-bold">
            <Link href="/">Linkly</Link>
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, Mohammed</span>
            <select>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="all">All</option>
            </select>
            <button className="relative">
              <span className="absolute right-0 top-0 w-3 h-3 bg-red-600 rounded-full" />
              <span className="material-icons">notifications</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col">
        <Shorten addShortenedLink={addShortenedLink} />

        {/* Sidebar */}
        <aside className="bg-gray-800 m-5 h-10 pt-2 pl-20">
          <nav className="flex space-x-10 h-5">
            <button className="w-full text-left">History</button>
            <button className="w-full text-left">Statistics</button>
            <button className="w-full text-left">Click Stream</button>
            <button className="w-full text-left">Settings</button>
          </nav>
        </aside>

        {/* Links Table */}
        <section className="px-4 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">
            History ({shortenedLinks.length})
          </h2>
          <table className="min-w-full bg-gray-800 rounded-lg table-auto mb-10 mr-5">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Short Link</th>
                <th className="py-2 px-4 text-left">Original Link</th>
                <th className="py-2 px-4">QR Code</th>
                <th className="py-2 px-4">Clicks</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {shortenedLinks.map((link, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="py-2 px-4">
                    <a
                      href={link.shortLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleLinkClick(index)}
                      className="text-blue-500 underline"
                    >
                      {link.shortLink}
                    </a>
                  </td>
                  <td className="py-2 px-4">{link.originalLink}</td>
                  <td className="py-2 px-4">
                    <QRCode value={link.shortLink} size={50} />
                  </td>
                  <td className="py-2 px-4">{link.clicks}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        link.status === "Active"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {link.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{link.date}</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <button className="bg-gray-600 hover:bg-gray-700 p-2 rounded">
                      <PencilIcon className="w-5 h-5 cursor-pointer text-white hover:text-white-700" />
                    </button>
                    <button
                      className="bg-gray-600 hover:bg-gray-700 p-2 rounded"
                      onClick={() => handleDelete(index)}
                    >
                      <TrashIcon className="w-5 h-5 cursor-pointer text-white hover:text-red-700" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default UserDashboard;
