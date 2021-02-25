import React from "react";

interface simpleMathCardProps {
  arg1: string;
  arg2: string;
  operation: string;
}

const simpleMathCard: React.FC<simpleMathCardProps> = ({
  arg1,
  arg2,
  operation,
}) => {
  return (
    <div className="w-auto p-2 m-2 bg-white h-auto rounded-lg">
      <div>
        {arg1 + " " + operation + " " + arg2 + " = "}
        <input className="w-16 border-2 " />
      </div>
      <div>?</div>
    </div>
  );
};

export default simpleMathCard;
