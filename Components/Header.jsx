import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars4Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md
    py-5 px-5 md:px-10"
    >
      {/* left */}
      <div
        className="relative flex items-center h-10 
    cursor-pointer my-auto  "
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      {/* middle -search-section */}

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}

      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p>Become a Host</p>
        <GlobeAltIcon className="h-6 " />
      </div>

      <div>
        <Bars4Icon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
    </header>
  );
}

export default Header;
