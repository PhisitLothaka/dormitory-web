import { useState } from "react";

export default function MeterItemWater({ name, unitOld }) {
  const [unit, setUnit] = useState("");
  return (
    <div
      className="grid grid-cols-4 bg-white p-1  rounded-md text-[--primary-color] text-center
     mt-4"
    >
      <div>{name}</div>
      <div>{unitOld ? unitOld : "-"}</div>
      <div>
        <input
          type="text"
          className="bg-gray-200 rounded-md p-0.5 text-center"
          onChange={(e) => {
            setUnit(e.target.value);
          }}
        />
      </div>
      <div>
        {unit - unitOld < 0 || isNaN(unit - unitOld) ? "-" : unit - unitOld}
      </div>
    </div>
  );
}
