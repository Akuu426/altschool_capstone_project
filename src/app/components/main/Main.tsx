import React, { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";

const Main: React.FC = () => {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleShorten = async () => {
    // Logic to shorten the link
    // TODO: make the url shortening API to work
    setError(null);
    setShortenedLink(null);

    if (!link) {
      setError("URL is required");
      return;
    }

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: link }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortenedLink(data.shortUrl);
      } else {
        setError(data.error || "Failed to shorten URL");
      }
    } catch (error) {
      setError("Failed to shorten URL");
    }
  };
  // Example: Using a mock API to shorten the link
  // const response = await fetch('https://api.example.com/shorten', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ url: link }),
  // });
  // const data = await response.json();

  // Set the shortened link in the state
  // setLink(data.shortenedUrl);
  // Example: Uncomment this to use the mock API
  // setLink('https://example.com/shortened/link');
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-4">Shorten Your Loooong Links :)</h2>
      <p className="text-sm mr-4 my-4">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
        {/* Use this tool to shorten long URLs and share them easily. You can create a free account to get unlimited shortened links. */}
      </p>
      <div className="flex items-center justify-center w-full max-w-md mx-auto p-4">
      <div className="relative w-full flex items-center border-2 border-gray-700 rounded-full">
        <div>
          <span className="absolute left-3 w-5 h-5 text-gray-400 top-2.5"><LinkIcon  /></span>
        <input
          type="text"
          placeholder="Enter the link here"
          className="w-full pl-10 pr-32 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        /></div>
        <button
          className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleShorten}
        >
          Shorten Now!
        </button>
      </div>
    </div>
      {/* <div className="flex items-center border rounded-3xl relative">
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <LinkIcon className="w-5 h-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Enter the link here"
            className="p-2 pl-10 rounded-3xl bg-gray-700 w-full"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-600 hover:text-white focus:outline- absolute top-1/2 right-0 transform -translate-y-1/2"
          onClick={handleShorten}
        >
          Shorten Now!
        </button>
      </div> */}
      {shortenedLink && (
        <p className="mt-4">
          Shortened Link:{" "}
          <a
            href={shortenedLink}
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortenedLink}
          </a>
        </p>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <p className="mt-4">
        You can create <span className="font-bold">05</span> more links.
        Register now to enjoy unlimited usage.
      </p>
      {/* TODO: logic that shows a table list of shortened links with expiration dates,usage statistics and qr code.  */}
      
    </main>
  );
};

export default Main;
