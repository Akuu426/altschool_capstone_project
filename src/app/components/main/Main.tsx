import React, { useState } from "react";
import { LinkIcon, ClipboardIcon } from "@heroicons/react/24/outline";
// import { CopyIcon } from "@heroicons/react/24/outline"

const Main: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortenedLink, setShortenedLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleShorten = async () => {
    setError(null);
    setShortenedLink(null);

    if (!url) {
      setError("URL is required");
      return;
    }

    if (!isValidUrl(url)) {
      setError("Invalid URL");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
      );

      if (!response.ok) {
        throw new Error(`Failed to shorten url: ${response.statusText}`);
      }

      const shortUrl = await response.text();

      setShortenedLink(shortUrl);
      console.log(`Shortened URL: ${shortUrl}`);
    } catch (error) {
      setError("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (shortenedLink) {
      navigator.clipboard.writeText(shortenedLink);
    }
  };

  //    const handleShorten = async () => {
  //   setError(null);
  //   setShortenedLink(null);

  //   if (!url) {
  //     setError("URL is required");
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://tinyurl.com/api-create.php', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({url:encodeURIComponent(url)}),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Failed to shorten url: ${response.statusText}`);
  //     }

  //     const { shortUrl } = await response.json();

  //     setShortenedLink(shortUrl);
  //   } catch (error) {
  //     setError("Failed to shorten URL");
  //   }
  // };

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
            <span className="absolute left-3 w-5 h-5 text-gray-400 top-2.5">
              <LinkIcon />
            </span>
            <input
              type="text"
              placeholder="Enter the link here"
              className="w-full pl-10 pr-32 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleShorten}
            disabled={loading}
          >
            {loading ? "Shortening..." : "Shorten Now!"}
          </button>
        </div>
      </div>
      {shortenedLink && (
        <div className="flex items-center mt-2 text-blue-500">
          <p className="mr-2">
            Shortened URL:{" "}
            <a href={shortenedLink} target="_blank" rel="noopener noreferrer">
              {shortenedLink}
            </a>
          </p>
          <ClipboardIcon
            className="w-5 h-5 cursor-pointer"
            onClick={handleCopy}
          />
        </div>
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
