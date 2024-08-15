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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white mt-16 pt-5 pb-96">
      <h2 className="text-4xl font-bold mb-4 mt-4">
        Shorten Your Loooong Links :)
      </h2>
      <p className="text-sm mr-4 my-4">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
        {/* Use this tool to shorten long URLs and share them easily. You can create a free account to get unlimited shortened links. */}
      </p>
      <div className="flex flex-col lg:flex-row lg:items-start bg--400">
        <Shorten addShortenedLink={addShortenedLink} />
        <div>
          <div className="ml-3 lg:ml-5 mb-5 lg:mt-20">
            <h2 className="mb-2 text-4xl">
              Shorten, Share and Track your Urls:
            </h2>
            <h3 className="mb-3">Create Shorter URLS with Linkly.</h3>
            <p>
              Want more out of your link(ly) shortener? Track and manage your
              customized links with our paid plans.
            </p>
            <div className="mt-3 p-3 w-full flex justify-between space-x-4">
              <button className="border border-gray-200 px-4 py-2 w-1/2">
                View Plans
              </button>
              <button className="border border-gray-200 px-4 py-2 w-1/2">
                <a href="/register">Create Free Account</a>
              </button>
            </div>
            <div className="mt-5">
              <p>Linkly plans include:</p>
              <div className="d-flex flex wrap w-[400px]">
                <div className="flex-grow-1">
                 <div className="flex-center py-1">
                  <i className="fa-solid fa-fw fa-chart-line"></i>
                  <span className="ml-3">Link Analytics</span>
                  </div> 
                  <div className="flex-center py-1">
                    <i className="fa-solid fa-fw fa-globe"></i>
                    <span className="ml-3">Fully Branded Domain</span>
                  </div>
                </div>
                <div className="flex-grow-1">
                 <div className="flex-center py-1">
                  <i className="fa-solid fa-fw fa-link"></i>
                  <span className="ml-3">Bulk Short URLS</span>
                  </div> 
                  <div className="flex-center py-1">
                    <i className="fa-solid fa-fw fa-share-nodes"></i>
                    <span className="ml-3">Link Management Features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4">
        You can create <span className="font-bold">05</span> more links.
        Register now to enjoy unlimited usage.
      </p>
    </main>
  );
};

export default Main;
