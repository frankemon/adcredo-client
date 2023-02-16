import React, { useState } from "react";
import { BiBus, BiDirections, BiTimeFive } from "react-icons/bi";

function RealTimeTable({ realTimeData }) {
  // const [deviations, setDeviations] = useState([]);

  // useEffect(() => {
  //   if (realTimeData?.ResponseData?.StopPointDeviations?.length > 0) {
  //     setDeviations(realTimeData.ResponseData.StopPointDeviations);
  //   }
  // }, [deviations]);

  // console.log("deviations", deviations);

  return (
    <>
      {realTimeData?.length === 0 && (
        <div className="w-full p-5 rounded-b bg-slate-800 select-none">
          <div className="w-full text-center">
            Vi hittade tyvärr inga resor just nu
          </div>
        </div>
      )}
      {realTimeData?.length > 0 && (
        <div className="w-full p-5 rounded-b bg-slate-800 select-none">
          <table className="w-full text-center">
            <thead>
              <tr className="text-cyan-400">
                <th>
                  <div className="flex items-center justify-center">
                    <BiBus className="mr-1" />
                    Linje
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    <BiDirections className="mr-1" />
                    Mot
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    <BiTimeFive className="mr-1" />
                    Avgår
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {realTimeData?.map((data, index) => (
                <tr
                  key={index}
                  className="hover:mx-5 hover:bg-cyan-400 hover:bg-opacity-20 hover:transition-all hover:duration-400"
                >
                  <td className="py-1">{data?.LineNumber}</td>
                  <td>{data?.Destination}</td>
                  <td>{data?.DisplayTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default RealTimeTable;
