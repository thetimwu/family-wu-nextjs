import React, { useState } from "react";
import Layout from "../components/layout/Layout";

const jess: React.FC = () => {
  const [showShoppingList, setShowShoppingList] = useState(true);
  const [showTodoList, setShowTodoList] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showPswMager, setShowPswMager] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const contentClickHandler = (page: string) => {
    switch (page) {
      case "shoppingList":
        setShowShoppingList(true);
        setShowTodoList(false);
        setShowNotes(false);
        setShowPswMager(false);
        setShowProfile(false);
        break;
      case "todo":
        setShowShoppingList(false);
        setShowTodoList(true);
        setShowNotes(false);
        setShowPswMager(false);
        setShowProfile(false);
        break;
      case "notes":
        setShowShoppingList(false);
        setShowTodoList(false);
        setShowNotes(true);
        setShowPswMager(false);
        setShowProfile(false);
        break;
      case "password":
        setShowShoppingList(false);
        setShowTodoList(false);
        setShowNotes(false);
        setShowPswMager(true);
        setShowProfile(false);
        break;
      case "profile":
        setShowShoppingList(false);
        setShowTodoList(false);
        setShowNotes(false);
        setShowPswMager(false);
        setShowProfile(true);
        break;
    }
  };

  return (
    <Layout color="red">
      <div className="min-h-full h-full  bg-gradient-to-b from-red-100 to-red-400 flex items-center">
        <div className="min-h-full h-full flex flex-row bg-gray-100">
          <div className="h-full flex flex-col md:w-40 lg:w-56 bg-white overflow-hidden">
            <div className="flex items-center justify-center h-20 shadow-md">
              <h1 className="md:text-xl lg:text-3xl uppercase text-red-500">
                Jessica
              </h1>
            </div>
            <ul className="flex flex-col py-4">
              <li>
                <div className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-3 transition-transform ease-in duration-200 text-red-400 hover:text-red-400">
                  <span className="inline-flex items-center justify-center h-12 w-4 sm:w-6 md:w-12 text-lg text-red-400">
                    <i className="bx bx-home"></i>
                  </span>
                  <span
                    className="w-20 sm:w-28 text-sm font-medium"
                    onClick={() => contentClickHandler("shoppingList")}
                  >
                    Shopping List
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-3 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-4 sm:w-6 md:w-12 text-lg text-red-400">
                    <i className="bx bx-music"></i>
                  </span>
                  <span
                    className="w-20 sm:w-28 text-sm font-medium"
                    onClick={() => contentClickHandler("todo")}
                  >
                    Todo List
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-3 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-4 sm:w-6 md:w-12 text-lg text-red-400">
                    <i className="bx bx-drink"></i>
                  </span>
                  <span
                    className="w-20 sm:w-28 text-sm font-medium"
                    onClick={() => contentClickHandler("notes")}
                  >
                    Notes
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-3 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-4 sm:w-6 md:w-12 text-lg text-red-400">
                    <i className="bx bx-shopping-bag"></i>
                  </span>
                  <span
                    className="w-20 sm:w-28 text-sm font-medium"
                    onClick={() => contentClickHandler("password")}
                  >
                    Password Manager
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-3 transition-transform ease-in duration-200 text-red-400 hover:text-red-400"
                >
                  <span className="inline-flex items-center justify-center h-12 w-4 sm:w-6 md:w-12 text-lg text-red-400">
                    <i className="bx bx-user"></i>
                  </span>
                  <span
                    className="w-20 sm:w-28 text-sm font-medium"
                    onClick={() => contentClickHandler("profile")}
                  >
                    Profile
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={showShoppingList ? { display: "block" } : { display: "none" }}
        >
          shopping list
        </div>
        <div style={showTodoList ? { display: "block" } : { display: "none" }}>
          todo list
        </div>
        <div style={showNotes ? { display: "block" } : { display: "none" }}>
          Notes
        </div>
        <div style={showPswMager ? { display: "block" } : { display: "none" }}>
          password manager
        </div>
        <div style={showProfile ? { display: "block" } : { display: "none" }}>
          Profile
        </div>
      </div>
    </Layout>
  );
};

export default jess;
