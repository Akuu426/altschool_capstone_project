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

import React from 'react';

const InputWithButton: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter text here"
        className="w-full p-4 border rounded-md"
      />
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md"
        style={{ width: '20%' }}
      >
        Button
      </button>
    </div>
  );
};

export default InputWithButton;

