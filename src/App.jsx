import React from "react";
import Sidebar from "./components/Sidebar";
import Players from "./components/Players";
import Display from "./components/Display";
const App = () => {
  return (
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Players />
    </div>
  );
};

export default App;
