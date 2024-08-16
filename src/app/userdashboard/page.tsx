"use client";

import React, { useState, useEffect } from "react";
import Shorten from "../components/shorten/shorten";
import QRCode from "qrcode.react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Footer from "../components/footer/page";
import UserDashboardHeader from "../components/userdashboardheader/header";
import { Timestamp } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase";
import { handleEdit, handleDelete } from "@/app/lib/linkActions";

interface ShortenedLink {
  
  shortLink: string;
  originalLink: string;
  qrCode: string;
  clicks: number;
  status: string;
  date: string;
}

interface ShortenedLinkWithId extends ShortenedLink {
  id: string;
}

const UserDashboard = () => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLinkWithId[]>(
    []
  );
  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Set userName and userId
        setUserName(user.displayName || user.email);
        setUserId(user.uid);

        // Fetch links specific to the logged-in user
        fetchLinks(user.uid);
      } else {
        // Handle user not being logged in
        setUserName(null);
        setUserId(null);
        setShortenedLinks([]); // Clear links if user is not logged in
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const fetchLinks = async (userId: string) => {
  try {
    // query for authenticated users links
    const userLinksCollectionRef = collection(db, "users", userId, "links");
    const querySnapshot = await getDocs(userLinksCollectionRef);
    const linksData = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        shortLink: data.shortLink,
        originalLink: data.originalLink,
        qrCode: data.qrCode,
        clicks: data.clicks,
        status: data.status,
        date: data.date instanceof Timestamp ? data.date.toDate().toLocaleString() : data.date,
      } as ShortenedLinkWithId;
    });
    setShortenedLinks(linksData);
  } catch (error) {
    console.error("Error fetching links: ", error);
  }
};

  if (userName === null) {
    return <p>Loading...</p>; // loading state while fetching the username
  }

  // Handler to add a new shortened link to the list
  const addShortenedLink = async (newLink: ShortenedLink) => {
    if (!userId) return;

    const userLinksCollectionRef = collection(db, "users", userId, "links");
    const docRef = await addDoc(userLinksCollectionRef, newLink);
    setShortenedLinks((prevLinks) => [
      ...prevLinks,
      { ...newLink, id: docRef.id },
    ]);
  };

  // Handler to update clicking a link
  const handleLinkClick = async (index: number) => {
    const link = shortenedLinks[index];
    const linkDocRef = doc(db, "users", userId!, "links", link.id!);
    await updateDoc(linkDocRef, { clicks: link.clicks + 1 });
    setShortenedLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, clicks: link.clicks + 1 } : link
      )
    );
  };

  // Handler to delete a link
  // const handleDelete = async (index: number) => {
  //   const link = shortenedLinks[index];
  //   const linkDocRef = doc(db, "users", userId!, "links", link.id!);
  //   await deleteDoc(linkDocRef);
  //   setShortenedLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  // };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <UserDashboardHeader userName={userName} />

      {/* Main Content */}
      <main className="flex flex-col mt-16 pt-5">
        <Shorten addShortenedLink={addShortenedLink} />

        {/* Sidebar */}
        <aside className="bg-gray-800 m-5 h-10 pt-2 pl-20">
          <div className="flex space-x-10 h-5">
            <button className="w-full text-left">History</button>
            <button className="w-full text-left">Statistics</button>
            <button className="w-full text-left">Click Stream</button>
            {/* <button className="w-full text-left">Settings</button> */}
          </div>
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
                    <button className="bg-gray-600 hover:bg-gray-700 p-2 rounded"
                    onClick={() => handleEdit({ link, userId, index, shortenedLinks, setShortenedLinks })}
                    >
                      <PencilIcon className="w-5 h-5 cursor-pointer text-white hover:text-white-700" />
                    </button>
                    <button
                      className="bg-gray-600 hover:bg-gray-700 p-2 rounded"
                      onClick={() => handleDelete({ link, userId, index, shortenedLinks, setShortenedLinks })}
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

      <Footer />
    </div>
  );
};

export default UserDashboard;
