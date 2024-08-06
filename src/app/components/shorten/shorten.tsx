import React, { useState } from "react";
import { LinkIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import QRCode from "qrcode.react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";

export interface ShortenProps {
  addShortenedLink: (link: {
    shortLink: string;
    originalLink: string;
    qrCode: string;
    clicks: number;
    status: string;
    date: string;
  }) => void;
}

const Shorten: React.FC<ShortenProps> = ({addShortenedLink}) => {
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

      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      // Call the handler to add a new link
      addShortenedLink({
        shortLink: shortUrl,
        originalLink: url,
        qrCode: "QR_CODE_HERE", 
        clicks: 0,
        status: "Active",
        date: formattedDate,
      });

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

  return (
    <main className="flex flex-col items-center justify-center text-white bg-black m-10 rounded-lg">
      <div className="w-[800px] flex flex-col items-center border-2 border-gray-700 rounded-lg space-y-4 p-10">
        {/* Input for entering the link */}
        <label htmlFor="long-url" className="relative w-full">
          {" "}
          Shorten long URL
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-0 text-gray-400">
            <LinkIcon />
          </span>
          <input
            type="text"
            id="long-url"
            placeholder="Enter the link here"
            className="w-[720px] h-[50px] pl-10 ml-0 py-2 bg-gray-800 rounded-xl text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 m-3"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ overflow: "auto", whiteSpace: "nowrap" }}
          />
        </label>
        {/* Input to customize the link */}
        <label className="relative w-full" htmlFor="custom-alias">
          {/* <WrenchScrewdriverIcon className="w-5 h-5 mr-2 text-blue-500" /> */}
          Customize your link
          <input
            type="text"
            id="custom-alias"
            placeholder="Enter a custom domain (optional)"
            className="w-[720px] py-2 pl-4 ml-0 h-[50px] bg-gray-800 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 m-3"
          />
        </label>
        {/* Button to shorten link */}
        <button
          className="w-full h-[50px] bg-blue-500 text-white rounded-xl py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleShorten}
          disabled={loading}
        >
          {loading ? "Shortening..." : "Shorten Now!"}
        </button>
      </div>

      {shortenedLink && (
        <div className="flex items-center mt-4 space-y-2 gap-5">
          <div className="flex items-center space-x-2">
            <p className="text-blue-500">Shortened URL:</p>
            <a href={shortenedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {shortenedLink}
            </a>
            <ClipboardIcon className="w-5 h-5 cursor-pointer text-blue-500" onClick={handleCopy} />
          </div>

          {/* QR Code */}
          <QRCode value={shortenedLink} size={50} className="mt-4" />

          {/* Social Media Share Buttons */}
          <div className="flex space-x-2 mt-4">
            <FacebookShareButton url={shortenedLink} title="Check out this link!">
              <button className="bg-blue-600 text-white p-2 rounded-lg">Facebook</button>
            </FacebookShareButton>
            <TwitterShareButton url={shortenedLink} title="Check out this link!">
              <button className="bg-blue-400 text-white p-2 rounded-lg">Twitter</button>
            </TwitterShareButton>
            <LinkedinShareButton url={shortenedLink}>
              <button className="bg-blue-700 text-white p-2 rounded-lg">LinkedIn</button>
            </LinkedinShareButton>
          </div>
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}
    </main>
  );
};

export default Shorten;
