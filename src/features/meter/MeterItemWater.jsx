import { useState } from "react";
import axios from "../../config/axios";
import { useMeter } from "../../hooks/use-meter";
import { useEffect } from "react";

export default function MeterItemWater({
  name,
  unitOld,
  priceUnit,
  date,
  roomId,
}) {
  const { getMeterWater } = useMeter();

  const [input, setInput] = useState({
    priceUnit: priceUnit,
    unit: "",
    createAt: date,
    roomId: roomId,
    unitUsed: "",
  });

  let result = "";
  {
    input.unit - unitOld < 0 || isNaN(input.unit - unitOld)
      ? "-"
      : (result = input.unit - unitOld);
  }
  useEffect(() => {
    setInput({ ...input, createAt: date });
  }, [date]);
  useEffect(() => {
    setInput({ ...input, unitUsed: result });
  }, [input.unit]);
  return (
    <div
      className="grid grid-cols-5 bg-white p-1  rounded-md text-[--primary-color] text-center
     mt-4"
    >
      <div>{name}</div>
      <div>{unitOld ? unitOld : "-"}</div>
      <div>
        <input
          type="text"
          className="bg-gray-200 rounded-md p-0.5 text-center"
          onChange={(e) => {
            setInput({ ...input, unit: e.target.value });
          }}
          placeholder="-"
          value={input.unit}
        />
      </div>
      <div>{result}</div>
      <div>
        <button
          className="bg-[--success-color] text-white w-fit px-2 rounded-md "
          onClick={async () => {
            try {
              await axios.post("/meter/water", input);
              getMeterWater(date);
              console.log(unitOld);
              if (unitOld === undefined) {
                console.log("first");
                unitOld = input.unit;
                input.unit = "";
              }
            } catch (err) {
              console.log(err);
            }
          }}
        >
          บันทึก
        </button>
      </div>
    </div>
  );
}
