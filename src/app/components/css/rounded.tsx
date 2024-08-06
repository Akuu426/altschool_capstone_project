// import React from 'react';

// const RoundedDivs: React.FC = () => {
//   return (
//     <div className="space-y-4">
//       <div className="rounded bg-blue-500 p-4 text-white">
//         This div has a default border radius.
//       </div>
//       <div className="rounded-sm bg-blue-500 p-4 text-white">
//         This div has a small border radius.
//       </div>
//       <div className="rounded-md bg-blue-500 p-4 text-white">
//         This div has a medium border radius.
//       </div>
//       <div className="rounded-lg bg-blue-500 p-4 text-white">
//         This div has a large border radius.
//       </div>
//       <div className="rounded-xl bg-blue-500 p-4 text-white">
//         This div has an extra large border radius.
//       </div>
//       <div className="rounded-2xl bg-blue-500 p-4 text-white">
//         This div has a 2xl border radius.
//       </div>
//       <div className="rounded-3xl bg-blue-500 p-4 text-white">
//         This div has a 3xl border radius.
//       </div>
//       <div className="rounded-full bg-blue-500 p-4 text-white w-32 h-32 flex items-center justify-center">
//         This div is fully rounded.
//       </div>
//     </div>
//   );
// };

// export default RoundedDivs;

// import React from "react";

// const InputWithButton: React.FC = () => {
//   return (
//     <>
//       <div className="flex items-center justify-center w-full max-w-md mx-auto p-4 bg-white">
//         <div className="relative w-full flex flex-col items-center border-2 border-gray-700 rounded-lg space-y-4 bg-black">
//           {/* Input for entering the link */}
//           <label className="relative w-full">
//             {" "}
//             Shorten long url
//             <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
//               {/* <LinkIcon /> */}
//             </span>
//             <input
//               type="text"
//               placeholder="Enter the link here"
//               className="w-full pl-10 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//           {/* Input to customize the link */}
//           <label className="relative w-full">
//             {/* <WrenchScrewdriverIcon className="w-5 h-5 mr-2 text-blue-500" /> */}
//             Customize your link
//             <input
//               type="text"
//               placeholder="Enter a custom domain (optional)"
//               className="w-full py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//           {/* Button to shorten link */}
//           <button className="w-full bg-blue-500 text-white rounded-full py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             Shorten Link
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InputWithButton;


// import React, { useState } from 'react';

// // Example data
// const initialLinks = [
//   {
//     shortLink: 'https://linkly.com/Bn41aCOInxj',
//     originalLink: 'https://www.twitter.com/tweets/8erelCoihu',
//     qrCode: 'QR1',
//     clicks: 1313,
//     status: 'Active',
//     date: 'Oct-10-2023',
//   },
//   {
//     shortLink: 'https://linkly.com/Bn41aCOInxj',
//     originalLink: 'https://www.youtube.com/watch?v=8J7ZmH0lXuk',
//     qrCode: 'QR2',
//     clicks: 4313,
//     status: 'Inactive',
//     date: 'Oct-08-2023',
//   },
//   // Add more sample data here...
// ];

// function LinkDashboard() {
//   const [links, setLinks] = useState(initialLinks);

//   // Function to toggle link status
//   const toggleStatus = (index: number) => {
//     setLinks((prevLinks) =>
//       prevLinks.map((link, i) =>
//         i === index ? { ...link, status: link.status === 'Active' ? 'Inactive' : 'Active' } : link
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Link Dashboard</h1>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
//             <thead>
//               <tr>
//                 <th className="py-3 px-6 text-left">Short Link</th>
//                 <th className="py-3 px-6 text-left">Original Link</th>
//                 <th className="py-3 px-6 text-center">QR Code</th>
//                 <th className="py-3 px-6 text-center">Clicks</th>
//                 <th className="py-3 px-6 text-center">Status</th>
//                 <th className="py-3 px-6 text-center">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {links.map((link, index) => (
//                 <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
//                   <td className="py-3 px-6">
//                     <a href={link.shortLink} className="hover:underline" target="_blank" rel="noopener noreferrer">
//                       {link.shortLink}
//                     </a>
//                   </td>
//                   <td className="py-3 px-6">{link.originalLink}</td>
//                   <td className="py-3 px-6 text-center">
//                     <button className="bg-gray-600 p-2 rounded-lg">{link.qrCode}</button>
//                   </td>
//                   <td className="py-3 px-6 text-center">{link.clicks}</td>
//                   <td className="py-3 px-6 text-center">
//                     <button
//                       onClick={() => toggleStatus(index)}
//                       className={`p-2 rounded-lg ${link.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}
//                     >
//                       {link.status}
//                     </button>
//                   </td>
//                   <td className="py-3 px-6 text-center">{link.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LinkDashboard;


