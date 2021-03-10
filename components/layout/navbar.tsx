import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navbar: React.FC<{ color: string }> = ({ color }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [open, setOpen] = useState<boolean>(false);
  const [openSetting, setOpenSetting] = useState(false);

  return (
    <header
      className={`md:border-t-8 sm:border-0 border-${color}-800 text-white text-lg font-title`}
    >
      <nav className={`bg-${color}-600`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className={`${open ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className={`${open ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {/* className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" */}
                  {currentPath === "/" ? (
                    <span className="font-bold uppercase px-2 py-1">home</span>
                  ) : (
                    <Link href="/">
                      <div
                        className={`text-white-300 hover:bg-${color}-200 hover:text-${color}-800 transition ease-out duration-500 block px-3 py-2 rounded-md text-base font-medium uppercase`}
                      >
                        home
                      </div>
                    </Link>
                  )}

                  {currentPath.includes("/tim") ? (
                    <div className="text-blue-200 font-semibold px-3 py-2">
                      Tim
                    </div>
                  ) : (
                    <Link href="/tim">
                      <div
                        className={`text-white-300 hover:bg-${color}-200 hover:text-${color}-800 transition ease-out duration-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Tim
                      </div>
                    </Link>
                  )}

                  {currentPath === "/jess" ? (
                    <div className="text-red-400 font-semibold px-3 py-2">
                      Jess
                    </div>
                  ) : (
                    <Link href="/jess">
                      <div
                        className={`text-white-300 hover:bg-${color}-200 hover:text-red-600 transition ease-out duration-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Jess
                      </div>
                    </Link>
                  )}

                  {currentPath === "/amy" ? (
                    <div className="text-pink-400 font-semibold px-3 py-2">
                      Amy
                    </div>
                  ) : (
                    <Link href="/amy">
                      <div
                        className={`text-white-300 hover:bg-${color}-200 hover:text-pink-500 transition ease-out duration-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Amy
                      </div>
                    </Link>
                  )}

                  {currentPath === "/sophie" ? (
                    <div className="text-pink-400 font-semibold px-3 py-2">
                      Sophie
                    </div>
                  ) : (
                    <Link href="/sophie">
                      <div
                        className={`text-white-300 hover:bg-${color}-200 hover:text-pink-500 transition ease-out duration-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Sophie
                      </div>
                    </Link>
                  )}

                  {currentPath === "/melanie" ? (
                    <div className="text-pink-400 font-semibold px-3 py-2">
                      Melanie
                    </div>
                  ) : (
                    <Link href="/melanie">
                      <div
                        className={`text-white-300 hover:bg-${color}-200 hover:text-pink-500 transition ease-out duration-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Melanie
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className={`bg-${color} p-1 rounded-full text-white hover:text-blue-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white`}
              >
                <span className="sr-only">View notifications</span>
                {/* <!-- Heroicon name: outline/bell --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-expanded={openSetting}
                    aria-haspopup="true"
                    onClick={() => setOpenSetting(!openSetting)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                {/* Dropdown menu, show/hide based on menu state. */}

                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                  style={
                    openSetting ? { display: "block" } : { display: "none" }
                  }
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className="sm:hidden"
          id="mobile-menu"
          style={open ? { display: "block" } : { display: "none" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {currentPath === "/" ? (
              <span className="font-bold uppercase">home</span>
            ) : (
              <Link href="/">
                <a
                  href="#"
                  className={`text-white-300 hover:bg-${color}-200 hover:text-${color}-800 block px-3 py-2 rounded-md text-base font-medium uppercase`}
                >
                  home
                </a>
              </Link>
            )}

            {currentPath === "/tim" ? (
              <div className="text-blue-200 font-semibold px-3 py-2">Tim</div>
            ) : (
              <Link href="/tim">
                <a
                  className={`text-white-300 hover:bg-${color}-200 hover:text-${color}-800 block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Tim
                </a>
              </Link>
            )}

            {currentPath === "/jess" ? (
              <div className="text-red-400 font-semibold px-3 py-2">Jess</div>
            ) : (
              <Link href="/jess">
                <a
                  className={`text-white-300 hover:bg-${color}-200 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Jess
                </a>
              </Link>
            )}

            {currentPath === "/amy" ? (
              <div className="text-pink-400 font-semibold px-3 py-2">Amy</div>
            ) : (
              <Link href="/amy">
                <a
                  className={`text-white-300 hover:bg-${color}-200 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Amy
                </a>
              </Link>
            )}

            {currentPath === "/sophie" ? (
              <div className="text-pink-400 font-semibold px-3 py-2">
                Sophie
              </div>
            ) : (
              <Link href="/sophie">
                <a
                  className={`text-white-300 hover:bg-${color}-200 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Sophie
                </a>
              </Link>
            )}

            {currentPath === "/melanie" ? (
              <div className="text-pink-400 font-semibold px-3 py-2">
                Melanie
              </div>
            ) : (
              <Link href="/melanie">
                <a
                  className={`text-white-300 hover:bg-${color}-200 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Melanie
                </a>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
