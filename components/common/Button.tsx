import React from "react";

interface Props {
  colour?: string;
  text: string;
}

const Button = (props: Props) => {
  const newColor = props.colour ? props.colour : "blue";
  return (
    <button
      className={`uppercase text-${newColor}-500 bg-white transform hover:scale-105 hover:bg-${newColor}-500 hover:text-white font-bold py-2 px-4 border-2 border-${newColor}-500 transition ease-out duration-300 rounded`}
    >
      {props.text}
    </button>
  );
};

export default Button;
