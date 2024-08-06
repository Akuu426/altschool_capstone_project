import React, { useState } from "react";
import Shorten, { ShortenProps } from "../shorten/shorten";


type ShortenedLink = {
  shortLink: string;
  originalLink: string;
  qrCode: string;
  // clicks: number;
  // status: string;
  // date: string;
};
const Main: React.FC = () => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);

  const addShortenedLink = (shortenedLink: ShortenedLink) => {
    setShortenedLinks([...shortenedLinks, shortenedLink]);
  };
  // code for the customize input field to allow customization

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-4">Shorten Your Loooong Links :)</h2>
      <p className="text-sm mr-4 my-4">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
        {/* Use this tool to shorten long URLs and share them easily. You can create a free account to get unlimited shortened links. */}
      </p>
      <Shorten addShortenedLink={addShortenedLink} />
      <p className="mt-4">
        You can create <span className="font-bold">05</span> more links.
        Register now to enjoy unlimited usage.
      </p>
    </main>
  );
};

export default Main;
