import React from "react";
import RealTimeTable from "./RealTimeTable";

export default function RealTimeWrapper({ realTimeData }) {
  return (
    <div className="max-h-96 overflow-y-scroll">
      <RealTimeTable realTimeData={realTimeData} />
    </div>
  );
}
