import React, { useState } from "react";

function VehicleDropdown({ vehicleType, setVehicleType }) {
  const transportOptions = [
    {
      label: "Buss",
      value: "bus",
      key: "Buses",
    },
    {
      label: "Tunnelbana",
      value: "metro",
      key: "Metros",
    },
    {
      label: "Pendeltåg",
      value: "train",
      key: "Trains",
    },
    {
      label: "Spårvagn",
      value: "tram",
      key: "Trams",
    },
    {
      label: "Båt",
      value: "ship",
      key: "Ships",
    },
  ];

  function handleChange(e) {
    setVehicleType({
      value: e.target.value,
      key: transportOptions.find((option) => option.value === e.target.value)
        .key,
    });
  }

  return (
    <div>
      <select
        required
        onChange={handleChange}
        value={vehicleType.value}
        className="w-64 h-10 px-2 bg-slate-100 rounded !bg-slate-600"
      >
        <option value="" disabled className="bg-slate-600">
          Välj typ av transport
        </option>
        {transportOptions.map((option, index) => (
          <option key={index} value={option.value} className="bg-slate-600">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VehicleDropdown;
