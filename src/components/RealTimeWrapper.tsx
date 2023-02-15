import React from "react";
import Button from "./Button";
import RealTimeTable from "./RealTimeTable";

export default function RealTimeWrapper({ realTimeData }) {
  return (
    <div>
      <RealTimeTable realTimeData={realTimeData} />
    </div>
  );
}
