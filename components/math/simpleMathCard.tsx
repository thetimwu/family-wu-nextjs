import React, { useState } from "react";

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
  const [userInput, setUserInput] = useState<string>();
  const [flag, setFlag] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  let newOpt: JSX.Element;
  if (operation === "*") {
    newOpt = (
      <div className="min-w-max">
        {arg1 + " "}
        <span>&times;</span>
        {" " + arg2 + " = "}
      </div>
    );
  } else if (operation === "/") {
    newOpt = (
      <div className="min-w-max">
        {arg1 + " "}
        <span>&divide;</span>
        {" " + arg2 + " = "}
      </div>
    );
  } else {
    newOpt = (
      <div className="min-w-max">
        {arg1 + " " + operation + " " + arg2 + " = "}
      </div>
    );
  }

  const checkRes = (result) => {
    if (result) {
      setFlag(true);
      setIsCorrect(true);
    } else {
      setFlag(true);
      setIsCorrect(false);
    }
  };

  const clickHandler = () => {
    const userRes = Number(userInput);
    const a1 = Number(arg1);
    const a2 = Number(arg2);
    let res = false;
    switch (operation) {
      case "*":
        res = a1 * a2 === userRes;
        checkRes(res);
        break;
      case "/":
        res = a1 / a2 === userRes;
        checkRes(res);
        break;
      case "+":
        res = a1 + a2 === userRes;
        checkRes(res);
        break;
      case "-":
        res = a1 - a2 === userRes;
        checkRes(res);
        break;
      default:
        setFlag(true);
        setIsCorrect(false);
    }
  };
  return (
    <div className="w-auto min-w-min p-2 m-2 bg-white h-auto rounded-lg">
      <div className="flex">
        {newOpt}
        <div>
          <input
            className={`w-16 border-2 ${
              flag
                ? isCorrect
                  ? "bg-green-400 text-white"
                  : "bg-red-400 text-white"
                : ""
            }`}
            onChange={(e) => setUserInput(e.target.value)}
            onClick={() => {
              setIsCorrect(null);
              setFlag(false);
            }}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-1 rounded-full"
        onClick={clickHandler}
      >
        Check
      </button>
    </div>
  );
};

export default simpleMathCard;
