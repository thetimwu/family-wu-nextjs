import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  color: string;
  children: React.FC | JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ color, children }) => {
  return (
    <div className={`container bg-blue mx-auto`}>
      <Navbar />
      <div className="py-8">{children}</div>
      <footer className="bg-blue-600 text-white border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">Powered By Next JS</div>
      </footer>
    </div>
  );
};

export default Layout;