// Here are some potential follow-up questions that could be asked after discussing the code for URL shortening:

// 1. How does the application handle errors when the URL shortening API fails?
// 2. What measures are taken to ensure the security of the shortened URLs?
// 3. How does the application handle the case when the user enters an invalid URL?
// 4. Can the application provide options for customizing the shortened URLs, such as adding a custom domain or prefix?
// 5. How does the application handle the case when the user wants to track the usage of the shortened URLs?
// 6. Can the application provide a feature for generating QR codes for the shortened URLs?
// 7. How does the application handle the case when the user wants to set an expiration date for the shortened URLs?
// 8. Can the application provide a feature for generating statistics on the usage of the shortened URLs, such as the number of clicks and the referrer information?
// 9. How does the application handle the case when the user wants to create a free account to get unlimited shortened links?
// 10. Can the application provide a feature for generating a report on the usage of the shortened URLs, such as the most popular links and the top referrers?

// These questions can help you understand the overall functionality and capabilities of the URL shortening application. They also provide opportunities to discuss and address additional aspects of the code.


 // Optionally, you can also update the state with the generated shortLink
    // setLinks((prevLinks) => [...prevLinks, { shortLink }]);
    // You can also add the shortLink to the state in a similar way
    // You can also add a button to trigger the shortening process
    // You can also add a button to trigger the shortening process and display the generated short link
    // You can also add a button to trigger the shortening process and display the generated short link in a modal or a separate page
    // You can also add a button to trigger the shortening process and display the generated short link in a separate page or modal


// import React, { useState } from 'react';

// const InputWithButton: React.FC = () => {
//   const [originalLink, setOriginalLink] = useState('');
//   const [customPrefix, setCustomPrefix] = useState('');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Send the originalLink and customPrefix to the server to generate the shortened URL
//     const response = await fetch('/api/shorten', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ originalLink, customPrefix }),
//     });

//     if (!response.ok) {
//       // Handle errors
//       console.error('Error:', response.statusText);
//       return;
//     }

//     const data = await response.json();
//     const { shortLink } = data;

//     // Display the shortened URL
//     alert(`Shortened URL: ${shortLink}`);
//     setOriginalLink('');
//     setCustomPrefix('');
   
//   };

//   return (
//     <>
//       <div className="flex items-center justify-center w-full max-w-md mx-auto p-4 bg-white">
//         <div className="relative w-full flex flex-col items-center border-2 border-gray-700 rounded-lg space-y-4 bg-black">
//           {/* Input for entering the link */}
//           <label className="relative w-full">
//             {" "}
//             Shorten long url
//             <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
//               {/* <LinkIcon /> */}
//             </span>
//             <input
//               type="text"
//               placeholder="Enter the link here"
//               className="w-full pl-10 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={originalLink}
//               onChange={(e) => setOriginalLink(e.target.value)}
//             />
//           </label>
//           {/* Input to customize the link */}
//           <label className="relative w-full">
//             Customize your link
//             <input
//               type="text"
//               placeholder="Enter a custom prefix (optional)"
//               className="w-full py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={customPrefix}
//               onChange={(e) => setCustomPrefix(e.target.value)}
//             />
//           </label>
//           {/* Button to shorten link */}
//           <button
//             className="w-full bg-blue-500 text-white rounded-full py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onClick={handleSubmit}
//           >
//             Shorten Link
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InputWithButton;