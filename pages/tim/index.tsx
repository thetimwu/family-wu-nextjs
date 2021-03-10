import React from "react";
import LayoutTim from "../../components/layout/LayoutTim";
interface timProps {}

const tim: React.FC<timProps> = ({}) => {
  return (
    <LayoutTim page="dashboard">
      <div>Hellow Tim</div>
    </LayoutTim>
  );
};

export default tim;
