import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import SimpleMathCard from "../components/math/simpleMathCard";
import Input from "../components/common/Input";
import DropdownMenu from "../components/common/DropdownMenu";
import Button from "../components/common/Button";
import {
  getRandomInt,
  getRandomOperation,
  getOperation,
} from "../components/math/utils";

const amy: React.FC = () => {
  const [openAlter, setOpenAlter] = useState(false);
  const [message, setMessage] = useState("Something seriously bad happened.");
  const [numOfQst, setNumOfQst] = useState(0);
  const [selectedText, setSelectedText] = useState("Options");
  const [listOfQst, setListOfQst] = useState<JSX.Element[]>([]);
  const [counter, setCounter] = useState(0);

  const questionGenerater = (num: 2 | 4) => {
    const newList: JSX.Element[] = [];
    for (let i = 0; i < numOfQst; i++) {
      newList.push(
        <SimpleMathCard
          arg1={getRandomInt(99).toString()}
          arg2={getRandomInt(99).toString()}
          operation={getRandomOperation(num)}
          key={i}
        />
      );
    }
    setListOfQst(newList);
    setCounter(counter + 1);
  };

  const simpleQstGenerator = (num: 0 | 1 | 2 | 3) => {
    const newList: JSX.Element[] = [];
    for (let i = 0; i < numOfQst; i++) {
      newList.push(
        <SimpleMathCard
          arg1={getRandomInt(99).toString()}
          arg2={getRandomInt(99).toString()}
          operation={getOperation(num)}
          key={i}
        />
      );
    }
    setListOfQst(newList);
    setCounter(counter + 1);
  };

  const contentHandler = (num) => {
    switch (selectedText) {
      case "Basic Math":
        questionGenerater(4);
        break;
      case "Addition Subtraction":
        questionGenerater(2);
        break;
      case "Addition":
        simpleQstGenerator(0);
        break;
      case "Subtraction":
        simpleQstGenerator(1);
        break;
      case "Division":
        simpleQstGenerator(3);
        break;
      case "Multiplication":
        simpleQstGenerator(2);
        break;
      default:
        setMessage("Selection Error");
        setOpenAlter(true);
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumOfQst(Number(e.target.value));

  const createHandler = () => {
    if (numOfQst <= 0) {
      setMessage("number of Question is not a valid number");
      setOpenAlter(true);
      return;
    }

    if (numOfQst > 50) {
      setMessage("That would be too much for now, try a smaller number.");
      setOpenAlter(true);
      return;
    }

    if (selectedText === "Options") {
      setMessage("Please select a Math level");
      setOpenAlter(true);
      return;
    }

    contentHandler(numOfQst);
  };

  return (
    <Layout color="pink">
      <main className="bg-pink-100  h-auto p-2">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
          style={openAlter ? { display: "block" } : { display: "none" }}
        >
          <strong className="font-bold">Ooops! </strong>
          <span className="block sm:inline">{message}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setOpenAlter(false)}
          >
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center m-2 w-8">
          <Input
            label="Number of Questions"
            changeHandler={inputChangeHandler}
          />
          <div className="ml-2 mr-4">
            <DropdownMenu
              options={[
                ["Basic Math", "Addition Subtraction"],
                ["Addition", "Subtraction", "Division", "Multiplication"],
              ]}
              text={selectedText}
              setText={setSelectedText}
            />
          </div>
          <div className="m-2 sm:m-0" onClick={createHandler}>
            <Button text="create" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2 place-items-auto">
          {listOfQst.map((li) => li)}
          {listOfQst.length > 0 && (
            <span
              onClick={() => {
                setListOfQst([]);
                setCounter(counter - 1);
              }}
            >
              <Button text="Clear" colour="green" />
            </span>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default amy;
