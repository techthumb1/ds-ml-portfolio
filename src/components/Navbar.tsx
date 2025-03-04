import React from "react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold">
            My Portfolio
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/projects" className="hover:text-gray-400">Projects</Link>
            <Link href="/blog" className="hover:text-gray-400">Blog</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2 space-y-2">
          <Link href="/projects" className="block px-4 py-2 hover:bg-gray-700">Projects</Link>
          <Link href="/blog" className="block px-4 py-2 hover:bg-gray-700">Blog</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
