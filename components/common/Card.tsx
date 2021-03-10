import React from "react";

interface Props {
  colour?: string;
  title: string;
  body: string;
  path: string;
}

const Card = (props: Props) => {
  const newColor = props.colour ? props.colour : "blue";
  return (
    <div className="mt-8">
      {/* <!-- cards go here --> */}
      <div className="bg-white rounded overflow-hidden shadow-md">
        <img
          src={props.path}
          alt="image"
          className="w-full h-32 sm:h-48 object-cover"
        />
        <div className="m-4">
          <span className="font-bold">{props.title}</span>
          <span className="block text-gray-500 text-sm">{props.body}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
