import React from "react";
import Sidebar from "./components/Sidebar";
import Players from "./components/Players";
const App = () => {
  return (
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
      <Players />
    </div>
  );
};

export default App;
