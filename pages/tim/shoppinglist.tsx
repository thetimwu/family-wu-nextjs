import React from "react";
import LayoutTim from "../../components/layout/LayoutTim";
interface timProps {}

const shoppingList: React.FC<timProps> = ({}) => {
  return (
    <LayoutTim page="shoppinglist">
      <div>shoppingList Tim</div>
    </LayoutTim>
  );
};

export default shoppingList;
