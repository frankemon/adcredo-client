import React, { useEffect, useState } from "react";
import VehicleDropdown from "./VehicleDropdown";
import Button from "./Button";
import { GoLocation } from "react-icons/go";
import { FaCarAlt } from "react-icons/fa";

export default function UserInputWrapper({ setRealTimeData }) {
  const [vehicleType, setVehicleType] = useState({ value: "", key: "" });
  const [site, setSite] = useState("");
  const [siteId, setSiteId] = useState("");
  const [showSiteList, setShowSiteList] = useState(false);
  const [stationName, setStationName] = useState("");
  const [availableStations, setAvailableStations] = useState([]);
  const baseUrl = "http://localhost:8000/api";
  const [timeTableShowing, setTimeTableShowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // let site;

  // try catch blocks

  async function handleLocationChange(e) {
    setSite(e.target.value);
    // site = e.target.value;
    setShowSiteList(true);
    const res = await fetch(`${baseUrl}/get-station-id/` + site, {
      method: "GET",
    });
    const availableStations = await res.json();
    setAvailableStations(availableStations.ResponseData);
  }

  function handleClick(station) {
    setSiteId(station.SiteId);
    setStationName(station.Name);
    setShowSiteList(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`${baseUrl}/realtime/`, {
      method: "POST",
      body: JSON.stringify({
        siteId: siteId,
        vehicleType: vehicleType,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const realTimeData = await res.json();
    setRealTimeData(realTimeData);
    setTimeTableShowing(true);
    res.ok && setIsLoading(false);
  }

  if (!showSiteList && siteId) {
    const inputField = document.querySelector("input");
    inputField.value = stationName;
  }

  return (
    <div
      className={`relative p-5 bg-slate-800 ${
        !timeTableShowing ? "rounded" : "rounded-t"
      }`}
    >
      <form onSubmit={handleSubmit} className="flex items-center space-x-5">
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className="hidden">Avgångar</label>
            <GoLocation className="mr-2 text-cyan-400 text-xl" />
            <input
              onChange={handleLocationChange}
              type="text"
              className={`w-64 h-10 px-2 bg-slate-600 text-slate-200 placeholder:text-slate-200 ${
                showSiteList ? "rounded-t" : "rounded"
              }`}
              placeholder="Resa från..."
            />
          </div>
        </div>
        <div className="text-cyan-400 font-bold">med</div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className="hidden">Vehicle type</label>
            <FaCarAlt className="mr-2 text-cyan-400 text-xl" />
            <VehicleDropdown
              vehicleType={vehicleType}
              setVehicleType={setVehicleType}
            />
          </div>
        </div>
        <Button
          type="submit"
          text={"Hämta"}
          vehicleType={vehicleType.value}
          site={site}
          isLoading={isLoading}
        />
      </form>
      <div className="absolute w-64 bg-slate-800 left-12 top-16">
        {showSiteList &&
          availableStations.map((station, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(station)}
                className="border-x border-b border-slate-600 w-full p-2 hover:px-4 hover:bg-cyan-400 hover:text-slate-900 hover:cursor-pointer hover:transition-all hover:duration-400"
              >
                {station.Name}
              </div>
            );
          })}
      </div>
    </div>
  );
}
