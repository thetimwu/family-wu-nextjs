import React from "react";

interface Props {
  colour?: string;
  text: string;
}

const Button = (props: Props) => {
  const newColor = props.colour ? props.colour : "blue";
  return (
    <button
      className={`bg-${newColor} hover:bg-${newColor}-light text-white font-bold py-2 px-4 border-b-4 border-${newColor}-dark hover:border-${newColor} rounded`}
    >
      {props.text}
    </button>
  );
};

export default Button;
