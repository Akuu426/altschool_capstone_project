import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-900 text-white">
      <div className="flex justify-between">
        <p>© {new Date().getFullYear()} Linkly</p>
        <div>
          <button className="mr-4">Light</button>
          <button>Dark Theme</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
