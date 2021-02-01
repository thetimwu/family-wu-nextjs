import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navbar: React.FC<{ color: string }> = ({ color }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <header className={`border-t-8 border-${color}-800 text-white text-lg`}>
      <nav
        className={`container mx-auto flex items-center justify-between px-4 py-6 bg-${color}-600`}
      >
        <div className="flex items-center">
          {currentPath === "/" ? (
            "HOME"
          ) : (
            <Link href="/">
              <a className="hover:text-green-200">HOME</a>
            </Link>
          )}
          <ul className="flex ml-16 space-x-8">
            <li>
              {currentPath === "/tim" ? (
                <div className="text-blue-200">Tim</div>
              ) : (
                <Link href="/tim">
                  <a className="hover:text-blue-200">Tim</a>
                </Link>
              )}
            </li>
            <li>
              {currentPath === "/jess" ? (
                <div className="text-red-400">Jess</div>
              ) : (
                <Link href="/jess">
                  <a className="hover:text-red-400">Jess</a>
                </Link>
              )}
            </li>
            <li>
              {currentPath === "/amy" ? (
                <div className="text-pink-400">Amy</div>
              ) : (
                <Link href="/amy">
                  <a className="hover:text-pink-400">Amy</a>
                </Link>
              )}
            </li>
            <li>
              {currentPath === "/sophie" ? (
                <div className="text-pink-400">Sophie</div>
              ) : (
                <Link href="/sophie">
                  <a className="hover:text-pink-400">Sophie</a>
                </Link>
              )}
            </li>
            <li>
              {currentPath === "/melanie" ? (
                <div className="text-pink-400">Melanie</div>
              ) : (
                <Link href="/melanie">
                  <a className="hover:text-pink-400">Melanie</a>
                </Link>
              )}
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
