import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  color: string;
  children: React.FC | JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ color, children }) => {
  return (
    <div className={`container bg-${color} mx-auto font-body`}>
      <Navbar color={color} />
      <div className="py-0">{children}</div>
      <footer
        className={`flex flex-col justify-center items-center bg-${color}-600 text-white border-t`}
      >
        <div className="m-auto text-center py-6">
          <div>Designed By Tim Wu</div>
          <div className="m-auto text-sm">Powered By Next JS</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
