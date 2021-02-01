import React from "react";
import Layout from "../components/layout/Layout";

const melanie: React.FC = () => {
  return (
    <Layout color="yellow">
      <main className="bg-yellow-200 grid place-items-center h-screen">
        <div className="relative">
          <div className="h-40 w-40 bg-pink-400 rounded-t-full relative overflow-hidden">
            <div className="h-40 w-40 bg-gradient-to-l from-pink-100 to-pink-400 rounded-t-full absolute left-12"></div>
          </div>
          <div className="h-32 w-40 bg-pink-400 rounded-b-3xl relative overflow-hidden">
            <div className="h-32 w-40 bg-gradient-to-l from-pink-100 to-pink-400 rounded-b-3xl absolute left-12"></div>
          </div>
          <div className="h-20 w-10 rounded-b-full bg-yellow-400 absolute left-16 overflow-hidden">
            <div className="h-4 bg-yellow-500"></div>
          </div>
          <div className="h-9 w-3 rounded-b-full absolute left-6 bg-pink-400"></div>
          <div className="h-4 w-3 rounded-b-full absolute left-10 bg-pink-400"></div>
          <div className="h-9 w-2 rounded-t-full absolute left-8 bg-yellow-200"></div>
        </div>
      </main>
    </Layout>
  );
};

export default melanie;
