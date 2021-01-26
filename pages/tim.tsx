import React from "react";
import Layout from "../components/layout/Layout";
interface timProps {}

const tim: React.FC<timProps> = ({}) => {
  return (
    <Layout color="test">
      <div className="md:flex bg-blue-100 p-24 justify-center">
        <div className="text-center md:text-left px-4">
          <h2 className="text-lg">Jake Prins</h2>
          <div className="text-purple-500">JavaScript developer</div>
          <div className="text-gray-600">Twitter: @jakeprins_nl</div>
          <div className="text-gray-600">www.jakeprins.com</div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg">sdfdas</h2>
          <div className="text-purple-500">JavaScript developer</div>
          <div className="text-gray-600">Twitter: @jakeprins_nl</div>
          <div className="text-gray-600">www.jakeprins.com</div>
        </div>
      </div>
    </Layout>
  );
};

export default tim;
