import React from "react";

interface Props {
  colour?: string;
  title: string;
  body: string;
}

const Card = (props: Props) => {
  const newColor = props.colour ? props.colour : "blue";
  return (
    <div className="mt-8">
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
        {props.title}
      </h4>
      <div>
        <span>{props.body}</span>
      </div>
    </div>
  );
};

export default Card;
