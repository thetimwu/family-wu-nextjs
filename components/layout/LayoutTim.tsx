import React from "react";
import Layout from "./Layout";
import Link from "next/link";

interface LayoutProps {
  children: React.FC | JSX.Element;
  page: string;
}

const LayoutTim: React.FC<LayoutProps> = ({ page, children }) => {
  return (
    <Layout color="gray">
      <div className="flex h-full flex-wrap bg-gray-100 w-full h-auto">
        <div className="min-w-min w-4/12 sm:w-2/12 bg-white p-3 shadow-lg">
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={`${"dashboard" === page ? "" : "/tim"}`}>
                <div
                  className={`cursor-pointer flex items-center text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 ${
                    "dashboard" === page ? "" : "focus:"
                  }bg-gray-200 focus:shadow-outline transition ease-out duration-300 `}
                >
                  <div className="block md:flex md:space-x-3">
                    <span className="text-gray-600">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span>Dashboard</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={`${"todos" === page ? "" : "/tim/todos"}`}>
                <div
                  className={`cursor-pointer flex items-center text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 ${
                    "todos" === page ? "" : "focus:"
                  }bg-gray-200 focus:shadow-outline transition ease-out duration-300`}
                >
                  <div className="block md:flex md:space-x-3">
                    <span className="text-gray-600">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        ></path>
                      </svg>
                    </span>
                    <span>Todo list</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={`${"notes" === page ? "" : "/tim/notes"}`}>
                <div
                  className={`cursor-pointer flex items-center text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 ${
                    "notes" === page ? "" : "focus:"
                  }bg-gray-200 focus:shadow-outline transition ease-out duration-300`}
                >
                  <div className="block md:flex md:space-x-3">
                    <span className="text-gray-600">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        ></path>
                      </svg>
                    </span>
                    <span>Notes</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={`${"profile" === page ? "" : "/tim/profile"}`}>
                <div
                  className={`cursor-pointer flex items-center text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 ${
                    "profile" === page ? "" : "focus:"
                  }bg-gray-200 focus:shadow-outline transition ease-out duration-300`}
                >
                  <div className="block md:flex md:space-x-3">
                    <span className="text-gray-600">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span>Profile</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={`${"shoppinglist" === page ? "" : "/tim/shoppinglist"}`}
              >
                <div
                  className={`cursor-pointer flex items-center text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 ${
                    "shoppinglist" === page ? "" : "focus:"
                  }bg-gray-200 focus:shadow-outline transition ease-out duration-300`}
                >
                  <div className="block md:flex md:space-x-3">
                    <span className="text-gray-600">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        ></path>
                      </svg>
                    </span>
                    <span>Shopping List</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={`${"password" === page ? "" : "/tim/password"}`}>
                <div
                  className={`cursor-pointer flex items-center text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 ${
                    "password" === page ? "" : "focus:"
                  }bg-gray-200 focus:shadow-outline transition ease-out duration-300`}
                >
                  <div className="block md:flex md:space-x-3">
                    <span className="text-gray-600">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                    <span>Change password</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={`${"logout" === page ? "" : "/tim/logout"}`}>
                <div
                  className={`cursor-pointer flex items-center text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 ${
                    "logout" === page ? "" : "focus:"
                  }bg-gray-200 focus:shadow-outline transition ease-out duration-300`}
                >
                  <div className="block md:flex md:space-x-3">
                    <span className="text-gray-600">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                    <span>Logout</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-7/12 sm:w-9/12">
          <div className="p-4 text-gray-500">{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default LayoutTim;
