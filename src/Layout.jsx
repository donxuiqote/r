// src/components/Layout.jsx
import React from "react";
import Navbar from "./components/Navbar"; // Import your Navbar component

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
};



export default Layout;
