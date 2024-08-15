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


// how to make the added shortened links to remain on the user's dashboard or history even after refreshing the page, ie, adding the list of links to the user's backend so they can see it after any logout and sign in


// To make the added shortened links persist even after refreshing the page, you need to store them in a backend database. Here's a high-level overview of how you can achieve this:

// 1.
// Backend Setup: Set up a backend server using a framework like Node.js, Django, or Flask. You'll also need a database to store the links. You can use a SQL database like MySQL or PostgreSQL, or a NoSQL database like MongoDB.
// 2.
// User Registration and Authentication: Implement user registration and authentication using a library like Passport.js or Django's built-in authentication system. This will allow users to sign in and out of your application.
// 3.
// Link Storage: When a user creates a new shortened link, save it in the backend database. You'll need to create a table or collection in your database to store the links. Each link should have fields like shortLink, originalLink, qrCode, clicks, status, and date.
// 4.
// Link Retrieval: When a user signs in, retrieve the list of shortened links from the backend database and display them on the user's dashboard. You can use a database query to fetch the links associated with the user's account.
// 5.
// Link Persistence: Whenever a user creates a new link, save it in the backend database. You can use database operations like INSERT to add a new record to the table.
// 6.
// Link Deletion: When a user deletes a link, remove it from the backend database. You can use a database operation like DELETE to remove the record from the table.
// 7.
// Link Update: When a user clicks on a link, update the clicks field in the backend database. You can use a database operation like UPDATE to increment the clicks count.


// Here's an example of how you can modify the addShortenedLink function to save the new link in the backend database:
// import axios from 'axios'; // Assuming you're using axios for making HTTP requests

// const addShortenedLink = async (newLink: ShortenedLink) => {
//   try {
//     const response = await axios.post('/api/links', newLink); // Replace '/api/links' with your actual API endpoint
//     console.log('Link added successfully:', response.data);
//   } catch (error) {
//     console.error('Failed to add link:', error.message);
//   }

//   setShortenedLinks((prevLinks) => [...prevLinks, newLink]);
// };

// In this example, we're using the axios library to make an HTTP POST request to the backend API endpoint. You'll need to replace /api/links with the actual API endpoint that you've set up in your backend server.

// Make sure to handle any errors that may occur during the API request and update the state of the shortenedLinks array as before.

// Remember to handle authentication and authorization on the backend to ensure that only authenticated users can access their own links.

// This is a high-level overview, and the actual implementation may vary depending on your specific backend setup and requirements.


// How can I secure the communication between the frontend and the backend to prevent unauthorized access to the user's links?
// Tabnine
// Tabnine Protected
// To secure the communication between the frontend and the backend, you can implement the following measures:

// 1.
// HTTPS: Use HTTPS (HTTP over SSL/TLS) to encrypt all data transmitted between the frontend and the backend. This ensures that the data is secure and cannot be intercepted by unauthorized parties.
// 2.
// Authentication: Implement user authentication using a library like Passport.js or Django's built-in authentication system. This will allow users to sign in and out of your application, and ensure that only authenticated users can access their own links.
// 3.
// Authorization: Implement authorization to restrict access to certain resources. For example, only the owner of a link should be able to delete or update it. You can use a library like Django's permission system or implement custom authorization logic.
// 4.
// API Keys: Generate and distribute API keys to your frontend application. These keys should be used to authenticate requests made from the frontend. You can store the keys securely on the backend and validate them on each request.
// 5.
// Input Validation: Validate all input data on both the frontend and backend to prevent malicious or malformed requests. This includes checking for SQL injection, cross-site scripting (XSS), and other security vulnerabilities.
// 6.
// Rate Limiting: Implement rate limiting to prevent abuse and protect against brute force attacks. This can be done by tracking the number of requests made by each user within a certain time frame and rejecting requests that exceed the limit.
// 7.
// Error Handling: Handle errors gracefully and provide appropriate error messages to the frontend. This will help users understand what went wrong and how to fix it.
// 8.
// Secure Cookies: Use secure cookies to store session information. This ensures that the session data is encrypted and cannot be tampered with.
// 9.
// Content Security Policy (CSP): Implement a Content Security Policy (CSP) to prevent cross-site scripting (XSS) and other code injection attacks. This can be done by setting appropriate HTTP headers on the backend.


// Here's an example of how you can modify the addShortenedLink function to include some of these security measures:
// import axios from 'axios'; // Assuming you're using axios for making HTTP requests

// const addShortenedLink = async (newLink: ShortenedLink, apiKey: string) => {
//   try {
//     const response = await axios.post('/api/links', newLink, {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });
//     console.log('Link added successfully:', response.data);
//   } catch (error) {
//     console.error('Failed to add link:', error.message);
//   }

//   setShortenedLinks((prevLinks) => [...prevLinks, newLink]);
// };
// Insert
// Copy

// In this example, we're passing the API key as a parameter to the addShortenedLink function. We're then using the axios library to make an HTTP POST request to the backend API endpoint, including the API key in the request headers.

// Remember to handle any errors that may occur during the API request and update the state of the shortenedLinks array as before.

// This is just an example, and the actual implementation may vary depending on your specific backend setup and requirements. It's important to follow best practices and consult with a security expert to ensure the security of your application.