import React from "react";
import Layout from "../components/layout/Layout";
import SimpleMathCard from "../components/math/simpleMathCard";
import Input from "../components/common/Input";
import SelectMenu from "../components/common/SelectMenu";

const amy: React.FC = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function getRandomOperation() {
    const operations = [" + ", " - ", " * ", " / "];
    return operations[getRandomInt(4)];
  }

  const content = () => {
    let list = [];
    for (let i = 0; i < 20; i++) {
      list.push(
        <SimpleMathCard
          arg1={getRandomInt(99).toString()}
          arg2={getRandomInt(99).toString()}
          operation={getRandomOperation()}
        />
      );
    }
    return list;
  };

  return (
    <Layout color="pink">
      <main className="bg-pink-300  h-screen p-2">
        <div className="m-2 w-8">
          <Input label="Number of Questions" /> <SelectMenu />
        </div>
        <div className="grid grid-cols-5 gap-2 place-items-auto">
          {content()}
        </div>
      </main>
    </Layout>
  );
};

export default amy;
