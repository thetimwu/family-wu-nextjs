import React from "react";
import LayoutTim from "../../components/layout/LayoutTim";
interface timProps {}

const todos: React.FC<timProps> = ({}) => {
  return (
    <LayoutTim page="todos">
      <div>todos Tim</div>
    </LayoutTim>
  );
};

export default todos;
