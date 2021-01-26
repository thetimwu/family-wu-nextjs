import React from "react";

interface navbarProps {}

const navbar: React.FC<navbarProps> = ({}) => {
  return (
    <header className="border-t-8 border-blue-800 text-white text-lg">
      <nav className="container mx-auto flex items-center justify-between px-4 py-6 bg-blue-600">
        <div className="flex items-center">
          <a href="" className="hover:text-green-200">
            HOME
          </a>
          <ul className="flex ml-16 space-x-8">
            <li>
              <a href="" className="hover:text-blue-200">
                Tim
              </a>
            </li>
            <li>
              <a href="" className="hover:text-red-400">
                Jess
              </a>
            </li>
            <li>
              <a href="" className="hover:text-pink-400">
                Amy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-pink-400">
                Sophie
              </a>
            </li>
            <li>
              <a href="" className="hover:text-pink-400">
                Melanie
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              className="bg-white text-sm rounded-full focus:shadow-outline focus:outline-white  w-64 px-3 py-1"
              placeholder="Search..."
            />
          </div>
          <div className="ml-6">avatar</div>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
