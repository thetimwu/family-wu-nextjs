import React from "react";
import Layout from "../components/layout/Layout";

const jess: React.FC = () => {
  return (
    <Layout color="pink">
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-400 flex items-center">
        <div className="min-h-screen flex flex-row bg-gray-100">
          <div className="flex flex-col w-56 bg-white overflow-hidden">
            <div className="flex items-center justify-center h-20 shadow-md">
              <h1 className="text-3xl uppercase text-red-500">Jessica</h1>
            </div>
            <ul className="flex flex-col py-4">
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-red-400">
                    <i className="bx bx-home"></i>
                  </span>
                  <span className="text-sm font-medium">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-red-400">
                    <i className="bx bx-music"></i>
                  </span>
                  <span className="text-sm font-medium">Music</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-red-400">
                    <i className="bx bx-drink"></i>
                  </span>
                  <span className="text-sm font-medium">Drink</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-red-400">
                    <i className="bx bx-shopping-bag"></i>
                  </span>
                  <span className="text-sm font-medium">Shopping</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-red-400">
                    <i className="bx bx-chat"></i>
                  </span>
                  <span className="text-sm font-medium">Chat</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-red-400">
                    <i className="bx bx-user"></i>
                  </span>
                  <span className="text-sm font-medium">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-red-400">
                    <i className="bx bx-bell"></i>
                  </span>
                  <span className="text-sm font-medium">Notifications</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-red-400">
                    <i className="bx bx-log-out"></i>
                  </span>
                  <span className="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default jess;
