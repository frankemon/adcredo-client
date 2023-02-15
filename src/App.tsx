import React, { useEffect, useState } from "react";
import "./App.css";
import RealTimeWrapper from "./components/RealTimeWrapper";
import UserInputWrapper from "./components/UserInputWrapper";

// frontend env?

function App() {
  const [realTimeData, setRealTimeData] = useState(null);
  return (
    <div className="flex flex-col w-full h-screen py-5 items-center justify-center text-slate-200">
      <div className="p-1 rounded bg-slate-600 shadow-lg">
        <UserInputWrapper setRealTimeData={setRealTimeData} />
        <RealTimeWrapper realTimeData={realTimeData} />
      </div>
    </div>
  );
}

export default App;
