import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold"><Link href='/'>Linkly</Link></h1>
      <div>
        {/* <button className="mr-4">Login</button> */}
        <Link href="/login">
          <span className="mr-4"> Login </span>
        </Link>
        <Link href="/register">
          <button className="bg-blue-500 px-4 py-2 rounded">
            Register Now
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
