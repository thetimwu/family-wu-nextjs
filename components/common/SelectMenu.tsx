import React from "react";

interface Props {}

const SelectMenu = (props: Props) => {
  return (
    <div>
      <input
        value="Javascript"
        className="p-1 px-2 appearance-none outline-none w-full text-gray-800  svelte-1l8159u"
      />
      <div>
        <button className="cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-x w-4 h-4"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
        <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-chevron-up w-4 h-4"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SelectMenu;
